"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { Mail, Phone, Copy, Check } from "@/components/icons/Icons";
import { Github, Linkedin } from "@/components/icons/Brand";
import { profile } from "@/lib/data";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";

interface Channel {
  key: string;
  label: string;
  value: string;
  href: string;
  copyText?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
}

const channels: Channel[] = [
  {
    key: "email",
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
    copyText: profile.links.email,
    icon: Mail,
  },
  {
    key: "phone",
    label: "Phone",
    value: profile.links.phone,
    href: `tel:${profile.links.phone.replace(/\s+/g, "")}`,
    copyText: profile.links.phone,
    icon: Phone,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "in/subash-kanthasamy",
    href: profile.links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    key: "github",
    label: "GitHub",
    value: `@${profile.githubUsername}`,
    href: profile.links.github,
    icon: Github,
    external: true,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(key: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
    } catch {
      /* clipboard unavailable — link still works */
    }
  }

  return (
    <Section id="contact" eyebrow="Say Hello" title="Get In Touch">
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <p className="text-lg leading-relaxed text-muted">
          I&apos;m open to Android SDK, Kotlin, and mobile platform
          opportunities. Whether you have a role in mind or just want to
          connect, my inbox is always open — I&apos;ll get back to you.
        </p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {channels.map((c) => {
            const Icon = c.icon;
            const isCopied = copied === c.key;
            return (
              <li key={c.key}>
                <GlassCard interactive className="flex items-center gap-3 p-4">
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="flex min-w-0 flex-grow items-center gap-3"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{c.label}</span>
                      <span className="block truncate text-sm font-medium text-text">
                        {c.value}
                      </span>
                    </span>
                  </a>

                  {c.copyText && (
                    <button
                      type="button"
                      onClick={() => copy(c.key, c.copyText!)}
                      aria-label={`Copy ${c.label}`}
                      className="flex-shrink-0 rounded-lg p-2 text-muted transition hover:bg-surface hover:text-accent"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4 text-accent-2" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </GlassCard>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
