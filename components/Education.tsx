import { GraduationCap } from "@/components/icons/Icons";
import { education, academics } from "@/lib/data";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import GlassCard from "./ui/GlassCard";

export default function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
        {education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.1}>
            <GlassCard interactive className="flex h-full gap-4 p-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/15">
                <GraduationCap className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                {edu.field && <p className="text-sm text-text">{edu.field}</p>}
                <p className="mt-1 text-accent">{edu.institution}</p>
                <p className="mt-1 font-mono text-xs text-muted">{edu.duration}</p>
                {edu.detail && (
                  <p className="mt-3 inline-block rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-accent-2">
                    {edu.detail}
                  </p>
                )}
              </div>
            </GlassCard>
          </Reveal>
        ))}

        <Reveal delay={0.15}>
          <GlassCard className="flex h-full flex-col justify-center gap-4 p-6">
            <h3 className="font-mono text-sm tracking-widest text-accent uppercase">
              Academic Record
            </h3>
            <ul className="space-y-4">
              {academics.map((a) => (
                <li key={a.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted">{a.label}</span>
                  <span className="text-lg font-semibold text-text">{a.value}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
