## ADDED Requirements

### Requirement: Hero with interactive 3D Wire EDM centerpiece
The home page SHALL open with a hero section that presents the company's positioning (Sydney precision machining, 25+ years) alongside the interactive 3D Wire EDM visualization (see `wire-edm-3d-visualization`), with a primary enquiry CTA.

#### Scenario: First view of the home page
- **WHEN** a visitor loads the home page on desktop
- **THEN** the hero shows the headline, supporting copy, a primary CTA linking to the Contact page, and the 3D Wire EDM visualization without requiring scrolling

### Requirement: Services overview section
The home page SHALL present an overview of core services — Wire EDM / Wire Cutting, EDM Cutting, CNC Milling, CNC Turning — each linking to its corresponding service page.

#### Scenario: Navigating to a service
- **WHEN** a visitor clicks a service card in the overview
- **THEN** they are taken to that service's dedicated page (Wire EDM, Milling, or Turning)

### Requirement: Industries served section
The home page SHALL include a section addressing the three target industries — Manufacturing, Mining, and Medical — with copy tailored to B2B buyers in each.

#### Scenario: Industry content present
- **WHEN** a visitor scrolls the home page
- **THEN** they find a section naming Manufacturing, Mining, and Medical with at least one sentence of tailored value proposition each

### Requirement: Credibility section
The home page SHALL include a trust/credibility section communicating 25+ years of operation, Sydney base, and machinery capabilities, in the partnership-and-reliability tone used by leading competitors.

#### Scenario: Credibility signals visible
- **WHEN** a visitor scrolls the home page
- **THEN** the 25+ years experience and Sydney location are explicitly stated outside the footer

### Requirement: Authored placeholder-free content
All home page copy SHALL be fully authored (no lorem ipsum or TODO placeholders), written for a B2B audience.

#### Scenario: Content review
- **WHEN** the home page is reviewed before deployment
- **THEN** no placeholder text, dummy images, or unfinished sections are present
