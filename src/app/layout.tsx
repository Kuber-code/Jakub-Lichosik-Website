import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jakub Lichosik — Software Engineer · DevOps / SRE · Scrum & Delivery",
  description:
    "Personal brand portfolio of Jakub Lichosik. Software Engineer with 4+ years in IT, 3 years in Banking & HFT. C++, Python, Kotlin, AWS, Kubernetes, Scrum Master, PSPO I. Based in Katowice, Poland. Previously in Switzerland.",
  keywords: [
    "Jakub Lichosik",
    "Software Engineer",
    "DevOps",
    "SRE",
    "Scrum Master",
    "PSPO I",
    "C++",
    "Python",
    "Kotlin",
    "AWS",
    "Kubernetes",
    "HFT",
    "Banking",
    "Switzerland",
  ],
  authors: [{ name: "Jakub Lichosik", url: "https://github.com/Kuber-code" }],
  metadataBase: new URL("https://lichosik.dev"),
  openGraph: {
    type: "website",
    url: "https://lichosik.dev",
    title: "Jakub Lichosik — Software Engineer · DevOps / SRE",
    description: "Software engineer who codes, deploys and drives process. 4+ years in IT, 3 years Banking & HFT, PSPO I certified.",
    siteName: "Jakub Lichosik",
  },
  robots: { index: true, follow: true },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://lichosik.dev/#person",
      name: "Jakub Lichosik",
      url: "https://lichosik.dev",
      email: "kuba.lichosik@gmail.com",
      jobTitle: "Software Engineer",
      description:
        "Software engineer with 4+ years in IT and 3 years in Banking & HFT. Specialises in C++, Python, Kotlin, AWS, Kubernetes and Scrum delivery. Based in Katowice, Poland. Previously 5 years in Switzerland.",
      knowsAbout: [
        "C++",
        "Python",
        "Kotlin",
        "TypeScript",
        "AWS",
        "Kubernetes",
        "Docker",
        "DevOps",
        "SRE",
        "Scrum",
        "Agile",
        "Blockchain",
        "HFT",
        "Grafana",
        "Prometheus",
      ],
      knowsLanguage: [
        { "@type": "Language", name: "Polish" },
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "German" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Katowice",
        addressCountry: "PL",
      },
      sameAs: [
        "https://github.com/Kuber-code",
        "https://www.linkedin.com/in/jakublichosik/",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Professional Scrum Product Owner I (PSPO I)",
        credentialCategory: "certification",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://lichosik.dev/#website",
      url: "https://lichosik.dev",
      name: "Jakub Lichosik",
      description:
        "Personal portfolio and tech blog of Jakub Lichosik — Software Engineer, DevOps / SRE, Scrum Master.",
      author: { "@id": "https://lichosik.dev/#person" },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://lichosik.dev/#profilepage",
      url: "https://lichosik.dev",
      name: "Jakub Lichosik — Software Engineer · DevOps / SRE · Scrum & Delivery",
      about: { "@id": "https://lichosik.dev/#person" },
      isPartOf: { "@id": "https://lichosik.dev/#website" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased font-[family-name:var(--font-inter)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
