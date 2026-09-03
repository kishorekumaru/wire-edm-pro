/**
 * BreadcrumbList builder. Google renders the trail in place of the raw URL in
 * search results, and uses it to work out site hierarchy, which is one of the
 * inputs to sitelinks.
 */
export interface Crumb {
  name: string;
  /** Site-root-relative, with trailing slash. */
  href: string;
}

export function breadcrumbList(crumbs: Crumb[], site: URL | undefined): Record<string, unknown> {
  const abs = (href: string) => (site ? new URL(href, site).href : href);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", href: "/" }, ...crumbs].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: abs(crumb.href),
    })),
  };
}
