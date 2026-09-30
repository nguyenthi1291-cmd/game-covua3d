import * as THREE from 'three';
import { Sph, Cyl } from '../scene/pieces/shared.js';
import { STAR } from '../scene/textures.js';
import { easeIO, easeIn, lerp } from '../scene/animation.js';

const V3 = THREE.Vector3;

export function createBattleMoves(anim, sound, getStyle) {
  function hitFx(c, power = 1, word, colors) {
    const p = c.contact.clone().add(new V3((Math.random() - 0.5) * 0.2, (Math.random() - 0.3) * 0.25, (Math.random() - 0.5) * 0.2));
    const style = getStyle();
    if (style === 'cartoon') {
      anim.burst(p, {
        n: Math.round(26 * power),
        colors: colors || [0xffd23f, 0xff7ad9, 0x5ee0ff, 0x8dff6a],
        power: 2.2 * Math.sqrt(power),
        size: 0.16,
        tex: STAR,
        life: 0.8
      });
    } else {
      anim.burst(p, {
        n: Math.round(45 * power),
        colors: [0xffc860, 0xffffff, 0xff8a3d],
        power: 3 * Math.sqrt(power),
        size: 0.08,
        life: 0.7
      });
    }
    anim.flash(c.def);
    anim.shake = Math.max(anim.shake, 0.05 * power);
    sound.play('hit');
    if (word) anim.popWord(word, p, style);
    knock(c.def, c.defPos, c.dir, 0.14 * Math.min(power, 2));
  }

  function knock(d, base, dir, amt) {
    anim.tween(
      420,
      (e, k) => {
        const s = Math.sin(k * Math.PI);
        d.position.copy(base).addScaledVector(dir, s * amt);
        d.position.y = s * amt * 0.5;
        d.rotation.z = Math.sin(k * Math.PI * 3) * 0.15 * (1 - k);
      },
      null
    ).then(() => {
      if (d.parent) {
        d.position.copy(base);
        d.rotation.z = 0;
      }
    });
  }

  function chopPose(rig, k) {
    if (!rig.armR) return;
    const i = rig.idleR;
    let a;
    if (k < 0.35) a = lerp(i, 2.8, easeIO(k / 0.35));
    else if (k < 0.55) a = lerp(2.8, 1.1, (k - 0.35) / 0.2);
    else a = lerp(1.1, i, easeIO((k - 0.55) / 0.45));
    rig.armR.rotation.x = a;
  }

  function bashPose(rig, k) {
    if (!rig.armL) return;
    const i = rig.idleL;
    const a = k < 0.3 ? lerp(i, -0.2, k / 0.3) : k < 0.6 ? lerp(-0.2, 1.4, (k - 0.3) / 0.3) : lerp(1.4, i, (k - 0.6) / 0.4);
    rig.armL.rotation.x = a;
    if (rig.shield) rig.shield.rotation.x = -a;
  }

  function lunge(c, ms, dist, hitAt, onHit, pose) {
    let hit = false;
    return anim
      .tween(
        ms,
        (e, k) => {
          const wind = k < 0.3 ? Math.sin((k / 0.3) * Math.PI) * 0.14 : 0;
          const fwd = k >= 0.3 ? Math.sin(((k - 0.3) / 0.7) * Math.PI) * dist : 0;
          c.att.position.copy(c.stand).addScaledVector(c.dir, fwd - wind);
          c.att.position.y = fwd * 0.2;
          if (pose) pose(k);
          if (!hit && k >= hitAt) {
            hit = true;
            onHit();
          }
        },
        null
      )
      .then(() => {
        c.att.position.copy(c.stand);
      });
  }

  function tipPos(c) {
    const p = new V3();
    (c.rig.handR || c.att).getWorldPosition(p);
    p.y += 0.3;
    return p;
  }

  function bolt(c, color, i) {
    sound.play('zap');
    const geo = Sph(0.08, 16, 12);
    const mat = new THREE.MeshBasicMaterial({ color });
    const orb = new THREE.Mesh(geo, mat);
    anim.scene.add(orb);
    const from = tipPos(c);
    const to = c.contact.clone();
    let fr = 0;

    return anim
      .tween(
        420,
        (e, k) => {
          orb.position.lerpVectors(from, to, k);
          orb.position.y += Math.sin(k * Math.PI) * (0.35 + i * 0.1);
          orb.scale.setScalar(1 + Math.sin(k * 20) * 0.2);
          if (fr++ % 2 === 0) anim.burst(orb.position.clone(), { n: 4, colors: [color, 0xffffff], power: 0.4, size: 0.1, life: 0.4, grav: 0 });
        },
        null
      )
      .then(() => {
        anim.scene.remove(orb);
        geo.dispose();
        mat.dispose();
        hitFx(c, 1, ['ZAP!', 'ZING!', 'WHAM!'][i], [color, 0xffffff]);
      });
  }

  function beam(c) {
    sound.play('beam');
    const from = tipPos(c);
    const to = c.contact.clone();
    const len = from.distanceTo(to);
    const d = new V3().subVectors(to, from);
    const geo = Cyl(0.06, 0.06, 1, 16, 1, true);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xe9d6ff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    const b = new THREE.Mesh(geo, mat);
    b.quaternion.setFromUnitVectors(new V3(0, 1, 0), d.clone().normalize());
    anim.scene.add(b);
    let hit = false;

    return anim
      .tween(
        750,
        (e, k) => {
          const grow = Math.min(1, k / 0.25);
          const w = 1 + Math.sin(k * 30) * 0.3;
          b.scale.set(w, Math.max(0.001, len * grow), w);
          b.position.copy(from).addScaledVector(d, grow / 2);
          mat.opacity = k < 0.7 ? 0.9 : ((1 - k) / 0.3) * 0.9;
          if (!hit && k >= 0.3) {
            hit = true;
            hitFx(c, 1.8, 'KA-POW!', [0xb57cff, 0xffffff, 0x5ee0ff]);
          }
        },
        null
      )
      .then(() => {
        anim.scene.remove(b);
        geo.dispose();
        mat.dispose();
      });
  }

  function cannon(c, i) {
    const top = c.att.position.clone().add(new V3(0, 1.05, 0)).addScaledVector(c.dir, 0.2);
    sound.play('boom');
    anim.burst(top, { n: 22, colors: [0x9aa0a8, 0xd0d4d9], power: 1, size: 0.3, life: 0.9, grav: -1, additive: false });

    const recoil = anim
      .tween(
        260,
        (e, k) => {
          const s = Math.sin(k * Math.PI);
          c.att.scale.set(1 + s * 0.08, 1 - s * 0.12, 1 + s * 0.08);
          c.att.position.copy(c.stand).addScaledVector(c.dir, -s * 0.12);
        },
        null
      )
      .then(() => {
        c.att.scale.set(1, 1, 1);
        c.att.position.copy(c.stand);
      });

    const geo = Sph(0.09, 14, 10);
    const mat = new THREE.MeshStandardMaterial({ color: 0x222226, metalness: 0.6, roughness: 0.4 });
    const ball = new THREE.Mesh(geo, mat);
    ball.castShadow = true;
    anim.scene.add(ball);
    const to = c.contact.clone();

    const fly = anim
      .tween(
        560,
        (e, k) => {
          ball.position.lerpVectors(top, to, k);
          ball.position.y += Math.sin(k * Math.PI) * (1 + i * 0.15);
        },
        null
      )
      .then(() => {
        anim.scene.remove(ball);
        geo.dispose();
        mat.dispose();
        anim.burst(to, { n: 70, colors: [0xff9d2e, 0xffd23f, 0xff5a2e], power: 3.2, size: 0.11, life: 0.7 });
        anim.burst(to, { n: 16, colors: [0x6b6f76, 0x9aa0a8], power: 0.8, size: 0.38, life: 1.1, grav: -1.2, additive: false });
        hitFx(c, 1.4, ['BOOM!', 'KABOOM!', 'BOOM!'][i]);
        sound.play('explode');
      });

    return Promise.all([recoil, fly]).then(() => anim.wait(140));
  }

  const moves = {
    async p(c) {
      await lunge(c, 620, 0.45, 0.6, () => hitFx(c, 1, 'BONK!'), k => bashPose(c.rig, k));
      await lunge(c, 620, 0.45, 0.6, () => hitFx(c, 1, 'BAM!'), k => bashPose(c.rig, k));
      await lunge(c, 780, 0.5, 0.5, () => hitFx(c, 1.5, 'POW!'), k => chopPose(c.rig, k));
    },
    async n(c) {
      const h = c.rig.horse;
      const r0 = c.rig.horseRot;
      const reach = c.standDist - 0.55;
      sound.play('neigh');
      anim.popWord('NEIGH!', c.att.position.clone().add(new V3(0, 1.4, 0)), getStyle());
      await anim.tween(650, (e, k) => {
        h.rotation.x = r0 + Math.sin(k * Math.PI) * 0.45;
        c.rig.armR.rotation.x = c.rig.idleR + Math.sin(k * Math.PI) * 0.4;
      });
      for (let i = 0; i < 2; i++) {
        const last = i === 1;
        let hit = false;
        await anim.tween(
          last ? 1000 : 900,
          (e, k) => {
            const f = k < 0.6 ? easeIn(k / 0.6) : 1 - easeIO((k - 0.6) / 0.4);
            c.att.position.copy(c.stand).addScaledVector(c.dir, f * reach);
            c.att.position.y = Math.abs(Math.sin(k * Math.PI * 5)) * 0.12 * (k < 0.6 ? 1 : 0.4);
            h.rotation.x = r0 + Math.sin(k * Math.PI * 5) * 0.12;
            c.rig.armR.rotation.x = k < 0.5 ? lerp(c.rig.idleR, 2.9, k / 0.5) : lerp(2.9, 1.1, Math.min(1, (k - 0.5) / 0.12));
            if (!hit && k >= 0.6) {
              hit = true;
              hitFx(c, last ? 2 : 1.3, last ? 'CRASH!' : 'CLIP-CLOP!');
              sound.play('hoof');
            }
          },
          null
        );
      }
      h.rotation.x = r0;
      c.rig.armR.rotation.x = c.rig.idleR;
    },
    async b(c) {
      const rig = c.rig;
      await anim.tween(450, e => {
        rig.armR.rotation.x = lerp(rig.idleR, 2.9, e);
      });
      const cols = [0xb57cff, 0x5ee0ff, 0xff7ad9];
      for (let i = 0; i < 3; i++) {
        await bolt(c, cols[i], i);
        await anim.wait(110);
      }
      await beam(c);
      await anim.tween(300, e => {
        rig.armR.rotation.x = lerp(2.9, rig.idleR, e);
      });
    },
    async r(c) {
      for (let i = 0; i < 3; i++) await cannon(c, i);
    },
    async q(c) {
      const { att, defPos } = c;
      const R = c.standDist;
      const a0 = Math.atan2(c.stand.x - defPos.x, c.stand.z - defPos.z);
      const hits = [0.25, 0.5, 0.75];
      let hi = 0;
      sound.play('whoosh');

      await anim.tween(
        1700,
        (e, k) => {
          const a = a0 + easeIO(k) * Math.PI * 2;
          att.position.set(defPos.x + Math.sin(a) * R, Math.sin(k * Math.PI) * 0.25, defPos.z + Math.cos(a) * R);
          att.rotation.y = c.aFacing + k * Math.PI * 6;
          if (Math.random() < 0.6)
            anim.burst(att.position.clone().add(new V3(0, 0.6, 0)), {
              n: 3,
              colors: [0xff7ad9, 0xffd23f, 0xffffff],
              power: 0.5,
              size: 0.14,
              tex: STAR,
              life: 0.6,
              grav: 1
            });
          if (hi < hits.length && k >= hits[hi]) {
            hi++;
            hitFx(c, 1, ['SWISH!', 'SLASH!', 'SWOOSH!'][hi - 1], [0xff7ad9, 0xffd23f]);
            sound.play('whoosh');
          }
        },
        null
      );

      att.position.copy(c.stand);
      att.rotation.y = c.aFacing;

      await lunge(
        c,
        800,
        0.5,
        0.6,
        () => hitFx(c, 1.8, 'SPARKLE!', [0xff7ad9, 0xffd23f, 0x5ee0ff]),
        k => {
          c.rig.armR.rotation.x = lerp(c.rig.idleR, 2.6, Math.sin(k * Math.PI));
          att.rotation.y = c.aFacing + (k > 0.3 ? ((k - 0.3) / 0.7) * Math.PI * 2 : 0);
        }
      );
      c.rig.armR.rotation.x = c.rig.idleR;
      att.rotation.y = c.aFacing;
    },
    async k(c) {
      await lunge(c, 650, 0.4, 0.5, () => hitFx(c, 1, 'CLANG!'), k => chopPose(c.rig, k));
      await lunge(c, 650, 0.4, 0.5, () => hitFx(c, 1, 'CLANG!'), k => chopPose(c.rig, k));
      let hit = false;
      const land = c.defPos.clone().addScaledVector(c.dir, -0.5);
      await anim.tween(
        1150,
        (e, k) => {
          const f = Math.min(1, k / 0.7);
          c.att.position.lerpVectors(c.stand, land, easeIO(f));
          c.att.position.y = Math.sin(f * Math.PI) * 1.5;
          c.rig.armR.rotation.x = k < 0.6 ? lerp(c.rig.idleR, 3, k / 0.6) : lerp(3, 1, Math.min(1, (k - 0.6) / 0.1));
          if (!hit && k >= 0.7) {
            hit = true;
            anim.shockwave(c.defPos, 0xffd23f);
            hitFx(c, 2.2, 'SMASH!', [0xffd23f, 0xffffff, 0xff9d2e]);
            sound.play('explode');
            anim.shake = 0.35;
          }
        },
        null
      );
      await anim.tween(350, e => {
        c.att.position.lerpVectors(land, c.stand, e);
        c.rig.armR.rotation.x = lerp(1, c.rig.idleR, e);
      });
    }
  };

  async function finishDef(c) {
    const d = c.def;
    const style = getStyle();
    if (style === 'cartoon') {
      await anim.wait(150);
      const p0 = d.position.clone();
      const r0 = d.rotation.y;
      sound.play('boing');
      anim.popWord('BYE-BYE!', p0.clone().add(new V3(0, 1.3, 0)), 'cartoon');
      let done = false;
      await anim.tween(
        1000,
        (e, k) => {
          d.position.set(
            p0.x + c.dir.x * k * 1.6,
            Math.sin((Math.min(k, 0.9) / 0.9) * Math.PI * 0.6) * 2.6,
            p0.z + c.dir.z * k * 1.6
          );
          d.rotation.y = r0 + k * 12;
          d.rotation.x = k * 3;
          d.scale.setScalar(Math.max(0.01, 1 - Math.pow(k, 3)));
          if (!done && k >= 0.82) {
            done = true;
            const w = new V3();
            d.getWorldPosition(w);
            anim.burst(w.add(new V3(0, 0.4, 0)), {
              n: 60,
              colors: [0xffd23f, 0xffffff, 0xff7ad9, 0x5ee0ff],
              power: 2.5,
              size: 0.2,
              tex: STAR,
              life: 1.1,
              grav: 2
            });
            sound.play('twinkle');
          }
        },
        null
      );
    } else {
      await anim.wait(120);
      d.visible = false;
      anim.shatter(d);
      anim.burst(c.contact, {
        n: 110,
        colors: [0xffb347, 0xfff2c8],
        power: 4.5,
        size: 0.09,
        life: 0.8
      });
      anim.shake = 0.28;
      sound.play('shatter');
      await anim.wait(650);
    }
  }

  return { moves, finishDef };
}
