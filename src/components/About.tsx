"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { about, site } from "@/lib/content";

export function About() {
  const [activeStory, setActiveStory] = useState(0);
  const story = about.beyond.stories[activeStory];

  return (
    <section id="about" className="bg-[var(--bg-warm)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="section-label">About</span>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
              {about.title}
            </h2>
            <p className="mt-3 text-sm font-semibold tracking-tight text-[var(--accent-deep)]">
              {site.role} · {site.location}
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-[var(--text-muted)]">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                Education
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)] md:text-base">
                {about.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                Languages
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] md:text-base">
                {about.languages.join(" · ")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={2} className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                Core skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                Tools
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-[var(--nav)] px-3 py-1.5 text-sm text-white transition hover:bg-[var(--accent)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          className="rounded-[1.5rem] bg-white px-6 py-8 md:px-10 md:py-10"
        >
          <div id="life">
            <span className="section-label">Life outside the CRM</span>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              {about.beyond.title}
            </h3>

            <div
              className="mt-6 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Life stories"
            >
              {about.beyond.stories.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={activeStory === index}
                  className={`rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition duration-500 ease-[var(--ease)] ${
                    activeStory === index
                      ? "bg-[var(--accent)] text-white"
                      : "border border-black/10 text-[var(--text-muted)] hover:border-black/25 hover:text-[var(--text)]"
                  }`}
                  onClick={() => setActiveStory(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <p className="leading-relaxed text-[var(--text-muted)] md:text-lg">
                {story.text}
              </p>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[linear-gradient(145deg,#f3ebe1,#e8ddd0)]">
                {story.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="h-full w-full object-cover transition duration-700 ease-[var(--ease)] group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full flex-col justify-end bg-[radial-gradient(circle_at_30%_20%,rgba(249,67,57,0.18),transparent_45%),linear-gradient(145deg,#f3ebe1,#e8ddd0)] p-6">
                    <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                      {story.title}
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
                      A visual still from this chapter - add a photo anytime to bring it to life.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
