import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Jakub Lichosik`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen px-6 py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-150"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={15} />
          All posts
        </Link>

        {/* Post header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <time className="text-xs font-mono" style={{ color: "var(--text-subtle)" }}>
              {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            {post.tags.map((tag) => (
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {post.title}
          </h1>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            {post.summary}
          </p>
        </header>

        <div className="h-px mb-10" style={{ backgroundColor: "var(--border-color)" }} />

        {/* MDX content */}
        <article className="prose-blog">
          <MDXRemote source={post.content} />
        </article>

        <div className="h-px mt-12 mb-8" style={{ backgroundColor: "var(--border-color)" }} />

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-150"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={14} />
          All posts
        </Link>
      </div>
    </main>
  );
}
