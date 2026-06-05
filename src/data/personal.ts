export const personal = {
  name: "Jakub Lichosik",
  title: "Software Engineer · DevOps / SRE · Scrum & Delivery",
  tagline:
    "Building reliable systems, improving team flow, and shipping across backend, cloud and product execution.",
  shortBio:
    "Software engineer with 4 years in IT (3 in Banking & HFT) who codes, deploys and drives process. I've worked across C++, Python, Kotlin, TypeScript, AWS and Kubernetes — from HFT crypto infrastructure to Corda blockchain in regulated banking. I also run Scrum, onboard teams, and bridge tech with delivery.",
  location: "Katowice, Poland",
  switzerlandNote: "5 years living & working in Switzerland · last 2 years as freelancer",
  email: "kuba.lichosik@gmail.com",
  github: "https://github.com/Kuber-code",
  linkedin: "https://www.linkedin.com/in/jakublichosik/",
  cvUrl: "/Jakub_Lichosik_CV.pdf",
  languages: [
    { name: "Polish", level: "Native", code: "PL", percent: 100 },
    { name: "English", level: "C1/C2 · Professional", code: "EN", percent: 95 },
    { name: "German", level: "B1 · Conversational", code: "DE", percent: 55 },
  ],
  interests: [
    { label: "Music & Festivals", icon: "Music" },
    { label: "Ableton Production", icon: "Waves" },
    { label: "Guitar & Singing", icon: "Guitar" },
    { label: "Rock Climbing", icon: "Mountain" },
    { label: "Snowboard & Ski", icon: "Wind" },
    { label: "Books", icon: "BookOpen" },
    { label: "Investing", icon: "TrendingUp" },
    { label: "Chess & Gaming", icon: "Gamepad2" },
    { label: "Technology", icon: "Cpu" },
  ],
  proofStrip: [
    { value: "4+", label: "Years in IT" },
    { value: "3", label: "Years Banking & HFT" },
    { value: "8", label: "Years Total Experience" },
    { value: "PSPO I", label: "Scrum Certified" },
    { value: "PL/EN/DE", label: "Languages" },
    { value: "CH·5yr", label: "Switzerland" },
  ],
} as const;
