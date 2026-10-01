import * as THREE from 'three';
import { TEAM } from '../learning/words.js';

// ─────────────────────────────────────────────────────────────
// "Carved statue" look: ivory marble (Blue) vs black onyx (Red),
// both inlaid with gold filigree. Team colour stays on the glowing
// pedestal ring so sides remain easy to tell apart.
// ─────────────────────────────────────────────────────────────

const STONE = {
  w: { base: '#efe6cf', vein: 'rgba(170,150,110,', shade: 0xe9dcc0, deep: 0xd9c8a2 },
  b: { base: '#1b1b20', vein: 'rgba(150,150,165,', shade: 0x202026, deep: 0x111115 }
};
const GOLD = '#d9a93f';

// Deterministic PRNG so both builds of a texture match
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function tex(cv, rx, ry, srgb) {
  const t = new THREE.CanvasTexture(cv);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rx, ry);
  t.anisotropy = 8;
  return t;
}

// Soft marble: mottled base + a few thin veins
function drawMarble(x, w, h, col, seed) {
  const r = rng(seed);
  x.fillStyle = STONE[col].base;
  x.fillRect(0, 0, w, h);
  for (let i = 0; i < 260; i++) {
    const a = r() * 0.05;
    x.fillStyle = col === 'w' ? `rgba(200,180,140,${a})` : `rgba(90,90,105,${a})`;
    x.beginPath();
    x.arc(r() * w, r() * h, 6 + r() * 26, 0, Math.PI * 2);
    x.fill();
  }
  for (let v = 0; v < 6; v++) {
    x.strokeStyle = STONE[col].vein + (0.08 + r() * 0.12) + ')';
    x.lineWidth = 0.6 + r() * 1.4;
    x.beginPath();
    let px = r() * w;
    let py = 0;
    x.moveTo(px, py);
    while (py < h) {
      px += (r() - 0.5) * 30;
      py += 8 + r() * 14;
      x.lineTo(px, py);
    }
    x.stroke();
  }
}

// Gold arabesque scrolls (vines + curls + leaves), tile-able
function drawFiligree(x, w, h, colour, lw) {
  x.strokeStyle = colour;
  x.fillStyle = colour;
  x.lineCap = 'round';
  const cells = 4;
  const cw = w / cells;
  const ch = h / cells;
  for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      const cx = i * cw + cw / 2;
      const cy = j * ch + ch / 2;
      const flip = (i + j) % 2 ? 1 : -1;
      x.lineWidth = lw;
      // main S-vine
      x.beginPath();
      x.moveTo(cx - cw * 0.45, cy + ch * 0.4);
      x.bezierCurveTo(cx - cw * 0.1, cy + ch * 0.45 * flip, cx + cw * 0.1, cy - ch * 0.45 * flip, cx + cw * 0.45, cy - ch * 0.4);
      x.stroke();
      // curls
      for (const s of [-1, 1]) {
        x.beginPath();
        for (let k = 0; k <= 26; k++) {
          const a = (k / 26) * Math.PI * 2.2;
          const rr = cw * 0.17 * (1 - k / 32);
          const px = cx + s * cw * 0.2 + Math.cos(a * s) * rr;
          const py = cy + s * flip * ch * 0.08 + Math.sin(a * s) * rr;
          k ? x.lineTo(px, py) : x.moveTo(px, py);
        }
        x.lineWidth = lw * 0.8;
        x.stroke();
      }
      // leaves
      for (const s of [-1, 1]) {
        x.save();
        x.translate(cx + s * cw * 0.05, cy - s * ch * 0.22 * flip);
        x.rotate(s * 0.8);
        x.beginPath();
        x.ellipse(0, 0, cw * 0.035, ch * 0.09, 0, 0, Math.PI * 2);
        x.fill();
        x.restore();
      }
      // dots
      x.beginPath();
      x.arc(cx, cy, lw * 1.1, 0, Math.PI * 2);
      x.fill();
    }
  }
}

const cache = {};
function statueTextures(col) {
  if (cache[col]) return cache[col];
  const S = 512;
  const mk = () => {
    const c = document.createElement('canvas');
    c.width = c.height = S;
    return c;
  };

  // Plain carved stone
  const plain = mk();
  drawMarble(plain.getContext('2d'), S, S, col, 7);

  // Stone + gold embroidery (colour map)
  const fil = mk();
  const fx = fil.getContext('2d');
  drawMarble(fx, S, S, col, 11);
  drawFiligree(fx, S, S, GOLD, 5);

  // Metalness map: gold = metal (white), stone = black
  const met = mk();
  const mx = met.getContext('2d');
  mx.fillStyle = '#000';
  mx.fillRect(0, 0, S, S);
  drawFiligree(mx, S, S, '#fff', 5);

  // Roughness map: polished gold, satin stone
  const rough = mk();
  const rx = rough.getContext('2d');
  rx.fillStyle = col === 'w' ? '#8c8c8c' : '#5a5a5a';
  rx.fillRect(0, 0, S, S);
  drawFiligree(rx, S, S, '#3a3a3a', 5);

  // Bump: raised filigree for a carved/relief feel
  const bump = mk();
  const bx = bump.getContext('2d');
  bx.fillStyle = '#000';
  bx.fillRect(0, 0, S, S);
  bx.filter = 'blur(1.5px)';
  drawFiligree(bx, S, S, '#fff', 6);

  // Stone blocks for the tower (marble + engraved joints + gold inlay band)
  const blk = mk();
  const kx = blk.getContext('2d');
  drawMarble(kx, S, S, col, 23);
  kx.strokeStyle = col === 'w' ? 'rgba(150,125,80,0.55)' : 'rgba(0,0,0,0.75)';
  kx.lineWidth = 3;
  const rows = 8;
  for (let r = 0; r <= rows; r++) {
    const y = (r / rows) * S;
    kx.beginPath();
    kx.moveTo(0, y);
    kx.lineTo(S, y);
    kx.stroke();
    for (let c = 0; c < 6; c++) {
      const xx = ((c + (r % 2) * 0.5) / 6) * S;
      kx.beginPath();
      kx.moveTo(xx, y);
      kx.lineTo(xx, y + S / rows);
      kx.stroke();
    }
  }

  cache[col] = {
    plain: tex(plain, 1, 1, true),
    fil: tex(fil, 2, 2, true),
    filMet: tex(met, 2, 2, false),
    filRough: tex(rough, 2, 2, false),
    filBump: tex(bump, 2, 2, false),
    blocks: tex(blk, 2, 1, true)
  };
  return cache[col];
}

export function makePieceMaterials(col) {
  const T = TEAM[col];
  const X = statueTextures(col);
  const st = STONE[col];
  const P = THREE.MeshPhysicalMaterial;
  const ivory = col === 'w';

  // Polished carved stone
  const stoneMat = (extra = {}) =>
    new P({
      map: X.plain,
      color: 0xffffff,
      roughness: ivory ? 0.42 : 0.28,
      metalness: 0,
      clearcoat: ivory ? 0.35 : 0.8,
      clearcoatRoughness: 0.3,
      sheen: ivory ? 0.25 : 0,
      sheenColor: new THREE.Color(0xfff3d8),
      ...extra
    });

  // Stone with inlaid gold embroidery (gowns, robes, capes, tabards)
  const embroidered = (extra = {}) =>
    new P({
      map: X.fil,
      metalnessMap: X.filMet,
      roughnessMap: X.filRough,
      bumpMap: X.filBump,
      bumpScale: 1.2,
      color: 0xffffff,
      metalness: 1,
      roughness: 1,
      clearcoat: ivory ? 0.25 : 0.6,
      clearcoatRoughness: 0.35,
      side: THREE.DoubleSide,
      ...extra
    });

  const gold = new P({ color: 0xe0b04a, metalness: 1, roughness: 0.28, clearcoat: 0.4, clearcoatRoughness: 0.2 });

  return {
    armor: stoneMat(),
    mail: stoneMat(),
    blade: gold,
    cloth: embroidered(),
    cape: embroidered(),
    shieldFace: embroidered({ side: THREE.FrontSide }),
    trim: gold,
    gold,
    // Small inset jewel in the team colour (subtle, statue-like)
    gem: new P({ color: T.cloth, metalness: 0.2, roughness: 0.08, clearcoat: 1, emissive: new THREE.Color(T.cloth), emissiveIntensity: 0.25 }),
    skin: stoneMat(),
    hair: stoneMat({ color: new THREE.Color(st.shade), roughness: ivory ? 0.55 : 0.4 }),
    leather: stoneMat({ color: new THREE.Color(st.deep) }),
    door: gold,
    // carved recesses: a slightly darker stone rather than black paint
    dark: stoneMat({ color: new THREE.Color(ivory ? 0x9c8762 : 0x060608), roughness: 0.6, clearcoat: 0 }),
    stone: stoneMat({ roughness: ivory ? 0.35 : 0.22, clearcoat: 1, clearcoatRoughness: 0.12 }),
    brick: stoneMat({ map: X.blocks }),
    horse: stoneMat(),
    // Glowing team ring around the base – strong colour cue from any camera angle
    ring: new THREE.MeshStandardMaterial({ color: T.cloth, emissive: new THREE.Color(T.cloth), emissiveIntensity: 0.7, roughness: 0.3 })
  };
}
