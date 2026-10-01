import * as THREE from 'three';
import { createBattleMoves } from './moves.js';
import { lerpAngle } from '../scene/animation.js';
import { resetRig } from '../scene/pieces/index.js';
import { BADGES } from '../scene/pieces/badges.js';

const V3 = THREE.Vector3;

export class BattleController {
  constructor(scene, camera, controls, anim, sound, getStyle) {
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;
    this.anim = anim;
    this.sound = sound;
    this.getStyle = getStyle;
    const { moves, finishDef } = createBattleMoves(anim, sound, getStyle);
    this.moves = moves;
    this.finishDef = finishDef;
  }

  async runBattle(att, def, toPos, defPos, type, skipBtn, bannerEl) {
    this.controls.enabled = false;
    this.anim.timeScale = 1;
    if (skipBtn) skipBtn.hidden = false;

    // Show 5-second battle progress timer on banner
    let timerBar = document.getElementById('battleTimerBar');
    if (!timerBar && bannerEl) {
      timerBar = document.createElement('div');
      timerBar.id = 'battleTimerBar';
      timerBar.className = 'battle-progress-bar';
      timerBar.innerHTML = `<div class="battle-progress-fill"></div><div class="battle-tag">⚔️ GIAO TRANH 5s ⚔️</div>`;
      bannerEl.appendChild(timerBar);
    }
    if (timerBar) {
      timerBar.style.display = 'block';
      const fill = timerBar.querySelector('.battle-progress-fill');
      if (fill) {
        fill.style.transition = 'none';
        fill.style.width = '0%';
        requestAnimationFrame(() => {
          fill.style.transition = 'width 4.8s linear';
          fill.style.width = '100%';
        });
      }
    }

    const camFrom = this.camera.position.clone();
    // cinematic lens for the close-up, restored afterwards
    const fovFrom = this.camera.fov;
    const fovTo = this.camera.aspect < 1 ? 56 : 42;
    const setFov = f => {
      this.camera.fov = f;
      this.camera.updateProjectionMatrix();
    };
    for (const p of [att, def]) if (p.userData?.badge) p.userData.badge.visible = false;
    const tgtFrom = this.controls.target.clone();
    const dir = new V3().subVectors(defPos, att.position);
    dir.y = 0;
    const dist0 = dir.length();
    dir.normalize();

    const standDist =
      type === 'r' || type === 'b' ? Math.min(Math.max(dist0, 1.4), 1.9) : type === 'n' ? 1.9 : type === 'q' ? 0.8 : 0.85;
    const stand = defPos.clone().addScaledVector(dir, -standDist);
    stand.y = 0;

    const mid = stand.clone().add(defPos).multiplyScalar(0.5);
    const side = new V3(-dir.z, 0, dir.x);
    if (side.dot(new V3().subVectors(camFrom, mid)) < 0) side.negate();

    const camTo = mid
      .clone()
      .addScaledVector(side, 2.6 + standDist * 0.9)
      .addScaledVector(dir, -0.5)
      .add(new V3(0, 1.7 + standDist * 0.3, 0));
    const tgtTo = mid.clone().add(new V3(0, 0.55, 0));

    const aFrom = att.position.clone();
    const rA0 = att.rotation.y;
    const rD0 = def.rotation.y;
    const rA1 = Math.atan2(-dir.x, -dir.z);
    const rD1 = Math.atan2(dir.x, dir.z);

    this.sound.play('whoosh');

    await Promise.all([
      this.anim.tween(800, e => {
        this.camera.position.lerpVectors(camFrom, camTo, e);
        setFov(fovFrom + (fovTo - fovFrom) * e);
        this.controls.target.lerpVectors(tgtFrom, tgtTo, e);
      }),
      this.anim.tween(800, (e, k) => {
        att.position.lerpVectors(aFrom, stand, e);
        att.position.y = Math.sin(k * Math.PI) * 0.5;
        att.rotation.y = lerpAngle(rA0, rA1, e);
        def.rotation.y = lerpAngle(rD0, rD1, e);
      })
    ]);

    const c = {
      att,
      def,
      dir,
      stand,
      defPos,
      standDist,
      rig: att.userData?.rig || {},
      aFacing: rA1,
      contact: defPos.clone().addScaledVector(dir, -0.25).add(new V3(0, 0.6, 0))
    };

    if (this.moves[type]) {
      await this.moves[type](c);
    }
    await this.finishDef(c);
    await this.anim.wait(150);

    const s0 = att.position.clone();
    await Promise.all([
      this.anim.tween(750, (e, k) => {
        att.position.lerpVectors(s0, toPos, e);
        att.position.y = Math.sin(k * Math.PI) * 0.3;
        att.rotation.y = lerpAngle(rA1, att.userData?.baseRot || 0, e);
      }),
      this.anim.tween(900, e => {
        this.camera.position.lerpVectors(camTo, camFrom, e);
        setFov(fovTo + (fovFrom - fovTo) * e);
        this.controls.target.lerpVectors(tgtTo, tgtFrom, e);
      })
    ]);

    att.position.copy(toPos);
    att.rotation.y = att.userData?.baseRot || 0;
    att.scale.set(1, 1, 1);
    resetRig(att);
    setFov(fovFrom);
    if (att.userData?.badge) att.userData.badge.visible = BADGES.visible;

    this.anim.timeScale = 1;
    if (timerBar) timerBar.style.display = 'none';
    if (skipBtn) skipBtn.hidden = true;
    if (bannerEl) bannerEl.hidden = true;
    this.controls.enabled = true;
  }
}
