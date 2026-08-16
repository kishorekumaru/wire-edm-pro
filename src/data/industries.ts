/**
 * Industry sub-pages ("Solutions for every industry").
 * List adapted from the Xometry reference for a wire-EDM/CNC jobbing workshop:
 * Agriculture, Consumer Goods and Education dropped (weak fit), Engineering
 * renamed General Engineering, Tooling & Diemaking added (the core wire-EDM
 * industry). Copy is process-grounded. No fabricated client claims.
 */
export interface Industry {
  slug: string;
  name: string;
  short: string; // one-liner for menus/cards
  lede: string;
  machined: string[]; // typical parts we machine
  fit: string; // why our processes suit this industry
  icon: string; // inner SVG markup (24x24, stroke-based)
}

export const industries: Industry[] = [
  {
    slug: "tooling-diemaking",
    icon: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/>',
    name: "Tooling & Diemaking",
    short: "Punches, dies and mould components",
    lede: "Wire EDM was built for the tool room. We cut punches, dies, form tools and mould components after heat treatment, so the profile that leaves the machine is the profile that runs in the press.",
    machined: [
      "Matched punch-and-die sets cut from the same program",
      "Die sections, strippers and form tools in hardened tool steel",
      "Mould inserts, cores and ejector details",
      "Broken-tap and damaged-cavity rescue by spark erosion",
      "Regrinds and clearance adjustments on existing tooling",
    ],
    fit: "Cutting after hardening removes the distortion risk of heat treatment, and a wire-cut clearance is uniform around the whole profile. The difference between a die that runs and a die that burrs.",
  },
  {
    slug: "aerospace-defence",
    icon: '<path d="M21.5 2.5L11 13"/><path d="M21.5 2.5l-6.5 19-3.5-8.5L3 9.5l18.5-7z"/>',
    name: "Aerospace & Defence",
    short: "Exotic alloys, burr-free, no cutting force",
    lede: "Aerospace parts combine hard, expensive alloys with geometry that cannot tolerate burrs or mechanical stress. EDM removes metal without touching the part. No cutting force, no work hardening, no burr.",
    machined: [
      "Titanium and heat-resistant alloy components",
      "Thin-wall and lattice features that would deflect under a cutter",
      "Fixtures and tooling for composite and sheet-metal work",
      "Small-batch machined details to drawing",
    ],
    fit: "Zero cutting force means thin webs stay flat and delicate features survive machining; spark erosion handles alloys that wear out conventional tooling.",
  },
  {
    slug: "medical-dental",
    icon: '<circle cx="12" cy="12" r="8.5"/><path d="M12 8.5v7M8.5 12h7"/>',
    name: "Medical & Dental",
    short: "Stainless and titanium, edges that pass inspection",
    lede: "Medical and dental work is small, exact and unforgiving of burrs. We machine stainless and titanium components where surface finish and edge quality are not negotiable.",
    machined: [
      "Surgical instrument components in stainless and titanium",
      "Tooling and dies for device manufacture",
      "Fine slots, apertures and profiles in delicate parts",
      "Prototype and small-batch device components to drawing",
    ],
    fit: "EDM leaves no tool pressure and no work hardening, and skim passes deliver the burr-free, fine-finish edges medical inspection demands.",
  },
  {
    slug: "mining",
    icon: '<path d="M4 20L14.5 9.5"/><path d="M8 5.5c3.5-2.2 9-1.7 12 1.5"/><path d="M8 5.5l2.5 2.5M20 7l-2.5 2.5"/>',
    name: "Mining",
    short: "Hardened wear parts and fast spares",
    lede: "Mining equipment eats parts, and OEM lead times are measured in months. We machine hardened and abrasion-resistant spares. Often reverse-measured from the worn component itself.",
    machined: [
      "Wear plates, bushes and hardened drive components",
      "Splines, keyways and couplings cut after hardening",
      "Replacement gears and sprockets from worn samples",
      "Repair machining on seized or damaged assemblies",
    ],
    fit: "Wire EDM cuts material that has already been through heat treatment, so critical spares don't wait on soft-state machining and re-hardening cycles.",
  },
  {
    slug: "automotive",
    icon: '<path d="M3 16v-2.5L5.5 9h9l3.5 4.5H21V16"/><circle cx="7.5" cy="16.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/>',
    name: "Automotive",
    short: "Prototypes, tooling and motorsport one-offs",
    lede: "From production tooling to one-off motorsport components, automotive work needs accurate parts on firm dates. We machine the jigs, dies and precision details that keep vehicle programs moving.",
    machined: [
      "Press tooling and checking fixtures for panel work",
      "Splined shafts, gears and driveline details",
      "Prototype and low-volume machined components",
      "Motorsport one-offs in steels, alloys and titanium",
    ],
    fit: "One workshop covers the loop: mill the fixture, turn the shaft, wire-cut the hardened spline. One purchase order, one accountable machinist.",
  },
  {
    slug: "electronics",
    icon: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9.5 7V3.5M14.5 7V3.5M9.5 20.5V17M14.5 20.5V17M7 9.5H3.5M7 14.5H3.5M20.5 9.5H17M20.5 14.5H17"/>',
    name: "Electronics",
    short: "Fine-feature tooling for connectors and stampings",
    lede: "Electronics manufacturing runs on stamping dies and fine-feature tooling. Wire EDM cuts the small, exact profiles that form connectors, lead frames and shielding.",
    machined: [
      "Stamping and forming dies for connectors and terminals",
      "Fine apertures and slots in hardened tool steel",
      "Assembly jigs and test fixtures",
      "Heat sinks and enclosures machined to drawing",
    ],
    fit: "A ~0.25 mm wire reaches features no cutter can, and the kerf's tight inside radius keeps fine die clearances honest.",
  },
  {
    slug: "energy",
    icon: '<path d="M13 2.5L5.5 13.5H11l-2 8L16.5 10.5H11l2-8z"/>',
    name: "Energy",
    short: "Power generation and renewables spares",
    lede: "Energy plant runs old equipment hard and can't stop for long. We machine replacement and repair components in hardened and heat-resistant materials for power generation and renewables.",
    machined: [
      "Turbine-adjacent and generator hardware to drawing",
      "Hardened bushes, pins and coupling components",
      "Valve and pump details in stainless and exotic alloys",
      "Obsolete spares reverse-measured from worn parts",
    ],
    fit: "Spark erosion doesn't care how hard or heat-resistant the alloy is. The parts that are hardest to source are the ones EDM handles best.",
  },
  {
    slug: "machine-building",
    icon: '<circle cx="12" cy="12" r="3.2"/><path d="M12 5.2V2.8M12 21.2v-2.4M18.8 12h2.4M2.8 12h2.4M16.8 7.2l1.7-1.7M5.5 18.5l1.7-1.7M16.8 16.8l1.7 1.7M5.5 5.5l1.7 1.7"/>',
    name: "Machine Building",
    short: "The precision details inside custom machines",
    lede: "Machine builders need dozens of accurate one-offs on a schedule: shafts, gears, cams, fixtures and the hardened details in between. We machine them to drawing, in sequence, under one roof.",
    machined: [
      "Shafts, bushes, cams and custom fasteners",
      "Gears, splines and keyways. Including hardened, by EDM",
      "Base plates, jigs and locating fixtures",
      "Guarding and bracketry machined to fit",
    ],
    fit: "Milling, turning and EDM in one workshop means a hardened keyway or spline doesn't add a second supplier to your build schedule.",
  },
  {
    slug: "robotics-automation",
    icon: '<path d="M4 21h9M8.5 21v-5.5L14 10l3.5 3.5"/><circle cx="8.5" cy="15" r="1.6"/><circle cx="17.5" cy="13.5" r="1.6"/><circle cx="14" cy="10" r="1.6"/><path d="M14 8.4V4.5h4"/>',
    name: "Robotics & Automation",
    short: "Exact fits for moving assemblies",
    lede: "Automation lives or dies on repeatable fits. Grippers that locate, gears that mesh, fixtures that return to zero. We machine the precision components that keep automated cells accurate.",
    machined: [
      "Gripper fingers, end-effector details and tooling plates",
      "Precision gears, pulleys and actuator components",
      "Locating fixtures and pallet details",
      "Prototype-to-batch mechanical components",
    ],
    fit: "Wire EDM holds the positional accuracy automated assemblies depend on, and repeats it identically from the first part to the fiftieth.",
  },
  {
    slug: "general-engineering",
    icon: '<path d="M14.5 6.5a4.2 4.2 0 0 0-5.6 5.6L3.5 17.5 6.5 20.5l5.4-5.4a4.2 4.2 0 0 0 5.6-5.6L14.9 12l-2.9-2.9 2.5-2.6z"/>',
    name: "General Engineering",
    short: "One-offs, repairs and everything between",
    lede: "Not every job fits a category. Broken machine parts, obsolete spares, a bracket sketched on paper, a hardened shaft that needs one more keyway. General engineering is the work that keeps everything else running.",
    machined: [
      "Replacement parts reverse-measured from worn samples",
      "Repairs and modifications to hardened components",
      "One-off brackets, adaptors and couplings",
      "Small production batches to drawing",
    ],
    fit: "One part is a normal order here. Send a drawing, a STEP file or the broken part itself. We quote from real information and machine to it.",
  },
];
