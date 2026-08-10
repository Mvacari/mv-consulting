import { site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="hero-gradient px-6 py-20 md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="section-label">Contact</span>
        <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
          Let’s build your next pipeline.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)] leading-relaxed">
          Founders: tell me where you are in GTM. Recruiters: happy to talk about new roles in BD, growth, and sales leadership.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={site.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill text-base"
          >
            Let&apos;s talk
            <span aria-hidden>→</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/20 px-5 py-3 text-sm font-semibold tracking-tight transition hover:border-black"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-black/20 px-5 py-3 text-sm font-semibold tracking-tight transition hover:border-black"
          >
            Email
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.brand}. {site.location}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${site.email}`} className="hover:text-[var(--text)]">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
