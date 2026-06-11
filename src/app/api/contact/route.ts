import { NextRequest, NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 5000;
const RECAPTCHA_MIN_SCORE = 0.5;
const RECAPTCHA_PROJECT_ID = "lichosik-website-1780920501528";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function verifyRecaptchaEnterprise(token: string, apiKey: string): Promise<boolean> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${RECAPTCHA_PROJECT_ID}/assessments?key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event: { token, expectedAction: "contact_form", siteKey },
    }),
  });
  const data = (await res.json()) as {
    tokenProperties?: { valid: boolean; action?: string };
    riskAnalysis?: { score: number };
  };
  if (!data.tokenProperties?.valid) return false;
  if (typeof data.riskAnalysis?.score === "number" && data.riskAnalysis.score < RECAPTCHA_MIN_SCORE) return false;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, website, recaptchaToken } = body as {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
      recaptchaToken?: string;
    };

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (name.length > MAX_FIELD_LENGTH || email.length > 320 || message.length > MAX_FIELD_LENGTH) {
      return NextResponse.json({ error: "Field too long." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const recaptchaApiKey = process.env.RECAPTCHA_API_KEY;
    if (recaptchaApiKey) {
      if (!recaptchaToken) {
        return NextResponse.json({ error: "reCAPTCHA verification required." }, { status: 400 });
      }
      const passed = await verifyRecaptchaEnterprise(recaptchaToken, recaptchaApiKey);
      if (!passed) {
        return NextResponse.json({ error: "reCAPTCHA check failed. Please try again." }, { status: 400 });
      }
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("[Contact form — no RESEND_API_KEY set]", { name, email, message });
      return NextResponse.json({ ok: true });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: "kuba.lichosik@gmail.com",
      replyTo: email.trim(),
      subject: `Portfolio contact: ${safeName}`,
      html: `
        <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
        <hr>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("[Contact API] Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Contact API]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
