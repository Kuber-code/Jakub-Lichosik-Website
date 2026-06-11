export interface SkillBar {
  label: string;
  percent: number;
  description: string;
  color: string;
}

export interface TechBadge {
  name: string;
  category: "language" | "web" | "devops" | "cloud" | "database" | "tool" | "methodology";
}

export const skillBars: SkillBar[] = [
  {
    label: "Software Engineering",
    percent: 88,
    description: "C++, Python, Kotlin, Java, TypeScript — backend to embedded",
    color: "cyan",
  },
  {
    label: "DevOps / SRE",
    percent: 85,
    description: "GitLab CI, Docker, Kubernetes, Helm, Terraform, observability",
    color: "purple",
  },
  {
    label: "Cloud & Infrastructure",
    percent: 80,
    description: "AWS (EKS, EC2, IAM, Traffic Mirroring), monitoring stacks",
    color: "green",
  },
  {
    label: "Agile / Scrum / Delivery",
    percent: 90,
    description: "PSPO I certified, Scrum Master, Sprint facilitation, Jira/Confluence",
    color: "orange",
  },
  {
    label: "Automation & Tooling",
    percent: 82,
    description: "Python/Bash scripting, custom tooling, CI/CD pipelines, PLC",
    color: "pink",
  },
  {
    label: "Cross-functional Collaboration",
    percent: 87,
    description: "Onboarding, stakeholder management, Three Amigos, documentation",
    color: "teal",
  },
];

export const techBadges: TechBadge[] = [
  // Languages
  { name: "C++", category: "language" },
  { name: "Python", category: "language" },
  { name: "Kotlin", category: "language" },
  { name: "Java", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Bash", category: "language" },
  { name: "PowerShell", category: "language" },
  { name: "Clojure", category: "language" },
  { name: "Scala", category: "language" },
  { name: "Embedded C", category: "language" },
  // Web / API
  { name: "REST API", category: "web" },
  { name: "WebSocket", category: "web" },
  { name: "FIX Protocol", category: "web" },
  { name: "GraphQL", category: "web" },
  { name: "HTML", category: "web" },
  { name: "CSS", category: "web" },
  { name: "Vue.js", category: "web" },
  // DevOps / CI
  { name: "Git", category: "devops" },
  { name: "GitLab CI/CD", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "Helm", category: "devops" },
  { name: "Terraform", category: "devops" },
  { name: "Ansible", category: "devops" },
  { name: "Argo CD", category: "devops" },
  { name: "Jenkins", category: "devops" },
  { name: "OpenShift", category: "devops" },
  // Cloud
  { name: "AWS", category: "cloud" },
  { name: "AWS EKS", category: "cloud" },
  { name: "AWS IAM", category: "cloud" },
  { name: "Azure", category: "cloud" },
  { name: "GCP", category: "cloud" },
  // Observability
  { name: "Grafana", category: "tool" },
  { name: "Prometheus", category: "tool" },
  { name: "Loki", category: "tool" },
  { name: "Tcpdump", category: "tool" },
  { name: "Wireshark", category: "tool" },
  // Databases
  { name: "MongoDB", category: "database" },
  { name: "SQL/MySQL", category: "database" },
  { name: "ElasticSearch", category: "database" },
  // Tools
  { name: "VMware", category: "tool" },
  { name: "Jira", category: "tool" },
  { name: "Confluence", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Linux", category: "tool" },
  { name: "IntelliJ", category: "tool" },
  { name: "Corda Blockchain", category: "tool" },
  // Methodologies
  { name: "Scrum", category: "methodology" },
  { name: "Agile", category: "methodology" },
  { name: "Kanban", category: "methodology" },
  { name: "PSPO I", category: "methodology" },
  { name: "TDD", category: "methodology" },
  { name: "Google Test", category: "methodology" },
  { name: "gmock", category: "methodology" },
];
