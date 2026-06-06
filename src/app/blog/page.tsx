import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Jakub Lichosik",
  description: "Technical writing on DevOps, observability, and engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-150"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={15} />
          Home
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent-cyan)" }}>
            // writing
          </span>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Technical notes
          </h1>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            Occasional posts on DevOps, observability, engineering decisions, and building things.
          </p>
        </div>

        {/* Post list */}
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl p-5 transition-colors duration-150"
                style={{
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="font-bold text-base leading-snug transition-colors duration-150 group-hover:opacity-80" style={{ color: "var(--text-primary)" }}>
                    {post.title}
                  </h2>
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent-cyan)" }} />
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                  {post.summary}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <time className="text-xs font-mono" style={{ color: "var(--text-subtle)" }}>
                    {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-1.5 py-0.5 rounded"
                      style={{
                        color: "var(--accent-cyan)",
                        backgroundColor: "color-mix(in srgb, var(--accent-cyan) 7%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--accent-cyan) 15%, transparent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
