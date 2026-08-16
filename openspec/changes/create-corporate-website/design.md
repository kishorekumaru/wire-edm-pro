# Design: create-corporate-website

## Context

Greenfield repository — no existing code. The deliverable is a 5-page corporate marketing site for Wire EDM Pro (Sydney precision machining, 25+ years; Wire EDM, wire/EDM cutting, CNC milling, CNC turning; B2B buyers in manufacturing, mining, medical). Hosting is an S3 bucket with **no server backend**, so everything must be static at runtime. The client supplied a palette ("Sapphire Veil": `#E7F0FA`, `#7BA4D0`, `#2E5E99`, `#0D2440`), competitor references (Xometry AU — capability-led with prominent quote CTAs; Dimac — partnership/reliability/experience messaging), and one hard feature requirement: an interactive 3D visualization of the Wire EDM process on the home page. No content exists; all copy must be authored. Design quality is to be reviewed with the `/hallmark` skill during implementation.

## Goals / Non-Goals

**Goals:**
- High-standard corporate industrial design that doesn't read as a template, built on the Sapphire Veil palette.
- Five static pages with authored B2B copy and consistent structure.
- A performant, mouse-interactive 3D Wire EDM scene on the home page with graceful fallback.
- Build output that deploys to S3 by `aws s3 sync` alone, with documented steps.

**Non-Goals:**
- No CMS, no server backend, no instant-quoting engine (Xometry-style quoting is out of scope).
- No actual S3 provisioning/deployment in this change — only a compatible build plus docs.
- No blog, careers, or additional pages beyond the five specified.
- No multi-language support or analytics integration (can be later changes).

## Decisions

### 1. Static site framework: Astro (with TypeScript)
- **Why**: Astro outputs one `index.html` per route (matches S3 index-document routing with zero rewrite rules), ships zero JS by default (fast marketing pages), and its component model gives shared header/footer/layout without duplicating HTML across five pages. Its island architecture is the cleanest way to hydrate exactly one interactive 3D component on exactly one page.
- **Alternatives**: Vite multi-page vanilla (workable but shared layout requires manual templating); Next.js static export (heavier runtime, React tax for pages that need no JS); plain hand-written HTML (five pages of duplicated header/footer, error-prone).

### 2. Hero visualization: procedural Three.js model of the client's sample part *(revised 2026-08-16 per client direction)*
- **What it is now**: a 3D model of the client's reference wire-EDM sample part (outer spline ring, gear ring, nine-spoke star core — three concentric profiles cut from one blank), built procedurally with `ExtrudeGeometry` from generated tooth/star profiles. No GLTF assets.
- **Interaction**: mouse movement over the hero rotates/tilts the part and telescopes the nested pieces "inside out" (innermost travels furthest); gentle idle rotation/breathing otherwise. Static exploded pose under `prefers-reduced-motion`; no interaction bound on touch-only devices.
- **Placement**: full-screen hero — the model sits right-of-centre over a full-width SVG canvas (XYZ axes, graph grid, DRO-style readout) with the headline overlaid left under a legibility scrim.
- **Performance**: dynamic `import()` so Three.js (137 KB gzip) loads only on the home page when the hero nears the viewport; DPR clamped to 2; render loop pauses off-screen/hidden-tab but always paints one initial frame; reference photo serves as the WebGL/loading fallback.
- **History**: the original proposal specified a generic 3D wire-cutting scene; the client then asked for a 2D isometric animation, then settled on this interactive model of their reference part. The `hero-visualization` spec captures the final form.

### 3. Styling: vanilla CSS with design tokens (no utility framework)
- **Why**: a bespoke corporate-industrial look benefits from hand-rolled CSS; tokens (`--color-sapphire-*`, spacing/type scales) in one `tokens.css` keep the palette single-sourced per the design-system spec. Avoids Tailwind's generic-look gravity and build-config surface for a 5-page site.
- **Fonts**: two self-hosted woff2 families (a confident industrial display face for headings, a clean grotesque for body) — no runtime Google Fonts dependency, works fully offline from S3.

### 4. Contact form: configurable third-party form endpoint with mailto fallback
- **Why**: no backend exists. The form POSTs to a static-form service endpoint (e.g., Formspree) supplied via a build-time env var; if unset, the form renders with a `mailto:` action so enquiries still work day one. Client-side validation before submit; on-page success state.
- **Alternatives**: Lambda/API Gateway (violates "no server backend"), mailto-only (poor UX as the primary path).

### 5. Page/content architecture
- Routes: `/` (home), `/wire-edm/`, `/milling/`, `/turning/`, `/contact/` — each a directory with `index.html` in the build.
- Shared `BaseLayout` (head/meta/OG per page, header, footer); shared section components (service card, industry card, CTA band, stat/credibility strip).
- Copy authored during implementation using competitor positioning: capability-led sections with clear enquiry CTAs (Xometry pattern) and experience/partnership trust messaging (Dimac pattern). All factual claims (address, phone, certifications) marked for client confirmation.

### 6. Deployment shape
- `npm run build` → `dist/` with per-page directories, hashed assets, sitemap, robots.txt.
- `DEPLOYMENT.md` documents S3 static website hosting: bucket website config, index/error documents, `aws s3 sync` with cache-control (long-lived for hashed assets, short for HTML).

## Risks / Trade-offs

- [3D scene janks on low-end hardware] → keep polycount trivial (primitives), clamp DPR, cap particle count, pause offscreen, 30fps floor verified during hallmark review; static fallback always available.
- [Astro major-version churn] → pin versions in lockfile; site has no exotic integrations so upgrades stay cheap.
- [Placeholder business facts (phone, address, exact tolerances) ship as real-looking content] → mark all unconfirmed facts in a `CONTENT-TODO.md` checklist for the client before go-live.
- [Xometry AU could not be crawled (403); competitor insight is partial] → used Dimac's fetched structure plus well-known Xometry positioning; low risk since it only informs tone/structure.
- [Form service dependency (spam, free-tier limits)] → endpoint is env-configurable and swappable; honeypot field included; mailto fallback guarantees a working path.

## Migration Plan

Greenfield — no migration. Rollout: build locally → verify all specs' scenarios → client review → `aws s3 sync` to bucket (documented, executed outside this change). Rollback = re-sync previous `dist/`.

## Open Questions

- Which form service (Formspree vs alternatives) and destination email — needed before go-live, not before implementation (mailto fallback covers the gap).
- Final confirmed business facts: street address, phone, email, business hours, any certifications (e.g., ISO 9001) the client can legitimately claim.
- Logo: does the client have one, or should a simple wordmark be designed as part of this change? (Default: typographic wordmark in Sapphire Veil.)
