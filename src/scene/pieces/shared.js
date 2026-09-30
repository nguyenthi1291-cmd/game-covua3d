import * as THREE from 'three';

export const M = (geo, mat, x = 0, y = 0, z = 0) => {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return m;
};

export const Cyl = (a, b, h, s = 16, hs = 1, open = false, ts = 0, tl = Math.PI * 2) =>
  new THREE.CylinderGeometry(a, b, h, s, hs, open, ts, tl);

export const Sph = (r, w = 16, h = 12) => new THREE.SphereGeometry(r, w, h);
export const Box = (a, b, c) => new THREE.BoxGeometry(a, b, c);
export const Cone = (r, h, s = 16) => new THREE.ConeGeometry(r, h, s);

export function shield(m, sz = 1) {
  const s = new THREE.Shape();
  s.moveTo(-0.13, 0.12);
  s.lineTo(0.13, 0.12);
  s.lineTo(0.13, 0);
  s.quadraticCurveTo(0.12, -0.14, 0, -0.22);
  s.quadraticCurveTo(-0.12, -0.14, -0.13, 0);
  s.lineTo(-0.13, 0.12);

  const geo = new THREE.ExtrudeGeometry(s, {
    depth: 0.025,
    bevelEnabled: true,
    bevelThickness: 0.008,
    bevelSize: 0.008,
    bevelSegments: 1,
    curveSegments: 10
  });

  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, [m.shieldFace, m.gold]));
  g.add(M(Box(0.042, 0.27, 0.008), m.trim, 0, -0.035, 0.036));
  g.add(M(Box(0.2, 0.042, 0.008), m.trim, 0, 0.035, 0.036));

  const w = new THREE.Group();
  g.rotation.y = Math.PI;
  w.add(g);
  w.scale.setScalar(sz);
  return w;
}

export function sword(m, len = 0.42) {
  const g = new THREE.Group();
  g.add(M(Box(0.03, len, 0.008), m.blade, 0, 0.07 + len / 2, 0));
  const tip = M(Cone(0.021, 0.05, 4), m.blade, 0, 0.07 + len + 0.025, 0);
  tip.rotation.y = Math.PI / 4;
  g.add(tip);
  g.add(M(Box(0.14, 0.022, 0.03), m.gold, 0, 0.06, 0));
  g.add(M(Cyl(0.014, 0.014, 0.09, 8), m.leather, 0, 0, 0));
  g.add(M(Sph(0.022, 8, 6), m.gold, 0, -0.05, 0));
  return g;
}

export function humanoid(m, o) {
  const g = new THREE.Group();
  const rig = { idleR: 0.12, idleL: 0.1 };

  if (o.gown) {
    g.add(M(Cyl(0.12, 0.27, 0.62, 24), m.cloth, 0, 0.31, 0));
    g.add(M(Cyl(0.275, 0.28, 0.04, 24), m.gold, 0, 0.02, 0));
  } else if (o.rider) {
    g.add(M(Cyl(0.15, 0.25, 0.22, 20, 1, true), m.cloth, 0, 0.5, 0));
    for (const s of [-1, 1]) {
      g.add(M(Cyl(0.045, 0.045, 0.26, 10), m.mail, s * 0.17, 0.34, -0.02));
    }
  } else {
    for (const s of [-1, 1]) {
      g.add(M(Cyl(0.05, 0.055, 0.3, 12), m.mail, s * 0.075, 0.15, 0));
      g.add(M(Box(0.09, 0.06, 0.15), m.leather, s * 0.075, 0.03, -0.02));
    }
    g.add(M(Cyl(0.15, 0.22, 0.3, 20, 1, true), m.cloth, 0, 0.44, 0));
  }

  g.add(M(Cyl(0.15, 0.14, 0.32, 20), o.gown ? m.cloth : m.mail, 0, 0.73, 0));

  if (!o.gown) {
    g.add(M(Cyl(0.157, 0.147, 0.3, 20, 1, true, -Math.PI * 0.42, Math.PI * 0.84), m.cloth, 0, 0.72, 0).rotateY(Math.PI));
    g.add(M(Box(0.045, 0.2, 0.012), m.trim, 0, 0.72, -0.152));
    g.add(M(Box(0.14, 0.045, 0.012), m.trim, 0, 0.76, -0.152));
  } else {
    const nk = M(new THREE.TorusGeometry(0.1, 0.012, 8, 24), m.gold, 0, 0.86, -0.02);
    nk.rotation.x = Math.PI / 2.4;
    g.add(nk);
    g.add(M(Sph(0.025, 10, 8), m.gem, 0, 0.82, -0.12));
  }

  const belt = M(new THREE.TorusGeometry(0.148, 0.018, 8, 24), o.gown ? m.gold : m.leather, 0, 0.6, 0);
  belt.rotation.x = Math.PI / 2;
  g.add(belt);

  if (!o.gown) g.add(M(Box(0.05, 0.04, 0.02), m.gold, 0, 0.6, -0.162));

  for (const s of [-1, 1]) {
    g.add(M(Sph(0.075, 14, 10), o.gown ? m.cloth : m.armor, s * 0.18, 0.86, 0));
  }

  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.2, 0.86, 0);
    arm.add(M(Cyl(0.046, 0.04, 0.28, 10), o.gown ? m.cloth : m.mail, 0, -0.14, 0));
    arm.add(M(Sph(0.042, 10, 8), o.gown ? m.skin : m.leather, 0, -0.29, 0));
    const hand = new THREE.Group();
    hand.position.y = -0.29;
    arm.add(hand);
    g.add(arm);
    if (s < 0) {
      rig.armL = arm;
      rig.handL = hand;
    } else {
      rig.armR = arm;
      rig.handR = hand;
    }
  }

  g.add(M(Cyl(0.05, 0.055, 0.07, 10), o.gown ? m.skin : m.mail, 0, 0.92, 0));

  const head = new THREE.Group();
  head.position.y = 1.03;
  g.add(head);
  rig.head = head;

  if (o.head === 'helm' || o.head === 'mitre') {
    head.add(M(Cyl(0.1, 0.102, 0.19, 20), m.armor));
    head.add(M(Cyl(0.07, 0.1, 0.05, 20), m.armor, 0, 0.12, 0));
    head.add(M(Box(0.17, 0.022, 0.02), m.dark, 0, 0.025, -0.095));
    head.add(M(Box(0.026, 0.1, 0.02), m.gold, 0, -0.04, -0.098));
    head.add(M(Box(0.026, 0.05, 0.02), m.gold, 0, 0.07, -0.098));
    head.add(M(Box(0.09, 0.02, 0.02), m.gold, 0, 0.07, -0.098));

    if (o.plume) {
      const pl = M(Cone(0.04, 0.2, 10), m.cloth, 0, 0.23, 0.02);
      pl.rotation.x = -0.25;
      head.add(pl);
    }
    if (o.head === 'mitre') {
      head.add(M(Cone(0.09, 0.26, 20), m.cloth, 0, 0.27, 0));
      const band = M(new THREE.TorusGeometry(0.09, 0.012, 8, 24), m.gold, 0, 0.15, 0);
      band.rotation.x = Math.PI / 2;
      head.add(band);
      head.add(M(Box(0.02, 0.1, 0.02), m.gold, 0, 0.25, -0.055));
      head.add(M(Box(0.06, 0.02, 0.02), m.gold, 0, 0.27, -0.052));
      head.add(M(Sph(0.025, 10, 8), m.gold, 0, 0.41, 0));
    }
  } else {
    head.add(M(Sph(0.095, 20, 16), m.skin));
    head.add(M(new THREE.SphereGeometry(0.1, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2.1), m.hair, 0, 0.005, 0.012));
    for (const s of [-1, 1]) {
      head.add(M(Sph(0.013, 8, 6), m.dark, s * 0.035, 0.02, -0.088));
    }
    head.add(M(Sph(0.017, 8, 6), m.skin, 0, -0.005, -0.097));

    if (o.head === 'king') {
      const b = M(Sph(0.08, 16, 12), m.hair, 0, -0.07, -0.035);
      b.scale.set(1, 1.15, 0.75);
      head.add(b);
      head.add(M(Box(0.08, 0.018, 0.02), m.hair, 0, -0.025, -0.092));
    } else {
      head.add(M(Box(0.035, 0.01, 0.01), m.gem, 0, -0.045, -0.092));
      head.add(M(Cyl(0.09, 0.12, 0.26, 16, 1, false, -Math.PI / 2, Math.PI), m.hair, 0, -0.1, 0.02));
    }
    head.add(M(Cyl(0.106, 0.1, 0.07, 20, 1, true), m.gold, 0, 0.09, 0));
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      head.add(
        M(
          o.head === 'king' ? Cone(0.024, 0.07, 6) : Sph(0.022, 10, 8),
          o.head === 'king' ? m.gold : m.gem,
          Math.sin(a) * 0.1,
          0.15,
          Math.cos(a) * 0.1
        )
      );
    }
    head.add(M(Sph(0.02, 10, 8), m.gem, 0, 0.09, -0.106));
  }

  if (o.cape) {
    g.add(M(Cyl(0.2, o.gown ? 0.31 : 0.27, 0.72, 20, 1, true, -Math.PI / 2, Math.PI), m.cape, 0, 0.55, 0));
  }

  if (o.shield) {
    const sh = shield(m, o.bigShield ? 1.2 : 1);
    sh.position.set(-0.03, 0.03, -0.08);
    rig.handL.add(sh);
    rig.shield = sh;
    rig.idleL = 0.35;
    rig.armL.rotation.x = 0.35;
    sh.rotation.x = -0.35;
  }

  if (o.sword) {
    const sw = sword(m, o.bigSword ? 0.5 : 0.42);
    sw.rotation.x = Math.PI;
    rig.handR.add(sw);
    rig.sword = sw;
    rig.idleR = o.sword === 'forward' ? 0.7 : o.sword === 'raised' ? 2.5 : 0.12;
    rig.armR.rotation.x = rig.idleR;
  }

  if (o.scepter) {
    const sc = new THREE.Group();
    sc.add(M(Cyl(0.012, 0.012, 0.42, 8), m.gold, 0, 0.12, 0));
    sc.add(M(Sph(0.045, 14, 10), m.gem, 0, 0.36, 0));
    sc.add(M(Box(0.012, 0.07, 0.012), m.gold, 0, 0.42, 0));
    sc.add(M(Box(0.045, 0.012, 0.012), m.gold, 0, 0.43, 0));
    rig.handR.add(sc);
    rig.idleR = 0.9;
    rig.armR.rotation.x = 0.9;
    sc.rotation.x = -0.9;
    rig.scepter = sc;
  }

  g.userData.rig = rig;
  return g;
}
