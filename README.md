# YusraSoftwares Portfolio

Marketing site and project portfolio for YusraSoftwares — a single-page home with
deep-linked project categories, case studies, and an insights blog.

Built with **Next.js 16.3** (App Router, Turbopack), **React 19.2**, **TypeScript 5**
(strict), and **Tailwind CSS v4**. Motion via `framer-motion` and `lenis` smooth scroll.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build — prerenders 15 pages plus `robots.txt` and `sitemap.xml` |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |

Copy `.env.example` to `.env.local`. The only variable is `NEXT_PUBLIC_SITE_URL`,
the public origin without a trailing slash. It feeds `metadataBase`, `sitemap.xml`,
and `robots.txt` — **it must be set in production**, or those will advertise
`http://localhost:3000` to crawlers.

## Folder structure

```
YousraSoftwares-Portfolio/
├── AGENTS.md                       # Coding-agent instructions (rewritten by `next dev`)
├── CLAUDE.md                       # Re-exports AGENTS.md
├── next.config.ts                  # Redirects for legacy URLs (see Routes below)
├── postcss.config.mjs              # Tailwind v4 via @tailwindcss/postcss
├── tsconfig.json                   # Path alias: @/* → src/*
├── .env.example
│
├── public/assets/
│   ├── category_thumbnails/        # 3 cards for the home "Our work" grid
│   ├── icons/                      # favicon.svg
│   ├── logos/                      # wordmark + Open Graph thumbnail
│   └── projects/
│       ├── mobile/kickscore/       # 4 screens
│       ├── mobile/landguru/        # 4 screens
│       ├── web/fastgo_travel/      # 4 screens
│       └── project-placeholder.svg # stands in for unpublished UI/UX work
│
└── src/
    ├── app/                        # App Router: routes + route-local UI only
    │   ├── layout.tsx              # Root layout — metadata and ALL site chrome
    │   ├── page.tsx                # Home — composes _sections/
    │   ├── error.tsx               # Error boundary (Next 16 `retry` prop)
    │   ├── not-found.tsx           # 404
    │   ├── robots.ts               # → /robots.txt
    │   ├── sitemap.ts              # → /sitemap.xml, derived from data/
    │   │
    │   ├── _sections/              # 9 home-page sections (hero, services, work, …)
    │   ├── blog/
    │   │   ├── page.tsx            #   /blog
    │   │   ├── [slug]/page.tsx     #   /blog/[slug]
    │   │   └── _components/        #   blog-index, blog-article
    │   ├── case-study/
    │   │   ├── web/[slug]/page.tsx
    │   │   ├── mobile/[slug]/page.tsx
    │   │   ├── ui-ux/[slug]/page.tsx
    │   │   └── _components/        #   one template per discipline
    │   └── projects/
    │       ├── [category]/page.tsx #   /projects/{web,mobile,ui-ux}
    │       └── _components/        #   project-list, project-gallery
    │
    ├── components/                 # Reused across more than one route
    │   ├── layout/                 # site-header, site-footer
    │   └── motion/                 # reveal, kinetic-heading, cursor-follower,
    │                               # smooth-scroll, split-text-reveal, text-hover-roll
    ├── config/site.ts              # Nav model, description, canonical URL
    ├── data/                       # All content, as typed modules
    │   ├── project-data.ts         #   collections + UI/UX placeholders
    │   ├── web-project-data.ts
    │   ├── mobile-project-data.ts
    │   └── blog-data.ts
    ├── styles/globals.css          # Tailwind theme, @font-face, shared utilities
    └── types/                      # ProjectCategory + one module shim
```

## Conventions

**`_`-prefixed folders are private.** `_sections/` and `_components/` are excluded
from routing by Next, so route-local UI is colocated with the route that uses it
instead of living in a distant shared folder. A component only graduates to
`src/components/` once a second route needs it.

**`src/app/` holds routes; `src/data/` holds content.** Page files stay thin — they
resolve params, look up a record, call `notFound()` on a miss, and hand the record
to a template. Copy, image paths, and case-study bodies live in `data/`.

**Every dynamic route is fully static.** Each uses `generateStaticParams` with
`export const dynamicParams = false`, so unknown slugs 404 instead of rendering.

**Chrome lives in the root layout.** `SiteHeader`, `SiteFooter`, `SmoothScroll`,
and `CursorFollower` are mounted once in `layout.tsx` — never per page, so they
survive navigation without remounting.

**Fonts are remote.** Plus Jakarta Sans, Space Grotesk, and DM Sans come from a
Google Fonts `@import`; Neue Montreal is `@font-face`-loaded from a CDN. There is
no `next/font` usage.

## Routes

| Path | Source |
| --- | --- |
| `/` | `app/page.tsx` (sections deep-linked as `/#hero`, `/#services`, `/#work`, `/#about`, `/#contact`) |
| `/projects/{web,mobile,ui-ux}` | `app/projects/[category]/page.tsx` |
| `/case-study/web/[slug]` | 1 project |
| `/case-study/mobile/[slug]` | 2 projects |
| `/case-study/ui-ux/[slug]` | 3 placeholders |
| `/blog`, `/blog/[slug]` | 3 posts |
| `/robots.txt`, `/sitemap.xml` | generated |

Legacy paths are redirected in `next.config.ts` rather than kept as stub pages:

| From | To | |
| --- | --- | --- |
| `/blog-article` | `/blog/building-software-that-is-ready-to-evolve` | 308 |
| `/case-study/web` | `/case-study/web/fastgo-travel` | 308 |
| `/case-study` | `/projects/web` | 307 |
| `/case-study/{mobile,ui-ux}` | `/projects/{mobile,ui-ux}` | 307 |
| `/projects` | `/#work` | 307 |

> Anchor destinations only survive a full page load — a browser applies the
> fragment itself, but `fetch()` strips it during client-side routing. Link to
> `/#work` directly from within the app; never route to it through a redirect.

## Known gaps

- The three UI/UX case studies and two of three blog posts are
  `[BRACKETED PLACEHOLDER]` copy. They render and are listed in `sitemap.xml`.
- `_sections/team-section.tsx` and `_sections/insights-section.tsx` exist but are
  commented out in `page.tsx`, pending real names/photos and published articles.
- `public/assets/projects/{AgroAlly,kirk,rizq,tootsy}.png` are committed but not
  referenced anywhere in `src/`.
- `siteConfig.name` has no consumers — the wordmark is inline JSX in the header
  and footer because it is split for styling.
