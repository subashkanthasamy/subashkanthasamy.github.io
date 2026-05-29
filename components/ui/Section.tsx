import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  /** Small eyebrow label above the heading */
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Standard page section: anchored id, constrained width, and an animated
 * heading block. Keeps vertical rhythm consistent across the page.
 */
export default function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 md:py-28 ${className ?? ""}`}
    >
      <Reveal className="mb-12 md:mb-16">
        {eyebrow && (
          <p className="mb-3 font-mono text-sm tracking-widest text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-2" />
      </Reveal>
      {children}
    </section>
  );
}
