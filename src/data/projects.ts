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
    problem: "Trading protocol communications on a live EKS cluster were opaque — no way to inspect raw network traffic or debug exchange connectivity issues at the packet level.",
    solution: "Deployed AWS Traffic Mirroring on EKS to clone live traffic to a capture node running Tcpdump. Python scripts automated capture rotation and upload to S3 for offline Wireshark analysis.",
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
    problem: "QA and BA teams at SIX Digital Exchange spent significant time manually converting test data between formats for the Corda-based DLT platform. The process was error-prone and required specialist knowledge to do correctly.",
    solution: "Built a Kotlin/Java REST application that automated the conversion pipeline. The tool exposed a clean API that teams could call directly from test scripts, eliminating the manual steps and reducing conversion time from hours to seconds.",
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
      "Personal brand portfolio with cinematic hero, animated skill system, interactive timeline, and bento-grid project showcase. Built with Next.js 16, Framer Motion 12 and Tailwind CSS v4.",
    problem: "Standard portfolio templates look generic and don't reflect engineering depth. I needed something that conveyed technical range, attention to detail, and personality — without feeling like a resume in HTML.",
    solution: "Built from scratch with Next.js 16 App Router, Tailwind CSS v4 (CSS-first config), Framer Motion 12 animations, and a GitHub API integration that keeps the projects section always current. Server Components for data fetching, client components only where interactivity is needed.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion 12"],
    category: ["web"],
    status: "public",
    repoUrl: "https://github.com/Kuber-code/Jakub-Lichosik-Website",
    metrics: ["Dark/light mode with smooth transitions", "Animated skill bars and timeline", "GitHub API auto-sync", "Playwright e2e test suite"],
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
