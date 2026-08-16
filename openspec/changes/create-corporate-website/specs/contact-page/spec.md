## ADDED Requirements

### Requirement: Company contact information
The Contact Us page SHALL display the company's Sydney location, phone number, email address, and business hours (placeholder-real values clearly marked for the client to confirm, not lorem ipsum).

#### Scenario: Contact details visible
- **WHEN** a visitor opens the Contact page
- **THEN** location, phone, email, and hours are visible without interaction

### Requirement: Serverless-compatible enquiry form
The Contact page SHALL provide an enquiry form (name, company, email, phone, service of interest, message) that functions without any self-hosted backend — submitting via a third-party static-form endpoint, with a `mailto:` link as a secondary path.

#### Scenario: Successful submission
- **WHEN** a visitor completes required fields and submits
- **THEN** the submission is delivered via the configured form endpoint and the visitor sees an on-page success confirmation

#### Scenario: Client-side validation
- **WHEN** a visitor submits with a missing required field or malformed email
- **THEN** inline validation messages appear and no submission is sent

#### Scenario: Form endpoint not yet configured
- **WHEN** the form endpoint has not been configured at build time
- **THEN** the form falls back to a `mailto:` action so enquiries still reach the company

### Requirement: Location context
The Contact page SHALL include a map or stylized location representation of the Sydney premises that does not require a server or blocked third-party scripts (static map image or equivalent).

#### Scenario: Map renders statically
- **WHEN** the Contact page loads from static hosting
- **THEN** the location visual renders without any server-side dependency
