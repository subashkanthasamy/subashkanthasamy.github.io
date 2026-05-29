import { FolderGit2, Check, ExternalLink } from "@/components/icons/Icons";
import { projects } from "@/lib/data";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import GlassCard from "./ui/GlassCard";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const card = (
            <GlassCard interactive className="flex h-full flex-col p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                  <FolderGit2 className="h-5 w-5 text-accent" aria-hidden />
                </div>
                {p.url && (
                  <ExternalLink
                    className="h-4 w-4 text-muted transition-colors group-hover:text-accent"
                    aria-hidden
                  />
                )}
              </div>

              <h3 className="text-lg font-semibold group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted">
                    <Check className="h-4 w-4 flex-shrink-0 text-accent-2" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          );

          return (
            <Reveal key={p.title}>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  {card}
                </a>
              ) : (
                <div className="group h-full">{card}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
