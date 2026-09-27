import Link from "next/link";
import type { ReactNode } from "react";

// Breadcrumb, title and lede at the top of every inner page.
export function PageIntro({ crumb, title, lede }: { crumb: string; title: ReactNode; lede: string }) {
  return (
    <section className="container-page flex flex-col gap-5 pt-14 pb-12 lg:gap-6 lg:pt-28 lg:pb-20">
      <nav aria-label="Breadcrumb">
        <ol className="flex gap-2.5 font-mono text-xs tracking-[0.08em] text-muted uppercase lg:text-[13px]">
          <li>
            <Link href="/" className="hover:text-ink">Index</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-ink">{crumb}</li>
        </ol>
      </nav>
      <h1 className="font-serif text-[52px] leading-none tracking-[-0.02em] md:text-[72px] lg:text-[88px]">{title}</h1>
      <p className="max-w-[640px] text-lg leading-relaxed text-pretty text-muted lg:text-xl">{lede}</p>
    </section>
  );
}
