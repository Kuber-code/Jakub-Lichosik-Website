"use client";

import { motion } from "framer-motion";
import {
  Music,
  Waves,
  Guitar,
  Mountain,
  Wind,
  BookOpen,
  TrendingUp,
  Gamepad2,
  Cpu,
} from "lucide-react";
import { personal } from "@/data/personal";

const iconMap: Record<string, React.ReactNode> = {
  Music: <Music size={20} />,
  Waves: <Waves size={20} />,
  Guitar: <Guitar size={20} />,
  Mountain: <Mountain size={20} />,
  Wind: <Wind size={20} />,
  BookOpen: <BookOpen size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  Gamepad2: <Gamepad2 size={20} />,
  Cpu: <Cpu size={20} />,
};

const chipColors = [
  "var(--accent-cyan)",
  "var(--accent-purple)",
  "var(--accent-green)",
  "var(--accent-orange)",
  "var(--accent-pink)",
  "var(--accent-teal)",
];

export function Interests() {
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
            // outside of work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            When I&apos;m not shipping code
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {personal.interests.map((interest, i) => {
            const color = chipColors[i % chipColors.length];
            return (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl cursor-default"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: `1px solid ${color}33`,
                  color,
                }}
              >
                {iconMap[interest.icon]}
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {interest.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
