import * as THREE from 'three';
import { M, Cyl, Sph, Box } from './shared.js';

export function tower(m) {
  const g = new THREE.Group();
  g.add(M(Cyl(0.21, 0.25, 0.72, 24), m.brick, 0, 0.36, 0));
  g.add(M(Cyl(0.256, 0.256, 0.05, 24), m.cloth, 0, 0.47, 0));
  g.add(M(Cyl(0.285, 0.23, 0.13, 24), m.brick, 0, 0.785, 0));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const b = M(Box(0.1, 0.1, 0.08), m.brick, Math.sin(a) * 0.25, 0.9, Math.cos(a) * 0.25);
    b.rotation.y = a;
    g.add(b);
  }
  g.add(M(Box(0.12, 0.15, 0.03), m.door, 0, 0.085, -0.245));
  const arch = M(Cyl(0.06, 0.06, 0.03, 16, 1, false, Math.PI / 2, Math.PI), m.door, 0, 0.16, -0.245);
  arch.rotation.x = Math.PI / 2;
  g.add(arch);
  g.add(M(Sph(0.013, 8, 6), m.gold, 0.035, 0.08, -0.262));
  g.add(M(Box(0.05, 0.11, 0.03), m.dark, 0, 0.6, -0.225));
  g.add(M(Cyl(0.01, 0.01, 0.42, 6), m.gold, 0, 1.04, 0));
  g.add(M(Sph(0.02, 8, 6), m.gold, 0, 1.26, 0));

  const fl = new THREE.Group();
  fl.position.set(0, 1.16, 0);
  fl.add(M(new THREE.PlaneGeometry(0.26, 0.16), m.cloth, 0.13, 0, 0));
  fl.add(M(Box(0.034, 0.16, 0.006), m.trim, 0.1, 0, 0));
  fl.add(M(Box(0.26, 0.034, 0.006), m.trim, 0.13, 0, 0));
  g.add(fl);

  return { g, rig: { flag: fl, phase: Math.random() * 6 } };
}
