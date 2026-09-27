// Projects page content, newest first. From the CV and each project's GitHub README.

export type Project = {
  title: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
  links: { label: string; href: string }[];
  // A file in /public/projects. Projects without one get a typographic cover.
  image?: { src: string; alt: string; fit?: "cover" | "contain" };
};

const gh = (repo: string) => ({ label: "GitHub", href: `https://github.com/ZainabHM278/${repo}` });

export const projects: Project[] = [
  {
    title: "Credit Portfolio Warehouse",
    kind: "Data & analytics",
    year: "2026",
    summary:
      "A Dockerized PostgreSQL warehouse for a simulated Saudi SME credit portfolio — 2,000 companies, 3,500 loans, SAR 2.18B outstanding. Risk drivers are validated with logistic regression and Wilson confidence intervals, surfaced in a Metabase dashboard, and queryable in English or Arabic through a Gemini function-calling and RAG layer.",
    stack: ["PostgreSQL", "Docker", "Python", "Statistics", "Metabase", "Gemini", "RAG"],
    links: [gh("credit-portfolio-warehouse")],
    image: { src: "/projects/credit-portfolio-dashboard.png", alt: "Metabase executive dashboard showing portfolio snapshot, grade breakdown and monthly origination trend" },
  },
  {
    title: "BizStart Simulator",
    kind: "Hackathon",
    year: "2026",
    summary:
      "A bilingual English/Arabic tool that turns a business idea into revenue and cost projections, with an AI risk check on runway, margin and marketing spend. Selected as an AI Showcase Featured Project at the Kanz AI Training Hackathon, a Guinness World Records event with 14,075 participants.",
    stack: ["React", "TypeScript", "Tailwind", "Recharts", "EN / AR"],
    links: [{ label: "Live demo", href: "https://biz-start-simulator--zainabh456.replit.app/" }, gh("BizStart-Simulator")],
    image: { src: "/projects/bizstart-simulator.png", alt: "BizStart Simulator business plan screen with monthly expenses, revenue projections and runway summary" },
  },
  {
    title: "Financial Topic Classifier",
    kind: "Machine learning",
    year: "2026",
    summary:
      "A LoRA fine-tune of Qwen2.5-0.5B that sorts financial tweets into 20 topics. Training just 0.22% of the parameters reached 90.5% test accuracy and 89.2% macro F1 on a held-out test set.",
    stack: ["LoRA", "Qwen2.5", "Transformers", "PEFT", "Kaggle"],
    links: [{ label: "Hugging Face", href: "https://huggingface.co/ZainabAlmahal/financial-topic-classifier-lora" }, gh("financial-topic-classifier")],
    image: { src: "/projects/financial-topic-confusion-matrix.png", alt: "Confusion matrix across the 20 financial topic classes", fit: "contain" },
  },
  {
    title: "PathFinder CS",
    kind: "AI agents",
    year: "2026",
    summary:
      "A multi-agent career assistant: give it a resume and two Gemini agents report which job openings fit and which skills are missing, searching real job-market data through an MCP tool. Personal details are redacted before every model call. Built during Google and Kaggle's 5-Day AI Agents Intensive.",
    stack: ["Google ADK", "MCP", "Gemini", "Multi-agent"],
    links: [gh("pathfinder-cs-agent")],
  },
  {
    title: "AWS ML Pipeline",
    kind: "Cloud ML",
    year: "2026",
    summary:
      "An end-to-end Titanic survival model on AWS: XGBoost trained on SageMaker and served as a real-time REST API through Lambda and API Gateway, with CloudWatch logging and monitoring. 82.1% validation accuracy.",
    stack: ["SageMaker", "XGBoost", "Lambda", "API Gateway", "CloudWatch"],
    links: [gh("aws-ml-titanic")],
  },
  {
    title: "StrokeAlert",
    kind: "Graduation project",
    year: "2025",
    summary:
      "An end-to-end machine learning pipeline for detecting stroke from real CT scans — preprocessing, feature engineering, model training and evaluation. My graduation project at Imam Abdulrahman Bin Faisal University.",
    stack: ["Python", "Machine learning", "Medical imaging"],
    links: [],
  },
];
