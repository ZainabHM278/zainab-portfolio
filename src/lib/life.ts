// Hobbies & travel page content.

export type Book = { title: string; author: string };

// Top reads, in shelf order.
export const books: Book[] = [
  { title: "Out of My Mind", author: "Sharon M. Draper" },
  { title: "The Night Circus", author: "Erin Morgenstern" },
  { title: "The Bell Jar", author: "Sylvia Plath" },
  { title: "Norwegian Wood", author: "Haruki Murakami" },
  { title: "The Vanishing Half", author: "Brit Bennett" },
  { title: "A Little Life", author: "Hanya Yanagihara" },
  { title: "Normal People", author: "Sally Rooney" },
  { title: "Before the Coffee Gets Cold", author: "Toshikazu Kawaguchi" },
];

// Paintings on the gallery wall. Frames without `src` show a "coming soon" canvas.
// Put photos in /public/paintings and set src, e.g. "/paintings/sunset.jpg".
export type Painting = { src?: string; title?: string; medium?: string; shape: "portrait" | "landscape" | "square" };

export const paintings: Painting[] = [
  { shape: "portrait" },
  { shape: "landscape" },
  { shape: "square" },
];

// Set username and url to show "Find me on…" and the Challenge button.
export const chess = {
  platform: "Lichess",
  username: "zooz33" as string | null,
  url: "https://lichess.org/@/zooz33" as string | null,
  // Board shown beside it (FEN piece placement): the Italian Game.
  position: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R",
};

export const alsoLove = [
  { name: "Nintendo Switch", kind: "Games", icon: "switch" },
  { name: "Piano", kind: "Music", icon: "piano" },
  { name: "Tennis", kind: "Sport", icon: "tennis" },
  { name: "Pilates", kind: "Movement", icon: "pilates" },
] as const;

export type Place = { city: string; year: string; note: string; src?: string };

// Places that stayed with me. The Travel section (and its home index row) are skipped for now;
// the section stays hidden while this is empty.
export const travel: Place[] = [];
