// All personal content for the site lives here.
// Sourced from LinkedIn (Nov 2026) and the previous portfolio's project write-ups.

export const site = {
  url: "https://mariano-perdices.vercel.app",
  title: "Mariano Perdices",
  description:
    "Mariano (Yano) Perdices. Computer Science and Design student at SUTD, ASEAN Scholar, and CFA Research Challenge national finalist. Data, AI and software projects.",
};

export const person = {
  name: "Mariano Perdices",
  nickname: "Yano",
  headline: "ASEAN Scholar and CFA Research Challenge national finalist",
  intro:
    "I study Computer Science and Design at SUTD and work where data, software and design meet: machine learning models, AI apps, and tools that take repetitive work off people's plates.",
  location: "Singapore",
  timeZone: "Asia/Singapore",
  availability: "Open to roles in Singapore and remote, on-site or hybrid.",
  avatar: "/images/avatar.jpg",
  email: "marianoperdices2010@gmail.com",
  calendar: "https://cal.com/mariano-perdices",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mariano-perdices/" },
    { label: "GitHub", href: "https://github.com/Yano789" },
  ],
};

export type Experience = {
  org: string;
  role: string;
  kind: string;
  start: string;
  end: string;
  place: string;
  points: string[];
  skills: string[];
};

export const experience: Experience[] = [
  {
    org: "FUJIFILM Business Innovation Singapore",
    role: "Digital Transformation Intern",
    kind: "Internship",
    start: "Sep 2025",
    end: "Dec 2025",
    place: "Singapore, hybrid",
    points: [
      "Built internal apps and automated business workflows with Microsoft Power Apps, Power Automate and SharePoint.",
      "Placed 3rd at FBSG Innovfest.",
    ],
    skills: ["Power Apps", "Power Automate", "SharePoint", "Excel"],
  },
  {
    org: "Aboitiz Data Innovation",
    role: "Data Solutions",
    kind: "Internship",
    start: "Oct 2022",
    end: "Aug 2023",
    place: "Singapore, hybrid",
    points: [
      "Built a Partner Relationship Management network: wrote Python scripts on Databricks to clean PDFs and convert them into a structured database.",
      "Mapped multivariable datasets as network graphs in Gephi to make relationships visible to the team.",
    ],
    skills: ["Python", "pandas", "NumPy", "Databricks", "Gephi", "Team leadership"],
  },
];

export const leadership = [
  { role: "Secretary, Golf Interest Group", org: "SUTD", when: "2025 to now" },
  { role: "Residential Assistant (House Guardian)", org: "SUTD", when: "2024 to 2025" },
  { role: "Vice President, Volleyball Club", org: "SUTD", when: "2024 to 2025" },
  { role: "Student Body Vice President", org: "PAREF Springdale School", when: "2021 to 2022" },
  { role: "Student Body Secretary", org: "PAREF Springdale School", when: "2020 to 2021" },
];

export const education = [
  {
    school: "Singapore University of Technology and Design",
    detail: "Bachelor's degree, Computer Science and Design",
    when: "2023 to 2027",
  },
  {
    school: "IE University",
    detail: "Computer Science and Artificial Intelligence",
    when: "Jan to May 2026",
  },
  {
    school: "University of California, Berkeley",
    detail: "Summer program: Field Study of Buildings and Cities; Technology, Society and Culture",
    when: "Summer 2024",
  },
  {
    school: "PSB Academy",
    detail: "Diploma in InfoComm Technology",
    when: "2022 to 2023",
  },
  {
    school: "PAREF Springdale School, Cebu",
    detail: "High school, STEM strand. Top of batch 2022, grade 97",
    when: "2010 to 2022",
  },
];

export const honors = [
  { title: "Singtel Information Systems and Programming Award", by: "Singtel, at SUTD", year: "2025" },
  { title: "CFA Institute Research Challenge, national finalist", by: "CFA Institute", year: "2024" },
  { title: "Bene Award", by: "PAREF Springdale School", year: "2022" },
  { title: "Best Research Presenter", by: "PAREF Springdale School", year: "2022" },
  { title: "Top of Batch 2022", by: "PAREF Springdale School", year: "2021" },
];

export const certifications = [
  { title: "Kubernetes Fundamentals", by: "Dell Technologies", year: "2026" },
  { title: "Docker Fundamentals", by: "Dell Technologies", year: "2025" },
  { title: "Designing and Building AI Products and Services", by: "MIT, via Emeritus", year: "2023" },
  { title: "Diploma in InfoComm Technology", by: "PSB Academy", year: "2023" },
];

export const skills = [
  { group: "Data and AI", items: ["Python", "pandas", "scikit-learn", "Machine learning", "LLM apps", "Data visualization", "Jupyter"] },
  { group: "Software", items: ["Java and Android", "React", "Node.js", "SQL and MySQL", "Docker", "Kubernetes"] },
  { group: "Business tools", items: ["Power Apps", "Power Automate", "SharePoint", "Excel", "Financial modeling"] },
  { group: "Design", items: ["Figma", "Rhino 3D", "Presentation design"] },
];

// Timeline chart: one row per track, dates as decimal years.
export type Bar = { label: string; start: number; end: number; note: string; kind: "work" | "study" | "lead" };
export type Milestone = { label: string; at: number; note: string };

export const timeline: { range: [number, number]; now: number; rows: { name: string; bars: Bar[] }[]; milestones: Milestone[] } = {
  range: [2020, 2027.5],
  now: 2026.9,
  rows: [
    {
      name: "Work",
      bars: [
        { label: "Aboitiz", start: 2022.75, end: 2023.6, kind: "work", note: "Data Solutions intern. Python and Databricks pipelines that turned PDFs into a partner database." },
        { label: "CFA Challenge", start: 2023.75, end: 2024.12, kind: "work", note: "Equity research team. Pitched a contrarian SELL on Sembcorp Industries and reached the national finals." },
        { label: "FUJIFILM", start: 2025.67, end: 2025.99, kind: "work", note: "Digital Transformation intern. Power Apps and Power Automate; 3rd at FBSG Innovfest." },
      ],
    },
    {
      name: "Study",
      bars: [
        { label: "PAREF Springdale", start: 2020, end: 2022.35, kind: "study", note: "STEM strand in Cebu. Top of batch 2022." },
        { label: "PSB Academy", start: 2022.45, end: 2023.5, kind: "study", note: "Diploma in InfoComm Technology." },
        { label: "SUTD", start: 2023.67, end: 2027.3, kind: "study", note: "Computer Science and Design, as an ASEAN Scholar." },
      ],
    },
    {
      name: "Abroad",
      bars: [
        { label: "UC Berkeley", start: 2024.37, end: 2024.62, kind: "study", note: "Summer program on cities, technology and society." },
        { label: "IE University", start: 2026.0, end: 2026.38, kind: "study", note: "Computer Science and Artificial Intelligence." },
      ],
    },
    {
      name: "Leadership",
      bars: [
        { label: "Student body", start: 2020.45, end: 2022.2, kind: "lead", note: "Secretary, then Vice President of the student body at PAREF Springdale." },
        { label: "Res. Assistant", start: 2024.67, end: 2025.65, kind: "lead", note: "House Guardian in the SUTD residences, Sep 2024 to Aug 2025." },
      ],
    },
    {
      name: "Clubs",
      bars: [
        { label: "Volleyball VP", start: 2024.0, end: 2025.0, kind: "lead", note: "Vice President of the SUTD Volleyball Club." },
        { label: "Golf", start: 2025.0, end: 2026.9, kind: "lead", note: "Secretary of the SUTD Golf Interest Group." },
      ],
    },
  ],
  milestones: [
    { label: "MIT AI certificate", at: 2023.38, note: "Designing and Building AI Products and Services." },
    { label: "Singtel award", at: 2025.45, note: "Singtel Information Systems and Programming Award." },
  ],
};
