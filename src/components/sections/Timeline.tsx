"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { experience } from "@/data/experience";

export function Timeline() {
  const [expanded, setExpanded] = useState<string | null>("six-digital-exchange");

  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-cyan)" }}>
            // experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Career timeline
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border-color)" }}
            aria-hidden="true"
          />

          <div className="space-y-4">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[18px] top-5 w-3 h-3 rounded-full border-2"
                  style={{
                    backgroundColor: item.needsApproval ? "var(--accent-orange)" : "var(--accent-cyan)",
                    borderColor: "var(--bg-primary)",
                    boxShadow: `0 0 10px ${item.needsApproval ? "var(--accent-orange)" : "var(--accent-cyan)"}88`,
                  }}
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-200"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: `1px solid ${expanded === item.id ? "var(--border-strong)" : "var(--border-color)"}`,
                  }}
                >
                  {/* Header (always visible) */}
                  <button
                    onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 group"
                    aria-expanded={expanded === item.id}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                          {item.flag} {item.company}
                        </span>
                        {item.needsApproval && (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                            style={{
                              color: "var(--accent-orange)",
                              backgroundColor: "rgba(245,158,11,0.1)",
                              border: "1px solid rgba(245,158,11,0.2)",
                            }}
                          >
                            <AlertTriangle size={10} />
                            pending confirmation
                          </span>
                        )}
                      </div>
                      <div className="font-medium text-sm mb-2" style={{ color: "var(--accent-cyan)" }}>
                        {item.role}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                        <span className="font-mono">{item.period}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-1" style={{ color: "var(--text-subtle)" }}>
                      {expanded === item.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {expanded === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-5 pb-5 pt-0 space-y-5"
                          style={{ borderTop: "1px solid var(--border-color)" }}
                        >
                          <p className="text-sm mt-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                            {item.summary}
                          </p>

                          {/* Responsibilities */}
                          <div>
                            <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: "var(--text-subtle)" }}>
                              Responsibilities
                            </div>
                            <ul className="space-y-1.5">
                              {item.responsibilities.map((r, ri) => (
                                <li key={ri} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                                  <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--accent-cyan)" }} />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact */}
                          {item.impact.length > 0 && (
                            <div>
                              <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: "var(--text-subtle)" }}>
                                Impact
                              </div>
                              {item.impact.map((imp, ii) => (
                                <p key={ii} className="text-sm" style={{ color: "var(--accent-green)" }}>
                                  ↗ {imp}
                                </p>
                              ))}
                            </div>
                          )}

                          {/* Stack chips */}
                          {item.stack.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {item.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 rounded text-xs font-mono"
                                  style={{
                                    backgroundColor: "var(--bg-hover)",
                                    color: "var(--text-muted)",
                                    border: "1px solid var(--border-color)",
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
