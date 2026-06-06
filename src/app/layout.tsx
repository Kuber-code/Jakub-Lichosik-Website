import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";
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
  openGraph: {
    type: "website",
    title: "Jakub Lichosik — Software Engineer · DevOps / SRE",
    description: "Software engineer who codes, deploys and drives process. 4+ years in IT, 3 years Banking & HFT, PSPO I certified.",
    siteName: "Jakub Lichosik",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased font-[family-name:var(--font-inter)]">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
