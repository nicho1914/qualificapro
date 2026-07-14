# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Qualifica Pro** landing page — a training platform for Brazilian construction professionals. The repo contains two implementations of the same landing page:

- **`page.html`** — A standalone, zero-dependency HTML/CSS page ("Sobre Nós"). Open directly in a browser. No build step.
- **`qualifica-clean/`** — The production React version, built with Vite + Tailwind CSS v4. This is the canonical implementation deployed to Vercel.

The `react-app/` folder is an incomplete skeleton (Vite config only, no source) and can be ignored.

## qualifica-clean — Commands

All commands run from inside `qualifica-clean/`:

```bash
npm run dev       # start dev server with HMR
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Architecture (qualifica-clean)

**Stack:** React 19, React Router DOM v7, Tailwind CSS v4, Vite 8, ESLint 10.

**Routing** (`src/App.jsx`):
- `/` → `LandingPage` (all section components stacked in order)
- `/privacidade` → `PrivacyPolicy`
- `/termos` → `Terms`
- `/cookies` → `CookiePolicy`

**Section components** (`src/components/`): `Nav`, `Hero`, `Intro`, `Experience`, `Belief`, `Courses`, `Partners`, `Platform`, `Footer`, `PlayDot`. Each maps 1:1 to a section of the original `page.html`.

**Styling conventions:**
- Tailwind utility classes are the primary styling mechanism.
- CSS-only patterns that can't be expressed with utilities (pseudo-elements with `content`, `::before`/`::after` overlays, triangle tricks, marquee animation) live in `src/index.css` as `@layer components` classes: `hero-bg`, `intro-card-bg`, `card-overlay`, `video-tint`, `play-triangle-sm`, `play-triangle-lg`, `no-scrollbar`, `partners-marquee`.
- Custom design tokens in `tailwind.config.js`: `yellow` (#ffcc29), `ink` (#242424), `muted` (#939393), `brand-white`, `brand-gray`, font `sora`, max-width `content` (1280px), border `15`.

**Assets:** All media (SVGs, videos, images) live in `public/` and are referenced with root-relative paths (e.g. `/logo.svg`). The `assets/` folder at the repo root mirrors these files and is used by `page.html`.

**Deployment:** Vercel. `vercel.json` defines a redirect: `/cadastro` → `https://plataforma.qualificapro.com.br/browse?login=true`.

## page.html

Self-contained single file with all CSS inlined in `<style>`. Uses CSS custom properties (`--yellow`, `--ink`, `--muted`, `--white`, `--gray`, `--max`, `--gutter`) and references assets via relative `assets/` paths. Three responsive breakpoints: `≤640px` (mobile), `≤1100px` (tablet), default (desktop). No JavaScript.
