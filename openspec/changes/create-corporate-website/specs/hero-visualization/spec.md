## ADDED Requirements

*(Final form after client direction on 2026-08-16: a procedural 3D model of the client's
reference sample part — an outer spline ring, gear ring and star core wire-cut from one
blank — replacing both the original generic 3D scene and the interim 2D animation.)*

### Requirement: Interactive 3D sample part modeled on the reference image
The home hero SHALL display a real-time 3D model of a wire-EDM sample part built procedurally to match the client-supplied reference photo: three concentric wire-cut profiles (outer spline ring, gear ring, nine-spoke star core) cut from a single blank, in a steel material.

#### Scenario: Model renders on load
- **WHEN** a visitor with a WebGL-capable browser loads the home page
- **THEN** the 3D part renders in the hero within the full-width XYZ-grid canvas

### Requirement: Mouse interaction — rotate and telescope inside-out
On pointer-capable devices the model SHALL respond to mouse movement over the hero: the part rotates/tilts with the pointer, and the nested pieces telescope apart "inside out" — the innermost star core travelling furthest, the gear ring less, the outer ring staying put — settling back with a gentle idle motion when the pointer leaves.

#### Scenario: Pointer over the hero
- **WHEN** the visitor moves the mouse across the hero
- **THEN** the part's rotation follows the pointer and the nested pieces extend toward their exploded pose

### Requirement: Full-screen hero canvas
The hero section SHALL fill the viewport height below the navigation, with the XYZ coordinate grid, axes and DRO-style readout as a full-width background and the headline copy overlaid legibly (WCAG AA) on top.

#### Scenario: First view
- **WHEN** the home page opens on desktop
- **THEN** the hero occupies the full screen below the nav with headline, lede, CTAs and the 3D part all visible

### Requirement: Performance and fallback
The 3D module SHALL load lazily via dynamic import (Three.js absent from all other pages), clamp device pixel ratio to 2, pause rendering when off-screen or the tab is hidden while always painting at least one frame at initialisation, and fall back to a static image of the reference part when WebGL is unavailable.

#### Scenario: WebGL unavailable
- **WHEN** the browser cannot create a WebGL context
- **THEN** the static part image renders in the same layout slot with no errors

### Requirement: Reduced motion respect
Under `prefers-reduced-motion`, idle rotation, breathing and pointer-driven motion SHALL stop; the part renders as a static exploded pose.

#### Scenario: Reduced motion preference
- **WHEN** the visitor's OS requests reduced motion
- **THEN** the model is static and the page remains fully usable
