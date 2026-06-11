"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GitFork, Download, Link2, ArrowUpRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import { personal } from "@/data/personal";
import Script from "next/script";

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

async function getEnterpriseToken(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") return "";
  return new Promise((resolve) => {
    const run = () => {
      window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, { action });
          resolve(token);
        } catch {
          resolve("");
        }
      });
    };
    if (window.grecaptcha?.enterprise) {
      run();
    } else {
      const interval = setInterval(() => {
        if (window.grecaptcha?.enterprise) {
          clearInterval(interval);
          run();
        }
      }, 100);
      setTimeout(() => { clearInterval(interval); resolve(""); }, 5000);
    }
  });
}

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "var(--accent-cyan)",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "Kuber-code",
    href: personal.github,
    color: "var(--accent-purple)",
    external: true,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "jakublichosik",
    href: personal.linkedin,
    color: "var(--accent-teal)",
    external: true,
  },
  {
    icon: Download,
    label: "CV / Resume",
    value: "Download PDF",
    href: personal.cvUrl,
    color: "var(--accent-green)",
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
  website: string;
}

function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "", website: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const recaptchaToken = await getEnterpriseToken("contact_form");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setState("error");
      } else {
        setState("success");
        setForm({ name: "", email: "", message: "", website: "" });
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-12 text-center"
      >
        <CheckCircle size={40} style={{ color: "var(--accent-green)" }} />
        <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
          Message sent!
        </h3>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Thanks — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-xs font-mono underline mt-2"
          style={{ color: "var(--text-subtle)" }}
        >
          Send another
        </button>
      </motion.div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid var(--border-color)",
    backgroundColor: "var(--bg-primary)",
    color: "var(--text-primary)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontFamily: "var(--font-jetbrains), monospace",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--text-muted)",
    marginBottom: "6px",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--accent-cyan)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--border-color)";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
      />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" style={labelStyle}>Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={labelStyle}>Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" style={labelStyle}>Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on?"
          value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
        />
      </div>

      {state === "error" && (
        <div
          className="flex items-center gap-2 text-sm p-3 rounded-lg"
          style={{
            color: "var(--accent-orange)",
            backgroundColor: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.2)",
          }}
        >
          <AlertCircle size={14} />
          {errorMsg}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
          style={{
            backgroundColor: state === "submitting" ? "var(--border-strong)" : "var(--accent-cyan)",
            color: state === "submitting" ? "var(--text-muted)" : "#0a0a0f",
            cursor: state === "submitting" ? "not-allowed" : "pointer",
            border: "none",
          }}
        >
          <Send size={15} />
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>
        {RECAPTCHA_SITE_KEY && (
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            Protected by reCAPTCHA —{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }}>
              Privacy
            </a>{" "}
            &{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }}>
              Terms
            </a>
          </p>
        )}
      </div>
    </form>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-cyan)" }}>
            // contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Let&apos;s build something together
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Open to software engineering roles, DevOps/SRE positions, freelance engagements and product/delivery hybrid
            roles. PL · EN · DE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              download={link.label === "CV / Resume" ? true : undefined}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex items-center gap-4 p-5 rounded-2xl group"
              style={{
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border-color)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = link.color)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
            >
              <div
                className="p-2.5 rounded-xl flex-shrink-0"
                style={{ backgroundColor: `${link.color}18`, color: link.color }}
              >
                <link.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>
                  {link.label}
                </div>
                <div className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
                  {link.value}
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "var(--text-subtle)" }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-6 md:p-8 mb-12"
          style={{
            backgroundColor: "var(--bg-primary)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h3 className="text-lg font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            Send a message
          </h3>
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-8"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <p className="text-xs font-mono" style={{ color: "var(--text-subtle)" }}>
            Built with Next.js 16 · Tailwind CSS · Framer Motion ·{" "}
            <a
              href="https://github.com/Kuber-code/Jakub-Lichosik-Website"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-cyan)" }}
            >
              source on GitHub
            </a>
          </p>
          <p className="text-xs mt-2" style={{ color: "var(--text-subtle)" }}>
            © {new Date().getFullYear()} Jakub Lichosik
          </p>
        </motion.div>
      </div>
    </section>
  );
}
