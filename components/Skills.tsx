import { Code2 } from "@/components/icons/Icons";
import { skills } from "@/lib/data";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <Reveal as="li" key={skill} delay={i * 0.05}>
            <span className="glass group flex h-full items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Code2 className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-sm font-medium">{skill}</span>
            </span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
