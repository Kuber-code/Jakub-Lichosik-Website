export type Visibility = "public" | "hidden";
export type ProofType = "verified" | "owner-provided" | "pending-approval";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  periodShort: string;
  location: string;
  flag: string;
  summary: string;
  responsibilities: string[];
  impact: string[];
  stack: string[];
  visibility: Visibility;
  proofType: ProofType;
  needsApproval?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "six-digital-exchange",
    company: "SIX Digital Exchange",
    role: "Software Developer & Scrum Master",
    period: "March 2022 – April 2024",
    periodShort: "2022–2024",
    location: "Zurich, Switzerland",
    flag: "🇨🇭",
    summary:
      "Polyglot development on Corda blockchain in regulated Swiss banking, dual-hatted as Scrum Master for a cross-functional team.",
    responsibilities: [
      "Backend & frontend feature work in Kotlin, Java, Clojure, TypeScript",
      "Bug fixing, code reviews and 30+ Confluence documentation pages",
      "Onboarded 10+ new joiners and conducted all Scrum ceremonies",
      "Ran Sprint Planning, Daily Standups, Reviews and Retrospectives",
      "Managed Jira epics and stories; collaborated with stakeholders",
      "Represented SDX at CordaCon 2022 in London",
    ],
    impact: [
      "Delivered features across backend, frontend and blockchain layers in a regulated banking environment",
      "Built and ran the Converter App that saved significant manual effort for Testers and BAs",
    ],
    stack: ["Kotlin", "Java", "Clojure", "TypeScript", "Corda", "REST APIs", "Jira", "Confluence"],
    visibility: "public",
    proofType: "verified",
  },
  {
    id: "portofino",
    company: "Portofino",
    role: "Quant Developer / DevOps / SRE / Release Engineer",
    period: "July 2021 – February 2022",
    periodShort: "2021–2022",
    location: "Zug, Switzerland",
    flag: "🇨🇭",
    summary:
      "Full-stack ownership from C++ trading infrastructure to cloud deployment and observability for crypto market-making.",
    responsibilities: [
      "C++ development and testing for crypto markets: REST API, WebSocket and FIX protocol communication",
      "Unit tests with Google Test (gmock)",
      "Application deployment using GitLab CI, Docker, Kubernetes, Helm, Terraform and AWS IAM",
      "Built Grafana + Prometheus + Loki + MongoDB monitoring and alerting system from scratch",
      "Packet capturing on AWS EKS using Traffic Mirroring, tcpdump and Wireshark",
      "Python and Bash scripting in AWS Linux environments",
    ],
    impact: [
      "Self-planned and delivered three own projects: Packet Capturing pipeline, full Alerting/Monitoring system, and Morning Routine automation",
    ],
    stack: ["C++", "Python", "Bash", "AWS", "Docker", "Kubernetes", "Helm", "Terraform", "GitLab CI", "Grafana", "Prometheus", "MongoDB", "WebSocket", "FIX"],
    visibility: "public",
    proofType: "verified",
  },
  {
    id: "switzerland-freelancer",
    company: "Freelance — Switzerland",
    role: "Independent Software Engineer / Consultant",
    period: "2024 – present",
    periodShort: "2024–now",
    location: "Switzerland",
    flag: "🇨🇭",
    summary: "Independent software engineering and consulting engagements across development, DevOps and product delivery.",
    responsibilities: [
      "Software engineering and DevOps consulting",
      "Product delivery and Scrum facilitation",
      "Client delivery across tech and process domains",
    ],
    impact: ["Details to be confirmed — owner-provided content"],
    stack: [],
    visibility: "public",
    proofType: "owner-provided",
    needsApproval: true,
  },
  {
    id: "onespan",
    company: "VASCO / OneSpan",
    role: "Software Developer",
    period: "February 2021 – June 2021",
    periodShort: "2021",
    location: "Katowice, Poland",
    flag: "🇵🇱",
    summary: "C++ development and DevOps for enterprise identity and authentication software.",
    responsibilities: [
      "C++ programming and Active Directory authentication on Windows",
      "Bug fixing on virtual systems (VMWare)",
      "Pipeline management with Jenkins; identity integrations with Okta",
    ],
    impact: ["Delivered targeted authentication fixes in a complex enterprise environment"],
    stack: ["C++", "Jenkins", "Okta", "VMware", "Windows"],
    visibility: "public",
    proofType: "verified",
  },
  {
    id: "displaylink",
    company: "DisplayLink (acquired by Synaptics)",
    role: "Associate Development Engineer",
    period: "January 2020 – September 2020",
    periodShort: "2020",
    location: "Katowice, Poland",
    flag: "🇵🇱",
    summary: "C++ embedded development for Universal Docking Stations, plus Scrum Master responsibilities.",
    responsibilities: [
      "C++ programming for software and hardware, embedded C",
      "Debugging Universal Docking Stations (Dell, HP etc.)",
      "Scrum Master: managing ticketing system in Jira Atlassian",
    ],
    impact: ["Delivered embedded features for hardware shipped in enterprise docking solutions"],
    stack: ["C++", "Embedded C", "Jira"],
    visibility: "public",
    proofType: "verified",
  },
  {
    id: "rw-swiss-automation",
    company: "RW Swiss Automation",
    role: "Robotics Engineer",
    period: "October 2017 – December 2019",
    periodShort: "2017–2019",
    location: "Katowice, Poland",
    flag: "🇵🇱",
    summary: "Industrial robotics simulation and PLC programming for manufacturing automation.",
    responsibilities: [
      "Industrial robots simulation (Kuka, ABB, Fanuc) in Process Simulate and RobCad",
      "PLC Controllers programming and simulation",
    ],
    impact: ["Delivered robot simulation programs used in production environments"],
    stack: ["Kuka", "ABB", "Fanuc", "Process Simulate", "RobCad", "PLC"],
    visibility: "public",
    proofType: "verified",
  },
];
