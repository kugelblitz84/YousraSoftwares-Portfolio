---
description: Run the full verification suite (this repo has no tests — lint + typecheck + build is it)
allowed-tools: Bash(npm:*), Bash(npx:*), Bash(curl:*)
---

There is no test framework in this project, so these three checks **are** the test suite.
Run all of them and report the actual output — do not declare success on a partial pass.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The build must stay fully prerendered: 15 static pages plus `robots.txt` and
`sitemap.xml`. If a route flips to dynamic (`ƒ` in the build output instead of `○`/`●`),
that is a regression — a missing `dynamicParams = false` or an accidental request-time
API. Investigate rather than accepting it.

If the change touched routing, redirects, nav, or metadata, also verify at runtime:

```bash
npx next start -p 3112 &
until curl -s -o /dev/null http://localhost:3112/; do sleep 0.4; done

# redirects resolve to the right place with the right code
for p in /blog-article /case-study /case-study/web /case-study/mobile /case-study/ui-ux /projects; do
  printf '%s -> ' "$p"
  curl -s -o /dev/null -D - "http://localhost:3112$p" | grep -i '^HTTP/\|^location' | tr '\n' ' '
  echo
done

# unknown slugs must 404, not render
for p in /blog/nope /projects/nope /case-study/web/nope; do
  printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:3112$p")" "$p"
done
```

Expected: `308` for the two slug-less article/case-study paths, `307` for the four index
paths, `404` for every unknown slug. Kill the server when done.
