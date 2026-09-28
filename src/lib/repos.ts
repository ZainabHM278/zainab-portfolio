// Repos page content: open source I'm learning from, grouped by theme.

export type Repo = { repo: string; tag: string; why: string };

export const repoGroups: { title: string; repos: Repo[] }[] = [
  {
    title: "Foundations",
    repos: [
      {
        repo: "HenryNdubuaku/maths-cs-ai-compendium",
        tag: "Textbook",
        why: "Maths, statistics and machine learning explained intuition-first, all the way up to ML systems design — a companion to the statistical inference and ML I'm studying.",
      },
      {
        repo: "jakevdp/PythonDataScienceHandbook",
        tag: "Notebooks",
        why: "The complete Python Data Science Handbook as runnable notebooks — a reference for pandas, NumPy and Matplotlib.",
      },
      {
        repo: "TheAlgorithms/Python",
        tag: "Python",
        why: "Classic algorithms implemented in Python — a companion to my daily Codewars katas for comparing approaches.",
      },
    ],
  },
  {
    title: "Data science & ML engineering",
    repos: [
      {
        repo: "DataTalksClub/machine-learning-zoomcamp",
        tag: "Course",
        why: "A free, project-based ML engineering course that goes from training models to deploying them — the path from notebook to production.",
      },
      {
        repo: "DataTalksClub/data-engineering-zoomcamp",
        tag: "Course",
        why: "Production data pipelines, warehousing and SQL — the next step after building my Credit Portfolio Warehouse.",
      },
      {
        repo: "ageron/handson-ml3",
        tag: "Notebooks",
        why: "Notebooks for Hands-On Machine Learning, covering scikit-learn, Keras and TensorFlow — pairs with my Data Science & AI path.",
      },
      {
        repo: "chiphuyen/dmls-book",
        tag: "Book notes",
        why: "Summaries and resources for Designing Machine Learning Systems — how ML systems are built and maintained beyond the model itself.",
      },
    ],
  },
  {
    title: "LLMs & agents",
    repos: [
      {
        repo: "mlabonne/llm-course",
        tag: "Course",
        why: "A roadmap with notebooks for fine-tuning, RAG and deploying LLMs — the same ground as my LoRA and RAG projects, in more depth.",
      },
      {
        repo: "google/adk-recipes",
        tag: "Python",
        why: "Official sample agents for Google's Agent Development Kit — patterns to build on after PathFinder CS.",
      },
      {
        repo: "huggingface/smol-course",
        tag: "Course",
        why: "Hugging Face's course on fine-tuning and aligning small models — a follow-on to my Qwen2.5-0.5B classifier.",
      },
    ],
  },
  {
    title: "Engineering craft",
    repos: [
      {
        repo: "donnemartin/system-design-primer",
        tag: "Guide",
        why: "How large-scale systems are designed, with flashcards to review the core ideas.",
      },
      {
        repo: "filamentphp/filament",
        tag: "PHP",
        why: "The Laravel framework I use at work — its source shows how a large, well-organized PHP codebase fits together.",
      },
    ],
  },
];
