"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/personal";

function AnimatedCounter({ target, suffix = "" }: { target: number | null; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || target === null) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {target === null ? "—" : count}
      {suffix}
    </span>
  );
}

export function ProofStrip() {
  return (
    <section
      className="relative py-8 overflow-hidden"
      style={{
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {personal.proofStrip.map((item, i) => {
            const isNumeric = /^\d+/.test(item.value);
            const num = isNumeric ? parseInt(item.value) : null;
            const suffix = item.value.replace(/^\d+/, "");

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-1 py-2"
              >
                <span
                  className="text-2xl md:text-3xl font-bold font-mono"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  {isNumeric ? (
                    <AnimatedCounter target={num} suffix={suffix} />
                  ) : (
                    item.value
                  )}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
