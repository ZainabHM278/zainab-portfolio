"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { pages, profile, socials } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  // While the menu is open: lock page scroll, focus the close button, close on Escape.
  useEffect(() => {
    if (!open) return;
    const toggle = openButton.current;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="border-b border-line">
      <div className="container-page flex h-16 items-center justify-between lg:h-[88px]">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="font-serif text-2xl lg:text-[28px]"
        >
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-mono text-[13px] tracking-[0.06em] uppercase">
            {pages.map((p) => {
              const active = isActive(pathname, p.href);
              return (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3.5 transition-colors hover:text-ink ${active ? "text-ink" : "text-muted"}`}
                  >
                    {p.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={openButton}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="-mr-2.5 flex size-11 items-center justify-center lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M4 9h16M4 15h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-mist lg:hidden"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-muted pr-2.5 pl-5">
            <Link href="/" onClick={close} className="font-serif text-2xl hover:text-sky">
              {profile.name}
            </Link>
            <button
              ref={closeButton}
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex size-11 items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Main" className="px-5 pt-4">
            <ul>
              {[{ href: "/", label: "Index", num: "00" }, ...pages].map((p) => {
                const active = isActive(pathname, p.href);
                return (
                  <li key={p.href} className="border-b border-muted">
                    <Link
                      href={p.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className="flex items-baseline gap-4 py-3 hover:text-sky"
                    >
                      <span className="w-6 font-mono text-xs text-sky">{p.num}</span>
                      <span className={`font-serif text-[34px] leading-[1.1] ${active ? "italic" : ""}`}>
                        {"menuLabel" in p && p.menuLabel ? p.menuLabel : p.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-2 px-5 pt-6 pb-10">
            <p className="font-mono text-xs tracking-[0.08em] text-sky uppercase">Elsewhere</p>
            <ul className="flex flex-wrap gap-x-6 font-mono text-[13px]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="block py-3 text-line hover:text-sky">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
