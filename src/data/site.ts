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
 * Coordinates of the Garling Rd premises, taken from the business's own Google
 * Maps pin. `geo` is a recommended property on Google's Local Business
 * structured data reference, which is why it is here and the map embed is not:
 * the coordinates are a ranking input, an embedded map is not.
 *
 * Six decimal places is roughly 0.1 m. The pin reported more; the extra digits
 * were false precision.
 */
export const GEO = { latitude: -33.743658, longitude: 150.911435 } as const;

export const BUSINESS_DESCRIPTION =
  "Precision machining in Sydney: wire EDM, EDM hole drilling, CNC milling, CNC turning and laser cutting for defence, aerospace, medical, mining and general engineering.";

/**
 * Profiles that represent this same business elsewhere on the web. Google uses
 * sameAs to merge them into one entity, which is the main lever on brand-name
 * ranking for a business whose name is also its industry term.
 *
 * Add each URL as the profile goes live; the schema omits sameAs while empty
 * rather than publishing an empty array. Never add a guessed or placeholder URL.
 * The working list is in SEO-CHECKLIST.md.
 */
export const SAME_AS: string[] = [];
