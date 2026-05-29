import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Adds a hover lift + accent border glow */
  interactive?: boolean;
}

/**
 * Glassmorphism container: translucent surface, blur, soft border.
 */
export default function GlassCard({
  children,
  className,
  interactive = false,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl ${
        interactive
          ? "transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.45)]"
          : ""
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
