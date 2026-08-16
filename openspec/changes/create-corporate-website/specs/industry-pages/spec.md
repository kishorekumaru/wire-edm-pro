## ADDED Requirements

*(Added 2026-08-16: the client directed an Industries menu section modeled on Xometry's
"Solutions For Every Industry", with the list adapted to a wire-EDM/CNC workshop —
Agriculture, Consumer Goods and Education dropped; Tooling & Diemaking added;
Engineering renamed General Engineering.)*

### Requirement: Industry sub-pages
The site SHALL provide a page per served industry (Tooling & Diemaking, Aerospace & Defence, Medical & Dental, Mining, Automotive, Electronics, Energy, Machine Building, Robotics & Automation, General Engineering) at `/industries/<slug>/`, each with an industry lede, a "what we machine" list, a "why the process fits" rationale, links to the relevant services, and an enquiry CTA. Content is process-grounded — no fabricated client claims.

#### Scenario: Sub-page content
- **WHEN** a visitor opens any industry page
- **THEN** they find the industry-specific lede, at least four machined-part examples, the process rationale, and links to the service pages

### Requirement: Industries hub page
The site SHALL provide a hub page at `/industries/` titled around "solutions for every industry", listing all industries as cards linking to their sub-pages.

#### Scenario: Hub navigation
- **WHEN** a visitor clicks an industry card on the hub
- **THEN** they land on that industry's sub-page

### Requirement: Full-width Industries mega-menu
The header SHALL include an Industries dropdown rendered as a full-viewport-width panel: a heading line, an icon-per-industry grid (single consistent stroke-icon set), and a bottom info strip with a short prompt plus "All industries" and quote links. The Solutions dropdown SHALL share the same full-width panel treatment (icons, info strip). Both panels stay operable by hover, keyboard focus, click, Escape and outside-click.

#### Scenario: Mega-menu interaction
- **WHEN** a visitor hovers or focuses the Industries trigger
- **THEN** the full-width panel opens showing all ten industries with icons and the bottom info strip, and Escape closes it

#### Scenario: Icons are one system
- **WHEN** the menu icons are inspected
- **THEN** all icons come from the same hand-built stroke set (consistent stroke width and style), not mixed icon libraries
