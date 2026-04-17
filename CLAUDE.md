# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website deployed as a Cloudflare Worker. It's a zero-build React SPA — React 18 and Babel are loaded from CDN and JSX is compiled at runtime in the browser. There is no bundler, no npm, and no build step.

## Deployment

```bash
wrangler deploy        # Deploy to Cloudflare Workers
wrangler dev           # Local dev server
```

No lint, test, or build commands exist — this is intentional.

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

- **IP allowlist**: `worker.js` restricts access to a hardcoded list of CIDR blocks. Update the `ALLOWED_IPS` constant there to change access control.
- **Credly badge proxy**: `GET /api/badges` in `worker.js` fetches from the Credly API server-side to avoid CORS issues. The Credly username is hardcoded in that handler.
- **No JSX compilation offline**: Components use standard JSX syntax but rely on the browser's Babel standalone for compilation — do not try to run or lint them as plain JS.
