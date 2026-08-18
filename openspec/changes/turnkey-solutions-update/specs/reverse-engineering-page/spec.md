## ADDED Requirements

### Requirement: Reverse Engineering page
The site SHALL provide a Reverse Engineering page (`/reverse-engineering/`) listed in the Solutions menu, explaining the flow: the customer brings a sample part → dimensions are measured → a design is created (Mastercam) → the turnkey lifecycle carries it to a delivered part. The page SHALL embed the shared turnkey lifecycle section and close with an enquiry CTA.

#### Scenario: Page reachable from Solutions
- **WHEN** a visitor opens the Solutions menu
- **THEN** Reverse Engineering appears as an entry and links to `/reverse-engineering/`

#### Scenario: Sample-to-part story
- **WHEN** a visitor reads the page
- **THEN** the bring-sample → measure → design → turnkey-delivery flow is presented in that order
