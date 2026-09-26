import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { TagList } from "@/components/tag-list";
import { projects, type Project } from "@/lib/projects";

const lede = "Things I built to test an idea, learn a tool, or solve a problem I cared about.";

export const metadata: Metadata = { title: "Projects", description: lede };

function Cover({ project, index }: { project: Project; index: number }) {
  const { image } = project;
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-mist">
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 536px, (min-width: 768px) 50vw, 100vw"
          className={image.fit === "contain" ? "bg-white object-contain p-3" : "object-cover object-top"}
        />
      ) : (
        <div aria-hidden="true" className="flex h-full flex-col justify-between p-6 lg:p-8">
          <span className="eyebrow">{project.kind}</span>
          <span className="font-serif text-[88px] leading-none text-line italic lg:text-[120px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageIntro crumb="02 Projects" title="Ideas that came to life" lede={lede} />
      <section className="container-page grid gap-14 pb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-20 lg:pb-32">
        {projects.map((p, i) => (
          <article key={p.title} className="flex flex-col gap-3.5 lg:gap-4">
            <Cover project={p} index={i} />
            <p className="eyebrow pt-1">
              {p.kind} · {p.year}
            </p>
            <h2 className="font-serif text-[34px] leading-[1.1] lg:text-[40px]">{p.title}</h2>
            <p className="leading-relaxed text-pretty text-muted lg:text-[17px]">{p.summary}</p>
            <TagList tags={p.stack} />
            {p.links.length > 0 && (
              <ul className="flex gap-7 text-[15px] font-medium">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on ${l.label}`}
                      className="inline-block border-b border-sky py-2.5 hover:text-muted"
                    >
                      {l.label} →
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>
    </>
  );
}
