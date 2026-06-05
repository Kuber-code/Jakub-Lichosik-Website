"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitFork, ExternalLink, Lock, Clock, AlertCircle } from "lucide-react";
import { projects, type ProjectStatus } from "@/data/projects";

const statusConfig: Record<ProjectStatus, { label: string; color: string; icon: React.ReactNode }> = {
  public: { label: "Public", color: "var(--accent-green)", icon: <GitFork size={12} /> },
  private: { label: "Private", color: "var(--accent-orange)", icon: <Lock size={12} /> },
  nda: { label: "NDA", color: "var(--accent-pink)", icon: <Lock size={12} /> },
  "in-progress": { label: "In Progress", color: "var(--accent-cyan)", icon: <Clock size={12} /> },
  "coming-soon": { label: "Coming Soon", color: "var(--text-muted)", icon: <AlertCircle size={12} /> },
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const status = statusConfig[project.status];

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl overflow-hidden flex flex-col gap-4 p-5 h-full"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
    >
      {/* Status badge */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
          style={{
            color: status.color,
            backgroundColor: `${status.color}18`,
            border: `1px solid ${status.color}33`,
          }}
        >
          {status.icon}
          {status.label}
        </span>

        {/* Links */}
        <div className="flex gap-2">
          {project.repoUrl && project.status !== "private" && project.status !== "nda" && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} repository`}
              className="p-1.5 rounded-lg transition-colors duration-150"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-base leading-snug" style={{ color: "var(--text-primary)" }}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="space-y-1">
          {project.metrics.slice(0, 2).map((m, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs" style={{ color: "var(--accent-green)" }}>
              <span className="flex-shrink-0 mt-0.5">↗</span>
              <span>{m}</span>
            </div>
          ))}
        </div>
      )}

      {/* Stack */}
      {project.stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
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
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured && p.visibility === "public");
  const rest = projects.filter((p) => !p.featured && p.visibility === "public");

  return (
    <section id="projects" className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <span className="inline-block text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-cyan)" }}>
              // projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              What I&apos;ve shipped
            </h2>
          </div>
          <a
            href="https://github.com/Kuber-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--accent-cyan)" }}
          >
            <GitFork size={16} />
            View all on GitHub
          </a>
        </motion.div>

        {/* Bento grid — featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={project.featured && i === 0 ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Non-featured */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
