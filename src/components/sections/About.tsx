"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { personal } from "@/data/personal";

const highlights = [
  { icon: MapPin, label: "Based in", value: "Katowice, Poland" },
  { icon: Briefcase, label: "Background", value: personal.switzerlandNote },
  { icon: GraduationCap, label: "Education", value: "M.Eng. Computer Science · Silesian Univ. of Technology" },
  { icon: Award, label: "Certification", value: "PSPO I — Professional Scrum Product Owner" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-cyan)" }}
          >
            // about
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Software engineer who{" "}
            <span style={{ color: "var(--accent-purple)" }}>builds, deploys and drives process</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {personal.shortBio}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              My background spans from embedded C++ and Corda blockchain to full AWS DevOps and Grafana monitoring stacks —
              always with end-to-end ownership. At{" "}
              <span style={{ color: "var(--text-primary)" }}>SIX Digital Exchange</span> in Zurich I combined software
              delivery with Scrum mastery; at{" "}
              <span style={{ color: "var(--text-primary)" }}>Portofino</span> in Zug I built and maintained the
              monitoring, alerting and deployment infrastructure for crypto market-making — all self-planned.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I contribute to open projects including the{" "}
              <a
                href="https://tracker.beskid-lang.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-cyan)" }}
              >
                Beskid programming language
              </a>{" "}
              as PO/PM and to{" "}
              <a
                href="https://ipi.io/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-cyan)" }}
              >
                ipi.io
              </a>{" "}
              as Scrum Expert, DevOps and Developer.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "var(--glow-cyan)", color: "var(--accent-cyan)" }}
                >
                  <h.icon size={16} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>
                    {h.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {h.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
