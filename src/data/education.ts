export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  thesis?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  year?: number;
  url?: string;
}

export interface AcademicActivity {
  id: string;
  organization: string;
  role: string;
  period: string;
  items: string[];
}

export const education: EducationItem[] = [
  {
    id: "master",
    degree: "Master Engineer of Computer Science",
    institution: "Silesian University of Technology",
    location: "Gliwice, Poland",
    period: "October 2016 – November 2018",
    thesis: "Clustering of electricity consumers (MATLAB)",
  },
  {
    id: "bachelor",
    degree: "Bachelor Engineer of Automatic Control and Robotics",
    institution: "Silesian University of Technology",
    location: "Gliwice, Poland",
    period: "October 2011 – January 2016",
    thesis: "Temperature control system on Siemens Simatic S7",
  },
];

export const certifications: CertificationItem[] = [
  {
    name: "Professional Scrum Product Owner™ I (PSPO I)",
    issuer: "Scrum.org",
    year: 2024,
    url: "https://drive.google.com/file/d/1unRemSG0EVTHVc8K8_0xogu7i0-qFd7H/view",
  },
  {
    name: "AWS for DevOps: Monitoring, Metrics and Logging",
    year: 2021,
    url: "https://drive.google.com/file/d/1Jecr1ueL3B2M6VkXzSkhP7WGk1RcHoxu/view",
  },
  {
    name: "B1 German — FIDE Examination (speech & writing)",
    year: 2025,
  },
  {
    name: "A2 German — ECAP Basel Intensive Course (full time)",
    issuer: "ECAP Basel",
    year: 2025,
    url: "https://drive.google.com/file/d/154LmhMvwC-GZmKAIKc481lMwO9qxdO4m/view",
  },
];

export const academicActivity: AcademicActivity[] = [
  {
    id: "best",
    organization: "Board of European Students of Technology (BEST) Gliwice",
    role: "Member & Organizer",
    period: "January 2013 – November 2018",
    items: [
      "Job Fairs BIT Festival 2014/2015 — acquired 12 companies, coordinated working group of 20 people",
      "Recruitment Autumn 2014 — main organizer, led meetings and strategy planning for a team of 3",
    ],
  },
  {
    id: "ing",
    organization: "Ambassador of ING Bank — Silesian University of Technology",
    role: "Student Ambassador",
    period: "January 2015 – December 2016",
    items: [
      "Promoted internships via events, media and university channels",
      "Liaised with university authorities and student organizations",
    ],
  },
];
