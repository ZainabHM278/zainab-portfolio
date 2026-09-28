// Learning & growth page content. Bump `updated` whenever the list changes.

export const updated = "Sep 2026";

export type Status = "In progress" | "Done" | "Up next";

export const learningList: { topic: string; where: string; status: Status; href?: string }[] = [
  { topic: "Data Science & AI path", where: "Tuwaiq Academy (Satr) · 15 courses · 47% done", status: "In progress" },
  { topic: "Flutter App Development path", where: "Tuwaiq Academy (Satr) · 11 courses · just started", status: "In progress" },
  {
    topic: "One Codewars kata a day",
    where: "Codewars · Python · 6 kyu",
    status: "In progress",
    href: "https://github.com/ZainabHM278/my-codewars-katas",
  },
  { topic: "Laravel & Filament", where: "On the job + official docs", status: "In progress" },
  { topic: "Laravel Bootcamp — Chirper", where: "laravel.com", status: "In progress" },
  { topic: "SQL fluency", where: "12-week study plan", status: "In progress" },
  { topic: "AWS data & analytics services", where: "12-week study plan", status: "In progress" },
  { topic: "Statistical inference", where: "12-week study plan", status: "In progress" },
  { topic: "30 Days to Learn Laravel 11", where: "Laracasts", status: "Done" },
  { topic: "Intro to Deep Learning", where: "Kaggle", status: "Done" },
];

export const growth = [
  {
    title: "Understanding over speed",
    body: "I rebuild projects step by step until I can explain every decision behind them — not just that they work.",
  },
  {
    title: "Learning with intention",
    body: "I let daily work and documentation teach me my job's stack, and protect my personal study hours for data, AI and ML.",
  },
  {
    title: "Progress I can see",
    body: "I follow a 12-week study plan with a daily and weekly tracker, so growth is something I can measure.",
  },
];
