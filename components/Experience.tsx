import { Briefcase } from "@/components/icons/Icons";
import { experience } from "@/lib/data";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import GlassCard from "./ui/GlassCard";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-accent via-border to-transparent md:left-4" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative pl-10 md:pl-14">
              {/* Node */}
              <span className="absolute top-6 left-0 flex h-7 w-7 items-center justify-center rounded-full border border-accent/50 bg-surface md:left-1">
                <Briefcase className="h-3.5 w-3.5 text-accent" aria-hidden />
              </span>

              <GlassCard interactive className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-accent">{job.company}</p>
                  </div>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted">
                    {job.duration}
                    {job.current && (
                      <span className="rounded-full bg-accent-2/15 px-2 py-0.5 text-accent-2">
                        Current
                      </span>
                    )}
                  </span>
                </div>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>

                {job.tech && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
