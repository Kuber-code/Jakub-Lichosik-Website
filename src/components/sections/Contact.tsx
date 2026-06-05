"use client";

import { motion } from "framer-motion";
import { Mail, GitFork, Download, Link2, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";

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

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
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

        {/* Contact cards */}
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

        {/* Footer */}
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
