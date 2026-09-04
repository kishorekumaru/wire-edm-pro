# SEO checklist: getting found for "Wire EDM Pro"

The site is indexed but does not rank first for its own brand name, and shows no
sitelinks. The on-page work is done (see the entity graph in
`src/layouts/BaseLayout.astro`); this file covers the off-site work, which is the
larger half and cannot be done from the codebase.

**Why this is needed.** The homepage went live 2026-08-27. The domain has no
backlinks and no directory listings, and the business name is also its industry
term, so Google reads "wire edm pro" as a question about wire EDM rather than as a
company. Nothing outside this domain currently tells it otherwise. Every item below
exists to give Google a second, third and fourth independent source saying that
Wire EDM Pro is a real business at a real address.

Work top to bottom. Section 1 is a prerequisite for everything else.

---

## Which searches to actually target

Worth being blunt about this, because chasing the wrong queries wastes months.

**"EDM" on its own is not a winnable or useful target.** Two reasons. It is dominated
globally by electronic dance music, and the machining results that do rank are
Wikipedia and the machine builders themselves (Makino, Sodick, Mitsubishi, GF
Machining Solutions) with decades of authority. It is also an informational query:
almost nobody typing "EDM" is looking to buy a machined part. Ranking there would
cost enormous effort and send traffic that never converts.

**"Wire cutting" on its own is similarly weak.** It is ambiguous (wire rope cutting,
hot-wire foam cutting, wire EDM) and carries no buying intent or location.

**"EDM wire cutting" is a legitimate long-term target**, but you are competing with
global manufacturers and established job shops. Expect this to take many months and
to follow from, not precede, the work below.

The queries that are both winnable and worth winning add **intent or location**:

| Target query | Why it is winnable | Page that should rank |
| --- | --- | --- |
| wire EDM Sydney | Local intent, small competitor set | `/edm-wire-cutting/` |
| wire cutting services Sydney | Commercial intent, local | `/edm-wire-cutting/` |
| EDM machining Sydney / NSW | Local, low competition | `/edm-wire-cutting/` |
| wire cut EDM near me | Answered by the local pack, not the site | Google Business Profile |
| EDM hole drilling Sydney | Very low competition, exact capability match | `/edm-drills/` |
| tool and die making Sydney | High commercial value | `/industries/tool-die-making/` |
| CNC milling Sydney | Local, moderate competition | `/milling/` |
| reverse engineering machining Sydney | Niche, almost no competition | `/reverse-engineering/` |

Two things worth knowing:

1. **Google already localises these.** When someone in Sydney searches "wire EDM"
   without a location, Google serves local results. So ranking for "wire EDM Sydney"
   captures most of the "wire EDM" traffic that could ever become a customer.
2. **"Near me" and map-pack results come from the Google Business Profile, not the
   website.** For those queries, section 1 is the entire job. No amount of on-page
   work substitutes for it.

So the honest answer to "make us come up for EDM and wire cutting" is: we target the
local commercial versions of those phrases, win those first, and let the broader
terms follow as the domain earns authority. Anyone promising a #1 for bare "EDM" is
either misunderstanding the query or planning to buy links.

---

## 0. The canonical NAP block

Every listing must match this **character for character**. Mismatched name, address
or phone is the most common reason Google fails to merge listings into one entity,
and a near-miss is worse than an omission.

```
Wire EDM Pro
16/24 Garling Rd, Kings Park NSW 2148
02 8604 8347
0452 558 052
wireedmpro@gmail.com
```

Rules:

- `16/24 Garling Rd`, not "Unit 16, 24 Garling Road", not "16/24 Garling Road".
- `02 8604 8347` as the primary number, mobile second.
- Hours: Monday to Thursday 08:00-16:30, Friday 08:00-12:00.
- Website: `https://wireedmpro.com.au/` with the trailing slash.

Source of truth is `src/data/site.ts`. If any of the above changes, change it there
and the footer, contact page and structured data all follow.

---

## 1. Google Business Profile

The single largest factor for ranking on your own brand name. Do this before
anything else.

- [ ] **Confirm you are an Owner, not just a Manager.** Manager access cannot change
      the business name or the website URL, which are the two fields that matter
      most here. In GBP go to Settings > People and access and check your role. If
      the Primary Owner is a former agency, the machine supplier, or an unknown
      account, request ownership transfer now; it can take up to 7 days and
      everything below depends on it.
- [ ] Business name exactly `Wire EDM Pro`. No keyword stuffing ("Wire EDM Pro |
      Sydney CNC Machining" is a guideline violation and risks suspension).
- [ ] Primary category: **Machine Shop**.
- [ ] Additional categories: Metal Fabricator, Manufacturer, Tool & Die Shop.
- [ ] Address exactly as section 0. Verify by postcard if not already verified.
- [ ] Website field: `https://wireedmpro.com.au/`
- [ ] Phone: `02 8604 8347` primary, `0452 558 052` additional.
- [ ] Hours: Mon-Thu 08:00-16:30, Fri 08:00-12:00. Match the site exactly.
- [ ] Business description (750 char limit), adapted from `public/llms.txt`:

      Wire EDM Pro is a Sydney precision machining business with over 25 years of
      experience. We run wire EDM cutting to ±0.003 mm in hardened metal up to
      420 mm tall, EDM hole drilling from Ø 0.3 mm, CNC milling on a DMG MORI
      ecoMill 600 V, CNC turning and laser cutting. We serve tool and die making,
      aerospace and defence, medical, mining, automotive, electronics and general
      engineering. Reverse engineering from a sample part, and first-article and
      batch inspection on calibrated instruments, are done in house. Based at
      16/24 Garling Rd, Kings Park NSW 2148.

- [ ] **Services: add all six.** Use the exact names below so they match the site's
      navigation, then paste the matching description. Every figure here is already
      published on the site and client-confirmed; do not add specs that are not.

      **EDM Wire Cutting Solution**
      > Wire EDM cutting to ±0.003 mm in hardened metal, on Makino and Fanuc RoboCut
      > machines. Cuts hardened steel to 60+ HRC and any conductive metal after heat
      > treatment, up to 420 mm tall, burr-free and with no cutting force on the part.
      > Punches, dies, splines, keyways and fine detail. Quotes from drawings or STEP files.

      **Milling solutions**
      > CNC milling on a DMG MORI ecoMill 600 V vertical machining centre.
      > 600 x 560 x 510 mm travel, 12,000 rpm spindle, 600 kg table load and a
      > 32-station tool changer. Jigs, fixtures, die sets, tooling plates and machine
      > spares from one-offs to repeat production, with EDM finishing in the same shop.

      **Turning solutions**
      > CNC turning of shafts, bushes, pins, adaptors and threaded components in
      > steels, stainless and exotic alloys, plus laser-cut sheet metal profiles
      > straight from your CAD file. Hardened keyways and flats added by EDM
      > afterwards, without softening the part.

      **EDM Drills**
      > Small hole EDM drilling from Ø 0.3 mm to 3.0 mm, straight, round and burr-free
      > through fully hardened metal. Start holes for wire cutting, cooling channels
      > and vents in finished tooling, and broken-tap removal by spark erosion.

      **Reverse Engineering**
      > No drawing needed. Bring the worn or obsolete part, we measure it, model it in
      > Mastercam and manufacture the replacement. Design through to delivered
      > component, from a sample, a sketch or a photograph.

      **Quality Assurance**
      > First-article, critical-dimension and batch inspection on calibrated
      > instruments: optical profile projectors, digital micrometers, vernier calipers,
      > height gauges and bore gauges. Every production run checked through to final
      > packaging before it leaves.

      These mirror `src/data/solutions.ts` and the six solution pages. If the wording
      on the site changes, update it here too so the listing keeps matching.
- [ ] **Photos: upload at least 10.** Photo count and freshness correlate strongly
      with local visibility. These are already in `public/images/` and several are
      not used anywhere on the site, so they are free to use here:
      `building-exterior`, `workshop-floor`, `workshop-bench`, `cnc-machining-centre`,
      `edm-spark-closeup`, `makino-wire-edm`, `fanuc-robocut-c600ia`, `qc-wireedm`,
      `wire-edm-office`, `cnc-turning`, `edm-drilling`, `cnc-milling`.
- [ ] Add the logo (`public/images/wire-edm-high-res.png`) and a cover photo.
- [ ] **Grab the profile's share link** (GBP > Share your Business Profile). It looks
      like `https://g.page/...` or `https://maps.app.goo.gl/...`. It goes in
      section 5.
- [ ] **Get the exact coordinates.** Right-click the pin in Google Maps and copy the
      lat/long. Paste them here so they can be added to the `LocalBusiness` schema as
      `geo`. They were deliberately left out of the code rather than estimated:

      lat: ______________  long: ______________

- [ ] Ask three or four long-standing customers for a Google review. Reviews are a
      brand-query ranking factor and they are the hardest item here to fake, which
      is exactly why they carry weight.

---

## 2. Bing and Apple

Small traffic, but both are independent entity confirmations and both are quick.

- [ ] [Bing Places](https://www.bingplaces.com) - can import directly from Google
      Business Profile.
- [ ] [Apple Business Connect](https://businessconnect.apple.com) - drives Apple Maps
      and Siri.

---

## 3. Australian directory citations

Tier 1 first. These are free listings. Paste the section 0 NAP verbatim and use a
short version of the GBP description.

- [ ] Yellow Pages AU - yellowpages.com.au
- [ ] True Local - truelocal.com.au
- [ ] Hotfrog AU - hotfrog.com.au
- [ ] StartLocal - startlocal.com.au
- [ ] AussieWeb - aussieweb.com.au
- [ ] Localsearch - localsearch.com.au

Tier 2, industry-specific. These are lower volume but far more topically relevant,
which makes them worth more than another general directory:

- [ ] IndustrySearch - industrysearch.com.au
- [ ] Ferret - ferret.com.au
- [ ] Machines4U - machines4u.com.au
- [ ] AMTIL (Australian Manufacturing Technology Institute Limited) - amtil.com.au.
      Membership costs money; check whether the directory listing alone is available.

Verify each site is still active before spending time on it; directory landscapes
churn. Do not buy bulk citation packages, and do not use a service that submits to
hundreds of low-quality directories. That pattern is a spam signal, not a ranking one.

---

## 4. Social profiles

These matter less for their own traffic than for two other reasons: they usually
rank on page 1 for a brand query themselves (filling the results with properties
you control), and they are strong `sameAs` targets.

- [ ] LinkedIn company page. Highest value for a B2B engineering business.
- [ ] Facebook business page.
- [ ] Optional: Instagram. Machining content performs well visually, and you already
      have the photo library for it.

Each one needs the section 0 NAP in its About section and a link to
`https://wireedmpro.com.au/`.

---

## 5. Close the loop: feed the URLs back into the site

This is the step that makes sections 1 to 4 count, and it is the one most likely to
be forgotten.

Every URL created above goes into the `SAME_AS` array in
[`src/data/site.ts`](src/data/site.ts). It is currently empty, and the schema omits
`sameAs` entirely while it is:

```ts
export const SAME_AS: string[] = [
  "https://www.linkedin.com/company/...",
  "https://www.facebook.com/...",
  "https://g.page/...",
  "https://www.yellowpages.com.au/...",
];
```

Order does not matter. Only add URLs that actually resolve to a live profile for
this business. A wrong or dead `sameAs` weakens the signal rather than adding to it.

- [ ] Add each URL as its profile goes live.
- [ ] Add the `geo` coordinates from section 1 to the `LocalBusiness` node in
      `src/layouts/BaseLayout.astro`.
- [ ] Redeploy, then re-run Google's
      [Rich Results Test](https://search.google.com/test/rich-results) against
      `https://wireedmpro.com.au/` to confirm the graph parses.

---

## 6. Google Search Console

- [ ] **Check for orphan URLs.** Pages > Indexed: look for `/landing/` and
      `/landing-v2/`. These were the pre-launch holding pages. The deploy workflow
      syncs with `--delete`, so the S3 objects are almost certainly gone already, but
      confirm they are not still indexed. If they are, use Removals to clear them.
- [ ] **Resubmit the sitemap.** `https://wireedmpro.com.au/sitemap.xml`. It now
      carries real per-page `lastmod` dates instead of stamping every page with the
      build date.
- [ ] **Request indexing for the 12 industry pages.** URL Inspection > Request
      Indexing, one at a time. They are the newest and least-linked pages.
- [ ] **Save a Performance filter** on the query `wire edm pro` and record the
      average position now, as a baseline. This is the only number that answers the
      original question.
- [ ] Check Experience > Core Web Vitals after a few weeks of data.

---

## What to expect, and when

Be sceptical of anything that promises faster than this.

| Timeframe | What should happen |
| --- | --- |
| Week 1-2 | Breadcrumb trails start appearing in results. `sameAs` picked up if profiles are live. |
| Week 3-6 | With GBP verified and tier-1 citations live, the brand query should move toward #1. A Maps/knowledge panel may appear for "Wire EDM Pro Sydney". |
| Month 3-6 | Sitelinks become plausible, if the site holds #1 for the brand and the structure stays clean. They cannot be requested, only earned. |

**If the brand query has not improved after six weeks** with GBP verified and
citations live, the problem is not on-site and more markup will not fix it. The next
lever is genuine links: trade press, supplier and machine-vendor pages ("machines
installed at..."), industry association pages, and customer case studies.

Anything that ranks a business faster than this timeline is buying links, and it
carries a penalty risk that is not worth it for a business whose reputation is the
product.
