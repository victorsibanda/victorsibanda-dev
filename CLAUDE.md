# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website deployed as a Cloudflare Worker. It's a zero-build React SPA — React 18 and Babel are loaded from CDN and JSX is compiled at runtime in the browser. There is no bundler, no npm, and no build step.

## Development

```bash
npm install            # First-time setup (devDependencies only — runtime stays CDN-based)
npm run format         # Format all JS/JSX with Prettier
npm run format:check   # Dry-run format check (use in CI)
npm test               # Run all unit tests once
npm run test:watch     # Run tests in watch mode
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
| `index.html` | Loads React + Babel from CDN, imports all `.jsx` components via `<script type="text/babel">`, mounts the app. |
| `data.js` | Single source of truth for all portfolio content: bio, certifications, projects, experience, interests. Edit here to update site content. |
| `styles.css` | All styling. Uses CSS custom properties `--play` and `--theme` for dark/light theming. Theme state is persisted to `localStorage`. |
| `components/` | Six React components (Nav, Hero, About, Sections, Icons, Tweaks). Sections.jsx renders certifications, projects, experience, interests, and contact sections. |
| `_headers` | Cloudflare-interpreted HTTP headers: security headers + cache-control (assets 1yr immutable, CSS/JS 24h). |

## Key Behaviours

- **IP allowlist**: `worker.js` reads `env.MY_IP` (a Cloudflare secret). If the secret is set, only that IP is allowed. Unset = open access. Set with `wrangler secret put MY_IP`.
- **Credly badge proxy**: `GET /api/badges` in `worker.js` fetches from the Credly API server-side to avoid CORS issues. The Credly username is hardcoded in that handler.
- **No JSX compilation offline**: Components use standard JSX syntax but rely on the browser's Babel standalone for compilation. Vitest handles JSX via `@vitejs/plugin-react` for tests only.
- **Global pattern**: Components export to both `window.ComponentName` (browser) and as ES module exports (tests). The `Icon` component must be registered as `global.Icon` in `tests/setup.js` since other components reference it as a bare global.
