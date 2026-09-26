// Journey page content, from the CV.

export type JourneyEntry = {
  dates: string;
  title: string;
  org: string;
  summary: string;
  stack?: string[];
};

export const work: JourneyEntry[] = [
  {
    dates: "Aug 2026 — Present",
    title: "Full-Stack Developer",
    org: "Alelm Alsatea – Technology Solutions · Dammam",
    summary:
      "Designing, building and testing new web and mobile features, and keeping existing applications reliable and fast through maintenance, debugging and optimization.",
    stack: ["React / Next.js", "Flutter", "PHP", "Laravel", "Filament", "REST APIs", "MySQL", "DigitalOcean", "Laravel Forge"],
  },
  {
    dates: "Jun 2025 — Aug 2025",
    title: "Software Developer Intern",
    org: "Nesma & Partners · Al Khobar",
    summary:
      "Built responsive interfaces with React, TypeScript and Tailwind CSS, RESTful APIs in ASP.NET Core, and the MySQL databases behind them.",
    stack: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "C#", "MySQL"],
  },
];

export const education: JourneyEntry[] = [
  {
    dates: "2020 — 2025",
    title: "B.Sc. in Computer Science",
    org: "Imam Abdulrahman Bin Faisal University · Al Khobar",
    summary:
      "Graduated with Second Honors. Graduation project: StrokeAlert, an end-to-end machine learning pipeline for detecting stroke from real CT scans.",
  },
  {
    dates: "Jan 2026",
    title: "Introduction to Artificial Intelligence",
    org: "KAUST Academy",
    summary: "Hands-on practice with the core Python data and machine learning stack.",
    stack: ["Python", "NumPy", "pandas", "scikit-learn", "TensorFlow"],
  },
];
