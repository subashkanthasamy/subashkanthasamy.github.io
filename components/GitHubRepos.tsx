"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, ExternalLink, AlertCircle } from "@/components/icons/Icons";
import { Github } from "@/components/icons/Brand";
import { profile } from "@/lib/data";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

type State =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; repos: Repo[] };

const LANG_COLORS: Record<string, string> = {
  Kotlin: "#A97BFF",
  Java: "#B07219",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  Dart: "#00B4AB",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Shell: "#89E051",
};

export default function GitHubRepos() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=100`,
          { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } },
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data: Repo[] = await res.json();
        const repos = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setState({ status: "ready", repos });
      } catch (err) {
        if ((err as Error).name !== "AbortError") setState({ status: "error" });
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return (
    <Section id="github" eyebrow="Open Source" title="Latest on GitHub">
      {state.status === "loading" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="glass h-40 animate-pulse rounded-2xl"
              aria-hidden
            />
          ))}
          <span className="sr-only">Loading repositories…</span>
        </div>
      )}

      {state.status === "error" && (
        <GlassCard className="flex flex-col items-center gap-3 p-10 text-center">
          <AlertCircle className="h-8 w-8 text-accent" aria-hidden />
          <p className="text-muted">
            Couldn&apos;t load repositories right now (the GitHub API may be rate
            limited).
          </p>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <Github className="h-4 w-4" /> View on GitHub
          </a>
        </GlassCard>
      )}

      {state.status === "ready" && (
        <>
          {state.repos.length === 0 ? (
            <p className="text-muted">No public repositories to show yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {state.repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <GlassCard interactive className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold break-words text-text group-hover:text-accent">
                        {repo.name}
                      </h3>
                      <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted transition-colors group-hover:text-accent" />
                    </div>

                    <p className="mt-2 flex-grow text-sm leading-relaxed text-muted">
                      {repo.description ?? "No description provided."}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                LANG_COLORS[repo.language] ?? "#8b949e",
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                      </span>
                    </div>
                  </GlassCard>
                </a>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" /> View all repositories
            </a>
          </div>
        </>
      )}
    </Section>
  );
}
