## ADDED Requirements

### Requirement: Fully static build output
The build SHALL produce a self-contained static output directory (HTML, CSS, JS, assets) with no server-side rendering or runtime backend required, suitable for S3 static website hosting.

#### Scenario: Build produces static site
- **WHEN** the production build command runs
- **THEN** an output directory is produced containing one HTML entry per page plus hashed assets, and opening it via a static file server renders every page correctly

### Requirement: S3-compatible routing
Each of the five pages SHALL be reachable as its own path with an `index.html` entry (e.g., `/`, `/wire-edm/`, `/milling/`, `/turning/`, `/contact/`) so S3 static website hosting serves them without rewrite rules.

#### Scenario: Deep link on S3-style hosting
- **WHEN** a visitor requests a page path directly on static hosting configured with index documents
- **THEN** the correct page is served without client-side routing hacks

### Requirement: SEO and metadata baseline
Every page SHALL ship with a unique `<title>`, meta description, Open Graph tags, and a single crawlable sitemap; images SHALL have alt text.

#### Scenario: Metadata present per page
- **WHEN** each built HTML file is inspected
- **THEN** it contains a unique title and meta description relevant to that page

### Requirement: Performance budget
The built site SHALL keep each page's initial payload lean: 3D library code loaded only on the home page, images optimized/responsive, and non-home pages shipping no 3D runtime.

#### Scenario: 3D code isolated to home page
- **WHEN** a service or contact page is loaded
- **THEN** the 3D rendering library is not downloaded

### Requirement: Deployment documentation
The repository SHALL include documentation of the build command and the S3 upload/hosting steps (bucket website config, index/error documents, cache headers).

#### Scenario: Deploy from docs alone
- **WHEN** a person follows the documented steps with an S3 bucket
- **THEN** the site is live and all five pages are reachable
