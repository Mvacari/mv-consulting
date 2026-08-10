"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export function Services() {
  const [openId, setOpenId] = useState(services[0]?.id ?? "");

  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="section-label">Services</span>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
            How I help founders move.
          </h2>
          <p className="mt-4 max-w-md text-[var(--text-muted)] leading-relaxed">
            Clear offers for early-stage teams that need pipeline, positioning, and a product surface ready to sell.
          </p>
        </Reveal>

        <div className="space-y-2">
          {services.map((service, index) => {
            const isOpen = openId === service.id;
            return (
              <Reveal
                key={service.id}
                as="article"
                delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}
                className={`overflow-hidden rounded-[1.25rem] border transition duration-500 ease-[var(--ease)] ${
                  isOpen
                    ? "border-[var(--accent)]/35 bg-white shadow-[0_18px_50px_rgba(26,26,26,0.06)]"
                    : "border-black/10 bg-transparent hover:border-black/20"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? "" : service.id)}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--accent)]">
                      {service.label}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight md:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-lg transition duration-500 ease-[var(--ease)] ${
                      isOpen ? "rotate-45 bg-[var(--accent)] text-white border-transparent" : "bg-white"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 md:px-6">
                      <p className="max-w-2xl leading-relaxed text-[var(--text-muted)]">
                        {service.description}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {service.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm md:text-base">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
