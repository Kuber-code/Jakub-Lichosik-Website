import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Lock } from "lucide-react";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.visibility === "public" && p.problem && p.solution)
    .map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Jakub Lichosik`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id && p.visibility === "public");

  if (!project || !project.problem || !project.solution) notFound();

  const isPrivate = project.status === "private" || project.status === "nda";

  return (
    <main className="min-h-screen px-6 py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-150"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            {isPrivate && (
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
                style={{
                  color: "var(--accent-orange)",
                  backgroundColor: "color-mix(in srgb, var(--accent-orange) 9%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--accent-orange) 20%, transparent)",
                }}
              >
                <Lock size={11} />
                {project.status === "nda" ? "NDA" : "Private"}
              </span>
            )}
            <div className="flex flex-wrap gap-1.5">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-mono uppercase tracking-wide"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {project.description}
          </p>
          {project.repoUrl && !isPrivate && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--accent-cyan)" }}
            >
              <ExternalLink size={15} />
              View project
            </a>
          )}
        </div>

        {/* Stack */}
        {project.stack.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-cyan)" }}>
              // tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-sm font-mono"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Divider */}
        <div className="h-px my-10" style={{ backgroundColor: "var(--border-color)" }} />

        {/* Problem */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-orange)" }}>
            // the problem
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {project.problem}
          </p>
        </section>

        {/* Solution */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-green)" }}>
            // the solution
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {project.solution}
          </p>
        </section>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-purple)" }}>
              // outcomes
            </h2>
            <ul className="space-y-3">
              {project.metrics.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0" style={{ color: "var(--accent-green)" }}>
                    ↗
                  </span>
                  <span className="text-base" style={{ color: "var(--text-primary)" }}>
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Divider */}
        <div className="h-px my-10" style={{ backgroundColor: "var(--border-color)" }} />

        {/* Footer nav */}
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-150"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} />
            All projects
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
            style={{ color: "var(--accent-cyan)" }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
