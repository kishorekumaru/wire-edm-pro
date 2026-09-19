# Deploying Wire EDM Pro to Amazon S3

The site is fully static. No server, no functions, no database, no form backend.
Every route builds to `<route>/index.html`, so any S3 bucket with static website
hosting serves it as-is.

Contact is phone and email only. There is no enquiry form and no form endpoint
to configure.

## 1. Build

```bash
npm ci
npm run build
```

`npm run build` runs `astro build` and then `node scripts/gen-sitemap.mjs`.
Output lands in `dist/`: one directory per page, each with its own
`index.html`, plus hashed assets under `dist/_assets/`.

The sitemap script reads each page's last commit date for `lastmod`, so it needs
full git history. A shallow clone dates every page to the newest commit.

`npm run build` is the only gate. There is no test runner and no linter.

## 2. The production bucket

```
wireedmpro.com.au-032331960224-ap-southeast-2-an
```

**Region: `ap-southeast-1`.** The bucket name ends in `ap-southeast-2`, but that
is naming only and is not the region. Do not "correct" the configured region to
match the name.

`astro.config.mjs` sets `site: 'https://wireedmpro.com.au'`, the apex domain.

The repository contains no CloudFront configuration, so deploys write straight
to the bucket. Fronting it with CloudFront and Origin Access Control, keeping
the bucket private, remains the better long-term shape.

### One-time bucket configuration

```bash
aws s3 website s3://wireedmpro.com.au-032331960224-ap-southeast-2-an \
  --index-document index.html \
  --error-document 404.html
```

Then allow public reads with a standard static-website bucket policy.

Directory URLs such as `/milling/` resolve via the index-document rule. No
rewrite rules are needed, because `build.format: 'directory'` means every route
is a real `<route>/index.html` file.

## 3. Automatic deploys

Pushing to `main` triggers `.github/workflows/deploy.yml`. **A merge to `main`
is a production deploy.**

The workflow checks out with `fetch-depth: 0`, sets up Node.js 20.x, runs
`npm ci` and `npm run build`, then uploads in four passes with different
cache headers:

| Pass | Files | Command | `Cache-Control` |
| --- | --- | --- | --- |
| 1 | `dist/_assets` | `sync --delete` | `public, max-age=31536000, immutable` |
| 2 | images and fonts | `cp --recursive` | `public, max-age=2592000` (30 days) |
| 3 | `*.html` | `sync` | `public, max-age=0, must-revalidate` |
| 4 | everything else | `sync --delete` | `public, max-age=86400` (1 day) |

Pass 1 can cache forever because Astro fingerprints those chunk names. Pass 2
uses `cp` rather than `sync` so existing objects have their `Cache-Control`
metadata refreshed even when the bytes have not changed. Pass 4 carries the
`--delete` that removes files dropped from the build, and excludes `_assets/*`
so it does not undo pass 1.

Required repository secrets: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`,
for an IAM user scoped to the bucket.

## 4. Manual deploy

Only needed if Actions is unavailable. Mirror the same four passes so cache
headers stay consistent:

```bash
BUCKET=s3://wireedmpro.com.au-032331960224-ap-southeast-2-an

aws s3 sync dist/_assets $BUCKET/_assets --delete \
  --cache-control "public, max-age=31536000, immutable"

aws s3 cp dist/ $BUCKET/ --recursive \
  --exclude "*" \
  --include "*.webp" --include "*.png" --include "*.jpg" --include "*.jpeg" \
  --include "*.svg" --include "*.ico" --include "*.woff2" \
  --cache-control "public, max-age=2592000"

aws s3 sync dist/ $BUCKET/ --exclude "*" --include "*.html" \
  --cache-control "public, max-age=0, must-revalidate"

aws s3 sync dist/ $BUCKET/ --delete --exclude "_assets/*" \
  --cache-control "public, max-age=86400"
```

## 5. Verify

Ten primary routes, twelve industry sub-pages and an error page:

```
/                        /about/                  /contact/
/milling/                /turning/                /edm-drills/
/edm-wire-cutting/       /quality-assurance/      /reverse-engineering/
/industries/             /404.html
```

Industry sub-pages live at `/industries/<slug>/`: `tool-die-making`,
`sheet-metal-components`, `aerospace-defence`, `medical`, `mining`,
`automotive`, `electronics`, `energy`, `machine-building`,
`robotics-automation`, `manufacturers`, `general-engineering`.

There is no `/wire-edm/` route. That path was renamed to `/edm-wire-cutting/`.

Also check `/sitemap.xml` and `/robots.txt`, and confirm the sitemap's `lastmod`
dates differ per page (identical dates mean the build ran on a shallow clone).

## Rollback

Re-run the four passes in section 4 from a previous build's `dist/`. Keep the
last built `dist/` before rebuilding, or rebuild from the previous git tag.
