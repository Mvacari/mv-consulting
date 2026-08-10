"use client";

import { useEffect, useState } from "react";
import { hero, site } from "@/lib/content";

export function Hero() {
  const [ready, setReady] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      className="hero-gradient relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
        setOffset({ x, y });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(249,67,57,0.28),transparent_70%)] blur-2xl transition duration-700 ease-[var(--ease)] md:h-80 md:w-80"
        style={{ transform: `translate(calc(-50% + ${offset.x}px), ${offset.y}px)` }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <p
          className={`mb-8 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--text)] transition duration-700 ease-[var(--ease)] md:mb-10 md:text-6xl lg:text-7xl ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {site.brand}
        </p>

        <p
          className={`mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-deep)] transition duration-700 delay-75 ease-[var(--ease)] md:text-base ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {hero.greeting}
        </p>

        <h1
          className={`max-w-5xl font-[family-name:var(--font-display)] text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-[var(--text)] transition duration-700 delay-100 ease-[var(--ease)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.08] ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="block">{hero.headlineLead}</span>
          <span className="mt-2 block text-[var(--accent-deep)] md:mt-3">
            “{hero.headlineQuote}”
          </span>
          <span className="mt-2 block md:mt-3">{hero.headlineEnd}</span>
        </h1>

        <p
          className={`mt-8 max-w-4xl text-base leading-[1.7] text-[var(--text-muted)] transition duration-700 delay-200 ease-[var(--ease)] md:mt-10 md:text-xl md:leading-[1.65] ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {hero.body}
        </p>

        <p
          className={`mt-6 max-w-3xl font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--text)] transition duration-700 delay-[250ms] ease-[var(--ease)] md:mt-8 md:text-2xl ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {hero.closing}
        </p>

        <div
          className={`mt-10 flex flex-col items-center gap-4 transition duration-700 delay-300 ease-[var(--ease)] sm:flex-row md:mt-12 ${
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <a
            href={site.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill text-base"
          >
            {hero.primaryCta}
            <span aria-hidden>→</span>
          </a>
          <a
            href="#about"
            className="text-sm font-semibold tracking-tight text-[var(--text)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition hover:text-[var(--accent-deep)]"
          >
            {hero.secondaryCta} →
          </a>
        </div>
      </div>
    </section>
  );
}
