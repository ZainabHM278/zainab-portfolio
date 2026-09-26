import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex flex-1 flex-col justify-center gap-6 py-24">
      <p className="eyebrow">404</p>
      <h1 className="font-serif text-[52px] leading-none lg:text-[80px]">This page isn&apos;t here yet.</h1>
      <p className="max-w-[560px] text-lg leading-relaxed text-muted">
        It may still be on its way. Head back to the index to explore the rest.
      </p>
      <Link href="/" className="self-start py-3 font-mono text-[13px] tracking-[0.06em] uppercase hover:text-muted">
        ← Back to index
      </Link>
    </section>
  );
}
