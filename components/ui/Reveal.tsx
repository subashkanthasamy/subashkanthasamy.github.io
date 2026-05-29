import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Kept for API compatibility; no longer used. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}

/**
 * Renders its children inside the chosen tag. Previously animated on scroll,
 * but the IntersectionObserver-driven hide-until-visible behavior caused
 * content to stay invisible if hydration was slow, so animations were
 * removed in favor of guaranteed visibility.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
}: RevealProps) {
  return <Tag className={className}>{children}</Tag>;
}
