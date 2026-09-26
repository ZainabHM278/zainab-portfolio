// Site-wide content. Edit here; the header, footer and home page read from it.

export const profile = {
  name: "Zainab",
  fullName: "Zainab Almahal",
  url: "https://zainab-portfolio-bay.vercel.app",
  role: "Junior Data Scientist | ML Engineer",
  intro:
    "I build data warehouses, statistical models and LLM-powered analytics tools — with a full-stack background in React, ASP.NET Core and Laravel for shipping them as real products.",
  // A PDF in /public; set to null to hide the Download CV button.
  cvUrl: "/Zainab-Almahal-CV.pdf" as string | null,
  email: null as string | null,
};

export const glance = [
  { label: "Now", value: "Full-Stack Developer", company: "Alelm Alsatea – Technology Solutions" as string | null },
  { label: "Studied", value: "Computer Science, Imam Abdulrahman Bin Faisal University" },
  { label: "Certified", value: "AWS ML Engineer – Associate and AWS AI Practitioner" },
  { label: "Focus", value: "Laravel & Filament at work; SQL, AWS analytics and statistics on my own time" },
];

export const toolbox = [
  "Python",
  "pandas",
  "NumPy",
  "statsmodels",
  "scikit-learn",
  "XGBoost",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "AWS SageMaker",
  "AWS Lambda",
  "Gemini API",
  "RAG",
  "Metabase",
  "Docker",
  "React",
  "TypeScript",
  "ASP.NET Core",
  "Laravel",
  "Git",
];

// Top-level pages, in nav order. `menuLabel` is the longer name used in the mobile menu.
export const pages = [
  { href: "/journey", label: "Journey", num: "01" },
  { href: "/projects", label: "Projects", num: "02" },
  { href: "/certifications", label: "Certifications", num: "03" },
  { href: "/learning", label: "Learning", menuLabel: "Learning & growth", num: "04" },
  { href: "/life", label: "Life", menuLabel: "Hobbies & travel", num: "06" },
  { href: "/repos", label: "Repos", num: "08" },
  { href: "/contact", label: "Contact", num: "09" },
];

// The home page index: one row per section, some sharing a page.
export const sections = [
  { num: "01", title: "Journey", blurb: "Work experience and education", href: "/journey" },
  { num: "02", title: "Projects", blurb: "Creative ideas that came to life", href: "/projects" },
  { num: "03", title: "Certifications", blurb: "And the hands-on practice behind each one", href: "/certifications" },
  { num: "04", title: "Learning list", blurb: "What I'm learning now, and what's next", href: "/learning#list" },
  { num: "05", title: "Personal growth", blurb: "Lessons and habits I'm building", href: "/learning#growth" },
  { num: "06", title: "Hobbies", blurb: "Reading, painting and chess", href: "/life#hobbies" },
  { num: "07", title: "Travel", blurb: "Places that stayed with me", href: "/life#travel" },
  { num: "08", title: "Repos", blurb: "Open source I learned from", href: "/repos" },
  { num: "09", title: "Contact", blurb: "Say hello, or find me online", href: "/contact" },
];

// Links with a null href are hidden until filled in.
export const socials = [
  { label: "GitHub", href: "https://github.com/ZainabHM278" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zainab-a-6a5b681b3" },
  { label: "Hugging Face", href: "https://huggingface.co/ZainabHM278" },
  { label: "Kaggle", href: null as string | null },
].filter((s): s is { label: string; href: string } => s.href !== null);
