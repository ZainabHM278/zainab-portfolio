import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { repoGroups } from "@/lib/repos";

const lede = "Repositories I'm learning from — and why each one is on my list.";

export const metadata: Metadata = { title: "Repos", description: lede };

export default function ReposPage() {
  return (
    <>
      <PageIntro crumb="07 Repos" title={<>Open source <em>I learn from</em></>} lede={lede} />

      <div className="container-page flex flex-col gap-14 pb-18 lg:gap-20 lg:pb-30">
        {repoGroups.map((group) => (
          <section key={group.title} className="flex flex-col gap-4 lg:gap-5">
            <h2 className="eyebrow">{group.title}</h2>
            <ul className="border-b border-line">
              {group.repos.map((r) => {
                const [owner, name] = r.repo.split("/");
                return (
                  <li
                    key={r.repo}
                    className="grid gap-4 border-t border-line py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_140px] md:items-start md:gap-12 md:py-9"
                  >
                    <div className="flex flex-col items-start gap-3">
                      <h3 className="font-mono text-base font-medium break-words lg:text-lg">
                        <span className="text-muted">{owner} /</span> {name}
                      </h3>
                      <span className="rounded-full border border-line px-3 py-1.5 font-mono text-xs">{r.tag}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="eyebrow">Why it&apos;s here</p>
                      <p className="leading-relaxed text-pretty lg:text-[17px]">{r.why}</p>
                    </div>
                    <a
                      href={`https://github.com/${r.repo}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${r.repo} on GitHub`}
                      className="justify-self-start border-b border-sky py-2.5 text-[15px] font-medium hover:text-muted md:justify-self-end"
                    >
                      View repo →
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
