import * as THREE from 'three';
import { DOT, STAR } from './textures.js';
import { Box } from './pieces/shared.js';
import { disposePiece } from './pieces/index.js';

const V3 = THREE.Vector3;

export const easeIO = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export const easeIn = t => t * t;
export const lerp = (a, b, t) => a + (b - a) * t;

export function lerpAngle(a, b, t) {
  const d = (((b - a + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
  return a + d * t;
}

export class AnimationSystem {
  constructor(scene, camera, stageEl) {
    this.scene = scene;
    this.camera = camera;
    this.stageEl = stageEl;
    this.tasks = [];
    this.parts = [];
    this.debris = [];
    this.timeScale = 1;
    this.shake = 0;
    this.bounceMesh = null;
  }

  tween(ms, fn, ease = easeIO) {
    return new Promise(res => {
      this.tasks.push({ ms, el: 0, fn, ease, res });
    });
  }

  wait(ms) {
    return this.tween(ms, () => {}, null);
  }

  clear() {
    this.tasks = [];
    this.timeScale = 1;
  }

  burst(pos, o = {}) {
    const n = o.n || 40;
    const colors = o.colors || [0xffc860];
    const power = o.power || 3;
    const life = o.life || 0.75;
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const vel = [];
    const c = new THREE.Color();

    for (let i = 0; i < n; i++) {
      arr[i * 3] = pos.x;
      arr[i * 3 + 1] = pos.y;
      arr[i * 3 + 2] = pos.z;
      c.setHex(colors[i % colors.length]);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      vel.push(
        new V3(Math.random() - 0.5, Math.random() * (o.up == null ? 0.9 : o.up) + 0.1, Math.random() - 0.5)
          .normalize()
          .multiplyScalar(power * (0.4 + Math.random()))
      );
    }

    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: o.size || 0.08,
      map: o.tex || DOT,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: o.additive === false ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const pts = new THREE.Points(geo, mat);
    this.scene.add(pts);
    this.parts.push({ pts, vel, life, max: life, grav: o.grav == null ? 7 : o.grav });
  }

  shatter(piece) {
    const wp = new V3();
    piece.getWorldPosition(wp);
    const m = piece.userData.m;
    const src = [m.cloth, m.armor, m.stone, m.trim, m.gold];

    for (let i = 0; i < 30; i++) {
      const s = 0.06 + Math.random() * 0.1;
      const geo = Math.random() < 0.5 ? Box(s, s, s) : new THREE.TetrahedronGeometry(s * 0.8);
      const mat = src[i % src.length].clone();
      mat.transparent = true;
      mat.emissive = new THREE.Color(0);
      const d = new THREE.Mesh(geo, mat);
      d.castShadow = true;
      d.position.set(wp.x + (Math.random() - 0.5) * 0.3, 0.15 + Math.random() * 0.9, wp.z + (Math.random() - 0.5) * 0.3);
      this.scene.add(d);
      this.debris.push({
        m: d,
        v: new V3((Math.random() - 0.5) * 4, 2 + Math.random() * 3.5, (Math.random() - 0.5) * 4),
        spin: new V3(Math.random() * 8, Math.random() * 8, Math.random() * 8),
        life: 1.8
      });
    }
  }

  flash(piece, color = 0xff3322) {
    const c = new THREE.Color(color);
    const mats = piece.userData?.mats || [];
    this.tween(
      380,
      (e, k) => {
        for (const mt of mats) {
          if (mt.emissive) mt.emissive.copy(c).multiplyScalar(0.8 * (1 - k));
        }
      },
      null
    );
  }

  shockwave(pos, color = 0xffd23f) {
    const geo = new THREE.RingGeometry(0.3, 0.42, 48);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const r = new THREE.Mesh(geo, mat);
    r.rotation.x = -Math.PI / 2;
    r.position.set(pos.x, 0.03, pos.z);
    this.scene.add(r);

    this.tween(
      700,
      (e, k) => {
        r.scale.setScalar(1 + k * 7);
        mat.opacity = 0.9 * (1 - k);
      },
      null
    ).then(() => {
      this.scene.remove(r);
      geo.dispose();
      mat.dispose();
    });
  }

  popWord(txt, pos, style = 'cartoon') {
    if (style !== 'cartoon' || !this.stageEl) return;
    const v = pos.clone().project(this.camera);
    if (v.z > 1) return;

    const el = document.createElement('div');
    el.className = 'pow';
    el.textContent = txt;
    el.style.left = ((v.x + 1) / 2) * this.stageEl.clientWidth + 'px';
    el.style.top = ((1 - v.y) / 2) * this.stageEl.clientHeight + 'px';
    el.style.setProperty('--rot', (Math.random() * 24 - 12).toFixed(1) + 'deg');
    this.stageEl.appendChild(el);
    setTimeout(() => el.remove(), 950);
  }

  slide(mesh, to, ms = 440, hop = 0.2) {
    const from = mesh.position.clone();
    return this.tween(ms, (e, k) => {
      mesh.position.lerpVectors(from, to, e);
      mesh.position.y = Math.sin(k * Math.PI) * hop;
    }).then(() => {
      mesh.position.y = 0;
    });
  }

  vanish(mesh, style = 'cartoon') {
    return this.wait(260).then(() => {
      this.burst(mesh.position.clone().add(new V3(0, 0.5, 0)), {
        n: 26,
        colors: [0xffd23f, 0xffffff],
        power: 1.8,
        tex: style === 'cartoon' ? STAR : DOT,
        size: style === 'cartoon' ? 0.14 : 0.08
      });
      return this.tween(260, e => {
        mesh.scale.setScalar(Math.max(0.001, 1 - e));
      }).then(() => {
        disposePiece(this.scene, mesh);
      });
    });
  }

  update(dtms) {
    // Run tasks
    for (let i = this.tasks.length - 1; i >= 0; i--) {
      const t = this.tasks[i];
      t.el += dtms * this.timeScale;
      const k = Math.min(1, t.el / t.ms);
      t.fn(t.ease ? t.ease(k) : k, k);
      if (k >= 1) {
        this.tasks.splice(i, 1);
        t.res();
      }
    }

    const dt = (dtms / 1000) * Math.min(this.timeScale, 3);

    // Update particle bursts
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const s = this.parts[i];
      s.life -= dt;
      const a = s.pts.geometry.attributes.position.array;
      for (let j = 0; j < s.vel.length; j++) {
        const v = s.vel[j];
        v.y -= s.grav * dt;
        a[j * 3] += v.x * dt;
        a[j * 3 + 1] += v.y * dt;
        a[j * 3 + 2] += v.z * dt;
      }
      s.pts.geometry.attributes.position.needsUpdate = true;
      s.pts.material.opacity = Math.max(0, s.life / s.max);
      if (s.life <= 0) {
        this.scene.remove(s.pts);
        s.pts.geometry.dispose();
        s.pts.material.dispose();
        this.parts.splice(i, 1);
      }
    }

    // Update shattered debris
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i];
      d.life -= dt;
      d.v.y -= 9 * dt;
      d.m.position.addScaledVector(d.v, dt);
      if (d.m.position.y < 0.05) {
        d.m.position.y = 0.05;
        d.v.y *= -0.35;
        d.v.x *= 0.7;
        d.v.z *= 0.7;
      }
      d.m.rotation.x += d.spin.x * dt;
      d.m.rotation.y += d.spin.y * dt;
      d.m.rotation.z += d.spin.z * dt;
      if (d.life < 0.6) d.m.material.opacity = Math.max(0, d.life / 0.6);
      if (d.life <= 0) {
        this.scene.remove(d.m);
        d.m.geometry.dispose();
        d.m.material.dispose();
        this.debris.splice(i, 1);
      }
    }
  }
}
