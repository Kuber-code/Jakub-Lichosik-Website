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
  { name: "Professional Scrum Product Owner™ I (PSPO I)" },
  { name: "AWS for DevOps: Monitoring, Metrics and Logging" },
  { name: "B1 German FIDE Examination — speech and writing" },
  { name: "A2 German ECAP Basel — Intensive Course (full time)" },
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
