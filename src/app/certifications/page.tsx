import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { certifications, courses } from "@/lib/certifications";

const lede = "Each certification sits next to the hands-on work I did to put it into practice.";

export const metadata: Metadata = { title: "Certifications", description: lede };

export default function CertificationsPage() {
  return (
    <>
      <PageIntro crumb="03 Certifications" title={<>Certified — <em>and practiced</em></>} lede={lede} />

      <section className="container-page pb-16 lg:pb-24">
        <ul className="border-b border-line">
          {certifications.map((c) => (
            <li key={c.code} className="grid gap-6 border-t border-line py-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-16 lg:py-12">
              <div className="flex flex-col gap-4">
                <div
                  aria-hidden="true"
                  className="flex size-20 flex-col items-center justify-center gap-0.5 rounded-2xl border border-line bg-mist font-mono text-ink lg:size-24"
                >
                  <span className="text-[10px] tracking-[0.1em] text-muted">AWS</span>
                  <span className="text-xs font-medium lg:text-[13px]">{c.code}</span>
                </div>
                <h2 className="font-serif text-[30px] leading-[1.1] lg:text-4xl">{c.name}</h2>
                <p className="font-mono text-xs text-muted lg:text-[13px]">
                  {c.issuer} · {c.code} · {c.issued}
                </p>
                {c.verifyUrl && (
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start border-b border-sky py-2.5 text-[15px] font-medium hover:text-muted"
                  >
                    Verify credential →
                  </a>
                )}
              </div>

              <div className="flex flex-col gap-4 rounded-2xl bg-mist p-6 lg:p-8">
                <p className="font-mono text-xs tracking-[0.08em] uppercase">Hands-on practice</p>
                <h3 className="text-xl leading-snug font-semibold lg:text-[22px]">{c.practice.title}</h3>
                <p className="leading-relaxed text-pretty lg:text-[17px]">{c.practice.summary}</p>
                <ul className="flex flex-wrap gap-2">
                  {c.practice.stack.map((s) => (
                    <li key={s} className="rounded-full bg-paper px-3 py-1.5 font-mono text-xs">{s}</li>
                  ))}
                </ul>
                {c.practice.link && (
                  <a
                    href={c.practice.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start border-b border-ink py-2.5 text-[15px] font-medium hover:text-muted"
                  >
                    {c.practice.link.label} →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page grid gap-4 pb-18 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:pb-30">
        <h2 className="font-serif text-[32px] leading-[1.1] lg:pt-7 lg:text-4xl">Courses &amp; programs</h2>
        <ul className="border-b border-line">
          {courses.map((c) => (
            <li
              key={c.name}
              className="grid gap-1.5 border-t border-line py-5 md:grid-cols-[minmax(0,1.2fr)_140px_minmax(0,1.6fr)] md:items-baseline md:gap-8 md:py-7"
            >
              <p className="text-[17px] leading-snug font-medium lg:text-lg">{c.name}</p>
              <p className="font-mono text-xs text-muted lg:text-[13px]">{c.provider}</p>
              <p className="leading-relaxed text-muted">{c.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
