import * as THREE from 'three';
import { M, Cyl, Sph, Box, Cone, Lathe } from './shared.js';

// Carved stone tower: tapered shaft, gold bands, crenellated crown and a
// bearded guardian face in relief on the front (statue-chess style).
export function tower(m) {
  const g = new THREE.Group();

  // shaft (lathe profile: foot → slight entasis → collar)
  const prof = [
    [0, 0], [0.26, 0], [0.255, 0.04], [0.235, 0.08], [0.225, 0.3], [0.222, 0.55],
    [0.235, 0.62], [0.27, 0.66], [0.3, 0.72], [0.3, 0.8], [0, 0.8]
  ];
  g.add(M(Lathe(prof, 48), m.brick));

  for (const [y, r] of [[0.04, 0.257], [0.62, 0.236], [0.72, 0.302], [0.8, 0.302]]) {
    const b = M(new THREE.TorusGeometry(r, 0.011, 8, 64), m.gold, 0, y, 0);
    b.rotation.x = Math.PI / 2;
    g.add(b);
  }

  // crenellations (merlons) with gold caps
  const n = 8;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const mer = M(Box(0.1, 0.12, 0.07), m.brick, Math.sin(a) * 0.265, 0.86, Math.cos(a) * 0.265);
    mer.rotation.y = a;
    g.add(mer);
    const cap = M(Box(0.11, 0.016, 0.08), m.gold, Math.sin(a) * 0.265, 0.925, Math.cos(a) * 0.265);
    cap.rotation.y = a;
    g.add(cap);
  }
  // small domed turret in the middle
  g.add(M(Lathe([[0, 0], [0.12, 0], [0.12, 0.1], [0.09, 0.16], [0.04, 0.2], [0, 0.21]], 32), m.brick, 0, 0.8, 0));
  g.add(M(Sph(0.025, 10, 8), m.gold, 0, 1.02, 0));

  // ── guardian face relief (front = -z) ──
  const face = new THREE.Group();
  face.position.set(0, 0.42, -0.215);
  const S = m.armor;
  const fb = M(Sph(0.085, 20, 16), S, 0, 0, 0);
  fb.scale.set(1, 1.15, 0.45);
  face.add(fb);
  for (const s of [-1, 1]) {
    const brow = M(Box(0.05, 0.014, 0.02), S, s * 0.032, 0.035, -0.035);
    brow.rotation.z = s * -0.25;
    face.add(brow);
    face.add(M(Sph(0.011, 8, 6), m.dark, s * 0.03, 0.018, -0.034));
    const mus = M(Cone(0.012, 0.06, 8), S, s * 0.025, -0.035, -0.038);
    mus.rotation.z = s * 1.9;
    face.add(mus);
  }
  const nose = M(Cone(0.014, 0.05, 8), S, 0, 0.0, -0.045);
  nose.rotation.x = -0.3;
  face.add(nose);
  const beard = M(Cone(0.055, 0.14, 12), m.hair, 0, -0.1, -0.02);
  beard.rotation.x = Math.PI;
  beard.scale.z = 0.5;
  face.add(beard);
  // laurel/gold frame around face
  const frame = M(new THREE.TorusGeometry(0.11, 0.009, 8, 40, Math.PI * 1.3), m.gold, 0, 0, 0.01);
  frame.rotation.z = -Math.PI * 0.15; // open at the bottom for the beard
  face.add(frame);
  g.add(face);

  // arched doorway at the foot
  g.add(M(Box(0.1, 0.12, 0.03), m.dark, 0, 0.1, -0.235));
  const arch = M(Cyl(0.05, 0.05, 0.03, 16, 1, false, Math.PI / 2, Math.PI), m.dark, 0, 0.16, -0.235);
  arch.rotation.x = Math.PI / 2;
  g.add(arch);
  const archG = M(new THREE.TorusGeometry(0.058, 0.008, 8, 24, Math.PI), m.gold, 0, 0.16, -0.25);
  g.add(archG);

  return { g, rig: {} };
}
