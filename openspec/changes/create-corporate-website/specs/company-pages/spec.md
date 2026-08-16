## ADDED Requirements

*(Added 2026-08-16: the client directed the site structure to follow dimac.com.au,
which adds an About page, an FAQs page, and a two-tier navigation.)*

### Requirement: About Us page
The site SHALL provide an About page (`/about/`) presenting the company's purpose, working values, history (Sydney, 25+ years), machinery, and industries served, using the client's real workshop photography and honest, non-fabricated claims.

#### Scenario: About content present
- **WHEN** a visitor opens the About page
- **THEN** they find the company purpose, at least two working-value statements, the machine list with photos, and an enquiry CTA

### Requirement: FAQs page
The site SHALL provide an FAQs page (`/faqs/`) answering common buyer questions (quoting, file formats, tolerances, hardened materials, lead times, one-off jobs, working from samples, location/delivery) in a conversational voice, presented as accessible accordions.

#### Scenario: FAQ interaction
- **WHEN** a visitor clicks or keyboard-activates a question
- **THEN** its answer expands (native `<details>` semantics) without JavaScript being required

### Requirement: Two-tier navigation
Every page SHALL render a two-tier header modeled on the Dimac reference: a utility bar (business hours, phone) above a main bar with the wordmark, a Solutions dropdown listing all four services, About/FAQs links, and a contact CTA. The dropdown MUST be operable by hover, keyboard focus, and click, and the mobile sheet MUST list every destination.

#### Scenario: Solutions dropdown keyboard access
- **WHEN** a keyboard user tabs to the Solutions button and presses Enter
- **THEN** the dropdown opens, its items are focusable, and Escape closes it

#### Scenario: Mobile navigation completeness
- **WHEN** the mobile menu is opened at a narrow viewport
- **THEN** Home, all four solutions, About us, FAQs and Contact us are all reachable
