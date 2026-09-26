import Link from "next/link";
import { profile, socials } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-mist">
      <div className="container-page flex flex-col gap-8 pt-14 pb-8 lg:gap-16 lg:pt-24 lg:pb-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="flex max-w-[640px] flex-col gap-4 lg:gap-5">
            <h2 className="font-serif text-[52px] leading-none lg:text-[80px]">Let&apos;s talk.</h2>
            <p className="leading-relaxed text-line lg:text-lg">
              A question, an idea, or just a hello — my inbox is open.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-full bg-sky px-7 text-[15px] font-medium text-ink transition-colors hover:bg-mist"
          >
            Say hello →
          </Link>
        </div>

        <div className="flex flex-col gap-8 font-mono text-[13px] lg:flex-row-reverse lg:items-center lg:justify-between lg:border-t lg:border-muted lg:pt-6">
          <nav aria-label="Social">
            <ul className="flex flex-wrap gap-x-6 lg:gap-x-7">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="block py-3 text-line hover:text-sky">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="border-t border-muted pt-5 text-xs text-sky lg:border-0 lg:pt-0 lg:text-[13px]">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
