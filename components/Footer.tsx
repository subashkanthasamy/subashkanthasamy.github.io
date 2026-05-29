import { Mail, Heart } from "@/components/icons/Icons";
import { Github, Linkedin } from "@/components/icons/Brand";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-muted">
          Built with
          <span className="font-medium text-text">Next.js</span>+
          <span className="font-medium text-text">Tailwind CSS</span>
          <Heart className="h-3.5 w-3.5 text-accent-2" aria-hidden />
        </p>
      </div>
    </footer>
  );
}
