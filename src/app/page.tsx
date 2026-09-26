import Link from "next/link";
import { glance, profile, sections, toolbox } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="container-page flex flex-col gap-5 pt-14 pb-12 lg:gap-7 lg:pt-32 lg:pb-24">
        <p className="eyebrow lg:text-[13px]">{profile.role}</p>
        <h1 className="font-serif text-[64px] leading-none tracking-[-0.02em] md:text-[96px] lg:text-[128px]">
          Hi, I&apos;m <em>{profile.fullName}</em>.
        </h1>
        <p className="max-w-[760px] text-lg leading-[1.55] text-pretty text-muted lg:text-2xl lg:leading-normal">
          {profile.intro}
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4 lg:pt-3">
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-ink px-7 text-[15px] font-medium text-paper transition-colors hover:bg-muted"
            >
              Download CV ↓
            </a>
          )}
          <Link
            href="/contact"
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-ink px-7 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section aria-label="At a glance" className="container-page">
        <dl className="grid border-b border-line lg:grid-cols-4 lg:gap-10 lg:border-t lg:py-10">
          {glance.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 border-t border-line py-5 lg:gap-2.5 lg:border-0 lg:py-0">
              <dt className="eyebrow">{item.label}</dt>
              <dd className="leading-normal lg:text-[17px]">
                {item.value}
                {"company" in item && item.company ? ` at ${item.company}` : null}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page flex flex-col gap-4 py-12 lg:gap-5 lg:py-16">
        <h2 className="eyebrow">Toolbox</h2>
        <ul className="flex flex-wrap gap-2 lg:gap-2.5">
          {toolbox.map((tool) => (
            <li key={tool} className="rounded-full border border-line px-3.5 py-[7px] text-[13px] lg:px-4 lg:py-2 lg:text-sm">
              {tool}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page flex flex-col pt-4 pb-18 lg:pt-8 lg:pb-32">
        <div className="flex items-baseline justify-between pb-4 lg:pb-6">
          <h2 className="font-serif text-[44px] leading-none lg:text-[56px]">Index</h2>
          <p className="text-sm text-muted lg:text-base">Explore whatever interests you.</p>
        </div>
        <nav aria-label="Sections">
          <ul className="border-b border-line">
            {sections.map((s) => (
              <li key={s.num} className="border-t border-line">
                <Link
                  href={s.href}
                  className="group grid grid-cols-[32px_minmax(0,1fr)_24px] items-start gap-3 py-5 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)_40px] md:items-center md:gap-8 md:py-7"
                >
                  <span className="pt-2.5 font-mono text-xs text-muted md:pt-0 md:text-[13px]">{s.num}</span>
                  <span className="flex flex-col gap-1 md:contents">
                    <span className="font-serif text-[30px] leading-[1.15] transition-transform group-hover:translate-x-1 md:text-[44px] md:leading-[1.1]">
                      {s.title}
                    </span>
                    <span className="text-[15px] leading-normal text-muted md:text-base">{s.blurb}</span>
                  </span>
                  <span aria-hidden="true" className="pt-1.5 text-xl transition-transform group-hover:translate-x-1 md:justify-self-end md:pt-0 md:text-2xl">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
