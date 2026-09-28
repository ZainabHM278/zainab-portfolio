import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { contactLinks, profile } from "@/lib/site";

const lede = "A question, an idea, or just a hello — message me on LinkedIn, or find me on any of the links below.";

export const metadata: Metadata = { title: "Contact", description: lede };

export default function ContactPage() {
  return (
    <>
      <PageIntro crumb="08 Contact" title={<>Let&apos;s <em>talk.</em></>} lede={lede} />

      <section className="container-page flex flex-col gap-6 pb-18 lg:gap-8 lg:pb-30">
        <h2 className="eyebrow">Elsewhere</h2>
        <nav aria-label="Where to find me">
          <ul className="border-b border-line">
            {contactLinks.map((l) => (
              <li key={l.label} className="border-t border-line">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[minmax(0,1fr)_24px] items-center gap-x-4 gap-y-1.5 py-6 md:grid-cols-[180px_minmax(0,1fr)_auto_40px] md:gap-8 md:py-8"
                >
                  <span className="eyebrow md:text-[13px]">{l.label}</span>
                  <span className="col-start-1 font-serif text-[32px] leading-[1.1] break-words transition-transform group-hover:translate-x-1 md:col-start-auto md:text-[44px]">
                    {l.handle}
                  </span>
                  {l.note ? (
                    <span className="col-start-1 justify-self-start rounded-full bg-sky px-3 py-1.5 font-mono text-xs text-ink md:col-start-auto">
                      {l.note}
                    </span>
                  ) : (
                    <span className="hidden md:block" />
                  )}
                  <span
                    aria-hidden="true"
                    className="col-start-2 row-span-3 row-start-1 self-center justify-self-end text-xl transition-transform group-hover:translate-x-1 md:col-start-auto md:row-span-1 md:row-start-auto md:text-2xl"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {profile.cvUrl && (
          <a
            href={profile.cvUrl}
            download
            className="mt-4 inline-flex h-[52px] items-center justify-center self-stretch rounded-full border border-ink px-7 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper sm:self-start"
          >
            Download CV ↓
          </a>
        )}
      </section>
    </>
  );
}
