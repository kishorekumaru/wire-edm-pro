## MODIFIED Requirements

### Requirement: Home page facts strip
The home page facts strip SHALL show maximum processing size "420 mm" in place of the previous hardness figure, alongside the existing tolerance, cutting-force and years figures.

#### Scenario: Maximum size shown
- **WHEN** a visitor views the home facts strip
- **THEN** a "maximum size 420 mm" fact appears and the 60+ HRC fact does not

### Requirement: Service naming
The first service SHALL be named "EDM Wire Cutting Solution" everywhere it appears (menus, home card, service page, footer, cross-links). The URL remains `/wire-edm/`.

#### Scenario: Consistent rename
- **WHEN** the service is referenced anywhere on the site
- **THEN** it reads "EDM Wire Cutting Solution"

### Requirement: Industries include Manufacturers
The industries section SHALL include a "Manufacturers" industry page showing food lid containers and related packaging/production machining as its examples.

#### Scenario: Manufacturers page
- **WHEN** a visitor opens the Industries menu or hub
- **THEN** "Manufacturers" appears and its page shows food-lid-container and related examples

## REMOVED Requirements

### Requirement: FAQs page
**Reason**: Client direction — the FAQs page is removed from the site.
**Migration**: Delete `/faqs/`; remove its links from the header, mobile menu, footer, sitemap and PDF.

### Requirement: Serverless-compatible enquiry form
**Reason**: Client direction — the Contact page no longer carries a form; enquiries come by phone/email.
**Migration**: Remove the form, its validation script and `PUBLIC_FORM_ENDPOINT` usage; the Contact page keeps details, hours and the premises photo.
