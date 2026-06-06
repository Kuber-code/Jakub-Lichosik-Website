"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/personal";

const langColors = ["var(--accent-cyan)", "var(--accent-purple)", "var(--accent-green)"];

interface LanguageBarProps {
  name: string;
  code: string;
  level: string;
  percent: number;
  color: string;
  delay: number;
}

function LanguageBar({ name, code, level, percent, color, delay }: LanguageBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="font-bold text-sm mr-3" style={{ color: "var(--text-primary)" }}>
            {name}
          </span>
          <span
            className="text-xs font-mono px-2 py-0.5 rounded"
            style={{
              color,
              backgroundColor: `color-mix(in srgb, ${color} 9%, transparent)`,
              border: `1px solid color-mix(in srgb, ${color} 20%, transparent)`,
            }}
          >
            {code}
          </span>
        </div>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {level}
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
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
          style={{
            background: `linear-gradient(90deg, color-mix(in srgb, ${color} 55%, transparent), ${color})`,
            boxShadow: `0 0 10px color-mix(in srgb, ${color} 27%, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export function Languages() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-cyan)" }}>
            // languages & profile
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            International profile
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Language bars */}
          <div className="space-y-8">
            {personal.languages.map((lang, i) => (
              <LanguageBar
                key={lang.name}
                name={lang.name}
                code={lang.code}
                level={lang.level}
                percent={lang.percent}
                color={langColors[i] ?? "var(--accent-cyan)"}
                delay={0.1 + i * 0.15}
              />
            ))}
          </div>

          {/* Location cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "var(--bg-primary)", border: "1px solid var(--border-color)" }}
            >
              <div className="text-2xl mb-2">🇨🇭</div>
              <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                Switzerland · 5 years
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Lived and worked in Zurich and Zug. SIX Digital Exchange (Zurich) and Portofino (Zug), with 2 years as
                independent freelancer.
              </p>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "var(--bg-primary)", border: "1px solid var(--border-color)" }}
            >
              <div className="text-2xl mb-2">🇵🇱</div>
              <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                Poland · Katowice
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Based in Katowice, Upper Silesia. Silesian University of Technology graduate (M.Eng. Computer Science,
                B.Eng. Automatic Control & Robotics).
              </p>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "var(--bg-primary)", border: "1px solid var(--border-color)" }}
            >
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                Open to remote &amp; hybrid
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Comfortable working across time zones and cultures. Driving licence B.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
