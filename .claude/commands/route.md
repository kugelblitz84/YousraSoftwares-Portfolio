---
description: Scaffold a new statically-generated route following this repo's page pattern
argument-hint: <route-path> (e.g. /services/[slug])
---

Create a new route at `$1`.

Every dynamic route in this repo is fully static. Follow the exact shape used by
[src/app/blog/[slug]/page.tsx](src/app/blog/[slug]/page.tsx) and
[src/app/projects/[category]/page.tsx](src/app/projects/[category]/page.tsx) — read one first.

Required structure:

1. **Content lives in `src/data/`**, not in the page. If the route needs records that
   don't exist yet, add a typed module there with a `getX(slug)` lookup helper and a
   `readonly` array export. Match the existing style in [src/data/](src/data/).

2. **The page file stays thin** — four exports, in this order:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { items, getItem } from "@/data/…";
import { Template } from "../_components/…";

export const dynamicParams = false;

export function generateStaticParams() {
  return items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"$1">): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function Page({ params }: PageProps<"$1">) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();
  return <Template item={item} />;
}
```

Notes that are easy to get wrong:

- `params` is a **Promise** — always `await` it.
- `PageProps<"…">` is a global type. Do not import it, and pass the **literal** route
  string so the param keys are checked.
- `dynamicParams = false` is required — unknown slugs must 404, not render.
- Route-local UI goes in a sibling `_components/` folder and is imported **relatively**.
  Only cross-route imports use the `@/` alias.

3. **Add the route to [src/app/sitemap.ts](src/app/sitemap.ts)** — derive the URLs from
   the data module so it can't drift.

4. Verify with `/check`.
