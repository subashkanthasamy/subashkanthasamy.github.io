import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray parent-directory lockfile is ignored.
  turbopack: {
    root: import.meta.dirname,
  },

  // Static HTML export for GitHub Pages.
  output: "export",

  // Emit `/path/index.html` so GitHub Pages serves clean URLs.
  trailingSlash: true,

  // GitHub Pages has no Next.js image optimization server.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
