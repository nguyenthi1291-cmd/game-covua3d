import * as THREE from 'three';
import { makePieceMaterials } from '../materials.js';
import { M, Cyl, humanoid } from './shared.js';
import { tower } from './tower.js';
import { horseKnight } from './horseKnight.js';

export function makePiece(t, col) {
  const m = makePieceMaterials(col);
  const g = new THREE.Group();
  const inner = new THREE.Group();
  g.add(inner);

  const rb = t === 'p' ? 0.3 : 0.36;
  inner.add(M(Cyl(rb * 0.92, rb, 0.16, 28), m.stone, 0, 0.08, 0));
  inner.add(M(Cyl(rb * 0.8, rb * 0.92, 0.03, 28), m.stone, 0, 0.175, 0));

  const fig = new THREE.Group();
  fig.position.y = 0.19;
  inner.add(fig);

  let rig = {};
  if (t === 'r') {
    const tw = tower(m);
    fig.add(tw.g);
    rig = tw.rig;
  } else if (t === 'n') {
    const hk = horseKnight(m);
    fig.add(hk.g);
    rig = hk.rig;
  } else {
    const opts = {
      p: { head: 'helm', plume: true, shield: true, sword: 'down', s: 0.72 },
      b: { head: 'mitre', shield: true, sword: 'forward', s: 0.88 },
      q: { head: 'queen', gown: true, cape: true, scepter: true, s: 0.96 },
      k: { head: 'king', cape: true, shield: true, bigShield: true, sword: 'down', bigSword: true, s: 1.04 }
    }[t];
    const h = humanoid(m, opts);
    h.scale.setScalar(opts.s);
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

  g.userData = {
    t,
    col,
    m,
    mats: Object.values(m),
    rig,
    baseRot: g.rotation.y
  };

  return g;
}

export function disposePiece(scene, g) {
  if (!g) return;
  scene.remove(g);
  g.traverse(o => {
    if (o.geometry) o.geometry.dispose();
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
