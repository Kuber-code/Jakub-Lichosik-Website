"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillBars, techBadges, type TechBadge } from "@/data/skills";

const categoryColors: Record<TechBadge["category"], string> = {
  language: "var(--accent-cyan)",
  web: "var(--accent-purple)",
  devops: "var(--accent-green)",
  cloud: "var(--accent-orange)",
  database: "var(--accent-pink)",
  tool: "var(--accent-teal)",
  methodology: "var(--accent-cyan)",
};

const barColors: Record<string, { bar: string; glow: string }> = {
  cyan: { bar: "var(--accent-cyan)", glow: "var(--glow-cyan)" },
  purple: { bar: "var(--accent-purple)", glow: "var(--glow-purple)" },
  green: { bar: "var(--accent-green)", glow: "rgba(16,185,129,0.15)" },
  orange: { bar: "var(--accent-orange)", glow: "rgba(245,158,11,0.15)" },
  pink: { bar: "var(--accent-pink)", glow: "rgba(236,72,153,0.15)" },
  teal: { bar: "var(--accent-teal)", glow: "rgba(20,184,166,0.15)" },
};

function SkillBar({ label, percent, description, color }: { label: string; percent: number; description: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const colors = barColors[color] ?? barColors.cyan;

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          {label}
        </span>
        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          {percent}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: "var(--bg-hover)", border: "1px solid var(--border-color)" }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            background: `linear-gradient(90deg, ${colors.bar}aa, ${colors.bar})`,
            boxShadow: `0 0 12px ${colors.glow}`,
          }}
        />
      </div>
      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
        {description}
      </p>
    </div>
  );
}

const categoryLabels: Record<TechBadge["category"], string> = {
  language: "Languages",
  web: "Web & APIs",
  devops: "DevOps & CI/CD",
  cloud: "Cloud",
  database: "Databases",
  tool: "Tools & Observability",
  methodology: "Methodologies",
};

const categoryOrder: TechBadge["category"][] = [
  "language", "devops", "cloud", "web", "tool", "database", "methodology"
];

export function Skills() {
  const grouped = categoryOrder.reduce<Record<string, typeof techBadges>>((acc, cat) => {
    acc[cat] = techBadges.filter((b) => b.category === cat);
    return acc;
  }, {} as Record<string, typeof techBadges>);

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-cyan)" }}>
            // skills & stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Core competencies
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            Visual levels reflect commercial and project practice — not a formal ranking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {skillBars.map((skill) => (
              <SkillBar key={skill.label} {...skill} />
            ))}
          </motion.div>

          {/* Tech badges grouped */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {categoryOrder.map((cat) => (
              <div key={cat}>
                <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--text-subtle)" }}>
                  {categoryLabels[cat]}
                </div>
                <div className="flex flex-wrap gap-2">
                  {grouped[cat]?.map((badge) => (
                    <motion.span
                      key={badge.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium cursor-default"
                      style={{
                        border: `1px solid ${categoryColors[badge.category]}33`,
                        color: categoryColors[badge.category],
                        backgroundColor: `${categoryColors[badge.category]}11`,
                      }}
                    >
                      {badge.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
