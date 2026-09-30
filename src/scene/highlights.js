import * as THREE from 'three';
import { sqPos } from './board.js';

export function createHighlights(scene) {
  const hlGroup = new THREE.Group();
  scene.add(hlGroup);

  const mkHL = (color, op) =>
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false, side: THREE.DoubleSide });

  const hlMats = {
    sel: mkHL(0xffd97a, 0.65),
    last: mkHL(0xf2c14e, 0.35),
    check: mkHL(0xff3b30, 0.65),
    dot: mkHL(0x2fbf6a, 0.9),
    cap: mkHL(0xff6b5e, 0.9),
    col: mkHL(0x5ee0ff, 0.45),
    hover: mkHL(0xffffff, 0.22),
    hintFrom: mkHL(0x00f0ff, 0.7),
    hintTo: mkHL(0x2ecc71, 0.85)
  };

  const planeGeo = new THREE.PlaneGeometry(0.98, 0.98);
  const dotGeo = new THREE.CircleGeometry(0.16, 28);
  const ringGeo = new THREE.RingGeometry(0.38, 0.48, 36);
  const hintRingGeo = new THREE.RingGeometry(0.32, 0.48, 36);

  function addHL(r, c, type) {
    let geo = planeGeo;
    if (type === 'dot') geo = dotGeo;
    else if (type === 'cap') geo = ringGeo;
    else if (type === 'hintFrom' || type === 'hintTo') geo = hintRingGeo;

    const mat = hlMats[type] || hlMats.sel;
    const m = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2;
    const p = sqPos(r, c);
    m.position.set(p.x, type === 'dot' || type === 'cap' || type === 'hintFrom' || type === 'hintTo' ? 0.022 : 0.012, p.z);
    m.renderOrder = 2;
    hlGroup.add(m);
    return m;
  }

  function addArrow(fr, fc, tr, tc) {
    const fromP = sqPos(fr, fc);
    const toP = sqPos(tr, tc);
    const dir = new THREE.Vector3().subVectors(toP, fromP);
    const len = dir.length();
    if (len < 0.1) return;

    dir.normalize();
    const arrow = new THREE.ArrowHelper(
      dir,
      new THREE.Vector3(fromP.x, 0.04, fromP.z),
      len - 0.25,
      0x00f0ff,
      0.35,
      0.25
    );
    arrow.renderOrder = 3;
    hlGroup.add(arrow);
    return arrow;
  }

  function clearHL() {
    while (hlGroup.children.length) {
      const child = hlGroup.children[0];
      hlGroup.remove(child);
      if (child.dispose) child.dispose();
    }
  }

  return { addHL, addArrow, clearHL, hlGroup };
}
