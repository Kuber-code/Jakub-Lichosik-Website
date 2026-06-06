"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GitFork, ExternalLink, Lock, Clock, AlertCircle, Star, ArrowRight } from "lucide-react";
import { projects, type ProjectStatus } from "@/data/projects";
import type { GitHubRepo } from "@/lib/github";

const statusConfig: Record<ProjectStatus, { label: string; color: string; icon: React.ReactNode }> = {
  public: { label: "Public", color: "var(--accent-green)", icon: <GitFork size={12} /> },
  private: { label: "Private", color: "var(--accent-orange)", icon: <Lock size={12} /> },
  nda: { label: "NDA", color: "var(--accent-pink)", icon: <Lock size={12} /> },
  "in-progress": { label: "In Progress", color: "var(--accent-cyan)", icon: <Clock size={12} /> },
  "coming-soon": { label: "Coming Soon", color: "var(--text-muted)", icon: <AlertCircle size={12} /> },
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const status = statusConfig[project.status];
  const hasCaseStudy = !!(project.problem && project.solution);

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
      {/* Status badge + links row */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
          style={{
            color: status.color,
            backgroundColor: `color-mix(in srgb, ${status.color} 9%, transparent)`,
            border: `1px solid color-mix(in srgb, ${status.color} 20%, transparent)`,
          }}
        >
          {status.icon}
          {status.label}
        </span>
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

      {/* Case study link */}
      {hasCaseStudy && (
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
          style={{ color: "var(--accent-cyan)" }}
        >
          Read case study
          <ArrowRight size={12} />
        </Link>
      )}
    </motion.article>
  );
}

function GitHubCard({ repo }: { repo: GitHubRepo }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-xl flex flex-col gap-3 p-4 h-full"
      style={{
        backgroundColor: "var(--bg-primary)",
        border: "1px solid var(--border-color)",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-sm font-semibold truncate" style={{ color: "var(--accent-cyan)" }}>
          {repo.name}
        </span>
        {repo.stargazers_count > 0 && (
          <span className="inline-flex items-center gap-1 text-xs flex-shrink-0" style={{ color: "var(--text-muted)" }}>
            <Star size={11} />
            {repo.stargazers_count}
          </span>
        )}
      </div>
      {repo.description && (
        <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
          {repo.description}
        </p>
      )}
      {repo.language && (
        <span
          className="text-xs font-mono self-start px-2 py-0.5 rounded"
          style={{
            color: "var(--accent-purple)",
            backgroundColor: "color-mix(in srgb, var(--accent-purple) 7%, transparent)",
            border: "1px solid color-mix(in srgb, var(--accent-purple) 15%, transparent)",
          }}
        >
          {repo.language}
        </span>
      )}
    </motion.a>
  );
}

interface ProjectsProps {
  githubRepos?: GitHubRepo[];
}

export function Projects({ githubRepos = [] }: ProjectsProps) {
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

        {/* Featured bento grid */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
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

        {/* GitHub activity — auto-fetched */}
        {githubRepos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-mono uppercase tracking-widest" style={{ color: "var(--text-subtle)" }}>
                Recent GitHub activity
              </h3>
              <a
                href="https://github.com/Kuber-code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs inline-flex items-center gap-1 transition-colors duration-150"
                style={{ color: "var(--text-muted)" }}
              >
                See all
                <ArrowRight size={11} />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {githubRepos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <GitHubCard repo={repo} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
