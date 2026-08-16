# Proposal: create-corporate-website

## Why

Wire EDM Pro — a Sydney-based precision machining company with 25+ years of experience (Wire EDM, wire cutting, EDM cutting, CNC milling, CNC turning) — has no web presence, while competitors such as Xometry AU (instant-quote, capability-led marketplace) and Dimac (partnership-driven CNC solutions site) capture B2B buyers in manufacturing, mining, and medical. A high-standard corporate industrial website is needed to establish credibility and generate qualified B2B leads.

## What Changes

- Build a brand-new static marketing website from scratch (grown from 5 to 7 pages on 2026-08-16, following the client's Dimac-reference direction):
  1. Home page — with an interactive 3D model of a wire-EDM sample part (mouse-driven)
  2. Wire EDM / Wire Cutting services page
  3. Milling Solutions page
  4. Turning Solutions page
  5. About Us page (added — Dimac-style purpose/values/machinery page)
  6. FAQs page (added — conversational accordion)
  7. Contact Us page
- Two-tier navigation modeled on dimac.com.au: utility bar (hours, phone) above a main bar with a Solutions dropdown, About/FAQs links and a contact CTA.
- Industries section modeled on xometry.au's "Solutions For Every Industry" (added later on 2026-08-16): a full-width icon mega-menu, an `/industries/` hub, and ten industry sub-pages (list adapted for a wire-EDM workshop — Tooling & Diemaking added; Agriculture, Consumer Goods, Education dropped).
- Apply the "Sapphire Veil" brand palette throughout: `#E7F0FA`, `#7BA4D0`, `#2E5E99`, `#0D2440` — corporate, high-standard industrial design direction (design quality reviewed with the `/hallmark` skill during implementation).
- Author all page copy/content (client has none) — positioned for B2B buyers in manufacturing, mining, and medical, informed by competitor positioning (Xometry: capability-led with prominent quote CTAs; Dimac: partnership, reliability, decades-of-experience messaging).
- Produce a fully static build deployable to an S3 bucket — **no server backend**; contact handled with static-friendly mechanisms.

## Capabilities

### New Capabilities
- `design-system`: Shared visual foundation — Sapphire Veil palette tokens, typography, spacing, responsive layout, shared header/navigation and footer across all five pages.
- `home-page`: Home page structure and content — hero, services overview, industries served (manufacturing, mining, medical), credibility/experience section, CTAs.
- `hero-visualization`: Animated isometric ("2D-based 3D") technical graphic of the wire EDM process as a full-width home hero background — XYZ axis grid, travelling wire, spark effect. *(Replaced the original interactive Three.js requirement at the client's direction on 2026-08-16.)*
- `service-pages`: The three service pages (Wire EDM/Wire Cutting, Milling Solutions, Turning Solutions) — consistent structure covering capabilities, tolerances/materials, industries, and enquiry CTAs.
- `contact-page`: Contact Us page — company details (Sydney), enquiry form that works without a server backend, map/location, business info.
- `static-deployment`: Build output that is fully static and S3-compatible (relative-safe routing, asset hashing, deploy documentation).

### Modified Capabilities
<!-- none — greenfield project, no existing specs -->

## Impact

- New codebase in this repository (currently empty apart from OpenSpec scaffolding) — new build tooling, source tree, and static assets.
- New third-party dependencies: a 3D rendering library (Three.js or equivalent) and a static site build tool; a form-backend service (e.g., Formspree-style) or mailto fallback for the contact form since no server exists.
- Hosting: S3 static website hosting (deployment itself is out of scope beyond producing a compatible build and deploy instructions).
- No existing APIs, systems, or users affected.
