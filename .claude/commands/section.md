---
description: Add a new home-page section, including the registration steps scroll-spy depends on
argument-hint: <section-name> (e.g. testimonials)
---

Add a new home-page section: `$1`.

Read [src/app/_sections/about-section.tsx](src/app/_sections/about-section.tsx) and
[src/app/_sections/work-section.tsx](src/app/_sections/work-section.tsx) first — match
their structure rather than inventing one.

This takes **three coordinated edits**. Missing any of them leaves the section either
invisible or breaks nav highlighting.

1. **Create `src/app/_sections/$1-section.tsx`**

```tsx
export function $1Section() {          // PascalCase, named export — no default
  return (
    <section id="$1" className="section-pad shell">
      <p className="eyebrow">…</p>
      <KineticHeading lines={[{ text: "…" }, { text: "…", italic: true, gradient: true }]}
                      className="mt-3 h-bram-title text-4xl sm:text-5xl" />
      …
    </section>
  );
}
```

- Reuse the utilities in [globals.css](src/styles/globals.css): `shell`, `section-pad`,
  `eyebrow`, `card`, `tag`, `btn-primary`, `balance`, `h-bram-title`, `font-neue`.
- Wrap repeated items in `<Reveal>` with a staggered `delay` (see work-section).
- Keep it a **server component** — no `"use client"` unless it needs hooks or events.
- Every color needs a `dark:` counterpart; dark mode is class-based, not media-query.

2. **Render it in [src/app/page.tsx](src/app/page.tsx)** in the correct visual position.

3. **If it gets a nav entry, add it to `siteConfig.nav`** in
   [src/config/site.ts](src/config/site.ts):

```ts
{ label: "…", href: "/#$1", section: "$1" }
```

Three constraints here, all load-bearing:

- `section` must equal the `<section id="…">` value — scroll-spy does
  `document.getElementById(item.section)`.
- The array order must match the top-to-bottom order in `page.tsx`. `nav[0].section` is
  the default at page top and `nav.at(-1).section` is the override at page bottom.
- `href` must be the `/#anchor` form. Never point a nav item at a path that redirects to
  a fragment — fragments are stripped during client-side navigation.

Then verify with `/check`.
