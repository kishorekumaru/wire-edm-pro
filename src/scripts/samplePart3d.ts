/**
 * Interactive 3D model of a wire-EDM sample part, built procedurally to match
 * the client's reference photo: three concentric profiles — outer spline ring,
 * gear ring, star core — cut from one hardened blank.
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

function extrudePiece(shape: THREE.Shape, material: THREE.Material): THREE.Mesh {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: BLANK_HEIGHT,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.012,
    bevelSegments: 1,
    curveSegments: 6,
  });
  geo.rotateX(-Math.PI / 2); // extrude along +Y (part stands upright)
  geo.translate(0, -BLANK_HEIGHT / 2, 0);
  const mesh = new THREE.Mesh(geo, material);
  return mesh;
}

export function initSamplePart(host: HTMLElement, interactionRoot: HTMLElement): void {
  try {
    const probe = document.createElement("canvas");
    if (!(probe.getContext("webgl2") ?? probe.getContext("webgl"))) return;
  } catch {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 30);
  camera.position.set(6.15, 6.0, 9.3); // ~50% further back
  camera.lookAt(0, 0.3, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  // Soft studio reflections so the steel reads as steel
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55; // keep reflections but stop the highlights blowing out

  // One shared steel material — identical colour on every piece so the
  // assembled part reads as a single solid blank with no visible layers.
  const steel = new THREE.MeshStandardMaterial({
    color: new THREE.Color().setHSL(0.58, 0.02, 0.45),
    metalness: 0.55,
    roughness: 0.42,
  });

  // The three concentric wire-cut pieces
  const splineOuter = toothedProfile(44, 0.93, 1.0, 0.5) as THREE.Shape;
  splineOuter.holes.push(toothedProfile(16, 0.62, 0.74, 0.42, THREE.Path) as THREE.Path);
  const splineRing = extrudePiece(splineOuter, steel);

  const gearShape = toothedProfile(16, 0.6, 0.72, 0.42) as THREE.Shape;
  gearShape.holes.push(starProfile(9, 0.46, 0.15, THREE.Path) as THREE.Path);
  const gearRing = extrudePiece(gearShape, steel);
  const starCore = extrudePiece(starProfile(9, 0.44, 0.14) as THREE.Shape, steel);

  const part = new THREE.Group();
  part.add(splineRing, gearRing, starCore);
  part.position.y = 0.1;
  scene.add(part);

  // Ground shadow disc (fake, cheap)
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(1.35, 40),
    new THREE.MeshBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.10 }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -BLANK_HEIGHT / 2 - 0.02;
  scene.add(shadow);

  scene.add(new THREE.HemisphereLight(0xbfdbfe, 0x3b82f6, 0.3));
  const key = new THREE.DirectionalLight(0xffffff, 0.65);
  key.position.set(3, 5, 2);
  scene.add(key);

  // Mount — swap fallback image for canvas
  renderer.domElement.className = "hg__canvas";
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);
  const fallback = host.querySelector<HTMLElement>("[data-part-fallback]");
  if (fallback) fallback.hidden = true;
  host.dataset.live = "true";

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  resize();
  new ResizeObserver(resize).observe(host);

  // Interaction state (targets lerped in the loop)
  let targetRotY = 0.35;
  let targetTiltX = 0.06;
  let targetExplode = reducedMotion ? 0.6 : 0.35;
  let hovering = false;

  if (finePointer && !reducedMotion) {
    interactionRoot.addEventListener("pointermove", (e) => {
      const r = interactionRoot.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      // X movement rotates the part; Y movement telescopes it inside-out
      // (mouse at the top = fully extended, at the bottom = flush — one piece)
      // and tilts the part slightly with the pointer.
      targetRotY = 0.35 + nx * 1.3;
      targetExplode = Math.max(0, ((1 - ny) / 2) * 1.05 - 0.05);
      targetTiltX = 0.06 + ny * 0.18;
      hovering = true;
    });
    interactionRoot.addEventListener("pointerleave", () => {
      targetRotY = 0.35;
      targetTiltX = 0.06;
      hovering = false;
    });
  }

  // Touch devices: drag the prop itself — horizontal drag rotates,
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
    });
    host.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      targetRotY += (e.clientX - lastX) * 0.012;
      targetExplode = Math.min(1, Math.max(0, targetExplode - (e.clientY - lastY) * 0.005));
      lastX = e.clientX;
      lastY = e.clientY;
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

  const applyExplode = (e: number) => {
    // "Inside out": the innermost cut travels furthest. At e = 0 every offset
    // is exactly zero so the three pieces sit flush — one solid blank.
    starCore.position.y = e * 1.5;
    gearRing.position.y = e * 0.72;
    starCore.rotation.y = -e * 0.45;
    gearRing.rotation.y = e * 0.26;
  };
  applyExplode(explode);

  const frame = () => {
    rafId = 0;
    if (!inView || !pageVisible) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    if (!reducedMotion) {
      // Idle breathing when the pointer is elsewhere; proximity-driven when hovering
      if (!hovering) targetExplode = 0.35 + Math.sin(t * 0.6) * 0.08;
      const k = 1 - Math.exp(-dt * 5);
      rotY += (targetRotY - rotY) * k;
      tiltX += (targetTiltX - tiltX) * k;
      explode += (targetExplode - explode) * k;
      if (!hovering) rotY += dt * 0.12; // slow idle turn
      part.rotation.set(tiltX, rotY, 0);
      applyExplode(explode);
    }

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(frame);
  };
  const start = () => {
    if (!rafId && inView && pageVisible) {
      clock.getDelta();
      rafId = requestAnimationFrame(frame);
    }
  };

  // Guarantee one painted frame even when the tab loads hidden
  part.rotation.set(tiltX, rotY, 0);
  renderer.render(scene, camera);

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
