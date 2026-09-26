import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { TagList } from "@/components/tag-list";
import { education, work, type JourneyEntry } from "@/lib/journey";

const lede = "Where I've worked, what I studied, and the programs that shaped how I build.";

export const metadata: Metadata = { title: "Journey", description: lede };

function Timeline({ heading, entries }: { heading: string; entries: JourneyEntry[] }) {
  return (
    <section className="container-page grid gap-4 pb-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:pb-24">
      <h2 className="font-serif text-[32px] leading-[1.1] lg:pt-10 lg:text-4xl">{heading}</h2>
      <ol className="border-b border-line">
        {entries.map((e) => (
          <li key={e.title} className="flex flex-col gap-3 border-t border-line py-8 lg:py-10">
            <p className="font-mono text-xs text-muted lg:text-[13px]">{e.dates}</p>
            <h3 className="font-serif text-[30px] leading-[1.1] lg:text-4xl">{e.title}</h3>
            <p className="font-medium lg:text-[17px]">{e.org}</p>
            <p className="max-w-[680px] leading-relaxed text-pretty text-muted lg:text-[17px]">{e.summary}</p>
            {e.stack && <TagList tags={e.stack} className="pt-2" />}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function JourneyPage() {
  return (
    <>
      <PageIntro
        crumb="01 Journey"
        title="Work & education"
        lede={lede}
      />
      <Timeline heading="Work experience" entries={work} />
      <Timeline heading="Education" entries={education} />
    </>
  );
}
