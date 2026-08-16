## ADDED Requirements

### Requirement: Brand palette
The site SHALL use the client's palette as its only brand colors, defined once as design tokens (CSS custom properties). *(Revised twice on 2026-08-16 — current set:)* `#61828A` Juniper (accent; deepened one lightness step where used as small text or button fill to meet AA), `#DFE9EB` Mystic (panels), `#ABC3CD` Casper (hairline/border family), `#A9CCCF` Jungle Mist (soft accents on dark). The palette has no dark anchor, so primary text and the dark bands use a deep slate-teal derived from Juniper's hue. All components MUST reference tokens rather than hard-coded hex values.

#### Scenario: Tokens are the single source of color
- **WHEN** any page or component applies a brand color
- **THEN** it uses a defined CSS custom property from the shared token file, and no page introduces off-palette brand colors (neutral greys/white for text and surfaces are permitted)

#### Scenario: Accessible contrast
- **WHEN** body text is rendered on any palette background
- **THEN** the text/background combination meets WCAG AA contrast (4.5:1 for body text)

### Requirement: Shared header and footer
Every page SHALL render the same header (logo/wordmark, navigation to all five pages, an enquiry CTA) and the same footer (company summary, service links, Sydney location, contact details).

#### Scenario: Navigation works across all pages
- **WHEN** a visitor is on any of the five pages and clicks a navigation link
- **THEN** they land on the corresponding page and the current page is visually indicated in the navigation

#### Scenario: Mobile navigation
- **WHEN** the viewport is narrower than the desktop breakpoint
- **THEN** the navigation collapses into an accessible toggle menu operable by touch and keyboard

### Requirement: Corporate industrial visual language
The site SHALL follow a high-standard corporate industrial design direction: a consistent type scale (max two font families), consistent spacing scale, and section layouts reused across pages — reviewed against the `/hallmark` design-quality skill during implementation.

#### Scenario: Consistency across pages
- **WHEN** a visitor moves between any two pages
- **THEN** typography, spacing, button styles, and section patterns are visibly the same system

### Requirement: Responsive layout
All pages SHALL be fully usable from 360px-wide mobile viewports through widescreen desktop, with no horizontal page scrolling.

#### Scenario: Mobile rendering
- **WHEN** any page is viewed at 360px width
- **THEN** all content is readable, interactive elements are tappable, and the page body does not scroll horizontally
