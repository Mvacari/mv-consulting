"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { feedback } from "@/lib/content";

export function Feedback() {
  const [active, setActive] = useState(0);

  return (
    <section id="feedback" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">Recommendations</span>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
              What colleagues say.
            </h2>
            <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
              Recommendations from people who worked with me directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {feedback.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition duration-500 ease-[var(--ease)] ${
                  active === index
                    ? "bg-[var(--nav)] text-white"
                    : "border border-black/10 bg-white text-[var(--text-muted)] hover:border-black/25 hover:text-[var(--text)]"
                }`}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
              >
                {item.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="figure"
          delay={1}
          className="min-h-[220px] rounded-[1.5rem] border border-black/10 bg-white/70 p-7 transition duration-500 ease-[var(--ease)] md:p-10"
        >
          <blockquote className="text-sm font-normal leading-relaxed tracking-tight text-[var(--text-muted)] md:text-[0.95rem] md:leading-relaxed">
            “{feedback[active].quote}”
          </blockquote>
          <figcaption className="mt-6 border-t border-black/[0.08] pt-4">
            <p className="font-semibold tracking-tight">{feedback[active].name}</p>
            <p className="text-sm text-[var(--text-muted)]">{feedback[active].role}</p>
          </figcaption>
        </Reveal>

        <div className="mt-5 flex gap-2">
          {feedback.map((item, index) => (
            <button
              key={`${item.name}-dot`}
              type="button"
              aria-label={`Show recommendation from ${item.name}`}
              className={`h-2 rounded-full transition-all duration-500 ease-[var(--ease)] ${
                active === index ? "w-8 bg-[var(--accent)]" : "w-2 bg-black/15 hover:bg-black/30"
              }`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
