/**
 * The six solutions, in one place. Previously duplicated across the header
 * mega-menu, the footer and the industry-page sidebar, which is how
 * /quality-assurance/ and /reverse-engineering/ ended up missing from two of
 * the three lists.
 */
export interface Solution {
  href: string;
  /** Client wording, used in navigation and link lists. */
  label: string;
  /** Plain service name for schema.org, where a slogan is wrong. */
  serviceName: string;
  note: string;
  /** Inner SVG markup, 24x24, stroke-based. */
  icon: string;
}

export const solutions: Solution[] = [
  {
    href: "/edm-wire-cutting/",
    label: "EDM Wire Cutting Solution",
    serviceName: "EDM Wire Cutting",
    note: "±0.003 mm profiles in hardened metal",
    icon: '<path d="M12 2.5v11"/><rect x="4" y="13.5" width="16" height="7" rx="1"/><path d="M9 10.5l-2-1.5M15 10.5l2-1.5M9.5 7L8 6M14.5 7L16 6"/>',
  },
  {
    href: "/milling/",
    label: "Milling solutions",
    serviceName: "CNC Milling",
    note: "jigs, fixtures, die sets and spares",
    icon: '<rect x="9" y="3" width="6" height="9" rx="1"/><path d="M9 12l3 8.5 3-8.5"/><path d="M12 3v9"/>',
  },
  {
    href: "/turning/",
    label: "Turning solutions",
    serviceName: "CNC Turning",
    note: "shafts, bushes, pins and threads",
    icon: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/><path d="M12 3.5v4M4.6 16.2l3.5-2M19.4 16.2l-3.5-2"/>',
  },
  {
    href: "/edm-drills/",
    label: "EDM Drills",
    serviceName: "EDM Hole Drilling",
    note: "small hole EDM from Ø 0.3 mm, burr-free",
    icon: '<path d="M6 3.5h12M12 3.5v4"/><path d="M12 7.5l-2.5 4h5L12 15.5"/><path d="M5 20.5h14"/>',
  },
  {
    href: "/reverse-engineering/",
    label: "Reverse Engineering",
    serviceName: "Reverse Engineering",
    note: "bring the sample, we measure, design and deliver",
    icon: '<path d="M4 8.5L12 4l8 4.5-8 4.5-8-4.5z"/><path d="M4 8.5V15l8 4.5 8-4.5V8.5"/><path d="M12 13v6.5"/>',
  },
  {
    href: "/quality-assurance/",
    label: "Quality Assurance",
    serviceName: "Quality Assurance",
    note: "measured, verified and documented before delivery",
    icon: '<path d="M12 3l7 3v5c0 4.5-3 8-7 9.5C8 19 5 15.5 5 11V6l7-3z"/><path d="M9 11.5l2.2 2.2L15.5 9"/>',
  },
];

export const solutionHrefs = solutions.map((s) => s.href);

/** The other five solutions, for cross-linking off a solution page. */
export function otherSolutions(href: string): Solution[] {
  return solutions.filter((s) => s.href !== href);
}
