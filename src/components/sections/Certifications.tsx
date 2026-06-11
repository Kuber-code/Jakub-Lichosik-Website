"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/education";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className="inline-block text-xs font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-cyan)" }}
          >
            // credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--accent-cyan) 10%, transparent)",
                  color: "var(--accent-cyan)",
                }}
              >
                <Award size={16} />
              </div>

              <div className="flex-1">
                <p
                  className="text-sm font-semibold leading-snug mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </p>
                {(cert.issuer || cert.year) && (
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
                  </p>
                )}
              </div>

              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono transition-opacity duration-150 hover:opacity-60 self-start"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  <ExternalLink size={11} />
                  View certificate
                </a>
              ) : (
                <span className="text-xs font-mono" style={{ color: "var(--text-subtle)" }}>
                  Certificate pending
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
