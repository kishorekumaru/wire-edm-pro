# Tasks: create-corporate-website

## 1. Project Setup

- [x] 1.1 Scaffold Astro + TypeScript project (pinned versions), add Three.js dependency, configure static output and dev/build scripts
- [x] 1.2 Create `tokens.css` with Sapphire Veil palette custom properties (`#E7F0FA`, `#7BA4D0`, `#2E5E99`, `#0D2440`), type scale, and spacing scale
- [x] 1.3 Add and self-host the two woff2 font families (industrial display for headings, grotesque for body) with `@font-face` and preloads

## 2. Design System & Shared Layout

- [x] 2.1 Invoke the `/hallmark` skill to set the design direction (corporate industrial, Sapphire Veil) before building components
- [x] 2.2 Build `BaseLayout` with per-page `<title>`, meta description, and Open Graph tags
- [x] 2.3 Build shared header: wordmark, navigation to all five pages with current-page indicator, enquiry CTA, accessible mobile toggle menu
- [x] 2.4 Build shared footer: company summary, service links, Sydney location, contact details
- [x] 2.5 Build reusable section components: service card, industry card, CTA band, credibility/stat strip
- [x] 2.6 Verify WCAG AA contrast for all palette text/background combinations and fix any failures

## 3. Hero Visualization *(scope revised by client 2026-08-16 — see specs/hero-visualization)*

- [x] 3.1 Build the procedural Three.js model of the client's sample part: spline ring + gear ring + star core extruded from generated profiles, steel material with studio environment lighting
- [x] 3.2 Add mouse interaction: rotation/tilt follows the pointer over the hero; nested pieces telescope "inside out" on hover with idle breathing otherwise
- [x] 3.3 Add performance controls: dynamic import on hero visibility, DPR clamp (≤2), IntersectionObserver + `visibilitychange` render-loop pause with a guaranteed first painted frame
- [x] 3.4 Add WebGL detection with the reference-photo fallback in the same layout slot, and `prefers-reduced-motion` handling (static exploded pose)
- [ ] 3.5 Verify ≥30fps on mid-range hardware and no impact on initial page content render

## 4. Home Page

- [x] 4.1 Build hero section: headline + supporting copy (Sydney, 25+ years), primary CTA to Contact, 3D visualization embedded, all visible without scrolling on desktop
- [x] 4.2 Build services overview section with cards for Wire EDM/Wire Cutting, EDM Cutting, CNC Milling, CNC Turning linking to their pages
- [x] 4.3 Build industries section with tailored B2B copy for Manufacturing, Mining, and Medical
- [x] 4.4 Build credibility section (25+ years, Sydney base, machinery capabilities) in partnership/reliability tone
- [x] 4.5 Author final home page copy — no placeholders; log unconfirmed business facts in `CONTENT-TODO.md`

## 5. Service Pages

- [x] 5.1 Build the shared service-page structure: service hero, capabilities (processes/tolerances/materials), industry applications, closing enquiry CTA to Contact
- [x] 5.2 Build Wire EDM / Wire Cutting page (`/wire-edm/`) with the deepest content: what wire EDM is, achievable precision, wire EDM vs conventional machining, EDM cutting coverage
- [x] 5.3 Build Milling Solutions page (`/milling/`) with authored CNC milling content
- [x] 5.4 Build Turning Solutions page (`/turning/`) with authored CNC turning content

## 6. Contact Page

- [x] 6.1 Build contact info section: Sydney location, phone, email, business hours (flagged in `CONTENT-TODO.md` for client confirmation)
- [x] 6.2 Build enquiry form (name, company, email, phone, service of interest, message) posting to env-configured form endpoint, with honeypot field and on-page success state
- [x] 6.3 Add client-side validation (required fields, email format) and the `mailto:` fallback when no endpoint is configured
- [x] 6.4 Add static map/location visual with no server or blocked-script dependency

## 7. Static Build, SEO & Deployment Docs

- [x] 7.1 Confirm build outputs per-page `index.html` directories (`/`, `/wire-edm/`, `/milling/`, `/turning/`, `/contact/`) with hashed assets
- [x] 7.2 Add sitemap, robots.txt, unique titles/descriptions/OG tags per page, and alt text on all images
- [x] 7.3 Verify the 3D library is only in the home page's JS chunks (not downloaded by other pages) and optimize images (responsive sizes, modern formats — all imagery is inline SVG, no raster assets)
- [x] 7.4 Write `DEPLOYMENT.md`: build command, S3 website hosting config (index/error documents), `aws s3 sync` with cache-control strategy

## 8. Dimac-Reference Expansion *(added 2026-08-16 — see specs/company-pages)*

- [x] 8a.1 Rebuild navigation as a two-tier Dimac-style header: utility bar (hours, phone) + main bar with Solutions dropdown (hover/focus/click + Escape), About/FAQs links, contact CTA, full mobile sheet
- [x] 8a.2 Build About Us page (`/about/`): purpose, working values, machinery cards with real photos, industries recap, CTA
- [x] 8a.3 Build FAQs page (`/faqs/`): 10 conversational Q&As as native `<details>` accordions
- [x] 8a.4 Add new pages to footer navigation and sitemap.xml
- [x] 8a.5 Add Industries section (Xometry reference, adapted list): data module with 10 industries, `/industries/` hub, dynamic sub-pages, footer/sitemap/home links — see specs/industry-pages
- [x] 8a.6 Upgrade Solutions + Industries dropdowns to full-width mega-menus with a hand-built stroke-icon set and bottom info strips

## 9. Quality & Review

- [ ] 8.1 Run `/hallmark` review of the finished site and apply resulting design fixes
- [ ] 8.2 Verify responsive behavior at 360px through widescreen on all five pages — no horizontal scrolling, tappable targets, working mobile nav
- [ ] 8.3 Walk every spec scenario across the six capabilities and confirm each passes; fix gaps
- [ ] 8.4 Final content pass: no lorem ipsum/TODO text on any page; `CONTENT-TODO.md` complete for client sign-off
