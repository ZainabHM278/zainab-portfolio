// Certifications page content. Dates from the CV; practice projects link to Projects entries.

export type Certification = {
  name: string;
  issuer: string;
  code: string;
  issued: string;
  // Credly or AWS verification URL; the "Verify credential" link shows once set.
  verifyUrl?: string;
  practice: {
    title: string;
    summary: string;
    stack: string[];
    link?: { label: string; href: string };
  };
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    code: "MLA-C01",
    issued: "Jun 2026",
    verifyUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/22c7c62d811d45eab91f018461e18b9f",
    practice: {
      title: "Titanic survival prediction, end to end on AWS",
      summary:
        "Data stored in S3, an XGBoost model trained on SageMaker, served as a real-time REST API through Lambda and API Gateway, and monitored with CloudWatch. 82.1% validation accuracy.",
      stack: ["S3", "SageMaker", "XGBoost", "Lambda", "API Gateway", "CloudWatch"],
      link: { label: "View on GitHub", href: "https://github.com/ZainabHM278/aws-ml-titanic" },
    },
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    code: "AIF-C01",
    issued: "Mar 2026",
    practice: {
      title: "Fine-tuning a foundation model for financial topics",
      summary:
        "Adapted Qwen2.5-0.5B with LoRA to sort financial tweets into 20 topics, training just 0.22% of its parameters, and evaluated it on a held-out test set: 90.5% accuracy and 89.2% macro F1.",
      stack: ["Foundation models", "LoRA", "Fine-tuning", "Evaluation"],
      link: { label: "View on Hugging Face", href: "https://huggingface.co/ZainabAlmahal/financial-topic-classifier-lora" },
    },
  },
];

export const courses = [
  {
    name: "Introduction to Artificial Intelligence",
    provider: "KAUST Academy",
    note: "Practiced Python, NumPy, pandas, scikit-learn and TensorFlow.",
  },
  {
    name: "5-Day AI Agents Intensive",
    provider: "Google & Kaggle",
    note: "Built PathFinder CS, a multi-agent career assistant using ADK and MCP.",
  },
  {
    name: "Mathematics for Machine Learning and Data Science",
    provider: "DeepLearning.AI",
    note: "Linear algebra, calculus, and probability and statistics for machine learning.",
  },
  {
    name: "Intro to Deep Learning",
    provider: "Kaggle",
    note: "Built neural networks in Keras, with dropout, batch normalization and binary classification.",
  },
  {
    name: "30 Days to Learn Laravel 11",
    provider: "Laracasts",
    note: "Built a job board: routing, Blade, Eloquent, validation, mail and queues.",
  },
  {
    name: "Meta Front-End Developer",
    provider: "Meta",
    note: "HTML, CSS, JavaScript and React fundamentals.",
  },
];
