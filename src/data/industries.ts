/**
 * Industry sub-pages ("Solutions for every industry").
 * List adapted from the Xometry reference for a wire-EDM/CNC jobbing business:
 * Agriculture, Consumer Goods and Education dropped (weak fit), Engineering
 * renamed General Engineering, Tool & Die Making added (the core wire-EDM
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
    slug: "tool-die-making",
    icon: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/>',
    name: "Tool & Die Making",
    short: "Punches, dies and mould components",
    lede: "Wire EDM was built for the tool room. We cut punches, dies, form tools and mould components after heat treatment, so the profile that leaves the machine is the profile that runs in the press.",
    machined: [
      "Matched punch-and-die sets cut from the same program",
      "Die sections, strippers and form tools in hardened tool steel",
      "Mould inserts, cores and ejector details",
      "Broken-tap and damaged-cavity rescue by spark erosion",
      "Regrinds and clearance adjustments on existing tooling",
    ],
    fit: "Cutting after hardening removes the distortion risk of heat treatment, and a wire-cut clearance is uniform around the whole profile. The difference between a die that runs and a die that burrs. Every tool is designed and built to exact specification, and delivered on time, every time.",
  },
  {
    slug: "sheet-metal-components",
    icon: '<path d="M3 17.5h10.5L20.5 11"/><path d="M3 13h8.5L18 6.5"/><path d="M3 13v4.5M20.5 11v-4.5h-2.5"/>',
    name: "Sheet Metal Components",
    short: "Press tooling and wire-cut profiles for sheet metal work",
    lede: "Sheet metal manufacturing lives or dies on its tooling and its prototypes. We machine the punches, dies and form tools that shape sheet metal, we wire-cut finished component profiles directly from stacked blanks when the quantity doesn't justify a press tool, and our laser cuts flat profiles clean from your CAD file.",
    machined: [
      "Punch-and-die sets for blanking, piercing and forming",
      "Enclosures, brackets, housings and custom industrial parts",
      "Prototype and low-volume profiles wire-cut from stacked sheets, burr-free",
      "Laser-cut profiles with clean edges, in thin gauge through to plate",
      "Press-brake tooling, form blocks and bend fixtures",
      "Locating jigs and welding fixtures for fabricated assemblies",
      "Regrinds and clearance corrections on worn press tooling",
    ],
    fit: "High-accuracy cutting and forming, clean edges and consistent profiles, repeated identically across small and large batches. A wire or laser cut ships small quantities without waiting for a press tool; when volumes grow, the same profile programs become the punch and die.",
  },
  {
    slug: "aerospace-defence",
    icon: '<path d="M21.5 2.5L11 13"/><path d="M21.5 2.5l-6.5 19-3.5-8.5L3 9.5l18.5-7z"/>',
    name: "Aerospace & Defence",
    short: "Exotic alloys, burr-free, no cutting force",
    lede: "Aerospace and defence parts combine hard, expensive alloys with geometry that cannot tolerate burrs or mechanical stress. EDM removes metal without touching the part. No cutting force, no work hardening, no burr. And in these sectors confidentiality is non-negotiable: proprietary designs, technical drawings and classified concepts are handled under strict confidentiality protocols.",
    machined: [
      "Titanium and heat-resistant alloy components",
      "Hardened steel tooling and complex geometries to defence standards",
      "Thin-wall and lattice features that would deflect under a cutter",
      "Fixtures and tooling for composite and sheet-metal work",
      "Small-batch machined details to drawing, with secure handling of proprietary designs",
    ],
    fit: "Zero cutting force means thin webs stay flat and delicate features survive machining; spark erosion handles alloys that wear out conventional tooling. Your intellectual property stays secure, protected and never shared beyond authorised channels. Work we're proud of: it strengthens Australia's defence readiness and aerospace innovation.",
  },
  {
    slug: "medical",
    icon: '<circle cx="12" cy="12" r="8.5"/><path d="M12 8.5v7M8.5 12h7"/>',
    name: "Medical",
    short: "Stainless and titanium, edges that pass inspection",
    lede: "Medical work is small, exact and unforgiving of burrs. We machine stainless, titanium and medical-grade alloy components where surface finish and edge quality are not negotiable, and we build the press tools and dies that keep medical device production stable and consistent.",
    machined: [
      "Surgical instrument components in stainless and titanium",
      "Custom press tools and long-life dies for medical device manufacture",
      "Fine slots, apertures and profiles in delicate parts",
      "Prototype and small-batch device components to drawing",
      "Repeatable production for critical medical assemblies",
    ],
    fit: "EDM leaves no tool pressure and no work hardening, and skim passes deliver the burr-free, fine-finish edges medical inspection demands. Stable, consistent output for products used in hospitals, clinics and surgical environments, with proprietary designs and patented mechanisms handled under strict confidentiality at every stage.",
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
      "Laser-cut components for clean, accurate fits",
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
    fit: "One business covers the loop: mill the fixture, turn the shaft, wire-cut the hardened spline. One purchase order, one accountable machinist.",
  },
  {
    slug: "electronics",
    icon: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9.5 7V3.5M14.5 7V3.5M9.5 20.5V17M14.5 20.5V17M7 9.5H3.5M7 14.5H3.5M20.5 9.5H17M20.5 14.5H17"/>',
    name: "Electronics",
    short: "Fine-feature tooling for connectors and stampings",
    lede: "Electronics and electrical manufacturing runs on stamping dies and fine-feature tooling. Wire EDM cuts the small, exact profiles that form connectors, lead frames and shielding, and our machining and sheet metal work covers the housings and enclosures around them.",
    machined: [
      "Stamping and forming dies for connectors and terminals",
      "Fine apertures and slots in hardened tool steel",
      "Precision housings and enclosures for electrical assemblies",
      "Conductive and non-conductive component machining",
      "Assembly jigs and test fixtures",
      "Heat sinks and enclosures machined to drawing",
    ],
    fit: "A fine wire reaches features no cutter can, and its tight inside radius keeps fine die clearances honest.",
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
    fit: "Milling, turning and EDM in one business means a hardened keyway or spline doesn't add a second supplier to your build schedule.",
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
      "Smooth surface finishes for friction-critical applications",
      "Locating fixtures and pallet details",
      "Prototype-to-batch mechanical components",
    ],
    fit: "Wire EDM holds the positional accuracy automated assemblies depend on, and repeats it identically from the first part to the fiftieth.",
  },
  {
    slug: "manufacturers",
    icon: '<path d="M3.5 20.5v-8l5 3v-3l5 3v-3l7 4v4h-17z"/><path d="M5.5 12.5v-8h3v8"/>',
    name: "Manufacturers",
    short: "Food lid containers, packaging tooling and production parts",
    lede: "Production manufacturers run on tooling that repeats. Food lid containers, packaging formats and consumer products all come off dies, moulds and change parts that we machine, maintain and replace.",
    machined: [
      "Forming and blanking dies for food lid containers and packaging",
      "Mould inserts, cores and cavity details for container tooling",
      "Filling and sealing line change parts, cut to the product format",
      "Cutting, crimping and scoring tools for lids and closures",
      "Replacement production spares reverse-measured from worn parts",
    ],
    fit: "Container tooling wears in high-volume production. Wire EDM re-cuts hardened dies and mould details without re-heat-treatment, so a worn format goes back on the line as the profile it started with.",
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
