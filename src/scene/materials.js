import * as THREE from 'three';
import { TEAM } from '../learning/words.js';
import { COBBLE, BRICK, MAIL } from './textures.js';

export function makePieceMaterials(col) {
  const T = TEAM[col];
  const S = THREE.MeshStandardMaterial;
  return {
    armor: new S({ color: 0xd7dde3, metalness: 0.95, roughness: 0.28 }),
    mail: new S({ map: MAIL, color: 0xb9c0c8, metalness: 0.85, roughness: 0.45 }),
    blade: new S({ color: 0xf0f4f8, metalness: 1, roughness: 0.12 }),
    cloth: new S({ color: T.cloth, roughness: 0.55, side: THREE.DoubleSide }),
    cape: new S({ color: T.cloth2, roughness: 0.6, side: THREE.DoubleSide }),
    shieldFace: new S({ color: T.cloth, roughness: 0.4, metalness: 0.1 }),
    trim: new S({ color: T.trim, roughness: 0.4 }),
    gold: new S({ color: 0xf2c14e, metalness: 1, roughness: 0.25 }),
    gem: new S({ color: T.gem, metalness: 0.2, roughness: 0.1 }),
    skin: new S({ color: 0xf2c4a0, roughness: 0.6 }),
    hair: new S({ color: T.hair, roughness: 0.8 }),
    leather: new S({ color: 0x7a4a24, roughness: 0.7 }),
    door: new S({ color: 0x6b3f1f, roughness: 0.7 }),
    dark: new S({ color: 0x121318, roughness: 0.5 }),
    stone: new S({ map: COBBLE, color: 0xffffff, roughness: 0.9 }),
    brick: new S({ map: BRICK, roughness: 0.85 }),
    horse: new S({ color: 0xe7eaee, metalness: 0.6, roughness: 0.3 })
  };
}
