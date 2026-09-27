import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/page-intro";
import { growth, learningList, updated, type Status } from "@/lib/learning";

const lede = "What I'm studying, what I've finished, and what's next — plus the lessons I'm carrying with me.";

export const metadata: Metadata = { title: "Learning & growth", description: lede };

const statusStyles: Record<Status, string> = {
  "In progress": "bg-sky",
  Done: "border border-muted",
  "Up next": "border border-dashed border-muted bg-mist",
};

function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center gap-2 justify-self-start rounded-full px-3 py-1.5 font-mono text-xs ${statusStyles[status]}`}>
      {status === "In progress" && <span aria-hidden="true" className="size-1.5 rounded-full bg-ink" />}
      {status}
    </span>
  );
}

function SectionHeading({ num, children }: { num: string; children: ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-4 font-serif text-[36px] leading-[1.1] lg:gap-5 lg:text-5xl">
      <span className="font-mono text-xs text-muted lg:text-[13px]">{num}</span>
      {children}
    </h2>
  );
}

export default function LearningPage() {
  return (
    <>
      <PageIntro
        crumb="04–05 Learning & growth"
        title={<>Always learning <em>something new</em></>}
        lede={lede}
      />

      <section id="list" className="container-page flex scroll-mt-6 flex-col gap-6 pb-16 lg:gap-8 lg:pb-28">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <SectionHeading num="04">My learning list</SectionHeading>
          <p className="font-mono text-xs text-muted lg:text-[13px]">Updated {updated}</p>
        </div>
        <div role="table" aria-label="Learning list" className="border-b border-line">
          <div role="row" className="hidden grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)_160px] gap-8 pb-4 md:grid">
            {["Topic", "Where", "Status"].map((h) => (
              <span key={h} role="columnheader" className="eyebrow">{h}</span>
            ))}
          </div>
          {learningList.map((item) => (
            <div
              key={item.topic}
              role="row"
              className="grid gap-2 border-t border-line py-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)_160px] md:items-center md:gap-8 md:py-[22px]"
            >
              <span role="cell" className="text-[17px] font-medium lg:text-[19px]">{item.topic}</span>
              <span role="cell" className="text-muted">{item.where}</span>
              <span role="cell" className="pt-1 md:pt-0"><StatusPill status={item.status} /></span>
            </div>
          ))}
        </div>
      </section>

      <section id="growth" className="container-page flex scroll-mt-6 flex-col gap-8 pb-18 lg:gap-10 lg:pb-30">
        <SectionHeading num="05">Personal growth</SectionHeading>
        <div className="grid gap-10 md:grid-cols-3">
          {growth.map((g) => (
            <article key={g.title} className="flex flex-col gap-4 border-t-2 border-ink pt-6">
              <h3 className="font-serif text-[28px] leading-[1.15] lg:text-[32px]">{g.title}</h3>
              <p className="leading-relaxed text-pretty text-muted lg:text-[17px]">{g.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
