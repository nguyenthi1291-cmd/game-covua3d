import * as THREE from 'three';
import { M, Cyl, Sph, Box, Cone, humanoid } from './shared.js';

export function horseKnight(m) {
  const g = new THREE.Group();
  const horse = new THREE.Group();
  g.add(horse);
  horse.position.z = 0.16;

  const H = m.horse;
  const body = M(Cyl(0.11, 0.12, 0.36, 16), H, 0, 0.36, -0.16);
  body.rotation.x = Math.PI / 2;
  horse.add(body);

  horse.add(M(Sph(0.12, 16, 12), H, 0, 0.36, 0.02));
  horse.add(M(Sph(0.112, 16, 12), H, 0, 0.37, -0.34));

  const neck = M(Cyl(0.06, 0.085, 0.28, 12), H, 0, 0.52, -0.42);
  neck.rotation.x = -0.55;
  horse.add(neck);

  const head = M(Box(0.09, 0.1, 0.24), H, 0, 0.66, -0.53);
  head.rotation.x = -0.55;
  horse.add(head);

  for (const s of [-1, 1]) {
    const e = M(Cone(0.022, 0.08, 8), H, s * 0.03, 0.75, -0.46);
    horse.add(e);
    horse.add(M(Sph(0.014, 8, 6), m.dark, s * 0.047, 0.68, -0.54));
  }

  const mane = M(Box(0.03, 0.28, 0.07), m.hair, 0, 0.57, -0.37);
  mane.rotation.x = -0.55;
  horse.add(mane);

  for (const s of [-1, 1]) {
    horse.add(M(Cyl(0.03, 0.026, 0.3, 8), H, s * 0.065, 0.15, 0));
    horse.add(M(Cyl(0.032, 0.032, 0.03, 8), m.dark, s * 0.065, 0.015, 0));
    const fl = M(Cyl(0.03, 0.026, 0.26, 8), H, s * 0.065, 0.26, -0.44);
    fl.rotation.x = 0.9;
    horse.add(fl);
  }

  const tail = M(Cone(0.045, 0.3, 10), m.hair, 0, 0.28, 0.16);
  tail.rotation.x = 2.6;
  horse.add(tail);

  // Feathered wings (layered gold-trimmed stone feathers)
  for (const s of [-1, 1]) {
    const wing = new THREE.Group();
    wing.position.set(s * 0.1, 0.45, -0.24);
    for (let i = 0; i < 6; i++) {
      const len = 0.34 - i * 0.04;
      const f = M(Sph(0.5, 12, 8), i === 0 ? m.gold : m.horse, 0, len / 2, 0.02 * i);
      f.scale.set(0.015, len, 0.06);
      const pivot = new THREE.Group();
      pivot.rotation.x = 0.25 + i * 0.22;
      pivot.add(f);
      wing.add(pivot);
    }
    wing.rotation.z = s * -0.55;
    wing.rotation.y = s * 0.15;
    horse.add(wing);
  }

  horse.add(M(Box(0.26, 0.16, 0.3), m.cloth, 0, 0.37, -0.16));
  for (const s of [-1, 1]) {
    horse.add(M(Box(0.008, 0.1, 0.03), m.trim, s * 0.133, 0.37, -0.16));
    horse.add(M(Box(0.008, 0.03, 0.12), m.trim, s * 0.133, 0.39, -0.16));
  }
  horse.add(M(Box(0.2, 0.04, 0.2), m.leather, 0, 0.47, -0.16));

  const rider = humanoid(m, { rider: true, head: 'helm', plume: true, shield: true, sword: 'raised' });
  rider.scale.setScalar(0.6);
  rider.position.set(0, 0.2, -0.16);
  horse.add(rider);

  horse.rotation.x = 0.36;
  const rig = Object.assign({}, rider.userData.rig, { horse, horseRot: 0.36 });
  return { g, rig };
}
