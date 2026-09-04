# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

`wire-edm-pro` is the corporate marketing website for Wire EDM Pro, a Sydney
precision machining business (wire EDM, EDM hole drilling, CNC milling, CNC
turning, laser cutting). It is a **static Astro 5 site** built to plain HTML and
deployed to an S3 bucket. There is no server, no database, no API, no auth, and
no form backend: the contact path is phone and email only (the enquiry form was
removed at the client's direction).

Live site: `https://wireedmpro.com.au`

## Commands

| Task | Command |
| --- | --- |
| Dev server | `npm run dev` (http://localhost:4321) |
| Build | `npm run build` (runs `astro build`, then `scripts/gen-sitemap.mjs`) |
| Preview a build | `npm run preview` |
| Typecheck | `npx astro check` |

There is **no test runner and no lint script**. `npm run build` is the gate: it
must pass before committing. Do not add Vitest, Playwright, or a linter unless
asked.

## Stack

- Astro 5, `output: 'static'`, `build.format: 'directory'` so every route
  emits `<route>/index.html` (S3 index-document hosting needs this).
- TypeScript, `astro/tsconfigs/strict`.
- Plain CSS with custom properties. **No Tailwind, no CSS framework, no UI kit.**
- Three.js (dynamic import only) for the hero's 3D sample part.
- Self-hosted variable fonts in `public/fonts/`. No third-party runtime requests.

## Layout

```
src/
  config.ts                 GA4 measurement ID (only site-wide config)
  layouts/BaseLayout.astro  head, SEO meta, LocalBusiness JSON-LD, header/footer, reveal observer
  components/               Header, Footer, CtaBand, ServicePage, TurnkeyFlow,
                            HeroGraphicLight, GoogleAnalytics, ConsentBanner
  data/industries.ts        single source for every industry page and both nav menus
  pages/                    one .astro per route; industries/[slug].astro is the only dynamic route
  scripts/samplePart3d.ts   procedural Three.js sample part, lazy-loaded
  styles/tokens.css         design tokens (colour, type, spacing, motion, z)
  styles/global.css         @font-face, resets, .container/.btn/.section/.photo, reveal animations
scripts/gen-sitemap.mjs     post-build: walks dist/, skips noindex pages, writes sitemap.xml
public/                     images, fonts, robots.txt, llms.txt, favicons
```

## Conventions

**Styling.** Every value comes from a token in `tokens.css`; do not hardcode
colours, spacing, or durations. Shared primitives (`.container`, `.btn`,
`.btn--fill`, `.btn--outline`, `.section`, `.section--panel`, `.section-head`,
`.photo`, `.mono`, `.muted`) live in `global.css`. Everything page-specific goes
in that file's scoped `<style>` block with a BEM-ish prefix (`.svc-hero__kicker`,
`.proc__img`). No inline `style` attributes except CSS-variable overrides such as
`style="--reveal-i: 1"`.

**Images.** Four files per photo, all in `public/images/`: `name.jpg`,
`name.webp`, `name-800.jpg`, `name-800.webp`. Markup is a `<picture>` with a
webp `<source>`, explicit `width`/`height`, and `srcset`/`sizes` at 800w/1600w.
Above-the-fold heroes use `fetchpriority="high"`; everything else
`loading="lazy"`. `ServicePage.astro` derives all four paths from one extension-less
`heroImage` prop.

**Service pages.** `/milling/`, `/turning/`, `/edm-drills/` and
`/edm-wire-cutting/` are thin files that pass `specs` and `applications` arrays
into `ServicePage.astro`, which owns the layout and the `Service` JSON-LD. Add a
new service the same way rather than writing a fresh page. Pages with a bespoke
layout (`about`, `index`, `quality-assurance`, `reverse-engineering`,
`industries/*`) use `BaseLayout` directly.

**Industries.** Add or edit entries in `src/data/industries.ts` only. The
detail pages, the index page, the desktop mega menu and the mobile sheet all
render from that array.

**SEO.** `BaseLayout` handles title, description, canonical, Open Graph, Twitter
card and the `LocalBusiness` schema. Pass extra structured data through the
`jsonLd` prop. Trailing slashes on internal links are required
(`/milling/`, not `/milling`). Adding a route means updating `public/llms.txt`;
the sitemap regenerates itself at build time.

**Client JS.** Small inline `<script>` blocks in the component that needs them,
never a global bundle. Every one must respect
`prefers-reduced-motion: reduce` and degrade cleanly when an API is missing.
Three.js is imported dynamically, only on wide screens, only after real user
intent or a timed fallback, so it stays out of the critical path. Keep it that
way; the performance comments in `HeroGraphicLight.astro` and `index.astro`
record the reasons behind non-obvious choices.

**Analytics.** GA4 with Consent Mode v2, defaulting to denied. `gtag.js` only
downloads after the visitor accepts in `ConsentBanner`, and never in dev
(`import.meta.env.PROD` gate). Do not add analytics, pixels, or fonts that
introduce new third-party requests.

**Copy.** Australian English (`lang="en-AU"`), metric units, no em dashes.
Machine models, tolerances and capacities are client-confirmed facts, not
decoration: never invent or adjust a spec figure. Unconfirmed claims are tracked
in `CONTENT-TODO.md`; check there before changing a number and update the entry
when the client confirms one.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: build, then four
`aws s3` passes to the production bucket with different `Cache-Control` values
(immutable for `_assets/`, 30 days for images and fonts, `must-revalidate` for
HTML, one day for the rest). A merge to `main` is a production deploy, so treat
it accordingly.

`DEPLOYMENT.md` documents the manual S3 path but is stale: it references a
`PUBLIC_FORM_ENDPOINT` variable and a `/wire-edm/` route that no longer exist.

## Notes

- `openspec/changes/` holds the historical spec-driven proposals for the initial
  build and the turnkey update. Useful as background, not as current truth.
- A `CLAUDE.md` and `blueprint/` tree in the parent directory
  (`~/works/personal/`) get auto-loaded into context. That is an unrelated
  template: its Next.js, Prisma, Tailwind and Clerk conventions do not apply
  here. This file takes precedence for anything inside `wire-edm-pro`.
