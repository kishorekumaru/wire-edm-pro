# Deploying Wire EDM Pro to Amazon S3

The site is fully static. No server, no functions. Any S3 bucket with static
website hosting serves it as-is.

## 1. Build

```bash
npm ci
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id npm run build
```

Output lands in `dist/`. One directory per page, each with its own
`index.html`, plus hashed assets under `dist/_assets/`.

`PUBLIC_FORM_ENDPOINT` is optional; without it the contact form falls back to
a `mailto:` action (see `.env.example`).

## 2. Configure the bucket (once)

```bash
aws s3 mb s3://www.wireedmpro.com.au
aws s3 website s3://www.wireedmpro.com.au \
  --index-document index.html \
  --error-document 404.html
```

Then allow public reads with a standard static-website bucket policy (or,
preferred, front the bucket with CloudFront + Origin Access Control and keep
the bucket private).

Directory URLs (`/wire-edm/`) resolve via the index-document rule. No rewrite
rules are needed because every route is a real `<route>/index.html` file.

## 3. Upload with sensible cache headers

Hashed assets are immutable; HTML must revalidate:

```bash
# Long-lived, immutable fingerprinted assets + fonts
aws s3 sync dist/ s3://www.wireedmpro.com.au \
  --exclude "*.html" --exclude "*.xml" --exclude "*.txt" \
  --cache-control "public,max-age=31536000,immutable"

# HTML, sitemap, robots. Short cache so deploys show up quickly
aws s3 sync dist/ s3://www.wireedmpro.com.au \
  --exclude "*" --include "*.html" --include "*.xml" --include "*.txt" \
  --cache-control "public,max-age=300"
```

## 4. Verify

Open the bucket website endpoint (or CloudFront domain) and check all five
pages: `/`, `/wire-edm/`, `/milling/`, `/turning/`, `/contact/`.

## Rollback

Re-run step 3 from a previous build's `dist/` directory (keep the last built
`dist/` before rebuilding, or rebuild from the previous git tag).

## CI/CD (GitHub Actions)

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`:
build → sync `dist/_assets` (immutable, 1 year) → images & fonts (7 days) →
HTML (`must-revalidate`) → remaining files (1 day, with `--delete` cleanup).

Required repository secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`
(an IAM user scoped to `s3://wireedmpro.com.au`). Bucket region: `us-east-1`.

Note: the bucket is the apex `wireedmpro.com.au`; site URLs in
`astro.config.mjs` / `sitemap.xml` currently assume `www.`. Align DNS or the
configured domain before launch.
