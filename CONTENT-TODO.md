# Content to confirm with the client before go-live

Every item below currently uses a placeholder or an industry-typical value.
Confirm or replace each one, then delete it from this list.

## Business facts (placeholders. Must be replaced)
- [ ] **Street address**: site currently says only "Sydney, New South Wales". Update `src/components/Footer.astro` and `src/pages/contact.astro`.
- [ ] **Phone number**: `+61 2 9000 0000` is a placeholder. Same two files.
- [ ] **Email address**: `enquiries@wireedmpro.com.au` is assumed. Footer, contact page (form fallback + error message).
- [ ] **Business hours**: "Monday–Friday, 7:00 am – 4:00 pm" is assumed. `src/pages/contact.astro`.
- [ ] **Domain**: `www.wireedmpro.com.au` is assumed in `astro.config.mjs` (site), `public/robots.txt`, `public/sitemap.xml`.
- [x] **Founding date**: updated to "since the early 2000s" per client (2026-08-19); "25+ years" retained.

## Capability claims (industry-typical. Confirm against actual machines)
- [ ] Wire EDM positional tolerance **±0.005 mm** (home stat strip + wire-edm page)
- [ ] Surface finish **Ra 0.4 µm** with skim passes (wire-edm page)
- [ ] Kerf width **≈0.25–0.33 mm** (wire-edm page)
- [ ] Milling/turning general tolerance **±0.01 mm** (milling + turning pages)
- [ ] Work envelopes / maximum part sizes. Deliberately not stated; add once machine list is confirmed
- [ ] Machine list / axis counts. Deliberately not stated; add if the client wants it public

## Missing assets / decisions
- [ ] **Logo**: a typographic wordmark is used; supply artwork if one exists.
- [x] ~~Form service~~. The enquiry form was removed at the client's direction (2026-08-17); contact is by phone/email.
- [ ] **Maximum part size 420 mm**: shown on the home facts strip per client direction (2026-08-17); confirm which process/axis this applies to.
- [ ] **QC equipment list**: the Quality Assurance page lists industry-typical instruments (CMM, comparator, roughness tester, height/thread gauges, hardness tester); confirm against the actual inspection room.
- [ ] **Mastercam**: the turnkey and reverse-engineering pages state design is done in Mastercam per client direction; confirm licence/wording.
- [ ] **Certifications** (ISO 9001 etc.). None claimed; add only if genuinely held.
- [ ] **Machine models**: copy lists Fanuc Robocut α-C600iA, Fanuc Robocut α-0iD, Makino U-series, DMG ecoMill 600 V as read from the workshop photos; confirm exact models/branding with the client.
- [x] **Photography**: client supplied real workshop photos (in `images/`, web-optimized copies in `public/images/`).
