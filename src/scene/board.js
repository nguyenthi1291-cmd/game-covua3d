import * as THREE from 'three';
import { frameTexture } from './textures.js';

export const sqPos = (r, c) => new THREE.Vector3(c - 3.5, 0, 3.5 - r);

export function createBoard(scene) {
  // Castle tabletop
  const table = new THREE.Mesh(
    new THREE.CircleGeometry(16, 64),
    new THREE.MeshStandardMaterial({ color: 0x172232, roughness: 0.9 })
  );
  table.rotation.x = -Math.PI / 2;
  table.position.y = -0.36;
  table.receiveShadow = true;
  scene.add(table);

  // Wooden frame with coordinate labels
  const sideMat = new THREE.MeshStandardMaterial({ color: 0x3a2618, roughness: 0.55 });
  const frameTopMat = new THREE.MeshStandardMaterial({ map: frameTexture(), roughness: 0.5 });
  const frame = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.3, 9.4), [
    sideMat,
    sideMat,
    frameTopMat,
    sideMat,
    sideMat,
    sideMat
  ]);
  frame.position.y = -0.2;
  frame.receiveShadow = true;
  frame.castShadow = true;
  scene.add(frame);

  if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      frameTopMat.map = frameTexture();
      frameTopMat.needsUpdate = true;
    });
  }

  // 64 Chessboard Squares
  const squares = [];
  const lightSq = new THREE.MeshStandardMaterial({ color: 0xe3cfa4, roughness: 0.55 });
  const darkSq = new THREE.MeshStandardMaterial({ color: 0x7d5a39, roughness: 0.5 });
  const sqGeo = new THREE.BoxGeometry(1, 0.2, 1);

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const m = new THREE.Mesh(sqGeo, (r + c) % 2 === 0 ? darkSq : lightSq);
      const p = sqPos(r, c);
      m.position.set(p.x, -0.1, p.z);
      m.receiveShadow = true;
      m.userData.sq = [r, c];
      scene.add(m);
      squares.push(m);
    }
  }

  return { table, frame, squares, sqPos };
}
