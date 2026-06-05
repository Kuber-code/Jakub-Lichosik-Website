"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, GitBranch, Users } from "lucide-react";

const roles = [
  {
    org: "Beskid Programming Language",
    url: "https://tracker.beskid-lang.org/",
    roles: ["Product Owner / PM", "Marketing Lead"],
    description:
      "Driving the roadmap and community for an emerging programming language. Managing backlog, stakeholder communication and growth strategy.",
    icons: [Code2, Users],
    color: "var(--accent-purple)",
    note: null,
  },
  {
    org: "IPI.io",
    url: "https://ipi.io/",
    roles: ["Scrum Expert", "DevOps Engineer", "Developer"],
    description:
      "Multi-role contribution in an open collaborative environment — facilitating agile process, maintaining infrastructure and contributing code.",
    icons: [GitBranch, Users, Code2],
    color: "var(--accent-cyan)",
    note: null,
  },
  {
    org: "BEST Gliwice (Board of European Students of Technology)",
    url: null,
    roles: ["Job Fair Organizer", "Recruitment Lead"],
    description:
      "Acquired 12 companies for the BIT Festival job fair; led the Autumn 2014 recruitment campaign coordinating a 20-person working group and managing strategy, marketing and task delegation.",
    icons: [Users],
    color: "var(--accent-green)",
    note: null,
  },
  {
    org: "ING Bank — Silesian University of Technology",
    url: null,
    roles: ["Brand Ambassador"],
    description:
      "Promoted internship programmes at the university through events, media and collaboration with student organisations and university authorities.",
    icons: [Users],
    color: "var(--accent-orange)",
    note: null,
  },
];

export function ExtraRoles() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-cyan)" }}>
            // roles beyond code
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Product, process &amp; community
          </h2>
          <p className="mt-3 text-sm max-w-xl" style={{ color: "var(--text-muted)" }}>
            Not just a developer — I run process, grow teams and contribute to community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {roles.map((role, i) => (
            <motion.div
              key={role.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-5"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
              }}
            >
              {/* Org name + link */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                  {role.org}
                </h3>
                {role.url && (
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${role.org}`}
                    className="flex-shrink-0 transition-colors duration-150"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = role.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Role chips */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {role.roles.map((r) => (
                  <span
                    key={r}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      color: role.color,
                      backgroundColor: `${role.color}15`,
                      border: `1px solid ${role.color}33`,
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {role.description}
              </p>

              {role.note && (
                <p className="mt-3 text-xs italic" style={{ color: "var(--text-subtle)" }}>
                  * {role.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
