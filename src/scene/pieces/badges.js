import * as THREE from 'three';
import { TEAM } from '../../learning/words.js';

// Filled chess glyphs (+ U+FE0E = force text, not emoji, on iOS/Android)
const GLYPH = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };

// Global switch, driven by the "Viền sáng nhận diện quân cờ" toggle
export const BADGES = { visible: true };

const cache = new Map();

function badgeMaterial(t, col) {
  const key = t + col;
  if (cache.has(key)) return cache.get(key);

  const S = 128;
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const x = cv.getContext('2d');
  const c = S / 2;

  // soft drop shadow
  x.fillStyle = 'rgba(0,0,0,0.35)';
  x.beginPath();
  x.arc(c, c + 4, 56, 0, Math.PI * 2);
  x.fill();

  // team disc with radial shine
  const g = x.createRadialGradient(c - 16, c - 18, 6, c, c, 58);
  g.addColorStop(0, '#ffffff');
  g.addColorStop(0.18, TEAM[col].css);
  g.addColorStop(1, col === 'w' ? '#0f2f75' : '#6d0f0b');
  x.fillStyle = g;
  x.beginPath();
  x.arc(c, c, 54, 0, Math.PI * 2);
  x.fill();

  // gold rim
  x.lineWidth = 7;
  x.strokeStyle = '#ffd86b';
  x.stroke();

  // glyph
  x.fillStyle = '#ffffff';
  x.strokeStyle = 'rgba(0,0,0,0.45)';
  x.lineWidth = 4;
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.font = '74px "Segoe UI Symbol", "Noto Sans Symbols 2", "DejaVu Sans", "Apple Symbols", serif';
  const ch = GLYPH[t] + '︎';
  x.strokeText(ch, c, c + 5);
  x.fillText(ch, c, c + 5);

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.96 });
  cache.set(key, mat);
  return mat;
}

export function makeBadge(t, col, y) {
  const s = new THREE.Sprite(badgeMaterial(t, col));
  s.scale.setScalar(0.3);
  s.position.y = y;
  s.renderOrder = 6;
  s.visible = BADGES.visible;
  s.userData.isBadge = true;
  return s;
}
