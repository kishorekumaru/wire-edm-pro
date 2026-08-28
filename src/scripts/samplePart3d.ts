/**
 * Interactive 3D model of a wire-EDM sample part, built procedurally to match
 * the client's reference photo: three concentric profiles - outer spline ring,
 * gear ring, star core - cut from one hardened blank.
 *
 * Interaction: moving the mouse over the hero rotates/tilts the part and
 * telescopes the nested pieces "inside out" (the innermost cut lifts the
 * most). Idle state breathes gently; reduced-motion shows a static exploded
 * pose. Render loop pauses off-screen and in hidden tabs.
 */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const BLANK_HEIGHT = 1.5;

/** Toothed ring profile (spline / gear) as a closed Shape or Path. */
function toothedProfile(
  teeth: number,
  rRoot: number,
  rTip: number,
  toothFrac: number,
  PathCtor: typeof THREE.Shape | typeof THREE.Path = THREE.Shape,
) {
  const p = new PathCtor();
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a0 = i * step;
    const a1 = a0 + step * toothFrac;
    p.absarc(0, 0, rTip, a0, a1, false);
    p.absarc(0, 0, rRoot, a1 + step * 0.06, a0 + step - step * 0.06, false);
  }
  p.closePath();
  return p;
}

/** Radial star profile (the innermost core). */
function starProfile(
  spikes: number,
  rTip: number,
  rValley: number,
  PathCtor: typeof THREE.Shape | typeof THREE.Path = THREE.Shape,
) {
  const p = new PathCtor();
  const step = (Math.PI * 2) / spikes;
  const halfSpike = step * 0.16;
  p.moveTo(rTip, 0);
  for (let i = 0; i < spikes; i++) {
    const a = i * step;
    if (i > 0) p.lineTo(rTip * Math.cos(a - halfSpike), rTip * Math.sin(a - halfSpike));
    p.lineTo(rTip * Math.cos(a + halfSpike), rTip * Math.sin(a + halfSpike));
    p.lineTo(rValley * Math.cos(a + step / 2), rValley * Math.sin(a + step / 2));
  }
  p.closePath();
  return p;
}

/**
 * High-contrast studio for the chrome finish: dark walls with a few bright
 * softbox strips. Chrome is pure reflection, so this is what paints the part -
 * hard white highlights against deep greys - instead of the flat, even
 * brightness RoomEnvironment gives.
 */
function chromeStudio(): THREE.Scene {
  const s = new THREE.Scene();
  s.background = new THREE.Color(0x6b727b);
  const strip = (
    w: number,
    h: number,
    pos: [number, number, number],
    rot: [number, number, number],
    brightness: number,
  ) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color().setScalar(brightness),
        side: THREE.DoubleSide,
      }),
    );
    m.position.set(...pos);
    m.rotation.set(...rot);
    s.add(m);
  };
  strip(12, 5, [0, 7, 0], [-Math.PI / 2, 0, 0], 6.5); // overhead softbox, kept gentle
  strip(3.5, 9, [-7, 2, 1], [0, Math.PI / 2, 0], 8); // tall left strip
  strip(2.5, 7, [6.5, 1, -2], [0, -Math.PI / 2, 0], 8); // right strip
  strip(9, 1.4, [0, -0.5, -7], [0, 0, 0], 3); // low back fill
  strip(8, 3, [1, 2, 7], [0, 0, 0], 8); // front fill so camera-facing flats stay silver
  // Mid floor panel so downward-facing surfaces stay in the same family
  strip(14, 14, [0, -3, 0], [Math.PI / 2, 0, 0], 0.35);
  return s;
}

function extrudePiece(
  shape: THREE.Shape,
  material: THREE.Material,
  depth = BLANK_HEIGHT,
  curveSegments = 6,
  bevel = 0.015,
): THREE.Mesh {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel * 0.8,
    // A generous bevel gets extra segments so the edge reads rounded, not chamfered
    bevelSegments: bevel >= 0.02 ? 3 : 1,
    curveSegments,
  });
  geo.rotateX(-Math.PI / 2); // extrude along +Y (part stands upright)
  geo.translate(0, -depth / 2, 0);
  const mesh = new THREE.Mesh(geo, material);
  return mesh;
}

/**
 * Emit a straight seam from (ax,ay) to (bx,by) with one jigsaw knob at the
 * midpoint - narrow neck opening into a round undercut mushroom head -
 * bulging to the left (side = 1) or right (side = -1) of the travel
 * direction. Two pieces sharing a seam traverse it in opposite directions
 * with opposite sides, tracing the same physical curve, so they interlock
 * exactly and can only separate along the extrusion axis.
 */
function seamWithKnob(
  p: THREE.Shape,
  ax: number,
  ay: number,
  bx: number,
  by: number,
  side: 1 | -1,
) {
  const rh = 0.2; // head radius
  const wn = 0.085; // neck half-width
  const hd = 0.24; // head centre offset from the seam line
  const b = Math.asin(wn / rh); // where the neck edges meet the head circle
  const th = Math.atan2(by - ay, bx - ax);
  const ux = Math.cos(th);
  const uy = Math.sin(th);
  const vx = -uy; // left normal of the travel direction
  const vy = ux;
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;

  p.lineTo(mx - ux * wn, my - uy * wn); // run to the near neck edge
  const a0 = side > 0 ? th + 1.5 * Math.PI - b : th + 0.5 * Math.PI + b;
  const a1 = side > 0 ? th + 1.5 * Math.PI + b : th + 0.5 * Math.PI - b;
  // absarc connects the neck edges; side > 0 crowns clockwise, side < 0 counter
  p.absarc(mx + side * vx * hd, my + side * vy * hd, rh, a0, a1, side > 0);
  p.lineTo(mx + ux * wn, my + uy * wn); // back down the far neck edge to the seam line
  p.lineTo(bx, by);
}

/**
 * One quadrant of the client's puzzle-cube demo (square-mesh.jpeg): a wire-cut
 * block whose two inner edges carry a jigsaw tab and the neighbour's notch.
 * The full cube is this shape rotated into all four quadrants - each piece
 * grips the next, releasing only along the cutting axis.
 */
function puzzleQuadrant(S: number, r: number): THREE.Shape {
  const q = new THREE.Shape();
  q.moveTo(0, 0);
  seamWithKnob(q, 0, 0, S, 0, -1); // out to the east rim, neighbour's notch
  q.lineTo(S, S - r);
  q.absarc(S - r, S - r, r, 0, Math.PI / 2, false); // smooth rounded vertical edge
  q.lineTo(0, S);
  seamWithKnob(q, 0, S, 0, 0, 1); // back to centre, own tab bulging sideways
  q.closePath();
  return q;
}

/**
 * Chamfer the outer rim of the extruded block only. The cap-plane vertices
 * that sit on the outer walls (x = S, y = S, or the rounded corner arc) move
 * inward by `ch`, so the first and last wall slice become a flat chamfer band.
 * The seam and knob contours never match the outer-wall tests, so the
 * wire-cut faces keep their dead-sharp edges. Runs in shape space, before the
 * geometry is rotated upright.
 */
function chamferOuterRim(
  geo: THREE.BufferGeometry,
  S: number,
  r: number,
  depth: number,
  ch: number,
) {
  const pos = geo.getAttribute("position") as THREE.BufferAttribute;
  const eps = 1e-3;
  const c = S - r; // corner arc centre (c, c)
  for (let i = 0; i < pos.count; i++) {
    const z = pos.getZ(i);
    if (z > eps && z < depth - eps) continue; // only the two cap-plane rings
    const x = pos.getX(i);
    const y = pos.getY(i);
    let nx = 0;
    let ny = 0;
    if (Math.abs(x - S) < eps) nx = -1;
    else if (Math.abs(y - S) < eps) ny = -1;
    else if (x > c - eps && y > c - eps) {
      const dx = x - c;
      const dy = y - c;
      const d = Math.hypot(dx, dy);
      if (Math.abs(d - r) < eps) {
        nx = -dx / d;
        ny = -dy / d;
      }
    }
    if (nx || ny) pos.setXY(i, x + nx * ch, y + ny * ch);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

export interface SamplePartOptions {
  /** "white" matte part for the dark hero (default); "chrome" polished steel for light backgrounds. */
  finish?: "white" | "chrome";
}

// Total Blocking Time counts only the slice of each main-thread task beyond
// 50ms, so the init is split into sub-50ms phases with a yield between them
const yieldToMain = () => new Promise<void>((r) => setTimeout(r, 0));

export async function initSamplePart(
  host: HTMLElement,
  interactionRoot: HTMLElement,
  opts: SamplePartOptions = {},
): Promise<void> {
  try {
    const probe = document.createElement("canvas");
    if (!(probe.getContext("webgl2") ?? probe.getContext("webgl"))) return;
  } catch {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const chrome = opts.finish === "chrome";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 30);
  camera.position.set(6.15, 6.0, 9.3); // ~50% further back
  camera.lookAt(0, 0.3, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  // 1.5x is visually identical to 2x on a ~26rem canvas and renders half the pixels
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, chrome ? 1.5 : 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  await yieldToMain();

  // Soft studio reflections so the steel reads as steel. Chrome is almost
  // entirely reflection-driven, so it gets a high-contrast studio instead of
  // the evenly-lit room.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(chrome ? chromeStudio() : new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = chrome ? 0.85 : 0.35;

  await yieldToMain();

  // One shared steel material - identical colour on every piece so the
  // assembled part reads as a single solid blank with no visible layers.
  // Machining streaks for the steel: faint parallel lines in a roughness map
  // break the mirror finish into the brushed look of ground tool steel
  const brushedRoughness = () => {
    const c = document.createElement("canvas");
    c.width = c.height = 512;
    const g = c.getContext("2d");
    if (g) {
      g.fillStyle = "#d4d4d4";
      g.fillRect(0, 0, c.width, c.height);
      for (let i = 0; i < 1100; i++) {
        const y = Math.random() * c.height;
        const len = 60 + Math.random() * 280;
        const x = Math.random() * (c.width + len) - len;
        const shade = 175 + Math.floor(Math.random() * 80);
        g.strokeStyle = `rgba(${shade},${shade},${shade},0.55)`;
        g.lineWidth = 0.5 + Math.random();
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + len, y);
        g.stroke();
      }
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    // Extrude UVs are in shape units (~1.8 across a face), so a few repeats
    // keep the streaks fine-grained instead of stretching into blotches
    t.repeat.set(3, 3);
    return t;
  };

  const steel = chrome
    ? new THREE.MeshPhysicalMaterial({
        // Silver-grey brushed steel, a shade darker than the reference photo
        color: 0xa8b0b8,
        metalness: 1.0,
        // Brushed steel scatters more than chrome; the map varies it per streak
        roughness: 0.4,
        roughnessMap: brushedRoughness(),
        clearcoat: 0.15,
        clearcoatRoughness: 0.35,
      })
    : new THREE.MeshStandardMaterial({
        color: 0xffffff, // pure white, pops on the blue hero
        metalness: 0.3,
        roughness: 0.5,
      });

  // The wire-cut pieces. Chrome (landing v2): a round blank with the classic
  // puzzle interlock cut through it - sleeve plus sliding core. Default: three
  // concentric profiles - spline ring, gear ring, star core.
  const part = new THREE.Group();
  let applyExplode: (e: number) => void;

  if (chrome) {
    // Puzzle cube: one quadrant block, rotated into all four positions.
    // No extrude bevel (seam and knob edges stay dead sharp); the outer rim
    // gets its machined chamfer from chamferOuterRim instead, and the vertical
    // edges keep their smooth radius from the 2D outline
    const CUBE_S = 0.92;
    const CUBE_R = 0.17;
    const CUBE_DEPTH = 1.9;
    const geo = new THREE.ExtrudeGeometry(puzzleQuadrant(CUBE_S, CUBE_R), {
      depth: CUBE_DEPTH,
      bevelEnabled: false,
      curveSegments: 24,
      // Wall rings every ~0.025 so the rim displacement forms a short chamfer
      // band instead of tapering the whole wall
      steps: 78,
    });
    chamferOuterRim(geo, CUBE_S, CUBE_R, CUBE_DEPTH, 0.0245);
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, -CUBE_DEPTH / 2, 0);
    const template = new THREE.Mesh(geo, steel);
    const blocks = [0, 1, 2, 3].map((k) => {
      const m = k === 0 ? template : new THREE.Mesh(template.geometry, steel);
      m.rotation.y = (k * Math.PI) / 2;
      return m;
    });
    part.add(...blocks);
    // Each block rides at its own rate: the first races ahead, the last trails
    const rates = [1.5, 1.0, 0.62, 0.3];
    applyExplode = (e: number) => {
      blocks.forEach((block, i) => {
        block.position.y = e * rates[i];
      });
    };
  } else {
    const splineOuter = toothedProfile(44, 0.93, 1.0, 0.5) as THREE.Shape;
    splineOuter.holes.push(toothedProfile(16, 0.62, 0.74, 0.42, THREE.Path) as THREE.Path);
    const splineRing = extrudePiece(splineOuter, steel);

    const gearShape = toothedProfile(16, 0.6, 0.72, 0.42) as THREE.Shape;
    gearShape.holes.push(starProfile(9, 0.46, 0.15, THREE.Path) as THREE.Path);
    const gearRing = extrudePiece(gearShape, steel);
    const starCore = extrudePiece(starProfile(9, 0.44, 0.14) as THREE.Shape, steel);
    part.add(splineRing, gearRing, starCore);
    // "Inside out": the innermost cut travels furthest. At e = 0 every offset
    // is exactly zero so the three pieces sit flush - one solid blank.
    applyExplode = (e: number) => {
      starCore.position.y = e * 1.5;
      gearRing.position.y = e * 0.72;
      starCore.rotation.y = -e * 0.45;
      gearRing.rotation.y = e * 0.26;
    };
  }

  part.position.y = chrome ? -0.1 : 0.1;
  if (chrome) part.scale.setScalar(1.53); // the cube fills the frame
  scene.add(part);

  // Resting yaw: the cube sits turned 45° to the right, corner to the camera
  const baseRotY = chrome ? 0.35 - Math.PI / 4 : 0.35;

  // Ground shadow (fake, cheap). A rounded square under the cube, matching
  // its resting yaw and soft corners; a soft disc under the rings
  const shadowShape = new THREE.Shape();
  {
    const w = 2.5;
    const r = 0.42;
    const x = -w / 2;
    shadowShape.moveTo(x + r, x);
    shadowShape.lineTo(x + w - r, x);
    shadowShape.quadraticCurveTo(x + w, x, x + w, x + r);
    shadowShape.lineTo(x + w, x + w - r);
    shadowShape.quadraticCurveTo(x + w, x + w, x + w - r, x + w);
    shadowShape.lineTo(x + r, x + w);
    shadowShape.quadraticCurveTo(x, x + w, x, x + w - r);
    shadowShape.lineTo(x, x + r);
    shadowShape.quadraticCurveTo(x, x, x + r, x);
  }
  const shadow = new THREE.Mesh(
    chrome ? new THREE.ShapeGeometry(shadowShape, 12) : new THREE.CircleGeometry(1.35, 40),
    new THREE.MeshBasicMaterial({
      color: chrome ? 0x0b0e16 : 0x10162e,
      transparent: true,
      opacity: chrome ? 0.1 : 0.28,
      depthWrite: false,
    }),
  );
  // Yaw nudged past the cube's resting angle to line up with its tilted
  // footprint, and offset toward the lean so it reads as cast by the cube
  shadow.rotation.set(-Math.PI / 2, 0, chrome ? baseRotY + 0.18 : 0);
  if (chrome) {
    shadow.position.set(0.3, -2.4, -0.25);
    shadow.scale.setScalar(1.1); // grows with the cube
  } else {
    shadow.position.y = -BLANK_HEIGHT / 2 - 0.02;
  }
  scene.add(shadow);

  scene.add(new THREE.HemisphereLight(0xe7ecef, 0x25406b, chrome ? 0.15 : 0.35));
  const key = new THREE.DirectionalLight(0xffffff, chrome ? 0.9 : 1.1);
  key.position.set(4, 6, 2);
  scene.add(key);
  if (chrome) {
    // Cool rim light from behind so the polished edges catch a hard highlight
    const rim = new THREE.DirectionalLight(0xdfe9f5, 1.0);
    rim.position.set(-5, 3.5, -4);
    scene.add(rim);
  }

  renderer.domElement.className = "hg__canvas";
  renderer.domElement.setAttribute("aria-hidden", "true");

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  resize();

  await yieldToMain();

  // Interaction state (targets lerped in the loop)
  let targetRotY = baseRotY;
  // The cube rests tipped a touch further forward, showing more of its face
  const baseTiltX = chrome ? 0.28 : 0.06;
  let targetTiltX = baseTiltX;
  // The cube rests closed: one solid blank until the pointer opens it.
  // The rings idle wider so their nesting reads at a glance
  const idleExplode = chrome ? 0 : 0.35;
  const idleWave = chrome ? 0 : 0.08;
  let targetExplode = reducedMotion ? (chrome ? 0 : 0.6) : idleExplode;
  let hovering = false;

  if (finePointer && !reducedMotion) {
    // Rect cached outside the handler: a getBoundingClientRect on every
    // pointermove forces layout against the rAF loop's style writes
    let rootRect = interactionRoot.getBoundingClientRect();
    const refreshRect = () => {
      rootRect = interactionRoot.getBoundingClientRect();
    };
    window.addEventListener("resize", refreshRect);
    window.addEventListener("scroll", refreshRect, { passive: true });
    interactionRoot.addEventListener("pointermove", (e) => {
      const r = rootRect;
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      // X movement rotates the part; Y movement telescopes it inside-out
      // (mouse at the top = fully extended, at the bottom = flush - one piece)
      // and tilts the part slightly with the pointer.
      targetRotY = baseRotY + nx * 1.3;
      targetExplode = Math.max(0, ((1 - ny) / 2) * 1.05 - 0.05);
      targetTiltX = baseTiltX + ny * 0.18;
      hovering = true;
      start(); // wake the render loop if it parked
    });
    interactionRoot.addEventListener("pointerleave", () => {
      targetRotY = baseRotY;
      targetTiltX = baseTiltX;
      hovering = false;
      start();
    });
  }

  // Touch devices: drag the prop itself - horizontal drag rotates,
  // vertical drag telescopes the pieces in and out.
  if (!finePointer && !reducedMotion) {
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    host.addEventListener("pointerdown", (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      hovering = true;
      host.setPointerCapture(e.pointerId);
      start(); // wake the render loop if it parked
    });
    host.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      targetRotY += (e.clientX - lastX) * 0.012;
      targetExplode = Math.min(1, Math.max(0, targetExplode - (e.clientY - lastY) * 0.005));
      lastX = e.clientX;
      lastY = e.clientY;
      start();
    });
    const release = () => {
      dragging = false;
      hovering = false; // resume idle breathing
    };
    host.addEventListener("pointerup", release);
    host.addEventListener("pointercancel", release);
  }

  let inView = true;
  let pageVisible = document.visibilityState === "visible";
  let rafId = 0;
  const clock = new THREE.Clock();
  let rotY = targetRotY;
  let tiltX = targetTiltX;
  let explode = targetExplode;

  applyExplode(explode);

  let lastRender = 0;
  const frame = () => {
    rafId = 0;
    if (!inView || !pageVisible) return;
    // Cap the cube at ~60fps: on 120Hz displays every other tick is skipped,
    // halving render cost during hover with no visible difference
    if (chrome) {
      const now = performance.now();
      if (now - lastRender < 15) {
        rafId = requestAnimationFrame(frame);
        return;
      }
      lastRender = now;
    }
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    if (!reducedMotion) {
      // Idle breathing when the pointer is elsewhere; proximity-driven when hovering
      if (!hovering) targetExplode = idleExplode + Math.sin(t * 0.6) * idleWave;
      // The cube tracks the pointer a touch more eagerly than the rings, but
      // glides home gently once the pointer leaves the hero
      const rate = hovering ? (chrome ? 6.5 : 5) : chrome ? 2.2 : 5;
      const k = 1 - Math.exp(-dt * rate);
      rotY += (targetRotY - rotY) * k;
      tiltX += (targetTiltX - tiltX) * k;
      explode += (targetExplode - explode) * k;
      if (!hovering && !chrome) rotY += dt * 0.12; // slow idle turn (rings only)
      part.rotation.set(tiltX, rotY, 0);
      // The square ground shadow follows the cube: it turns with the yaw
      // (+0.18 keeps its resting offset) and, as the cube leans with the
      // pointer, stretches toward the camera and slides with the lean the way
      // a cast silhouette would. Local y maps to world z once laid flat.
      if (chrome) {
        shadow.rotation.z = rotY + 0.18;
        const lean = tiltX - baseTiltX;
        shadow.scale.set(1.1, 1.1 * (1 + lean * 0.9), 1.1);
        shadow.position.z = -0.25 + lean * 1.1;
      }
      applyExplode(explode);
    }

    renderer.render(scene, camera);

    // The cube parks once it settles at its targets, freeing the main thread;
    // any pointer event (or re-entering the viewport) wakes it via start()
    const settled =
      chrome &&
      !hovering &&
      (reducedMotion ||
        (Math.abs(targetRotY - rotY) < 5e-4 &&
          Math.abs(targetTiltX - tiltX) < 5e-4 &&
          Math.abs(targetExplode - explode) < 5e-4));
    if (!settled) rafId = requestAnimationFrame(frame);
  };
  const start = () => {
    if (!rafId && inView && pageVisible) {
      clock.getDelta();
      rafId = requestAnimationFrame(frame);
    }
  };

  // Compile the shaders off the main thread (KHR_parallel_shader_compile)
  // instead of letting the first render() do it synchronously
  part.rotation.set(tiltX, rotY, 0);
  try {
    await renderer.compileAsync(scene, camera);
  } catch {
    /* falls through - render() compiles synchronously */
  }
  await yieldToMain();

  // Guarantee one painted frame even when the tab loads hidden, then swap
  // the static poster for the live canvas - identical pose, seamless switch
  renderer.render(scene, camera);
  host.appendChild(renderer.domElement);
  const fallback = host.querySelector<HTMLElement>("[data-part-fallback]");
  if (fallback) fallback.hidden = true;
  host.dataset.live = "true";
  new ResizeObserver(resize).observe(host);

  new IntersectionObserver(
    (entries) => {
      inView = entries.some((e) => e.isIntersecting);
      start();
    },
    { threshold: 0.05 },
  ).observe(host);
  document.addEventListener("visibilitychange", () => {
    pageVisible = document.visibilityState === "visible";
    start();
  });
  start();
}
