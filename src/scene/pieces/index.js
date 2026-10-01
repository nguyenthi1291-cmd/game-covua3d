import * as THREE from 'three';
import { makePieceMaterials } from '../materials.js';
import { M, Lathe, humanoid } from './shared.js';
import { tower } from './tower.js';
import { horseKnight } from './horseKnight.js';
import { makeBadge } from './badges.js';

// Figure scale per piece type – larger than before so pieces read clearly
// from a high (top-down) camera, while keeping the King tallest.
const FIG_SCALE = { p: 0.82, n: 1.08, b: 0.96, r: 1.02, q: 1.04, k: 1.12 };

function pedestal(m, rb) {
  // Smooth turned (lathe) base: wide foot → cove → collar → top plate
  const prof = [
    [0, 0],
    [rb, 0],
    [rb, 0.035],
    [rb * 0.985, 0.055],
    [rb * 0.93, 0.075],
    [rb * 0.86, 0.1],
    [rb * 0.84, 0.125],
    [rb * 0.86, 0.15],
    [rb * 0.84, 0.175],
    [rb * 0.78, 0.19],
    [0, 0.19]
  ];
  const g = new THREE.Group();
  g.add(M(Lathe(prof, 56), m.stone));

  const band = M(new THREE.TorusGeometry(rb * 0.995, 0.012, 12, 64), m.gold, 0, 0.035, 0);
  band.rotation.x = Math.PI / 2;
  g.add(band);

  const glow = M(new THREE.TorusGeometry(rb * 0.852, 0.014, 12, 64), m.ring, 0, 0.15, 0);
  glow.rotation.x = Math.PI / 2;
  g.add(glow);
  return g;
}

export function makePiece(t, col) {
  const m = makePieceMaterials(col);
  const g = new THREE.Group();
  // `inner` is lifted/bobbed for selection; `g` is moved by slides/battles.
  const inner = new THREE.Group();
  g.add(inner);

  const rb = t === 'p' ? 0.32 : 0.37;
  inner.add(pedestal(m, rb));

  const fig = new THREE.Group();
  fig.position.y = 0.19;
  inner.add(fig);

  let rig = {};
  const sc = FIG_SCALE[t];
  if (t === 'r') {
    const tw = tower(m);
    tw.g.scale.setScalar(sc);
    fig.add(tw.g);
    rig = tw.rig;
  } else if (t === 'n') {
    const hk = horseKnight(m);
    hk.g.scale.setScalar(sc);
    fig.add(hk.g);
    rig = hk.rig;
  } else {
    const opts = {
      p: { head: 'helm', plume: true, shield: true, sword: 'down' },
      b: { head: 'mitre', shield: true, sword: 'forward' },
      q: { head: 'queen', gown: true, cape: true, scepter: true },
      k: { head: 'king', cape: true, shield: true, bigShield: true, sword: 'down', bigSword: true }
    }[t];
    const h = humanoid(m, opts);
    h.scale.setScalar(sc);
    fig.add(h);
    rig = h.userData.rig;
  }

  g.rotation.y = col === 'w' ? 0 : Math.PI;
  g.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });

  // Floating identity badge just above the head – readable from directly above
  const top = new THREE.Box3().setFromObject(inner).max.y;
  const badge = makeBadge(t, col, top + 0.2);
  inner.add(badge);

  const mats = Object.values(m);
  g.userData = {
    t,
    col,
    m,
    mats,
    // remember base emissive so flashes fade back to it (glow ring, gems)
    emissive0: mats.map(mt => (mt.emissive ? mt.emissive.clone() : null)),
    rig,
    inner,
    fig,
    badge,
    lift: 0,
    liftTarget: 0,
    phase: Math.random() * Math.PI * 2,
    baseRot: g.rotation.y
  };

  return g;
}

export function disposePiece(scene, g) {
  if (!g) return;
  scene.remove(g);
  g.traverse(o => {
    if (o.geometry && !o.isSprite) o.geometry.dispose();
  });
  for (const mt of g.userData?.mats || []) {
    mt.dispose();
  }
}

export function resetRig(g) {
  const r = g.userData?.rig;
  if (!r) return;
  if (r.armR) r.armR.rotation.x = r.idleR;
  if (r.armL) {
    r.armL.rotation.x = r.idleL;
    if (r.shield) r.shield.rotation.x = -r.idleL;
  }
  if (r.horse) r.horse.rotation.x = r.horseRot;
}

// Gentle "alive" idle motion: head turns, subtle breathing, selection hover.
export function idlePiece(g, now, dt) {
  const u = g.userData;
  if (!u || !u.inner) return;
  const t = now / 1000 + u.phase;

  // smooth critically-damped lift toward target (selection)
  const k = 1 - Math.exp(-dt * 12);
  u.lift += (u.liftTarget - u.lift) * k;
  const hover = u.liftTarget > 0 ? Math.sin(now / 260) * 0.035 : 0;
  u.inner.position.y = u.lift + hover;

  // breathing + head glance
  u.fig.scale.y = 1 + Math.sin(t * 1.6) * 0.012;
  if (u.rig.head) u.rig.head.rotation.y = Math.sin(t * 0.45) * 0.28;
  if (u.rig.flag) u.rig.flag.rotation.y = Math.sin(now / 380 + u.rig.phase) * 0.35;
}
