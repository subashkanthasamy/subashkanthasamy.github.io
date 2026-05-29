# Subash K — Developer Portfolio

A premium, dark-themed portfolio for **Subash K**, Android SDK Developer.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Motion.

🔗 Live: https://subashkanthasamy.github.io

## Features

- Single-page scroll site: Hero, About, Experience, Projects, Skills, Education, GitHub, Contact
- Glassmorphism cards, gradient accents, dark futuristic aesthetic
- Scroll-reveal + hover animations via [Motion](https://motion.dev) (respects `prefers-reduced-motion`)
- Live GitHub repositories fetched from the GitHub API at runtime
- Copy-to-clipboard contact details
- SEO optimized (OpenGraph, Twitter, JSON-LD Person schema)
- Static export — deployed to GitHub Pages

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs static site to ./out
```

## Edit content

All portfolio content (profile, experience, projects, skills, education) is centralized in
[`lib/data.ts`](lib/data.ts) — edit there and the UI updates.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and
publishes it to GitHub Pages. In the repo settings, set **Settings → Pages → Source** to
**GitHub Actions**.

---

Built with Next.js + Tailwind CSS.
