# Design: turnkey-solutions-update

## Context

The site is built (20 pages, Astro static, Denim Dreams palette, template-inspired layout system). This change layers client-directed revisions on top without touching the design system.

## Goals / Non-Goals

**Goals:** turnkey lifecycle section, two new Solutions pages, service rename, FAQs and contact-form removal, Manufacturers industry, 420 mm capability figure, PDF refresh.
**Non-Goals:** no visual-system changes, no new dependencies, no URL change for `/wire-edm/`.

## Decisions

- **TurnkeyFlow as a shared component** (`src/components/TurnkeyFlow.astro`): a numbered seven-step sequence styled with the existing token system (accent numerals, hairline connectors, scroll-reveal). Props allow a heading override so Home and Reverse Engineering can frame it differently.
- **Solutions menu grows to six entries** (4 services + Reverse Engineering + Quality Assurance), each with a hand-built stroke icon consistent with the existing set. The grid stays 3 columns (now 2 rows).
- **Reverse Engineering / Quality Assurance pages** reuse the established page anatomy (kicker/hero → content sections → CtaBand) rather than the ServicePage component, since their content shape differs (flow story; equipment list).
- **Rename by find-and-replace with review**: "Wire EDM & wire cutting" → "EDM Wire Cutting Solution" in header, footer, home card, wire-edm page hero/title, industries cross-links, PDF. URL kept to preserve links/SEO.
- **Contact page without form**: details + hours + premises photo in a two-column layout; the "Get a quote" CTAs across the site continue to land here (phone/email are the conversion paths now).
- **Manufacturers industry** enters `src/data/industries.ts` (one entry drives menu, hub, page, sitemap) with food-lid-container tooling and packaging-line machining as examples.
- **QC equipment list** ships industry-typical (CMM, surface plate, height gauges, micrometers/bore gauges, profile projector, surface-roughness tester, hardness tester) and is flagged in CONTENT-TODO for the client to confirm against the real inspection room.
- **420 mm figure** replaces the 60+ HRC stat on the home strip only (dt "Maximum part size", animated count-up like its neighbours); service-page capability tables are untouched by this instruction.

## Risks / Trade-offs

- [420 mm and QC list are unconfirmed] → tracked in CONTENT-TODO for sign-off.
- [Removing the form removes the only structured lead path] → intentional per client; phone/email remain prominent everywhere.

## Migration Plan

Static rebuild; no data migration. PDF regenerated from the updated overview source.

## Open Questions

- Confirm 420 mm applies to which axis/process (assumed maximum part size).
- Confirm the QC equipment actually on the floor.
