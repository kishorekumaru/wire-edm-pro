# Graph Report - wire-edm-pro  (2026-09-19)

## Corpus Check
- Large corpus: 229 files · ~2,359,255 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 831 nodes · 1166 edges · 99 communities (50 shown, 49 thin omitted)
- Extraction: 77% EXTRACTED · 20% INFERRED · 3% AMBIGUOUS · INFERRED: 236 edges (avg confidence: 0.88)
- Token cost: 782,644 input · 0 output

## Community Hubs (Navigation)
- Wire EDM Capabilities & Industries
- Business Facts & Contact Details
- Frontend Design Taste Skills
- CNC Milling & Turning Equipment
- Unconfirmed Content Facts
- Astro Build Configuration
- Metrology & Reverse Engineering
- Website Proposal Overview
- Industries Data & Routing
- Site Data & Base Layout
- Fanuc Robocut Product Photos
- Service Page Template
- Local SEO & NAP Citations
- Office & Workshop Floor Photos
- Quality Assurance Inspection
- Sitemap Generation Script
- S3 Deploy Workflow
- Contact Page & Form Removal
- Brandkit Skill Rules
- Wire EDM Cutting Imagery
- ecoMill 600 V Specifications
- Design System & Turnkey Specs
- Workshop Mezzanine Photos
- EDM Hole Drilling Machine
- Makino Wire EDM Photos
- Industry Pages & Mega Menu
- Hero 3D & Static Deployment
- Brand Mark & Sample Parts
- Fanuc Robocut Shop Photos
- Header & Solutions Data
- Analytics & Consent Mode
- Stale Deployment Docs
- S3 Bucket & Domain Setup
- Logo & Open Graph Assets
- Makino Control Panel Photos
- Workshop Aisle Photography
- Workshop Bench Photos
- Building Exterior Photos
- Home Page Content Facts
- Search Console Tasks
- Reverse Engineering Page Specs
- Shop Floor Machine Photos
- EDM Wire Cutting Rename
- Build Gate & Project Identity
- Facility Interior Photos
- Wire EDM Machine Provenance
- Service Page Structure Specs
- TypeScript Configuration
- CSS Tokens & Primitives
- Wire EDM Logo Variants
- Copy Density Rules
- Parent Template Exclusion
- Founding Date Claim
- Client Logo Status
- Surface Roughness Spec
- Industries Served Pages
- Change Metadata
- Rejected Framework Alternatives
- Astro Framework Decision
- Greenfield Design Context
- Vanilla CSS Decision
- Deployment Shape Decision
- Self-Hosted Font Decision
- Form Endpoint Decision
- Project Goals
- Hallmark Design Review
- Procedural Three.js Decision
- Hero Design History
- Hero Performance Budget
- Migration & Rollback Plan
- Project Non-Goals
- Open Questions
- Page Architecture Decision
- Risk: 3D Performance
- Risk: Astro Version Churn
- Risk: Form Service Dependency
- Risk: Placeholder Facts
- Risk: Competitor Crawl Blocked
- Sample Part Geometry
- In-House Copy Authorship
- Capability: Contact Page
- Capability: Design System
- Capability: Hero Visualization
- Capability: Home Page
- Capability: Service Pages
- Capability: Static Deployment
- Proposal: Corporate Website
- Competitor Reference: Dimac
- Greenfield Impact Assessment
- Industries Menu Expansion
- Sapphire Veil Palette
- Scope Growth to Seven Pages
- Two-Tier Navigation Model
- Market Rationale
- Competitor Reference: Xometry
- Requirement: About Page
- Requirement: FAQs Page
- Requirement: Two-Tier Navigation
- Bing & Apple Listings

## God Nodes (most connected - your core abstractions)
1. `WIRE EDM PRO (Sydney precision engineering company)` - 32 edges
2. `Wire EDM Cutting` - 30 edges
3. `EDM Wire Cutting Solution page (/wire-edm/)` - 28 edges
4. `Wire EDM (Electrical Discharge Machining) service` - 20 edges
5. `Industries hub page (/industries/)` - 15 edges
6. `Quality Assurance page (/quality-assurance/)` - 14 edges
7. `Clean Machining Bay / Office-Side Workshop Photo (800w webp)` - 14 edges
8. `CNC Milling service` - 13 edges
9. `Laser Cutting service` - 13 edges
10. `CNC Turning service` - 12 edges

## Surprising Connections (you probably didn't know these)
- `CNC Milling (png, source asset outside public/)` --semantically_similar_to--> `CNC Milling In Cut (ecoMill 600 V, end mill with flood coolant)`  [INFERRED] [semantically similar]
  images/cnc-milling.png → public/images/cnc-milling-800.webp
- `CNC Turning (png, source asset outside public/)` --semantically_similar_to--> `CNC Turning In Cut (3-jaw chuck, carbide insert, spiral chips)`  [INFERRED] [semantically similar]
  images/CNC-turning.png → public/images/cnc-turning-800.webp
- `Makino U6 H.E.A.T. Wire EDM, Tighter Crop (webp, 800w)` --semantically_similar_to--> `Makino U6 H.E.A.T. Wire EDM, Wide Shopfloor Crop`  [INFERRED] [semantically similar]
  public/images/makino-square-800.webp → images/makino-rectangle.png
- `Makino U6 H.E.A.T. Wire EDM, Tighter Crop (png, full width)` --semantically_similar_to--> `Makino U6 H.E.A.T. Wire EDM, Tighter Crop (webp, 800w)`  [INFERRED] [semantically similar]
  images/makino-square.png → public/images/makino-square-800.webp
- `Clean Machining Bay / Office-Side Workshop Photo (800w webp)` --conceptually_related_to--> `Office Interior`  [AMBIGUOUS]
  public/images/wire-edm-office-800.webp → images/Office internal.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Four-pass S3 deploy cache-control strategy** — github_workflows_deploy_hashed_assets, github_workflows_deploy_images_fonts, github_workflows_deploy_html, github_workflows_deploy_remaining, github_workflows_deploy_bucket [EXTRACTED 1.00]
- **Unconfirmed capability claims pending client sign-off** — content_todo_kerf_width, content_todo_milling_turning_tolerance, content_todo_laser_cutting_capacity, content_todo_edm_hole_drilling_diameter, content_todo_mastercam, content_todo_certifications, content_todo_edm_cutting_page_claims, content_todo_about_page_slogan, content_todo_press_tool_sheet_metal [EXTRACTED 1.00]
- **Off-site local entity confirmation flow** — seo_checklist_canonical_nap, seo_checklist_google_business_profile, seo_checklist_bing_apple, seo_checklist_au_directories, seo_checklist_social_profiles, seo_checklist_same_as_array [EXTRACTED 1.00]
- **Turnkey Lifecycle Shared Across Home and Reverse Engineering** — openspec_changes_turnkey_solutions_update_specs_turnkey_lifecycle_spec_turnkey_lifecycle, openspec_changes_turnkey_solutions_update_design_turnkeyflow_component_decision, openspec_changes_turnkey_solutions_update_specs_reverse_engineering_page_spec_reverse_engineering_page, openspec_changes_turnkey_solutions_update_specs_quality_assurance_page_spec_quality_assurance_page, openspec_changes_create_corporate_website_specs_home_page_spec_home_page_capability [EXTRACTED 1.00]
- **No-Backend Static Hosting Constraint Shapes Multiple Capabilities** — openspec_changes_create_corporate_website_specs_static_deployment_spec_fully_static_build, openspec_changes_create_corporate_website_specs_static_deployment_spec_directory_index_routing, openspec_changes_create_corporate_website_specs_contact_page_spec_serverless_enquiry_form, openspec_changes_create_corporate_website_specs_contact_page_spec_static_location_map, openspec_changes_create_corporate_website_specs_static_deployment_spec_s3_hosting [INFERRED 0.85]
- **Graceful Degradation Pattern Across Hero and Contact** — openspec_changes_create_corporate_website_specs_hero_visualization_spec_webgl_fallback, openspec_changes_create_corporate_website_specs_hero_visualization_spec_reduced_motion_respect, openspec_changes_create_corporate_website_specs_contact_page_spec_mailto_fallback, openspec_changes_create_corporate_website_specs_hero_visualization_spec_lazy_3d_performance_budget [INFERRED 0.85]
- **420 mm extreme-height wire cutting capability** — docs_wire_edm_pro_web_content_machine_makino_wire_edm, docs_wire_edm_pro_web_content_spec_heat_function, docs_wire_edm_pro_web_content_spec_cutting_height_420mm, docs_wire_edm_pro_web_content_service_wire_edm, docs_wire_edm_pro_web_content_page_wire_cutting [EXTRACTED 1.00]
- **DMG MORI ecoMill 600 V milling specification set** — docs_wire_edm_pro_web_content_machine_dmg_mori_ecomill_600v, docs_wire_edm_pro_web_content_spec_spindle_12000_rpm, docs_wire_edm_pro_web_content_spec_working_envelope_600_560_510, docs_wire_edm_pro_web_content_spec_table_load_600kg, docs_wire_edm_pro_web_content_spec_siemens_slimline, docs_wire_edm_pro_web_content_service_cnc_milling [EXTRACTED 1.00]
- **Turnkey seven-step lifecycle shared by Home and Reverse Engineering** — docs_wire_edm_pro_website_overview_turnkey_lifecycle, docs_wire_edm_pro_website_overview_turnkey_step_1_proposal, docs_wire_edm_pro_website_overview_turnkey_step_2_mastercam_design, docs_wire_edm_pro_website_overview_turnkey_step_3_design_approval, docs_wire_edm_pro_website_overview_turnkey_step_4_material_procurement, docs_wire_edm_pro_website_overview_turnkey_step_5_manufacturing, docs_wire_edm_pro_website_overview_turnkey_step_6_quality_control, docs_wire_edm_pro_website_overview_turnkey_step_7_delivery, docs_wire_edm_pro_website_overview_mastercam, docs_wire_edm_pro_website_overview_page_home, docs_wire_edm_pro_website_overview_page_reverse_engineering [EXTRACTED 1.00]
- **Building Exterior Responsive Image Set (jpg/webp at 800w and 1600w)** — public_images_building_exterior_800_facility, public_images_building_exterior_800_jpg_variant, public_images_building_exterior_jpg_variant, public_images_building_exterior_webp_variant [INFERRED 0.95]
- **Photography Evidencing Precision Machining Capability** — images_circle_edm_part, images_cnc_machine, concept_wire_edm_cutting, concept_cnc_milling, concept_precision_machined_component [INFERRED 0.85]
- **Company Presence and Identity Imagery (logo, premises, signage)** — public_apple_touch_icon_logo, public_images_building_exterior_800_facility, concept_wire_edm_pro_brand_identity, concept_workshop_facility, concept_sydney_industrial_unit [INFERRED 0.75]
- **CNC Service Page Photography Set (milling, turning, machining centre)** — public_images_cnc_milling_800_photo, public_images_cnc_turning_800_photo, public_images_cnc_machining_centre_800_photo, concept_cnc_milling, concept_cnc_turning [INFERRED 0.85]
- **In-Cut Subtractive Machining Depiction (tool, workholding, coolant, chips)** — public_images_cnc_milling_800_photo, public_images_cnc_turning_800_photo, concept_end_mill_tooling, concept_carbide_insert_tooling, concept_flood_coolant, concept_three_jaw_chuck_workholding, concept_vice_and_fixture_workholding [INFERRED 0.85]
- **Cube Poster Hero Fallback Still and Variants** — public_images_cube_poster_photo, public_images_cube_poster_png, concept_three_js_hero_sample_part, concept_precision_machined_sample_part [INFERRED 0.85]
- **ecoMill 600 V photo responsive variant set** — images_ecomill_updated, public_images_ecomill_600v_800_webp, public_images_ecomill_600v_800_jpg, public_images_ecomill_600v_jpg, public_images_ecomill_600v_webp [INFERRED 0.95]
- **EDM drilling photo responsive variant set** — images_drill_wire_edm_pro, public_images_edm_drilling_800_webp, public_images_edm_drilling_800_jpg, public_images_edm_drilling_jpg, public_images_edm_drilling_webp [INFERRED 0.95]
- **Machine capability photography backing the service pages** — public_images_edm_drilling_800_webp, public_images_ecomill_600v_800_webp, concept_edm_hole_drilling, concept_cnc_milling, concept_machine_shop_facility [INFERRED 0.85]
- **Fanuc Robocut wire EDM machine product photography set** — public_images_fanuc_c600ia_800, public_images_fanuc_robocut_c600ia_800, public_images_fanuc_robocut_0id_800, concept_manufacturer_product_shot [INFERRED 0.85]
- **Wire EDM capability imagery: machines plus the cutting process they perform** — public_images_edm_spark_closeup_800, public_images_fanuc_c600ia_800, public_images_fanuc_robocut_0id_800, public_images_fanuc_robocut_c600ia_800, concept_wire_edm_cutting [INFERRED 0.85]
- **Spark erosion mechanics depicted: electrode wire, spark discharge, dielectric flush** — public_images_edm_spark_closeup_800, concept_edm_spark_erosion, concept_dielectric_flushing, concept_wire_edm_cutting [EXTRACTED 1.00]
- **Fanuc Robocut Wire EDM Machine Fleet** — images_img_2313_photo, images_img_2314_photo, concept_fanuc_robocut_wire_edm_machine, concept_wire_edm_cutting [EXTRACTED 1.00]
- **Site Brand Mark Icon Set** — public_favicon_mark, public_favicon_32_icon, concept_brand_mark [INFERRED 0.85]
- **Workshop Floor Documentation Photos** — images_img_2313_photo, images_img_2314_photo, concept_workshop_floor, concept_tooling_storage, concept_cnc_control_console [INFERRED 0.85]
- **Wire EDM Pro workshop machine fleet (wire EDM, milling, turning, inspection)** — images_img_2315, images_img_2316, images_img_2317, images_img_2318, concept_workshop_floor [INFERRED 0.85]
- **Single-bay tilt-panel facility: mezzanine, racking, materials handling, machine row** — images_img_2317, images_img_2318, concept_mezzanine_and_office_area, concept_consumables_and_tooling_storage, concept_materials_handling [INFERRED 0.85]
- **Branded CNC equipment visible on machine bodies (Makino, DMG MORI, Easson)** — concept_makino_u6_heat_wire_edm_machine, concept_dmg_mori_ecomill_600v, concept_easson_optical_measuring_machine, concept_cnc_machine_control_interface [INFERRED 0.75]
- **Wire EDM Pro Facility and Equipment Photography** — images_img_2319_workshop_floor, images_img_2320_premises_exterior, images_makino_latest_wire_edm_machine, concept_toolroom_workshop_facility [INFERRED 0.85]
- **Navigation Logo Asset Set (webp/png variants)** — public_images_logo_nav_160_navigation_logo, public_images_logo_nav_png_variant, public_images_logo_nav_webp_variant, concept_brand_identity [EXTRACTED 1.00]
- **Makino U6 H.E.A.T. Wire EDM Photo Set** — images_makino_rectangle_photo, public_images_makino_square_800_photo, public_images_makino_wire_edm_800_photo, concept_makino_u6_heat_wire_edm [EXTRACTED 1.00]
- **Sydney Facility Capability Photography** — images_makino_rectangle_photo, images_office_internal_photo, concept_machine_shop_floor, concept_mezzanine_workshop_facility, concept_cnc_machining_centre [INFERRED 0.85]
- **Makino Square Crop Responsive Variant Family** — public_images_makino_square_800_photo, images_makino_square_png_variant, public_images_makino_square_800_jpg_variant, public_images_makino_square_jpg_variant, public_images_makino_square_png_variant, public_images_makino_square_webp_variant [INFERRED 0.95]
- **Metrology and Quality Assurance Equipment Depicted Across the QC Imagery** — images_quality_assurance_photo, images_qc_wireedm_pro_photo, public_images_qc_wireedm_800_photo, concept_coordinate_measuring_machine, concept_optical_comparator, concept_micrometer_measurement, concept_gauge_blocks, concept_quality_assurance [INFERRED 0.85]
- **QC Wire EDM Optical Comparator Photo and Its Format/Width Variants** — images_qc_wireedm_pro_photo, public_images_qc_wireedm_800_photo, public_images_qc_wireedm_800_jpg, public_images_qc_wireedm_jpg, public_images_qc_wireedm_webp [INFERRED 0.95]
- **Open Graph Card Composes Machine Photography, Logo Lockup and Wire EDM Positioning** — public_images_og_default_card, public_images_og_default_jpg, concept_brand_identity, concept_fanuc_robocut_wire_edm_machine, concept_wire_edm_cutting [INFERRED 0.85]
- **Dark Studio Metrology Hero Look - granite surface plate, black machine enclosure, cool rim light, brushed steel part** — public_images_quality_assurance_banner_800_cmm_inspection_banner, images_reverse_eng_banner_3d_scan_valve_body_banner_wide, public_images_reverse_engineering_banner_800_3d_scan_valve_body_banner [INFERRED 0.85]
- **Reverse Engineering Banner Asset Family - one master render cropped and re-encoded across png/jpg/webp at 800w and 1600w** — images_reverse_eng_banner_3d_scan_valve_body_banner_wide, public_images_reverse_engineering_banner_800_3d_scan_valve_body_banner, public_images_reverse_engineering_banner_800_jpg_variant, public_images_reverse_engineering_banner_jpg_variant, public_images_reverse_engineering_banner_webp_variant [EXTRACTED 1.00]
- **Machined Geometry Showcase - tight-tolerance pockets, bores and slots used as the visual proof of capability** — public_images_sample_cube_3d_sample_part_poster, public_images_quality_assurance_banner_800_cmm_inspection_banner, concept_precision_machining [INFERRED 0.75]
- **Images Depicting the Wire EDM Process and Its Output** — images_wirededm1_stock_render, images_wireedm1_actual_machine_photo, public_images_square_mesh_texture, concept_wire_edm_cutting [INFERRED 0.85]
- **Hero 3D Sample Part Poster Asset Set (webp plus png variant)** — public_images_sample_part_3d_poster, public_images_sample_part_3d_png_variant, concept_3d_sample_part, concept_hero_visualization [INFERRED 0.95]
- **Near-Identically Named Wire EDM Images With Different Provenance (generic render vs named-model machine photo)** — images_wirededm1_stock_render, images_wireedm1_actual_machine_photo, concept_fanuc_robocut_wire_edm_machine [INFERRED 0.75]
- **Wire EDM Cutting photo delivered as the project's four-file responsive image set** — public_images_wire_edm_cutting_800_webp, public_images_wire_edm_cutting_800_jpg, public_images_wire_edm_cutting_jpg, public_images_wire_edm_cutting_webp [INFERRED 0.95]
- **Images depicting the wire EDM spark-erosion process: brass wire, spark, flooded workpiece** — images_wireedm2_spark_closeup, public_images_wire_edm_cutting_800_webp, concept_spark_erosion, concept_brass_edm_wire_electrode, concept_dielectric_flushing [INFERRED 0.85]
- **Filenames that do not match their contents: 'WireEdm2' vs 'WireEDM-2-actual' are different subjects, and 'wire-edm-high-res' is the brand logo** — images_wireedm2_spark_closeup, images_wireedm_2_actual_fanuc_robocut, public_images_wire_edm_high_res_logo, images_wire_edm_high_res_png [INFERRED 0.85]
- **Wire EDM Pro Facility Photography Set** — public_images_workshop_floor_800_photo, public_images_workshop_bench_800_photo, public_images_wire_edm_office_800_photo, concept_facility_photography [INFERRED 0.85]
- **Office Photo Filename Variant Group (grouping uncertain)** — images_wireedm_office, images_wireedmoffice, public_images_wire_edm_office_800_photo, public_images_wire_edm_office_webp [INFERRED 0.55]
- **Machine Fleet Depicted Across Facility Photos** — concept_wire_edm_machine, concept_cnc_machining_centre, concept_cnc_control_pendant, concept_machining_bay, concept_workshop_floor [INFERRED 0.85]
- **Workshop Mezzanine Photo Responsive Variant Set** — public_images_workshop_mezzanine_800_photo, public_images_workshop_mezzanine_800_jpg, public_images_workshop_mezzanine_jpg, public_images_workshop_mezzanine_webp [INFERRED 0.95]
- **Facility Scale and Capacity Evidence** — concept_workshop_mezzanine, concept_workshop_floor, concept_cnc_machine_bay, concept_materials_handling_equipment, concept_machining_capacity [INFERRED 0.75]

## Communities (99 total, 49 thin omitted)

### Community 0 - "Wire EDM Capabilities & Industries"
Cohesion: 0.05
Nodes (67): Legacy to CAD conversion (3D STEP/IGES models, 2D blueprints), High-volume production runs, Micron-level accuracy / tight micro-tolerances, Obsolete part replication, Smart nesting for material yield, Submerged cutting in enclosed flushed environment, Flawless finishes: zero burrs, no material distortion, Australian business supporting local manufacturing (+59 more)

### Community 1 - "Business Facts & Contact Details"
Cohesion: 0.06
Nodes (65): Fast turnaround times, Over 25 years of industry experience (since the early 2000s), Industry served: Mining & Energy, Sydney, Australia (business location), Carbide, Hardened steel, About hero: "A workshop that answers the phone." Since the early 2000s, Address: 16/24 Garling Rd, Kings Park NSW 2148 (confirmed) (+57 more)

### Community 2 - "Frontend Design Taste Skills"
Cohesion: 0.05
Nodes (47): Anti-Default Discipline, Brief Inference (Read the Room), One-Line Design Read, Brief to Design System Map, Eyebrow Restraint Rule, Hero Stack Discipline (max 4 text elements), Honesty Rule (official package over hand-rolled CSS), GSAP Horizontal-Pan Canonical Skeleton (+39 more)

### Community 3 - "CNC Milling & Turning Equipment"
Cohesion: 0.06
Nodes (43): Automatic Tool Changer Magazine, Carbide Insert Turning Tool, CNC Control Pendant, CNC Lathe Turret, CNC Machine Control Panel, CNC Milling, DMG MORI, DMG MORI ecoMill 600 V Machining Centre (+35 more)

### Community 4 - "Unconfirmed Content Facts"
Cohesion: 0.07
Nodes (36): Australian English copy, spec figures are client-confirmed facts, public/llms.txt route manifest, SEO handled centrally in BaseLayout, trailing slashes required, UNCONFIRMED: About page slogan and Gandhi customer quote published verbatim, UNCONFIRMED: certifications (ISO 9001 etc.) - none claimed, docs/WIRE EDM PRO-WEB CONTENT.pdf (client content doc, 2026-08-23), Wire EDM cutting height 420 mm (Makino with H.E.A.T), UNCONFIRMED: process-typical spark-erosion claims on /edm-cutting/ (+28 more)

### Community 5 - "Astro Build Configuration"
Cohesion: 0.07
Nodes (30): Inline per-component client JS, reduced-motion aware, Three.js dynamic-import-only hero part, dependencies, astro, three, description, devDependencies, @types/three (+22 more)

### Community 6 - "Metrology & Reverse Engineering"
Cohesion: 0.09
Nodes (33): 3D Sample Part, 3D Scanning and CAD Model Capture, Dedicated Inspection Room, CMM Inspection and Dimensional Metrology, Coordinate Measuring Machine, Dimensional Inspection, Gauge Blocks, Hero Visualization (+25 more)

### Community 7 - "Website Proposal Overview"
Cohesion: 0.08
Nodes (30): Certifications: none claimed, add only if genuinely held, Section 8: content requiring client confirmation, Domain: wireedmpro.com.au (assumed), Scroll reveal animation and count-up process facts, one-shot, disabled for reduced motion, Interactive 3D wire-EDM sample part (spline ring, gear ring, star core) with X/Y/Z readout, Hosted on Amazon S3, no server required, Mastercam (design/CAM platform), Platform: static website (Astro) (+22 more)

### Community 8 - "Industries Data & Routing"
Cohesion: 0.13
Nodes (14): Industries driven from a single data array, steps, industries, Industry, breadcrumbList(), Crumb, breadcrumbs, icon() (+6 more)

### Community 9 - "Site Data & Base Layout"
Cohesion: 0.15
Nodes (16): year, ADDRESS, ADDRESS_LINE, BUSINESS_DESCRIPTION, EMAIL, GEO, PHONE_LANDLINE, PHONE_MOBILE (+8 more)

### Community 10 - "Fanuc Robocut Product Photos"
Cohesion: 0.12
Nodes (21): EDM Spark Erosion, Fanuc CNC Control Pendant, Fanuc Robocut 0iD, Fanuc Robocut C600iA, Manufacturer Product Shot (not client workshop), EDM Spark Closeup (jpg, 1600w), Wire EDM Cutting in Progress - Spark Closeup, EDM Spark Closeup (jpg, 800w) (+13 more)

### Community 11 - "Service Page Template"
Cohesion: 0.13
Nodes (10): Four-file-per-photo picture convention, otherSolutions(), applications, specs, applications, specs, applications, specs (+2 more)

### Community 12 - "Local SEO & NAP Citations"
Cohesion: 0.13
Nodes (15): Business hours Mon-Thu 8:00 am - 4:30 pm, Fri 8:00 am - 12:00 pm, Email wireedmpro@gmail.com, Landline 02 8604 8347 (added 2026-08-25), Mobile 0452 558 052, Street address 16/24 Garling Rd, Kings Park NSW 2148, Section 3: Australian directory citations (tier 1 and tier 2), Section 0: canonical NAP block, character-for-character, On-page entity graph in src/layouts/BaseLayout.astro (+7 more)

### Community 13 - "Office & Workshop Floor Photos"
Cohesion: 0.18
Nodes (14): Cream Machine Pendant Badge (unreadable make) - unverified, Red Machine Badge Reading (possibly Sodick) - unverified, Machining Bay, Mezzanine Workshop Layout, WireEdm-Office (png, hyphenated filename), WireEdmOffice (png, unhyphenated filename), Wire EDM Office (jpg, 800w), Clean Machining Bay / Office-Side Workshop Photo (800w webp) (+6 more)

### Community 14 - "Quality Assurance Inspection"
Cohesion: 0.18
Nodes (14): Optical Profile Projectors (non-contact measurement), Precision metrology instruments: digital micrometers, vernier calipers, height gauges, bore gauges, Strict quality control / systematic batch inspection, Quality Assurance & Inspection, Quality Assurance page (/quality-assurance/), QA checks: dimensions, surface finish, material & hardness, Hardness tester, Height gauges & surface plate (+6 more)

### Community 15 - "Sitemap Generation Script"
Cohesion: 0.19
Nodes (13): ref_node_child_process, ref_node_fs, ref_node_path, DIST, findPages(), lastCommitDate(), lastmodFor(), PAGES (+5 more)

### Community 16 - "S3 Deploy Workflow"
Cohesion: 0.17
Nodes (13): Push-to-main S3 deploy with four cache-control passes, Bucket region us-east-1, CI/CD summary: four sync passes, images & fonts 7 days, Note: apex bucket vs www. site URLs must be aligned, Manual two-pass cache headers (immutable assets, max-age=300 HTML), Required secrets AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, Rollback by re-syncing a previous dist/ or git tag build, Configure AWS credentials, region us-east-1 (+5 more)

### Community 17 - "Contact Page & Form Removal"
Cohesion: 0.18
Nodes (13): Company Contact Information Requirement, Contact Page Capability, mailto: Fallback Path, Serverless-Compatible Enquiry Form, Static Location Map Visual, WebGL Unavailable Static Image Fallback, Enquiry CTA on Every Service Page, Per-Route index.html Directory Format (+5 more)

### Community 18 - "Brandkit Skill Rules"
Cohesion: 0.18
Nodes (12): Brandkit Anti-Generic Rules, Board Composition DNA, Brand Strategy First, brandkit Skill, Color Discipline, Default 3x3 Panel System, Logo Concept Methods, Logo Generation Standard (+4 more)

### Community 19 - "Wire EDM Cutting Imagery"
Cohesion: 0.21
Nodes (12): Brass EDM Wire Electrode, Dielectric Flushing, Spark Erosion, Submerged Cutting, Wire EDM Pro Brand Mark, Wire EDM High Res (png, 4.6 MB source master) - listed as a variant of the 110 KB public copy on filename alone, subject unverified, WireEdm2 - Close-up Wire EDM Spark Cut on Steel Block (bright studio stock/render, NOT the client's machine), Wire EDM Cutting (jpg, 800w) (+4 more)

### Community 20 - "ecoMill 600 V Specifications"
Cohesion: 0.20
Nodes (12): Citation: 3axis Group - DMG MORI ecoMill 600 V specs, Citation: au.dmgmori.com - DMG MORI Australia, Citation: Exapro - DMG MORI ecoMill 600V listing, DMG MORI ecoMill 600 V vertical machining centre, 30-Station Automatic Tool Changer, 32-Station Automatic Tool Changer, Siemens SlimLine digital interface, 12,000 RPM spindle (ecoMill 600 V) (+4 more)

### Community 21 - "Design System & Turnkey Specs"
Cohesion: 0.18
Nodes (12): Brand Palette as Design Tokens, Design System Capability, Responsive Layout 360px to Widescreen, WCAG AA Contrast Requirement, Full-Screen Hero Canvas with XYZ Grid, create-corporate-website Task Plan, turnkey-solutions-update Change Manifest, turnkey-solutions-update Design Document (+4 more)

### Community 22 - "Workshop Mezzanine Photos"
Cohesion: 0.25
Nodes (11): CNC Machine Bay, Consumables and Tooling Storage, Crown Electric Pallet Stacker, Machining Capacity, Materials Handling Equipment, Sydney Workshop Facility, Workshop Mezzanine, Workshop Mezzanine (jpg, 800w) (+3 more)

### Community 23 - "EDM Hole Drilling Machine"
Cohesion: 0.29
Nodes (11): Dielectric Work Tank Enclosure, EDM Hole Drilling, Machine Shop Facility, Touchscreen CNC Controller, YGS-43Z EDM Hole Drilling Machine, Yougar (EDM drill machine badge, reading uncertain), EDM Hole Drilling Machine (YGS-43Z) - Source PNG, EDM Drilling (jpg, 800w) (+3 more)

### Community 24 - "Makino Wire EDM Photos"
Cohesion: 0.18
Nodes (11): DMG MORI Machining Centre, Makino U6 H.E.A.T. Wire EDM, Toolroom Workshop Facility, Workshop Floor Photo: DMG MORI Machining Centre and Toolroom Benches, Makino U6 H.E.A.T. Wire EDM Machine Photo, Makino U6 H.E.A.T. Wire EDM, Tighter Crop (png, full width), Makino U6 H.E.A.T. Wire EDM, Tighter Crop (jpg, 800w), Makino U6 H.E.A.T. Wire EDM, Tighter Crop (webp, 800w) (+3 more)

### Community 25 - "Industry Pages & Mega Menu"
Cohesion: 0.20
Nodes (11): Shared Header and Footer, Full-Width Industries Mega-Menu, Industries Hub Page, Industry Pages Capability, Industry Sub-Pages (/industries/<slug>/), Xometry "Solutions For Every Industry" Reference, Dimac-Reference Navigation Expansion, industries.ts as Single Source of Truth (+3 more)

### Community 26 - "Hero 3D & Static Deployment"
Cohesion: 0.18
Nodes (11): Hero Visualization Capability, Lazy 3D Load and Performance Controls, Procedural 3D Sample Part, prefers-reduced-motion Respect, Inside-Out Telescope Pointer Interaction, Home Hero with 3D Centerpiece, Performance Budget (3D Isolated to Home), SEO Metadata Baseline (+3 more)

### Community 27 - "Brand Mark & Sample Parts"
Cohesion: 0.31
Nodes (9): Brand Mark, Interlocking Puzzle Test Part, Internal Profile Cutting, Precision Machined Component, Wire EDM Cutting, Wire EDM Cut Cylindrical Steel Part, Favicon 32px PNG Raster, Favicon SVG - Wire EDM Brand Mark (+1 more)

### Community 28 - "Fanuc Robocut Shop Photos"
Cohesion: 0.33
Nodes (9): CNC Control Console, CNC Wire EDM Machine, Dielectric Filtration Unit, Fanuc Robocut a-0iD, Okuma Machine Tool, Tooling and Parts Storage, Photo - Fanuc Robocut a-C600iA Wire EDM Machine, Photo - Fanuc Robocut a-0iD Wire EDM Machine (+1 more)

### Community 29 - "Header & Solutions Data"
Cohesion: 0.31
Nodes (6): Solution, solutionHrefs, solutions, fleet, industries, support

### Community 30 - "Analytics & Consent Mode"
Cohesion: 0.25
Nodes (5): GA4 with Consent Mode v2 defaulting to denied, src/config.ts GA4 measurement ID, Self-hosted variable fonts, no third-party runtime requests, GA4 measurement ID G-LWG4BVB87J, GA_MEASUREMENT_ID

### Community 31 - "Stale Deployment Docs"
Cohesion: 0.25
Nodes (8): DEPLOYMENT.md flagged as stale, No server, database, API or auth, No form backend: phone and email contact only, Service pages as thin specs/applications wrappers, Enquiry form removed at client direction (2026-08-17), Manual build step (npm ci, npm run build, dist/), STALE: PUBLIC_FORM_ENDPOINT contact-form env variable, STALE: verify five pages including /wire-edm/

### Community 32 - "S3 Bucket & Domain Setup"
Cohesion: 0.25
Nodes (8): build.format: 'directory' route emission, Apex domain wireedmpro.com.au chosen, One-time bucket configuration (index/error document), Preferred: CloudFront + Origin Access Control with private bucket, Directory URLs resolve via the index-document rule, no rewrites, STALE: www.wireedmpro.com.au bucket name, Production bucket wireedmpro.com.au-032331960224-ap-southeast-2-an, Pass 1: dist/_assets sync, max-age=31536000 immutable

### Community 33 - "Logo & Open Graph Assets"
Cohesion: 0.25
Nodes (8): Brand Identity, Sydney Industrial Premises, Premises Exterior Photo: Wire EDM Pty Ltd Unit 16 Signage, Wire EDM Pro Navigation Logo (webp, 160w), Navigation Logo (png), Navigation Logo (webp), Open Graph Share Card - Fanuc Robocut Wire EDM with Wire EDM Pro Logo, Open Graph Share Card (jpg, 1200x630)

### Community 34 - "Makino Control Panel Photos"
Cohesion: 0.29
Nodes (8): Climate Controlled Workshop Environment, CNC Machine Control Interface, Machine Shop Floor, Makino U6 H.E.A.T. Wire EDM, Wide Shopfloor Crop, Makino U6 H.E.A.T. Wire EDM, Close Front Panel (jpg, 800w), Makino U6 H.E.A.T. Wire EDM, Close Front Panel and Control (webp, 800w), Makino U6 H.E.A.T. Wire EDM, Close Front Panel (jpg, 1600w), Makino U6 H.E.A.T. Wire EDM, Close Front Panel (webp, 1600w)

### Community 35 - "Workshop Aisle Photography"
Cohesion: 0.36
Nodes (8): CNC Turning, Consumables and Tooling Storage, Easson Optical Measuring Machine, Materials Handling, Mezzanine and Office Area, Quality Inspection, Photo: workshop interior looking down the main aisle, storage racking and Crown stacker, Photo: workshop aisle with Easson optical measuring machine and DMG MORI turning centre

### Community 36 - "Workshop Bench Photos"
Cohesion: 0.25
Nodes (8): Cutting Tool Storage, Facility Photography, DMG MORI Enclosure Badge - unverified reading, Workshop Bench, Workshop Bench (jpg, 800w), Workshop Bench Photo (800w webp), Workshop Bench (jpg, 1600w), Workshop Bench (webp, 1600w)

### Community 37 - "Building Exterior Photos"
Cohesion: 0.29
Nodes (8): Sydney Industrial Unit, Wire EDM Pro Brand Identity, Workshop Facility, Wire EDM Pro Logo (apple touch icon), Wire EDM Pty Ltd Building Exterior, Unit 16, Building Exterior (jpg, 800w), Building Exterior (jpg, 1600w), Building Exterior (webp, 1600w)

### Community 38 - "Home Page Content Facts"
Cohesion: 0.29
Nodes (8): Credibility Section (25+ Years, Sydney), Home Page Capability, Industries Served Section, Authored Placeholder-Free Content, CONTENT-TODO Unconfirmed Fact Tracking, 420 mm Maximum Processing Size Fact, QC Equipment List (Industry-Typical, Unconfirmed), Home Page Facts Strip

### Community 39 - "Search Console Tasks"
Cohesion: 0.33
Nodes (7): OPEN: delete stale /landing/ and /landing-v2/ S3 objects and resubmit sitemap, Pass 4: remaining files sync with --delete, max-age=86400, Request indexing for the 12 industry pages, Check for orphan indexed /landing/ and /landing-v2/ URLs, Save a Performance filter on 'wire edm pro' as a baseline, Section 6: Google Search Console tasks, Resubmit sitemap with real per-page lastmod dates

### Community 40 - "Reverse Engineering Page Specs"
Cohesion: 0.48
Nodes (7): Bespoke Page Anatomy over ServicePage, Quality Assurance Page Capability, Reverse Engineering Page Capability, Sample-to-Part Flow (Measure to Mastercam), Mastercam Design Step, Turnkey Lifecycle Seven-Step Flow, turnkey-solutions-update Task Plan

### Community 41 - "Shop Floor Machine Photos"
Cohesion: 0.47
Nodes (6): CNC Machine Control Interface, Makino U6 H.E.A.T. Wire EDM Machine, Compressed Air and Shop Services, Workshop Floor, Photo: Makino U6 H.E.A.T. wire EDM machine with Hyper-i control, Photo: DMG MORI ecoMill 600 V vertical machining centre on the shop floor

### Community 42 - "EDM Wire Cutting Rename"
Cohesion: 0.33
Nodes (6): Keep /wire-edm/ URL on Rename, EDM Wire Cutting Solution Rename, EDM Wire Cutting Solution Listing, llms.txt Machine-Readable Site Index, Quality Assurance Listing, Reverse Engineering Listing

### Community 43 - "Build Gate & Project Identity"
Cohesion: 0.40
Nodes (5): npm run build is the only gate (no tests, no linter), Static Astro 5 build (output: 'static'), Wire EDM Pro corporate marketing website, S3 static website hosting of the fully static site, Install (npm ci) and Build (npm run build) steps

### Community 44 - "Facility Interior Photos"
Cohesion: 0.40
Nodes (5): CNC Machining Centre, Easson-Equipped Red Machine (model unread), Mezzanine Workshop Facility, Office Interior, Facility Interior Aisle with Machines and Mezzanine

### Community 45 - "Wire EDM Machine Provenance"
Cohesion: 0.60
Nodes (5): Dielectric Submerged Machining and Spark Erosion, Fanuc Robocut a-C600iA, Fanuc Robocut Wire EDM Machine, WiredEdm1 - Stock/Render Close-Up of a Generic Wire EDM Head Sparking Into a Submerged Steel Block (NOT the client's machine, no visible make or model), WireEDM1-actual - Full-Machine Photo of a FANUC ROBOCUT alpha-C600iA Wire EDM With CNC Control Pendant (a different image and a different machine from WiredEdm1.png)

### Community 46 - "Service Page Structure Specs"
Cohesion: 0.40
Nodes (5): Corporate Industrial Visual Language, Services Overview Section, Consistent Service Page Structure, Service Pages Capability, Wire EDM Page Depth Requirement

### Community 47 - "TypeScript Configuration"
Cohesion: 0.40
Nodes (4): astro/tsconfigs/strict, exclude, extends, include

### Community 48 - "CSS Tokens & Primitives"
Cohesion: 0.50
Nodes (4): src/styles/global.css shared primitives, Plain CSS with custom properties, no Tailwind or UI kit, Token-only styling convention, src/styles/tokens.css design tokens

### Community 49 - "Wire EDM Logo Variants"
Cohesion: 0.50
Nodes (4): Spark Erosion Symbol, Wire EDM Machine, Wire EDM Pro Logo (png, root images copy), Wire EDM Pro Logo (hexagon spark mark + wordmark)

## Ambiguous Edges - Review These
- `No form backend: phone and email contact only` → `STALE: PUBLIC_FORM_ENDPOINT contact-form env variable`  [AMBIGUOUS]
  DEPLOYMENT.md · relation: conceptually_related_to
- `Service pages as thin specs/applications wrappers` → `STALE: verify five pages including /wire-edm/`  [AMBIGUOUS]
  DEPLOYMENT.md · relation: conceptually_related_to
- `Apex domain wireedmpro.com.au chosen` → `STALE: www.wireedmpro.com.au bucket name`  [AMBIGUOUS]
  DEPLOYMENT.md · relation: conceptually_related_to
- `STALE: www.wireedmpro.com.au bucket name` → `Production bucket wireedmpro.com.au-032331960224-ap-southeast-2-an`  [AMBIGUOUS]
  DEPLOYMENT.md · relation: conceptually_related_to
- `CI/CD summary: four sync passes, images & fonts 7 days` → `Pass 2: images & fonts cp, max-age=2592000 (30 days)`  [AMBIGUOUS]
  DEPLOYMENT.md · relation: conceptually_related_to
- `Bucket region us-east-1` → `Configure AWS credentials, region us-east-1`  [AMBIGUOUS]
  DEPLOYMENT.md · relation: conceptually_related_to
- `DMG MORI ecoMill 600 V vertical machining centre` → `30-Station Automatic Tool Changer`  [AMBIGUOUS]
  docs/WIRE EDM PRO-WEB CONTENT.pdf · relation: references
- `DMG MORI ecoMill 600 V vertical machining centre` → `32-Station Automatic Tool Changer`  [AMBIGUOUS]
  docs/WIRE EDM PRO-WEB CONTENT.pdf · relation: references
- `32-Station Automatic Tool Changer` → `30-Station Automatic Tool Changer`  [AMBIGUOUS]
  docs/WIRE EDM PRO-WEB CONTENT.pdf · relation: semantically_similar_to
- `Fast turnaround times` → `No enquiry form by design: email/call actions go straight to inbox and phone`  [AMBIGUOUS]
  docs/wire-edm-pro-website-overview.pdf · relation: conceptually_related_to
- `Wire EDM Cutting` → `Starrett 400 Series Optical Comparator Projecting a Toothed Ring Profile`  [AMBIGUOUS]
  images/qc-wireedm-pro.png · relation: conceptually_related_to
- `CNC Milling In Cut (ecoMill 600 V, end mill with flood coolant)` → `ecoMill 600 V Vertical Machining Centre (badge reading, make unconfirmed)`  [AMBIGUOUS]
  public/images/cnc-milling-800.webp · relation: references
- `CNC Turning` → `Photo: workshop aisle with Easson optical measuring machine and DMG MORI turning centre`  [AMBIGUOUS]
  images/IMG_2318.jpg · relation: conceptually_related_to
- `EDM Hole Drilling Machine (YGS-43Z) - Source PNG` → `Yougar (EDM drill machine badge, reading uncertain)`  [AMBIGUOUS]
  images/drill-wire-edm-pro.png · relation: references
- `YGS-43Z EDM Hole Drilling Machine` → `Yougar (EDM drill machine badge, reading uncertain)`  [AMBIGUOUS]
  images/drill-wire-edm-pro.png · relation: conceptually_related_to
- `Wire EDM Cutting in Progress - Spark Closeup` → `Fanuc Robocut C600iA`  [AMBIGUOUS]
  public/images/edm-spark-closeup-800.webp · relation: conceptually_related_to
- `Wire EDM Cutting in Progress - Spark Closeup` → `Manufacturer Product Shot (not client workshop)`  [AMBIGUOUS]
  public/images/edm-spark-closeup-800.webp · relation: conceptually_related_to
- `Photo - Fanuc Robocut a-C600iA Wire EDM Machine` → `Okuma Machine Tool`  [AMBIGUOUS]
  images/IMG_2313.jpg · relation: conceptually_related_to
- `Fanuc Robocut Wire EDM Machine` → `WiredEdm1 - Stock/Render Close-Up of a Generic Wire EDM Head Sparking Into a Submerged Steel Block (NOT the client's machine, no visible make or model)`  [AMBIGUOUS]
  images/WiredEdm1.png · relation: conceptually_related_to
- `Fanuc Robocut a-0iD` → `WireEDM-2-actual - FANUC ROBOCUT alpha-0iD Wire EDM Machine Exterior (different subject from WireEdm2.png: a whole machine, not a cutting close-up)`  [AMBIGUOUS]
  images/WireEDM-2-actual.png · relation: references
- `Quality Inspection` → `Easson Optical Measuring Machine`  [AMBIGUOUS]
  images/IMG_2318.jpg · relation: implements
- `Premises Exterior Photo: Wire EDM Pty Ltd Unit 16 Signage` → `Brand Identity`  [AMBIGUOUS]
  images/IMG_2320.jpg · relation: conceptually_related_to
- `Facility Interior Aisle with Machines and Mezzanine` → `Easson-Equipped Red Machine (model unread)`  [AMBIGUOUS]
  images/Office internal.png · relation: references
- `Facility Interior Aisle with Machines and Mezzanine` → `Office Interior`  [AMBIGUOUS]
  images/Office internal.png · relation: conceptually_related_to
- `Office Interior` → `Clean Machining Bay / Office-Side Workshop Photo (800w webp)`  [AMBIGUOUS]
  public/images/wire-edm-office-800.webp · relation: conceptually_related_to
- `WiredEdm1 - Stock/Render Close-Up of a Generic Wire EDM Head Sparking Into a Submerged Steel Block (NOT the client's machine, no visible make or model)` → `WireEDM1-actual - Full-Machine Photo of a FANUC ROBOCUT alpha-C600iA Wire EDM With CNC Control Pendant (a different image and a different machine from WiredEdm1.png)`  [AMBIGUOUS]
  images/WireEDM1-actual.png · relation: semantically_similar_to
- `WireEdm2 - Close-up Wire EDM Spark Cut on Steel Block (bright studio stock/render, NOT the client's machine)` → `Submerged Cutting`  [AMBIGUOUS]
  images/WireEdm2.png · relation: conceptually_related_to
- `WireEdm2 - Close-up Wire EDM Spark Cut on Steel Block (bright studio stock/render, NOT the client's machine)` → `WireEDM-2-actual - FANUC ROBOCUT alpha-0iD Wire EDM Machine Exterior (different subject from WireEdm2.png: a whole machine, not a cutting close-up)`  [AMBIGUOUS]
  images/WireEDM-2-actual.png · relation: conceptually_related_to
- `Wire EDM Pro Logo Lockup (png) - filename says 'high-res' photo but the file is the brand logo, hexagon with spark and wire` → `Wire EDM High Res (png, 4.6 MB source master) - listed as a variant of the 110 KB public copy on filename alone, subject unverified`  [AMBIGUOUS]
  images/wire-edm-high-res.png · relation: semantically_similar_to
- `Clean Machining Bay / Office-Side Workshop Photo (800w webp)` → `Cream Machine Pendant Badge (unreadable make) - unverified`  [AMBIGUOUS]
  public/images/wire-edm-office-800.webp · relation: references
- `Clean Machining Bay / Office-Side Workshop Photo (800w webp)` → `Red Machine Badge Reading (possibly Sodick) - unverified`  [AMBIGUOUS]
  public/images/wire-edm-office-800.webp · relation: references
- `Workshop Bench Photo (800w webp)` → `DMG MORI Enclosure Badge - unverified reading`  [AMBIGUOUS]
  public/images/workshop-bench-800.webp · relation: references
- `Workshop Floor Photo (800w webp)` → `Red Machine Badge Reading (possibly Sodick) - unverified`  [AMBIGUOUS]
  public/images/workshop-floor-800.webp · relation: references
- `WireEdm-Office (png, hyphenated filename)` → `WireEdmOffice (png, unhyphenated filename)`  [AMBIGUOUS]
  images/WireEdmOffice.png · relation: semantically_similar_to
- `Workshop Interior with Mezzanine and Machine Bay (webp, 800w)` → `Crown Electric Pallet Stacker`  [AMBIGUOUS]
  public/images/workshop-mezzanine-800.webp · relation: references

## Knowledge Gaps
- **279 isolated node(s):** `name`, `type`, `version`, `private`, `description` (+274 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 336 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **49 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `No form backend: phone and email contact only` and `STALE: PUBLIC_FORM_ENDPOINT contact-form env variable`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Service pages as thin specs/applications wrappers` and `STALE: verify five pages including /wire-edm/`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Apex domain wireedmpro.com.au chosen` and `STALE: www.wireedmpro.com.au bucket name`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `STALE: www.wireedmpro.com.au bucket name` and `Production bucket wireedmpro.com.au-032331960224-ap-southeast-2-an`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `CI/CD summary: four sync passes, images & fonts 7 days` and `Pass 2: images & fonts cp, max-age=2592000 (30 days)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Bucket region us-east-1` and `Configure AWS credentials, region us-east-1`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `DMG MORI ecoMill 600 V vertical machining centre` and `30-Station Automatic Tool Changer`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._