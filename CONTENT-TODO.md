# Content to confirm with the client before go-live

Every unchecked item below currently uses a placeholder or an industry-typical value.
Confirm or replace each one, then delete it from this list.
Items marked done were confirmed by the client, most recently via
`docs/WIRE EDM PRO-WEB CONTENT.pdf` (received 2026-08-23).

## Launch status
- [x] **Homepage went live** 2026-08-27: the coming-soon holding page was replaced by the
  full home page (former `/landing-v2/` design). `/landing/` and `/landing-v2/` no longer
  exist; the generated sitemap now lists `https://wireedmpro.com.au/` first.
- [ ] **After the next deploy**: delete the stale S3 objects for `/landing/` and
  `/landing-v2/`, then submit `https://wireedmpro.com.au/sitemap.xml` in Google Search
  Console (the home URL changed from noindex to indexable).

## Business facts
- [x] **Street address**: 16/24 Garling Rd, Kings Park NSW 2148 (live on contact page + footer).
- [x] **Phone number**: 0452 558 052 (live).
- [x] **Email address**: wireedmpro@gmail.com (live).
- [x] **Business hours**: client-confirmed 2026-08-25: Monday–Thursday 8:00 am – 4:30 pm, Friday 8:00 am – 12:00 pm. Updated in `src/pages/contact.astro` and in LocalBusiness structured data (`src/layouts/BaseLayout.astro`).
- [x] **Landline**: 02 8604 8347 added (contact, footer, coming-soon page, structured data) alongside the mobile, 2026-08-25.
- [x] **Domain**: apex `wireedmpro.com.au` chosen (matches the GA4 stream). `astro.config.mjs` site, `public/robots.txt` and the generated sitemap all aligned, 2026-08-25. The manual `public/sitemap.xml` was replaced by `scripts/gen-sitemap.mjs`, which writes `dist/sitemap.xml` on every build.
- [x] **Founding date**: "since the early 2000s" per client (2026-08-19); "25+ years" retained and confirmed by the content doc.

## Capability claims
- [x] **Cutting height 420 mm**: confirmed by the content doc as wire EDM cutting height (Makino with H.E.A.T function). Home stat strip relabelled, wire-edm spec table row added (2026-08-23).
- [x] **Machine models**: confirmed by the content doc: Makino wire EDM (H.E.A.T), Fanuc RoboCut C600 and C400, DMG MORI ecoMill 600 V, EDM drills Ø 0.3–3.0 mm, CNC lathes and laser cutting. Old photo-derived names (α-C600iA, α-0iD, U-series) replaced site-wide (2026-08-23).
- [x] **Milling work envelope**: 600 × 560 × 510 mm travel, 600 kg table, 12,000 rpm spindle per the content doc (2026-08-23).
- [x] **Tool changer stations**: client confirmed **32** (2026-08-28); site updated from 30.
- [x] Wire EDM positional tolerance: client confirmed **±0.003 mm** (2026-08-28); site updated from ±0.005 mm everywhere.
- [x] Surface roughness: client confirmed **2 µm** (2026-08-28); replaced the old "Surface finish Ra 0.4 µm" row and the home "25+ years" stat tile.
- [ ] Kerf width **≈0.25–0.33 mm** (wire-edm page). Unconfirmed.
- [ ] Milling/turning general tolerance **±0.01 mm** (milling + turning pages). Unconfirmed.
- [ ] **Laser cutting**: promoted on the turning page per the content doc, but no machine brand, power or maximum sheet size is claimed anywhere. Add capacity figures if the client wants them public.
- [ ] **EDM hole drilling Ø 0.3–3.0 mm**: figure comes from the content doc; confirm it belongs on the EDM Cutting page (currently listed there as a spec row and application).

## Missing assets / decisions
- [x] **Logo**: high-res client logo in use (header, footer, coming-soon).
- [x] ~~Form service~~. The enquiry form was removed at the client's direction (2026-08-17); contact is by phone/email.
- [x] **QC equipment list**: replaced with the client-confirmed list (optical profile projectors, digital micrometers, vernier calipers, height gauges, bore gauges; first-article + batch inspection) per the content doc (2026-08-23). Former industry-typical items (CMM, roughness tester, thread gauges, hardness tester) removed.
- [ ] **Mastercam**: the turnkey and reverse-engineering pages state design is done in Mastercam per client direction; confirm licence/wording.
- [ ] **Certifications** (ISO 9001 etc.). None claimed; add only if genuinely held.
- [x] **Photography**: client supplied real workshop photos (in `images/`, web-optimized copies in `public/images/`).
- [x] **Google Analytics measurement ID**: GA4 tag live on every page with G-LWG4BVB87J (stream "Landing Page", https://wireedmpro.com.au). Configured in `src/config.ts`; production builds only, never local dev.
- [x] **EDM Cutting Solution page** (/edm-cutting/): hole-drilling capability added from the content doc; remaining spark-erosion claims (hardness, tolerance, recast-layer skim passes) are process-typical. Confirm they match what the workshop offers.
- [ ] **About page purpose/values**: the slogan "Make Australian Manufacturing Great Again" and the Gandhi customer quote are published verbatim from the client content doc (2026-08-23). Flag to the client that they are now live, in case the wording was aspirational.
- [ ] **Press tool manufacturing / sheet metal**: the content doc presents these as headline services; currently covered by the Tooling & Diemaking and Sheet Metal Components industry pages rather than dedicated solution pages. Confirm that is sufficient.
