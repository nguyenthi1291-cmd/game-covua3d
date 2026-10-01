import * as THREE from 'three';

export const M = (geo, mat, x = 0, y = 0, z = 0) => {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return m;
};

// Smoothness: every curved primitive gets at least 2x the radial segments
// (min 24) so silhouettes look round instead of faceted.
const SMOOTH = n => Math.max(24, Math.round(n * 2));

export const Cyl = (a, b, h, s = 16, hs = 1, open = false, ts = 0, tl = Math.PI * 2) =>
  new THREE.CylinderGeometry(a, b, h, SMOOTH(s), hs, open, ts, tl);

export const Sph = (r, w = 16, h = 12) => new THREE.SphereGeometry(r, SMOOTH(w), Math.max(16, h * 2));
export const Box = (a, b, c) => new THREE.BoxGeometry(a, b, c);
export const Cone = (r, h, s = 16) => new THREE.ConeGeometry(r, h, s <= 6 ? s : SMOOTH(s));

// Rounded profile solid (lathe) – used for smooth pedestals & domes
export const Lathe = (pts, seg = 48) =>
  new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), seg);

// Flared skirt/robe with vertical pleats (folds deepen toward the hem)
export function pleated(rTop, rBot, h, folds = 14, amp = 0.018) {
  const geo = new THREE.CylinderGeometry(rTop, rBot, h, 96, 12, true);
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const k = 0.5 - v.y / h; // 0 top → 1 hem
    const a = Math.atan2(v.z, v.x);
    const r = Math.hypot(v.x, v.z);
    const d = 1 + (amp * Math.sin(a * folds) * (0.25 + k)) / Math.max(r, 0.01);
    p.setXYZ(i, v.x * d, v.y, v.z * d);
  }
  geo.computeVertexNormals();
  return geo;
}

// Ornate crown: band + alternating spikes/orbs + optional arches and star
export function crown(m, o = {}) {
  const g = new THREE.Group();
  const r = o.r || 0.105;
  const tall = o.tall || 0.09;
  g.add(M(Cyl(r, r * 0.95, 0.06, 24, 1, true), m.gold, 0, 0.03, 0));
  const rim = M(new THREE.TorusGeometry(r, 0.008, 8, 48), m.gold, 0, 0.0, 0);
  rim.rotation.x = Math.PI / 2;
  g.add(rim);
  const rim2 = rim.clone();
  rim2.position.y = 0.06;
  g.add(rim2);
  const n = o.points || 8;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const big = i % 2 === 0;
    const hgt = big ? tall : tall * 0.6;
    const x = Math.sin(a) * r;
    const z = Math.cos(a) * r;
    const sp = M(Cone(big ? 0.022 : 0.016, hgt, 8), m.gold, x, 0.06 + hgt / 2, z);
    g.add(sp);
    g.add(M(Sph(big ? 0.013 : 0.01, 8, 6), big ? m.gold : m.gem, x, 0.06 + hgt + 0.008, z));
    // little leaf on the band
    const lf = M(Sph(0.014, 8, 6), m.gold, Math.sin(a) * (r + 0.004), 0.035, Math.cos(a) * (r + 0.004));
    lf.scale.set(1, 1.6, 0.5);
    lf.lookAt(0, 0.035, 0);
    g.add(lf);
  }
  g.add(M(Sph(0.02, 10, 8), m.gem, 0, 0.032, -r - 0.004));
  if (o.arches) {
    for (let i = 0; i < 2; i++) {
      const arc = M(new THREE.TorusGeometry(r * 0.92, 0.008, 8, 32, Math.PI), m.gold, 0, 0.06, 0);
      arc.rotation.y = (i * Math.PI) / 2;
      arc.scale.y = 0.9;
      g.add(arc);
    }
    g.add(M(Sph(0.026, 12, 10), m.gold, 0, 0.06 + r * 0.85, 0));
  }
  if (o.star) {
    const st = M(new THREE.OctahedronGeometry(0.045, 0), m.gold, 0, 0.06 + (o.arches ? r * 0.85 + 0.05 : tall + 0.04), 0);
    st.scale.set(0.55, 1.2, 0.25);
    g.add(st);
    const st2 = st.clone();
    st2.rotation.z = Math.PI / 2;
    g.add(st2);
  } else if (o.cross) {
    const y = 0.06 + (o.arches ? r * 0.85 + 0.06 : tall + 0.05);
    g.add(M(Box(0.014, 0.07, 0.014), m.gold, 0, y, 0));
    g.add(M(Box(0.045, 0.014, 0.014), m.gold, 0, y + 0.01, 0));
  }
  return g;
}

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

  if (o.robe) o.gown = true;
  if (o.gown) {
    g.add(M(pleated(0.13, o.robe ? 0.24 : 0.3, 0.62, o.robe ? 10 : 16, o.robe ? 0.012 : 0.02), m.cloth, 0, 0.31, 0));
    g.add(M(Cyl(0.12, 0.13, 0.62, 24), m.cloth, 0, 0.31, 0)); // inner fill
    const hem = M(new THREE.TorusGeometry(o.robe ? 0.245 : 0.305, 0.014, 10, 96), m.gold, 0, 0.012, 0);
    hem.rotation.x = Math.PI / 2;
    g.add(hem);
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
    const nk = M(new THREE.TorusGeometry(0.1, 0.012, 16, 48), m.gold, 0, 0.86, -0.02);
    nk.rotation.x = Math.PI / 2.4;
    g.add(nk);
    g.add(M(Sph(0.025, 10, 8), m.gem, 0, 0.82, -0.12));
  }

  const belt = M(new THREE.TorusGeometry(0.148, 0.018, 16, 48), o.gown ? m.gold : m.leather, 0, 0.6, 0);
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
      const band = M(new THREE.TorusGeometry(0.09, 0.012, 16, 48), m.gold, 0, 0.15, 0);
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

    if (o.head === 'king' || o.head === 'bishop') {
      const b = M(Sph(o.head === 'bishop' ? 0.07 : 0.08, 16, 12), m.hair, 0, -0.07, -0.035);
      b.scale.set(1, 1.15, 0.75);
      head.add(b);
      head.add(M(Box(0.08, 0.018, 0.02), m.hair, 0, -0.025, -0.092));
      if (o.head === 'king') {
        // wavy hair at the back of the neck
        head.add(M(Cyl(0.095, 0.11, 0.12, 16, 1, false, -Math.PI / 2, Math.PI), m.hair, 0, -0.04, 0.02));
      }
    } else {
      head.add(M(Box(0.035, 0.01, 0.01), m.gem, 0, -0.045, -0.092));
      head.add(M(Cyl(0.09, 0.12, 0.26, 16, 1, false, -Math.PI / 2, Math.PI), m.hair, 0, -0.1, 0.02));
    }
    let cr;
    if (o.head === 'king') cr = crown(m, { r: 0.105, tall: 0.1, points: 8, arches: true, cross: true });
    else if (o.head === 'queen') cr = crown(m, { r: 0.1, tall: 0.15, points: 10, star: true });
    else {
      // Bishop: tall onion-dome mitre with gold bands
      cr = new THREE.Group();
      const prof = [[0.0, 0], [0.105, 0], [0.108, 0.05], [0.12, 0.1], [0.115, 0.16], [0.085, 0.22], [0.045, 0.27], [0.02, 0.3], [0.0, 0.31]];
      cr.add(M(Lathe(prof, 40), m.cloth));
      for (const y of [0.012, 0.06, 0.16]) {
        const b = M(new THREE.TorusGeometry(y === 0.16 ? 0.117 : 0.11, 0.009, 8, 40), m.gold, 0, y, 0);
        b.rotation.x = Math.PI / 2;
        cr.add(b);
      }
      for (let i = 0; i < 8; i++) {
        const rib = M(Box(0.008, 0.2, 0.008), m.gold, Math.sin((i / 8) * Math.PI * 2) * 0.1, 0.16, Math.cos((i / 8) * Math.PI * 2) * 0.1);
        rib.lookAt(0, 0.16, 0);
        rib.rotation.x += 0.25;
        cr.add(rib);
      }
      cr.add(M(Sph(0.028, 12, 10), m.gold, 0, 0.33, 0));
    }
    cr.position.y = 0.06;
    head.add(cr);
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

  if (o.crozier) {
    const cz = new THREE.Group();
    cz.add(M(Cyl(0.011, 0.011, 0.7, 8), m.gold, 0, 0.12, 0));
    const hook = M(new THREE.TorusGeometry(0.045, 0.011, 8, 24, Math.PI * 1.4), m.gold, 0.045, 0.47, 0);
    cz.add(hook);
    cz.add(M(Sph(0.022, 10, 8), m.gem, 0, 0.44, 0));
    rig.handR.add(cz);
    rig.idleR = 0.5;
    rig.armR.rotation.x = 0.5;
    cz.rotation.x = -0.5;
    rig.crozier = cz;
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
