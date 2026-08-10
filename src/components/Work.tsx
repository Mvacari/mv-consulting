"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { consulting, experience } from "@/lib/content";

type Tab = "consulting" | "experience";

export function Work() {
  const [tab, setTab] = useState<Tab>("consulting");

  return (
    <section id="work" className="bg-[var(--bg-warm)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <span className="section-label">Work</span>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
            Proof in the pipeline.
          </h2>
        </Reveal>

        <Reveal
          delay={1}
          className="mb-8 inline-flex rounded-full border border-black/10 bg-white/80 p-1"
        >
          <div role="tablist" aria-label="Work type" className="contents">
            {(
              [
                { id: "consulting", label: "Consulting" },
                { id: "experience", label: "Full-time" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition duration-500 ease-[var(--ease)] ${
                  tab === item.id
                    ? "bg-[var(--nav)] text-white"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        {tab === "consulting" ? (
          <article className="rounded-[1.5rem] bg-white px-6 py-7 transition duration-500 ease-[var(--ease)] md:px-8 md:py-8 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                  {consulting.company}
                </h3>
                <p className="mt-1 font-semibold tracking-tight">{consulting.role}</p>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                {consulting.period}
                <span className="mx-2 text-[var(--text)]/20">·</span>
                {consulting.location}
              </p>
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--text-muted)]">
              {consulting.summary}
            </p>
            <ul className="mt-6 space-y-4 border-t border-black/[0.08] pt-5">
              {consulting.clients.map((client) => (
                <li key={client.name}>
                  <p className="text-sm font-semibold tracking-tight text-[var(--accent-deep)]">
                    {client.name}
                  </p>
                  <p className="mt-1 leading-relaxed text-[var(--text-muted)]">
                    {client.detail}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ) : (
          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={item.company}
                className="rounded-[1.5rem] bg-white px-6 py-7 transition duration-500 ease-[var(--ease)] md:px-8 md:py-8 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                        {item.company}
                      </h3>
                      <span className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs font-semibold tracking-tight text-[var(--text-muted)]">
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-1 font-semibold tracking-tight">{item.role}</p>
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">
                    {item.period}
                    <span className="mx-2 text-[var(--text)]/20">·</span>
                    {item.location}
                  </p>
                </div>
                <p className="mt-4 max-w-3xl leading-relaxed text-[var(--text-muted)]">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-2 border-t border-black/[0.08] pt-5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[var(--text-muted)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
