"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500 ease-[var(--ease)] ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <nav
        className="nav-pill flex w-full max-w-5xl items-center justify-between gap-3 px-3 py-2 text-white md:px-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="shrink-0 px-2 font-[family-name:var(--font-display)] text-sm font-bold tracking-tight md:text-base"
          onClick={() => setOpen(false)}
        >
          {site.brand}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold tracking-tight text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill hidden text-sm sm:inline-flex"
          >
            Let&apos;s talk
            <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-4 bg-white transition duration-300 ${
                  open ? "top-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-white transition duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-4 bg-white transition duration-300 ${
                  open ? "top-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-0 z-40 bg-[var(--bg)] px-6 pb-10 pt-24 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-2 py-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--text)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill mt-6 w-fit text-base"
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
