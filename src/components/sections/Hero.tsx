"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Download, ArrowRight, Terminal } from "lucide-react";
import { personal } from "@/data/personal";

const TYPING_STRINGS = [
  "Software Engineer",
  "DevOps / SRE",
  "Scrum Master",
  "Quant Developer",
  "Tech & Delivery",
];

function useTypingEffect(strings: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[stringIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplay(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (charIndex > 0) {
            setDisplay(current.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setStringIndex((i) => (i + 1) % strings.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex, strings, speed, pause]);

  return display;
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ";
    const fontSize = 13;
    let columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    let animId: number;
    const draw = () => {
      ctx.fillStyle = "rgba(10,10,15,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const alpha = Math.random() > 0.95 ? 1 : 0.15;
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  const typedText = useTypingEffect(TYPING_STRINGS);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Matrix background */}
      <MatrixRain />

      {/* Radial glow blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-8"
          style={{
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--bg-secondary)",
            color: "var(--accent-cyan)",
          }}
        >
          <Terminal size={12} />
          <span>Available for new opportunities</span>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--accent-green)", boxShadow: "0 0 6px var(--accent-green)" }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Jakub{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Lichosik
          </span>
        </motion.h1>

        {/* Typed role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl font-mono" style={{ color: "var(--accent-cyan)" }}>
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 group"
            style={{
              backgroundColor: "var(--accent-cyan)",
              color: "#0a0a0f",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <GitFork size={16} />
            View GitHub
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={personal.cvUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              border: "1px solid var(--border-strong)",
              color: "var(--text-primary)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--border-color)";
              e.currentTarget.style.borderColor = "var(--accent-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "var(--border-strong)";
            }}
          >
            <Download size={16} />
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Let's talk →
          </a>
        </motion.div>

        {/* Stack chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-2"
        >
          {["C++", "Python", "Kotlin", "AWS", "Kubernetes", "Terraform", "Grafana", "Scrum"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono"
              style={{
                border: "1px solid var(--border-color)",
                color: "var(--text-subtle)",
                backgroundColor: "var(--bg-secondary)",
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-subtle)" }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-8 rounded-full"
          style={{ backgroundColor: "var(--border-strong)" }}
        />
      </motion.div>
    </section>
  );
}
