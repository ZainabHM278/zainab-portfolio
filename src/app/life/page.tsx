import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/page-intro";
import { alsoLove, books, chess, paintings, travel, type Painting } from "@/lib/life";

const lede = "What I do when the laptop is closed.";

export const metadata: Metadata = { title: "Hobbies", description: lede };

function SectionHeading({ num, children }: { num: string; children: ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-4 font-serif text-[36px] leading-[1.1] lg:gap-5 lg:text-5xl">
      <span className="font-mono text-xs text-muted lg:text-[13px]">{num}</span>
      {children}
    </h2>
  );
}

function HobbyHeading({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="eyebrow">{kicker}</p>
      <h3 className="font-serif text-[32px] leading-[1.1] lg:text-4xl">{title}</h3>
      {children && <p className="max-w-[440px] leading-relaxed text-pretty text-muted lg:text-[17px]">{children}</p>}
    </div>
  );
}

/* Reading: a shelf of spines. Colors and sizes cycle so the shelf looks lived-in. */
const spineStyles = [
  "bg-ink text-mist h-[268px] w-[60px]",
  "bg-sky text-ink h-[244px] w-[54px]",
  "bg-mist text-ink border border-line h-[290px] w-[64px]",
  "bg-muted text-paper h-[256px] w-[52px]",
  "bg-line text-ink h-[236px] w-[58px]",
  "bg-ink text-sky h-[280px] w-[56px]",
  "bg-paper text-ink border border-line h-[250px] w-[62px]",
];

function Shelf() {
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0">
      <ol className="flex min-w-max items-end gap-1.5 border-b-[6px] border-ink px-3 md:min-w-0">
        {books.map((b, i) => (
          <li
            key={`${b.title}-${i}`}
            className={`flex shrink-0 origin-bottom justify-center rounded-t-[3px] py-4 transition-transform duration-200 hover:-translate-y-2 ${spineStyles[i % spineStyles.length]} ${i % 5 === 3 ? "-rotate-3" : ""}`}
          >
            <span className="flex flex-col gap-1.5 [writing-mode:vertical-rl]">
              <span className="font-serif text-[17px] leading-none">{b.title}</span>
              <span className="font-mono text-[9.5px] leading-none tracking-[0.06em] uppercase opacity-75">{b.author}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* Painting: framed canvases on a wall, each with a small museum-style label. */
const frameShape: Record<Painting["shape"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

function GalleryWall() {
  return (
    <ul className="grid items-end gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
      {paintings.map((p, i) => (
        <li key={i} className="flex flex-col gap-3">
          <div className="border-[10px] border-ink bg-paper p-3 shadow-[0_18px_30px_-18px_rgb(37_50_55/0.55)] lg:p-4">
            <div className={`relative overflow-hidden ${frameShape[p.shape]}`}>
              {p.src ? (
                <Image src={p.src} alt={p.title ?? "Painting"} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center bg-mist bg-[repeating-linear-gradient(135deg,transparent_0_10px,rgb(206_208_206/0.55)_10px_11px)]">
                  <span className="bg-mist px-2 font-serif text-lg text-muted italic">Coming soon</span>
                </div>
              )}
            </div>
          </div>
          <p className="font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
            No. {String(i + 1).padStart(2, "0")} — {p.title ?? "Untitled"}
            {p.medium ? ` · ${p.medium}` : ""}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* Chess: a small board drawn from a FEN placement string. */
const glyphs: Record<string, string> = {
  K: "♔", Q: "♕", R: "♖", B: "♗", N: "♘", P: "♙",
  k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟",
};

function ChessBoard({ fen }: { fen: string }) {
  const squares = fen.split("/").flatMap((rank) =>
    [...rank].flatMap((c) => (/\d/.test(c) ? Array<string>(Number(c)).fill("") : [c])),
  );
  return (
    <div aria-hidden="true" className="grid aspect-square w-full max-w-[360px] grid-cols-8 overflow-hidden rounded-lg border-[6px] border-ink">
      {squares.map((piece, i) => {
        const dark = (Math.floor(i / 8) + (i % 8)) % 2 === 1;
        return (
          <span key={i} className={`flex items-center justify-center text-[clamp(20px,6vw,34px)] leading-none text-ink ${dark ? "bg-sky" : "bg-paper"}`}>
            {piece ? `${glyphs[piece]}︎` : null}
          </span>
        );
      })}
    </div>
  );
}

/* Off the clock: small line icons. */
const icons: Record<(typeof alsoLove)[number]["icon"], ReactNode> = {
  switch: (
    <>
      <rect x="2" y="6" width="5" height="12" rx="2.5" />
      <rect x="17" y="6" width="5" height="12" rx="2.5" />
      <rect x="7" y="6" width="10" height="12" />
      <circle cx="4.5" cy="9.5" r="0.75" fill="currentColor" />
      <circle cx="19.5" cy="14.5" r="0.75" fill="currentColor" />
    </>
  ),
  piano: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M7.5 12v7M12 12v7M16.5 12v7" />
      <path d="M6.25 5h2.5v7h-2.5zM10.75 5h2.5v7h-2.5zM15.25 5h2.5v7h-2.5z" fill="currentColor" />
    </>
  ),
  tennis: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.6 5.6a9 9 0 0 1 0 12.8M18.4 5.6a9 9 0 0 0 0 12.8" />
    </>
  ),
  pilates: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M3 19.5h18M5.5 16.5h13" />
    </>
  ),
};

export default function LifePage() {
  return (
    <>
      <PageIntro crumb="06 Hobbies" title={<>Beyond <em>the screen</em></>} lede={lede} />

      <section id="hobbies" className="container-page flex scroll-mt-6 flex-col gap-14 pb-18 lg:gap-20 lg:pb-28">
        <SectionHeading num="06">Hobbies</SectionHeading>

        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end lg:gap-16">
          <HobbyHeading kicker="Reading" title="On my shelf">
            My top reads — the books that stayed with me.
          </HobbyHeading>
          <Shelf />
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          <HobbyHeading kicker="Painting" title="From the easel" />
          <GalleryWall />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <HobbyHeading kicker="Chess" title="Your move">
              {chess.username ? (
                <>
                  Find me on {chess.platform} as <span className="font-mono text-ink">{chess.username}</span>.
                </>
              ) : null}
            </HobbyHeading>
            {chess.url && (
              <a
                href={chess.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[52px] items-center self-start rounded-full bg-ink px-7 text-[15px] font-medium text-paper transition-colors hover:bg-muted"
              >
                Challenge me →
              </a>
            )}
          </div>
          <ChessBoard fen={chess.position} />
        </div>

        <div className="flex flex-col gap-8">
          <HobbyHeading kicker="Off the clock" title="Also on repeat" />
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
            {alsoLove.map((h) => (
              <li key={h.name} className="group flex flex-col gap-10 rounded-2xl bg-mist p-5 transition-colors hover:bg-ink hover:text-mist lg:gap-14 lg:p-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[h.icon]}
                </svg>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase group-hover:text-sky">{h.kind}</span>
                  <span className="font-serif text-2xl leading-tight lg:text-[28px]">{h.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {travel.length > 0 && (
        <section id="travel" className="container-page flex scroll-mt-6 flex-col gap-10 pb-18 lg:pb-30">
          <SectionHeading num="07">Travel</SectionHeading>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {travel.map((t) => (
              <li key={t.city} className="flex flex-col gap-2.5">
                <div className="relative mb-1.5 aspect-square overflow-hidden rounded-xl border border-line bg-mist">
                  {t.src && <Image src={t.src} alt={t.city} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />}
                </div>
                <p className="font-mono text-xs text-muted">{t.year}</p>
                <h3 className="font-serif text-[28px] leading-[1.1]">{t.city}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{t.note}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
