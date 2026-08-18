# Proposal: turnkey-solutions-update

## Why

Client review of the built site produced a batch of positioning changes: the business wants to present itself as a turnkey partner (idea to delivered part), surface two service capabilities that win work (reverse engineering, quality assurance), simplify pages that don't earn their keep (FAQs, the enquiry form), and correct the headline capability figure (maximum part size 420 mm).

## What Changes

- **Home page**: add a "Turnkey Solution" lifecycle section showing the end-to-end flow: customer proposal/idea (a verbal flow is enough) → design in Mastercam → design approval → material procurement → manufacturing/processing → QC → delivery, all positioned on quick turnaround.
- **Home page stats**: replace the "Cuts hardened steel to 60+ HRC" fact with maximum processing size "420 mm".
- **Rename** the "Wire EDM & Wire Cutting" service to **"EDM Wire Cutting Solution"** everywhere (menu, cards, page, footer, links). URL stays `/wire-edm/`.
- **New page — Reverse Engineering** (`/reverse-engineering/`), listed under the Solutions menu: customer brings a sample → we measure dimensions → create the design → the turnkey lifecycle takes it to a delivered part.
- **New page — Quality Assurance** (`/quality-assurance/`), listed under the Solutions menu: the QC equipment list and what gets checked.
- **Remove the FAQs page** (menu, footer, sitemap, PDF).
- **Remove the enquiry form** from the Contact page; contact details, hours and premises photo remain.
- **New industry — "Manufacturers"** in the industries section, showing food lid containers and related packaging/production work as the example.
- **Update the client PDF** (`docs/wire-edm-pro-website-overview.pdf`) to reflect all of the above.

## Capabilities

### New Capabilities
- `turnkey-lifecycle`: The end-to-end turnkey flow section (shared component; used on Home and Reverse Engineering).
- `reverse-engineering-page`: The Reverse Engineering solution page.
- `quality-assurance-page`: The Quality Assurance solution page with the QC equipment list.

### Modified Capabilities
- `home-page`: adds the turnkey lifecycle section; replaces the hardness stat with maximum size 420 mm; renames the first service card.
- `service-pages`: service renamed to "EDM Wire Cutting Solution".
- `company-pages`: FAQs page removed.
- `contact-page`: enquiry form removed; page becomes contact-details only.
- `industry-pages`: adds the "Manufacturers" industry (food lid containers and related).

## Impact

- New: `src/components/TurnkeyFlow.astro`, `src/pages/reverse-engineering.astro`, `src/pages/quality-assurance.astro`.
- Modified: home page, Header (Solutions menu grows to six entries, FAQs link removed), Footer, industries data, sitemap, CONTENT-TODO, client PDF source.
- Deleted: `src/pages/faqs.astro`; the contact form markup/script and its `PUBLIC_FORM_ENDPOINT` usage.
- Page count moves from 20 to 22 (adds 3 pages, removes 1).
- QC equipment list and 420 mm capability figure need client confirmation (tracked in CONTENT-TODO).
