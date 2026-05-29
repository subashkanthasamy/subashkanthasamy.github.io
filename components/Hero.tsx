import { Mail, ArrowDown } from "@/components/icons/Icons";
import { Github, Linkedin } from "@/components/icons/Brand";
import { profile, heroHighlights } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-24 pb-16 sm:px-8"
    >
      <div>
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          Hi, my name is
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-muted sm:text-3xl md:text-4xl">
          <span className="text-gradient">{profile.role}</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {heroHighlights.map((h) => (
            <li
              key={h}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-text"
            >
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90 hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.7)]"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-text transition hover:border-accent-2 hover:text-accent-2"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="mt-16 inline-flex w-fit items-center gap-2 text-sm text-muted"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" /> Scroll
      </a>
    </section>
  );
}
