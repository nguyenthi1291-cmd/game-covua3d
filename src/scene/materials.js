import * as THREE from 'three';
import { TEAM } from '../learning/words.js';
import { MAIL, BRICK } from './textures.js';

// Shared, smoother "lacquered miniature" look:
// - Physical materials with clearcoat for cloth / base (glossy painted figurine)
// - Polished silver armour + gold trims reflect the PMREM environment
export function makePieceMaterials(col) {
  const T = TEAM[col];
  const S = THREE.MeshStandardMaterial;
  const P = THREE.MeshPhysicalMaterial;
  return {
    armor: new P({ color: 0xe4e9ef, metalness: 0.9, roughness: 0.22, clearcoat: 0.6, clearcoatRoughness: 0.15 }),
    mail: new S({ map: MAIL, color: 0xc9d0d8, metalness: 0.8, roughness: 0.38 }),
    blade: new S({ color: 0xf4f7fa, metalness: 1, roughness: 0.1 }),
    cloth: new P({ color: T.cloth, roughness: 0.42, clearcoat: 0.7, clearcoatRoughness: 0.25, sheen: 0.4, side: THREE.DoubleSide }),
    cape: new P({ color: T.cloth2, roughness: 0.5, sheen: 0.6, sheenColor: new THREE.Color(T.cloth), side: THREE.DoubleSide }),
    shieldFace: new P({ color: T.cloth, roughness: 0.3, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.1 }),
    trim: new S({ color: T.trim, roughness: 0.35, metalness: 0.2 }),
    gold: new P({ color: 0xf5c451, metalness: 1, roughness: 0.2, clearcoat: 0.5 }),
    gem: new P({ color: T.gem, metalness: 0.1, roughness: 0.05, clearcoat: 1, emissive: new THREE.Color(T.gem), emissiveIntensity: 0.15 }),
    skin: new S({ color: 0xf2c4a0, roughness: 0.55 }),
    hair: new S({ color: T.hair, roughness: 0.7 }),
    leather: new S({ color: 0x7a4a24, roughness: 0.6 }),
    door: new S({ color: 0x6b3f1f, roughness: 0.6 }),
    dark: new S({ color: 0x121318, roughness: 0.45 }),
    // Polished pedestal (deep team lacquer) – replaces the old grey cobble base
    stone: new P({ color: T.base, roughness: 0.28, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.08 }),
    brick: new P({ map: BRICK, color: 0xffffff, roughness: 0.55, clearcoat: 0.3 }),
    horse: new P({ color: 0xeef1f4, metalness: 0.55, roughness: 0.25, clearcoat: 0.8, clearcoatRoughness: 0.15 }),
    // Glowing team ring around the base – strong colour cue from any camera angle
    ring: new S({ color: T.cloth, emissive: new THREE.Color(T.cloth), emissiveIntensity: 0.55, roughness: 0.3 })
  };
}
