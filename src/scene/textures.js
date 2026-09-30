import * as THREE from 'three';
import { FILES } from '../engine/chess.js';

export function canvasTex(w, h, draw, rx = 1, ry = 1, srgb = true) {
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rx, ry);
  t.anisotropy = 4;
  return t;
}

export function spriteTex(draw) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 64;
  draw(cv.getContext('2d'));
  return new THREE.CanvasTexture(cv);
}

export const COBBLE = canvasTex(
  256,
  128,
  (x, w, h) => {
    x.fillStyle = '#4d5157';
    x.fillRect(0, 0, w, h);
    for (let i = 0; i < 95; i++) {
      const cx = Math.random() * w;
      const cy = Math.random() * h;
      const g = (140 + Math.random() * 60) | 0;
      x.fillStyle = `rgb(${g},${g + 3},${g + 8})`;
      x.strokeStyle = '#33373d';
      x.lineWidth = 3;
      x.beginPath();
      x.ellipse(cx, cy, 9 + Math.random() * 11, 7 + Math.random() * 8, Math.random() * 3, 0, Math.PI * 2);
      x.fill();
      x.stroke();
    }
  },
  3,
  1
);

export const BRICK = canvasTex(
  256,
  256,
  (x, w, h) => {
    x.fillStyle = '#2e3137';
    x.fillRect(0, 0, w, h);
    for (let r = 0; r < 16; r++) {
      const off = (r % 2) * 16;
      for (let c = -1; c < 8; c++) {
        const g = (84 + Math.random() * 34) | 0;
        x.fillStyle = `rgb(${g},${g + 3},${g + 9})`;
        x.fillRect(c * 32 + off + 1.5, r * 16 + 1.5, 29, 13);
      }
    }
  },
  3,
  2
);

export const MAIL = canvasTex(
  64,
  64,
  (x, w, h) => {
    x.fillStyle = '#8f959d';
    x.fillRect(0, 0, w, h);
    x.strokeStyle = '#e4e8ec';
    x.lineWidth = 2;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 9; c++) {
        x.beginPath();
        x.arc(c * 8 + (r % 2) * 4, r * 8 + 4, 3.2, 0, Math.PI * 2);
        x.stroke();
      }
    }
  },
  5,
  5
);

export const STAR = spriteTex(x => {
  x.fillStyle = '#fff';
  x.beginPath();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 12 : 30;
    const a = (i * Math.PI) / 5 - Math.PI / 2;
    x.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r);
  }
  x.closePath();
  x.fill();
});

export const DOT = spriteTex(x => {
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.45, 'rgba(255,255,255,.75)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
});

export function frameTexture() {
  return canvasTex(1024, 1024, x => {
    const grd = x.createLinearGradient(0, 0, 1024, 1024);
    grd.addColorStop(0, '#4a3221');
    grd.addColorStop(1, '#2e1e14');
    x.fillStyle = grd;
    x.fillRect(0, 0, 1024, 1024);
    const off = 1024 * (0.7 / 9.4);
    const u = (1024 - 2 * off) / 8;
    x.strokeStyle = '#f2c14e';
    x.lineWidth = 4;
    x.strokeRect(off - 10, off - 10, 1024 - 2 * off + 20, 1024 - 2 * off + 20);
    x.fillStyle = '#ffd97a';
    x.font = '700 40px Fredoka, Nunito, sans-serif';
    x.textAlign = 'center';
    x.textBaseline = 'middle';
    for (let i = 0; i < 8; i++) {
      const cx = off + (i + 0.5) * u;
      x.fillText(FILES[i].toUpperCase(), cx, 1024 - off / 2 + 2);
      x.fillText(FILES[i].toUpperCase(), cx, off / 2);
      const cy = off + (7 - i + 0.5) * u;
      x.fillText(String(i + 1), off / 2, cy);
      x.fillText(String(i + 1), 1024 - off / 2, cy);
    }
  });
}
