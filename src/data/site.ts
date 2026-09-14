/**
 * The business entity, in one place. Everything that Google needs to resolve
 * "Wire EDM Pro" to a real company reads from here: the JSON-LD graph in
 * BaseLayout, and the NAP block in the footer.
 *
 * The address and phone strings must stay character-identical to every external
 * listing (Google Business Profile, directories). Mismatched NAP is what stops
 * Google merging the listings into one entity. See SEO-CHECKLIST.md.
 */

export const SITE_NAME = "Wire EDM Pro";

export const ADDRESS = {
  streetAddress: "16/24 Garling Rd",
  addressLocality: "Kings Park",
  addressRegion: "NSW",
  postalCode: "2148",
  addressCountry: "AU",
} as const;

/** Display form used in the footer and contact page. */
export const ADDRESS_LINE = "16/24 Garling Rd, Kings Park NSW 2148";

export const PHONE_LANDLINE = { display: "02 8604 8347", e164: "+61286048347", intl: "+61 2 8604 8347" } as const;
export const PHONE_MOBILE = { display: "0452 558 052", e164: "+61452558052", intl: "+61 452 558 052" } as const;
export const EMAIL = "wireedmpro@gmail.com";

/**
 * Coordinates of the Garling Rd premises, read off the Google Business Profile
 * listing itself (see GOOGLE_BUSINESS_PROFILE). `geo` is a recommended property
 * on Google's Local Business structured data reference.
 *
 * These must agree with the profile pin. An earlier value geocoded from the
 * street address alone sat ~167 m west of where Google actually places the
 * business, which would have had the schema contradicting the listing.
 */
export const GEO = { latitude: -33.7436852, longitude: 150.9096175 } as const;

export const BUSINESS_DESCRIPTION =
  "Precision machining in Sydney: wire EDM, EDM hole drilling, CNC milling, CNC turning and laser cutting for defence, aerospace, medical, mining and general engineering.";

/**
 * The Google Business Profile listing, in its canonical `?cid=` form. The
 * maps.app.goo.gl share link redirects here; the short link depends on Google's
 * redirect service and the long /maps/place/ URL carries session parameters,
 * so neither belongs in structured data.
 */
export const GOOGLE_BUSINESS_PROFILE = "https://www.google.com/maps?cid=14387595335186080408";

/**
 * Registered entity name. The Business Profile lists "Wire EDM Pro Pty Ltd"
 * while the site trades as "Wire EDM Pro"; declaring both lets Google reconcile
 * the listing with this domain instead of treating them as two businesses.
 */
export const LEGAL_NAME = "Wire EDM Pro Pty Ltd";

/**
 * Profiles that represent this same business elsewhere on the web. Google uses
 * sameAs to merge them into one entity, which is the main lever on brand-name
 * ranking for a business whose name is also its industry term.
 *
 * Add each URL as the profile goes live; the schema omits sameAs while empty
 * rather than publishing an empty array. Never add a guessed or placeholder URL.
 * The working list is in SEO-CHECKLIST.md.
 */
export const SAME_AS: string[] = [GOOGLE_BUSINESS_PROFILE];
