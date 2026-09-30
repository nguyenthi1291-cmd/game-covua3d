import * as THREE from 'three';
import { sqPos } from './board.js';

export function createHighlights(scene) {
  const hlGroup = new THREE.Group();
  scene.add(hlGroup);

  const mkHL = (color, op) =>
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false });

  const hlMats = {
    sel: mkHL(0xffd97a, 0.6),
    last: mkHL(0xf2c14e, 0.3),
    check: mkHL(0xff3b30, 0.6),
    dot: mkHL(0x2fbf6a, 0.9),
    cap: mkHL(0xff6b5e, 0.9),
    col: mkHL(0x5ee0ff, 0.45)
  };

  const planeGeo = new THREE.PlaneGeometry(0.98, 0.98);
  const dotGeo = new THREE.CircleGeometry(0.15, 28);
  const ringGeo = new THREE.RingGeometry(0.4, 0.48, 36);

  function addHL(r, c, type) {
    const geo = type === 'dot' ? dotGeo : type === 'cap' ? ringGeo : planeGeo;
    const m = new THREE.Mesh(geo, hlMats[type]);
    m.rotation.x = -Math.PI / 2;
    const p = sqPos(r, c);
    m.position.set(p.x, type === 'dot' || type === 'cap' ? 0.018 : 0.01, p.z);
    m.renderOrder = 2;
    hlGroup.add(m);
  }

  function clearHL() {
    while (hlGroup.children.length) {
      hlGroup.remove(hlGroup.children[0]);
    }
  }

  return { addHL, clearHL, hlGroup };
}
