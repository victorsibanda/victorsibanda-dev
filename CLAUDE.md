# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website deployed as a Cloudflare Worker. It's a React SPA built with Vite. Source lives in `src/`, Vite bundles it to `dist/`, and the Cloudflare Worker serves the compiled output from `dist/` via the `ASSETS` binding.

## Development

```bash
bun install            # First-time setup
bun run build          # Vite build → outputs to dist/
bun run format         # Format all JS/JSX with Prettier
bun run format:check   # Dry-run format check (use in CI)
bun run test           # Run all unit tests once
bun run test:watch     # Run tests in watch mode
```

```bash
wrangler deploy        # Deploy to Cloudflare Workers
wrangler dev           # Local dev server
wrangler secret put MY_IP  # Set IP allowlist secret (unset = open access)
```

## Architecture

| File/Dir | Role |
|---|---|
| `worker.js` | Cloudflare Worker entry point. Proxies `/api/badges` to Credly (CORS bypass, 3600s cache), enforces an IP allowlist, and falls through to static asset serving via the `ASSETS` binding. |
| `index.html` | HTML entry point. Mounts the React app via `<script type="module" src="/src/main.jsx">`. |
| `src/data.js` | Single source of truth for all portfolio content: bio, certifications, projects, experience, interests. Edit here to update site content. |
| `src/styles.css` | All styling. Uses CSS custom properties `--play` and `--theme` for dark/light theming. Theme state is persisted to `localStorage`. |
| `src/components/` | Six React components (Nav, Hero, About, Sections, Icons, Tweaks). Sections.jsx renders certifications, projects, experience, interests, and contact sections. |
| `_headers` | Cloudflare-interpreted HTTP headers: security headers + cache-control (assets 1yr immutable, CSS/JS 24h). |

## Key Behaviours

- **IP allowlist**: `worker.js` reads `env.MY_IP` (a Cloudflare secret). If the secret is set, only that IP is allowed. Unset = open access. Set with `wrangler secret put MY_IP`.
- **Credly badge proxy**: `GET /api/badges` in `worker.js` fetches from the Credly API server-side to avoid CORS issues. The Credly username is hardcoded in that handler.
