export type ProjectStatus = "public" | "private" | "nda" | "in-progress" | "coming-soon";
export type ProjectCategory = "backend" | "devops" | "automation" | "infra" | "tool" | "ai" | "open-source" | "web";

export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  stack: string[];
  category: ProjectCategory[];
  status: ProjectStatus;
  repoUrl?: string;
  caseStudyUrl?: string;
  image?: string;
  metrics?: string[];
  visibility: "public" | "hidden";
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "portofino-monitoring",
    title: "Alerting & Monitoring System",
    description:
      "Self-planned, built and maintained full observability stack for HFT crypto infrastructure. Real-time alerting with notifications pipeline.",
    problem: "No visibility into system health for crypto market-making infrastructure.",
    solution: "Grafana + Prometheus + Loki + Promtail + MongoDB stack with custom alert rules and notification channels.",
    stack: ["Grafana", "Prometheus", "Loki", "Promtail", "MongoDB", "Python", "AWS"],
    category: ["infra", "devops"],
    status: "private",
    metrics: ["Full observability for production trading infrastructure", "End-to-end ownership: design → build → maintain"],
    visibility: "public",
    featured: true,
  },
  {
    id: "portofino-packet-capture",
    title: "Packet Capturing Pipeline",
    description:
      "Network traffic capture and analysis on AWS EKS using Traffic Mirroring, enabling deep inspection of trading protocol communications.",
    stack: ["AWS EKS", "Traffic Mirroring", "Tcpdump", "Wireshark", "Python"],
    category: ["infra", "devops"],
    status: "private",
    metrics: ["Deep packet inspection on live trading infrastructure", "Fully self-planned and delivered"],
    visibility: "public",
    featured: true,
  },
  {
    id: "portofino-morning-routine",
    title: "Morning Routine Automation",
    description: "Python and Bash scripting suite automating daily ops tasks in AWS Linux environment.",
    stack: ["Python", "Bash", "AWS Linux"],
    category: ["automation", "tool"],
    status: "private",
    metrics: ["Eliminated repetitive morning ops tasks", "Self-planned and maintained"],
    visibility: "public",
    featured: false,
  },
  {
    id: "six-converter-app",
    title: "SDX Converter App",
    description:
      "Internal tooling for SIX Digital Exchange that automated test data conversion, significantly reducing manual work for Testers and Business Analysts.",
    stack: ["Kotlin", "Java", "REST APIs"],
    category: ["tool", "backend"],
    status: "private",
    metrics: ["Saved significant manual effort for QA and BA teams", "Process optimization initiative"],
    visibility: "public",
    featured: true,
  },
  {
    id: "jakub-website",
    title: "This Website",
    description:
      "Personal brand portfolio with cinematic hero, animated skill system, interactive timeline, and bento-grid project showcase. Built with Next.js 14, Framer Motion and Tailwind.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: ["web"],
    status: "public",
    repoUrl: "https://github.com/Kuber-code/Jakub-Lichosik-Website",
    metrics: ["Dark/light mode", "Fully responsive", "Animated sections"],
    visibility: "public",
    featured: true,
  },
  {
    id: "beskid-lang",
    title: "Beskid Programming Language",
    description:
      "Contributing as PO/PM and marketing lead for the Beskid programming language project — tracking development, managing roadmap and growing community.",
    stack: ["Product Management", "Scrum", "Community"],
    category: ["open-source"],
    status: "in-progress",
    repoUrl: "https://tracker.beskid-lang.org/",
    metrics: ["PO/PM ownership of language roadmap", "Marketing and community development"],
    visibility: "public",
    featured: true,
    // needsApproval: true
  },
  {
    id: "ipi-io",
    title: "IPI.io Contribution",
    description:
      "Active contributor at ipi.io — wearing multiple hats as Scrum Expert, DevOps Engineer and Developer in an open collaborative environment.",
    stack: ["Scrum", "DevOps", "Development"],
    category: ["open-source", "devops"],
    status: "in-progress",
    repoUrl: "https://ipi.io/",
    metrics: ["Multi-role contribution: Scrum + DevOps + Dev", "Cross-functional collaboration"],
    visibility: "public",
    featured: false,
    // needsApproval: true
  },
  {
    id: "github-placeholder-1",
    title: "More Projects",
    description: "Additional projects from GitHub — some public, some private client work. More case studies coming soon.",
    stack: [],
    category: ["backend"],
    status: "coming-soon",
    repoUrl: "https://github.com/Kuber-code",
    visibility: "public",
    featured: false,
  },
];
