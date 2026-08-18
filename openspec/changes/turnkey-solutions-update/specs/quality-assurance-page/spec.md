## ADDED Requirements

### Requirement: Quality Assurance page
The site SHALL provide a Quality Assurance page (`/quality-assurance/`) listed in the Solutions menu, presenting the QC equipment used for inspection and what is checked (dimensions, surface finish, hardness), closing with an enquiry CTA. The equipment list ships as industry-typical instruments flagged for client confirmation in CONTENT-TODO.

#### Scenario: Page reachable from Solutions
- **WHEN** a visitor opens the Solutions menu
- **THEN** Quality Assurance appears as an entry and links to `/quality-assurance/`

#### Scenario: Equipment list present
- **WHEN** a visitor reads the page
- **THEN** they find a list of QC machines/instruments with what each verifies
