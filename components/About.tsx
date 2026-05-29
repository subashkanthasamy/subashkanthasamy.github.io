import { about } from "@/lib/data";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{about.summary}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
            Core Expertise
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {about.expertise.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-border bg-surface/60 px-3 py-1.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
