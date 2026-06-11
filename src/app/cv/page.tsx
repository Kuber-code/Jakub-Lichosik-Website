import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import { personal } from "@/data/personal";
import { techBadges } from "@/data/skills";
import { education, certifications, academicActivity } from "@/data/education";
import { ArrowLeft, Download, MapPin, Mail, Globe, GitFork } from "lucide-react";

export const metadata: Metadata = {
  title: "CV — Jakub Lichosik",
  description:
    "Full curriculum vitae of Jakub Lichosik — Software Engineer, DevOps / SRE, Scrum Master. 6+ years IT experience.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xs font-mono uppercase tracking-widest mb-4 pb-2"
      style={{
        color: "var(--accent-cyan)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      {children}
    </h2>
  );
}

export default function CVPage() {
  const publicRoles = experience.filter((e) => e.visibility === "public");

  const badgesByCategory = {
    language: techBadges.filter((b) => b.category === "language"),
    web: techBadges.filter((b) => b.category === "web"),
    devops: techBadges.filter((b) => b.category === "devops"),
    cloud: techBadges.filter((b) => b.category === "cloud"),
    database: techBadges.filter((b) => b.category === "database"),
    tool: techBadges.filter((b) => b.category === "tool"),
    methodology: techBadges.filter((b) => b.category === "methodology"),
  };

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .cv-wrapper { background: white !important; }
          .cv-card { background: white !important; border-color: #e2e8f0 !important; }
          a { color: inherit !important; text-decoration: none !important; }
        }
      `}</style>

      <div
        className="cv-wrapper min-h-screen py-10 px-4"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="max-w-5xl mx-auto">

          {/* Toolbar */}
          <div className="no-print flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={15} />
              Back to site
            </Link>
            <a
              href={personal.cvUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200"
              style={{
                backgroundColor: "var(--accent-cyan)",
                color: "#0a0a0f",
              }}
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>

          {/* Header */}
          <div
            className="cv-card rounded-2xl p-8 mb-6"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h1
                  className="text-4xl font-bold tracking-tight mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {personal.name}
                </h1>
                <p
                  className="text-lg font-medium mb-4"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  {personal.title}
                </p>
                <p
                  className="text-sm leading-relaxed max-w-2xl"
                  style={{ color: "var(--text-muted)" }}
                >
                  {personal.shortBio}
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm md:text-right shrink-0">
                {[
                  { icon: MapPin, text: personal.location },
                  { icon: Mail, text: personal.email, href: `mailto:${personal.email}` },
                  { icon: Globe, text: "lichosik.dev", href: "https://lichosik.dev" },
                  { icon: GitFork, text: "Kuber-code", href: personal.github },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center md:justify-end gap-2" style={{ color: "var(--text-muted)" }}>
                    <Icon size={13} className="shrink-0" />
                    {href ? (
                      <a href={href} style={{ color: "var(--text-muted)" }}>{text}</a>
                    ) : (
                      <span>{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT — main content */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Experience */}
              <div
                className="cv-card rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                <SectionTitle>Work Experience</SectionTitle>
                <div className="flex flex-col gap-8">
                  {publicRoles.map((role) => (
                    <div key={role.id}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                            {role.role}
                          </h3>
                          <p className="text-sm font-medium" style={{ color: "var(--accent-cyan)" }}>
                            {role.company}
                            <span style={{ color: "var(--text-subtle)" }}> · {role.location}</span>
                          </p>
                        </div>
                        <span
                          className="text-xs font-mono shrink-0 mt-0.5"
                          style={{ color: "var(--text-subtle)" }}
                        >
                          {role.period}
                        </span>
                      </div>
                      <ul className="mt-2 flex flex-col gap-1">
                        {role.responsibilities.map((r, i) => (
                          <li
                            key={i}
                            className="text-sm pl-3 relative"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span
                              className="absolute left-0 top-2 w-1 h-1 rounded-full"
                              style={{ backgroundColor: "var(--accent-cyan)" }}
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                      {role.stack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {role.stack.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-2 py-0.5 rounded-md font-mono"
                              style={{
                                backgroundColor: "var(--bg-primary)",
                                color: "var(--text-subtle)",
                                border: "1px solid var(--border-color)",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div
                className="cv-card rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                <SectionTitle>Education</SectionTitle>
                <div className="flex flex-col gap-6">
                  {education.map((ed) => (
                    <div key={ed.id}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <div>
                          <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                            {ed.degree}
                          </h3>
                          <p className="text-sm" style={{ color: "var(--accent-cyan)" }}>
                            {ed.institution}
                            <span style={{ color: "var(--text-subtle)" }}> · {ed.location}</span>
                          </p>
                        </div>
                        <span
                          className="text-xs font-mono shrink-0"
                          style={{ color: "var(--text-subtle)" }}
                        >
                          {ed.period}
                        </span>
                      </div>
                      {ed.thesis && (
                        <p className="text-sm mt-1 pl-3 border-l-2" style={{ color: "var(--text-subtle)", borderColor: "var(--border-color)" }}>
                          Thesis: {ed.thesis}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Activity */}
              <div
                className="cv-card rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                <SectionTitle>Academic Activity</SectionTitle>
                <div className="flex flex-col gap-6">
                  {academicActivity.map((act) => (
                    <div key={act.id}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                            {act.organization}
                          </h3>
                          <p className="text-sm" style={{ color: "var(--accent-cyan)" }}>{act.role}</p>
                        </div>
                        <span className="text-xs font-mono shrink-0" style={{ color: "var(--text-subtle)" }}>
                          {act.period}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-1">
                        {act.items.map((item, i) => (
                          <li key={i} className="text-sm pl-3 relative" style={{ color: "var(--text-muted)" }}>
                            <span
                              className="absolute left-0 top-2 w-1 h-1 rounded-full"
                              style={{ backgroundColor: "var(--accent-cyan)" }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — sidebar */}
            <div className="flex flex-col gap-6">

              {/* Languages */}
              <div
                className="cv-card rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                <SectionTitle>Languages</SectionTitle>
                <div className="flex flex-col gap-3">
                  {personal.languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span style={{ color: "var(--text-primary)" }}>{lang.name}</span>
                        <span className="font-mono text-xs" style={{ color: "var(--text-subtle)" }}>
                          {lang.level}
                        </span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ backgroundColor: "var(--border-color)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${lang.percent}%`,
                            backgroundColor: "var(--accent-cyan)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div
                className="cv-card rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                <SectionTitle>Certifications</SectionTitle>
                <ul className="flex flex-col gap-2">
                  {certifications.map((cert) => (
                    <li key={cert.name} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--accent-cyan)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {cert.name}
                        {(cert.issuer || cert.year) && (
                          <span className="ml-1 text-xs" style={{ color: "var(--text-subtle)" }}>
                            — {[cert.issuer, cert.year].filter(Boolean).join(", ")}
                          </span>
                        )}
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-xs underline transition-opacity duration-150 hover:opacity-60 no-print"
                            style={{ color: "var(--accent-cyan)" }}
                          >
                            View
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Skills */}
              <div
                className="cv-card rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                <SectionTitle>Tech Skills</SectionTitle>
                {(
                  [
                    ["Languages", badgesByCategory.language],
                    ["Web & API", badgesByCategory.web],
                    ["DevOps & CI", badgesByCategory.devops],
                    ["Cloud", badgesByCategory.cloud],
                    ["Databases", badgesByCategory.database],
                    ["Tools", badgesByCategory.tool],
                    ["Methodologies", badgesByCategory.methodology],
                  ] as [string, typeof techBadges][]
                ).map(([label, badges]) =>
                  badges.length === 0 ? null : (
                    <div key={label} className="mb-3">
                      <p className="text-xs font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-subtle)" }}>
                        {label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {badges.map((b) => (
                          <span
                            key={b.name}
                            className="text-xs px-2 py-0.5 rounded-md font-mono"
                            style={{
                              backgroundColor: "var(--bg-primary)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border-color)",
                            }}
                          >
                            {b.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Interests */}
              <div
                className="cv-card rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                <SectionTitle>Interests</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {personal.interests.map((interest) => (
                    <span
                      key={interest.label}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {interest.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p
            className="no-print text-center text-xs font-mono mt-10"
            style={{ color: "var(--text-subtle)" }}
          >
            © {new Date().getFullYear()} Jakub Lichosik · <a href="https://lichosik.dev" style={{ color: "var(--accent-cyan)" }}>lichosik.dev</a>
          </p>
        </div>
      </div>
    </>
  );
}
