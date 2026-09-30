import * as THREE from 'three';
import { createScene } from '../scene/setup.js';
import { createBoard, sqPos } from '../scene/board.js';
import { createHighlights } from '../scene/highlights.js';
import { makePiece, disposePiece, resetRig } from '../scene/pieces/index.js';
import { AnimationSystem, lerpAngle } from '../scene/animation.js';
import { BattleController } from '../battles/index.js';
import { SoundEffects } from '../audio/sound.js';
import { SpeechNarrator } from '../learning/speech.js';
import { QuizManager } from '../learning/quiz.js';
import { StorageManager } from '../storage/storage.js';
import {
  newGame,
  legalMoves,
  makeMove,
  inCheck,
  findKing,
  insufficient,
  opp,
  FILES,
  PV,
  SYM
} from '../engine/chess.js';
import { san } from '../engine/san.js';
import { RepetitionTracker } from '../engine/repetition.js';
import { BOTS, aiPick } from '../engine/ai.js';
import { eloCalc, K_FACTOR } from '../rating/elo.js';
import { TEAM, PNAME, LEARN, ATTACK, teamName } from '../learning/words.js';

const V3 = THREE.Vector3;
const $ = id => document.getElementById(id);

export class GameController {
  constructor() {
    this.stageEl = $('stage');
    this.setup = createScene(this.stageEl);
    this.board = createBoard(this.setup.scene);
    this.highlights = createHighlights(this.setup.scene);
    this.anim = new AnimationSystem(this.setup.scene, this.setup.camera, this.stageEl);
    this.sound = new SoundEffects();
    this.narrator = new SpeechNarrator();
    this.storage = new StorageManager();

    const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.cfg = {
      mode: 'ai',
      p1: 'Player',
      p2: 'Player 2',
      diff: 'easy',
      side: 'w',
      battle: !reduced,
      style: 'cartoon',
      voice: true,
      moves: true,
      quiz: true,
      autoRot: true,
      sound: true
    };

    this.battles = new BattleController(
      this.setup.scene,
      this.setup.camera,
      this.setup.controls,
      this.anim,
      this.sound,
      () => this.cfg.style
    );

    this.repetition = new RepetitionTracker();

    // AI Web Worker setup
    this.aiWorker = null;
    this.aiWorkerRequestId = 0;
    this.initWorker();

    this.G = null;
    this.meshAt = null;
    this.sel = null;
    this.curLegal = [];
    this.busy = false;
    this.over = false;
    this.lastMove = null;
    this.moveList = [];
    this.capturedBy = { w: [], b: [] };
    this.game = null;
    this.lifted = null;
    this.pliesSinceQuiz = 0;

    this.initQuiz();
    this.bindEvents();
    this.startLoop();
  }

  initWorker() {
    try {
      this.aiWorker = new Worker(new URL('../engine/ai.worker.js', import.meta.url), { type: 'module' });
      this.aiWorker.onmessage = e => {
        const { id, move, error, ok } = e.data;
        if (id !== this.aiWorkerRequestId || !ok || this.over) {
          return;
        }
        if (move) {
          const real =
            this.curLegal.find(
              x =>
                x.fr === move.fr &&
                x.fc === move.fc &&
                x.tr === move.tr &&
                x.tc === move.tc &&
                x.promo === move.promo
            ) || move;
          this.doMove(real);
        } else {
          this.busy = false;
        }
      };
    } catch (e) {
      this.aiWorker = null;
    }
  }

  initQuiz() {
    this.quizManager = new QuizManager(
      {
        quiz: $('quiz'),
        qText: $('qText'),
        qOpts: $('qOpts'),
        qMsg: $('qMsg'),
        qSay: $('qSay'),
        qSkip: $('qSkip'),
        renderStars: () => this.renderStars(),
        drawStatic: () => this.drawStatic()
      },
      this.storage,
      this.sound,
      this.narrator,
      this.anim,
      this.highlights,
      () => ({ G: this.G, meshAt: this.meshAt })
    );
  }

  whoPlays(color) {
    return this.game[color === 'w' ? 'white' : 'black'];
  }

  isAITurn() {
    return !this.over && !!this.whoPlays(this.G.turn).bot;
  }

  startGame() {
    this.anim.clear();
    this.narrator.cancel();

    if (this.meshAt) {
      for (const row of this.meshAt) {
        for (const m of row) {
          if (m) disposePiece(this.setup.scene, m);
        }
      }
    }

    this.G = newGame();
    this.repetition.reset(this.G);
    this.meshAt = Array.from({ length: 8 }, () => Array(8).fill(null));

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = this.G.b[r][c];
        if (p) {
          const m = makePiece(p.t, p.c);
          m.position.copy(sqPos(r, c));
          this.setup.scene.add(m);
          this.meshAt[r][c] = m;
        }
      }
    }

    this.sel = null;
    this.busy = false;
    this.over = false;
    this.lastMove = null;
    this.moveList = [];
    this.capturedBy = { w: [], b: [] };
    this.lifted = null;
    this.pliesSinceQuiz = 0;

    const p1 = (this.cfg.p1 || '').trim() || 'Player';
    const p2 = (this.cfg.p2 || '').trim() || 'Player 2';

    if (this.cfg.mode === 'ai') {
      const side = this.cfg.side === 'r' ? (Math.random() < 0.5 ? 'w' : 'b') : this.cfg.side;
      const bot = BOTS[this.cfg.diff];
      const human = { name: p1 };
      const machine = { name: bot.name, bot };
      this.game = {
        mode: 'ai',
        white: side === 'w' ? human : machine,
        black: side === 'w' ? machine : human,
        human: side,
        rated: false
      };
    } else {
      this.game = {
        mode: 'pvp',
        white: { name: p1 },
        black: { name: p2 === p1 ? p2 + ' (2)' : p2 },
        rated: false
      };
    }

    this.curLegal = legalMoves(this.G);
    const view = this.game.mode === 'ai' ? this.game.human : 'w';
    this.setup.camera.position.set(0, 10.5, view === 'w' ? 10.5 : -10.5);
    this.setup.controls.target.set(0, 0, 0);
    this.setup.controls.update();

    for (const id of ['result', 'banner', 'skipBtn', 'quiz', 'wordCard', 'promo']) {
      $(id).hidden = true;
    }

    this.setup.controls.enabled = true;
    this.drawStatic();
    this.renderUI();

    if (this.isAITurn()) {
      this.scheduleAI();
    }
  }

  drawStatic() {
    this.highlights.clearHL();
    if (this.lastMove) {
      this.highlights.addHL(this.lastMove.fr, this.lastMove.fc, 'last');
      this.highlights.addHL(this.lastMove.tr, this.lastMove.tc, 'last');
    }
    if (!this.over && inCheck(this.G)) {
      const k = findKing(this.G, this.G.turn);
      this.highlights.addHL(k[0], k[1], 'check');
    }
  }

  setLift(r, c) {
    if (this.lifted && this.lifted.parent) this.lifted.position.y = 0;
    this.lifted = null;
    if (r != null) {
      const m = this.meshAt[r][c];
      if (m) {
        m.position.y = 0.14;
        this.lifted = m;
      }
    }
  }

  showWord(t, col) {
    const L = LEARN[t];
    const card = $('wordCard');
    card.style.setProperty('--team', TEAM[col].css);
    $('wcChip').className = 'chip ' + col;
    $('wcTeam').textContent = teamName(col) + ' team';
    $('wcWord').textContent = PNAME[t].toUpperCase();
    $('wcHint').textContent = L.hint;
    $('wcLine').textContent = L.line;
    card.hidden = false;
    card.dataset.say = `${teamName(col)} ${PNAME[t].toLowerCase()}. ${L.line}`;
    if (this.cfg.voice) this.narrator.say(card.dataset.say);
  }

  select(r, c) {
    this.sel = [r, c];
    this.drawStatic();
    this.highlights.addHL(r, c, 'sel');
    this.setLift(r, c);
    for (const m of this.curLegal) {
      if (m.fr === r && m.fc === c) {
        this.highlights.addHL(m.tr, m.tc, m.cap ? 'cap' : 'dot');
      }
    }
    this.sound.play('tick');
    const p = this.G.b[r][c];
    this.showWord(p.t, p.c);
  }

  deselect() {
    this.sel = null;
    this.setLift(null);
    this.drawStatic();
    $('wordCard').hidden = true;
  }

  onPick(r, c) {
    if (this.quizManager?.quizActive?.tap) {
      this.quizManager.quizActive.tap(r, c);
      return;
    }
    if (this.busy || this.over || this.isAITurn()) return;

    const p = this.G.b[r][c];
    if (this.sel) {
      const cand = this.curLegal.filter(m => m.fr === this.sel[0] && m.fc === this.sel[1] && m.tr === r && m.tc === c);
      if (cand.length) {
        if (cand.length > 1) {
          this.askPromo(this.G.turn).then(t => {
            if (!t) {
              this.deselect();
              return;
            }
            const m = cand.find(x => x.promo === t);
            if (m) {
              this.setLift(null);
              this.sel = null;
              this.doMove(m);
            }
          });
        } else {
          this.setLift(null);
          this.sel = null;
          this.doMove(cand[0]);
        }
        return;
      }
    }

    if (p && p.c === this.G.turn) {
      if (this.sel && this.sel[0] === r && this.sel[1] === c) {
        this.deselect();
      } else {
        this.select(r, c);
      }
    } else if (p) {
      this.sound.play('tick');
      this.showWord(p.t, p.c);
      this.sel = null;
      this.setLift(null);
      this.drawStatic();
    } else {
      this.deselect();
    }
  }

  askPromo(color) {
    return new Promise(res => {
      const row = $('promoRow');
      row.innerHTML = '';
      for (const t of ['q', 'r', 'b', 'n']) {
        const b = document.createElement('button');
        b.innerHTML = `<span>${SYM[color][t]}</span>${PNAME[t]}`;
        b.onclick = () => {
          $('promo').hidden = true;
          res(t);
        };
        row.appendChild(b);
      }
      $('promoCancel').onclick = () => {
        $('promo').hidden = true;
        res(null);
      };
      $('promo').hidden = false;
      if (this.cfg.voice) this.narrator.say('Promotion! Pick a new piece.');
    });
  }

  async doMove(m) {
    this.busy = true;
    this.highlights.clearHL();
    $('wordCard').hidden = true;

    const s = san(this.G, m, this.curLegal);
    const pc = this.G.b[m.fr][m.fc];
    const mover = this.meshAt[m.fr][m.fc];

    let capSq = null;
    if (m.ep) capSq = [m.fr, m.tc];
    else if (this.G.b[m.tr][m.tc]) capSq = [m.tr, m.tc];

    const capMesh = capSq ? this.meshAt[capSq[0]][capSq[1]] : null;
    const capPiece = capSq ? this.G.b[capSq[0]][capSq[1]] : null;
    const toPos = sqPos(m.tr, m.tc);

    this.renderStatus('anim');

    if (capMesh) {
      const line = `${teamName(pc.c)} ${PNAME[pc.t]} attacks ${teamName(capPiece.c)} ${PNAME[capPiece.t]}!`;
      if (this.cfg.moves) {
        this.narrator.say(
          this.cfg.battle
            ? `${line} ${ATTACK[pc.t]}!`
            : `${teamName(pc.c)} ${PNAME[pc.t].toLowerCase()} takes ${teamName(capPiece.c).toLowerCase()} ${PNAME[capPiece.t].toLowerCase()}!`
        );
      }
    } else if (this.cfg.moves) {
      this.narrator.say(
        m.castle
          ? `${teamName(pc.c)} castles!`
          : `${teamName(pc.c)} ${PNAME[pc.t].toLowerCase()} to ${FILES[m.tc].toUpperCase()} ${m.tr + 1}.`
      );
    }

    if (capMesh && this.cfg.battle) {
      $('bannerLine').innerHTML = `<span style="color:${TEAM[pc.c].css}">${teamName(pc.c)} ${PNAME[pc.t]}</span> attacks <span style="color:${TEAM[capPiece.c].css}">${teamName(capPiece.c)} ${PNAME[capPiece.t]}</span>`;
      $('bannerMove').textContent = ATTACK[pc.t] + '!';
      $('banner').hidden = false;
      await this.battles.runBattle(mover, capMesh, toPos, sqPos(capSq[0], capSq[1]), pc.t, $('skipBtn'), $('banner'));
    } else {
      const ps = [this.anim.slide(mover, toPos, 440, pc.t === 'n' ? 0.9 : 0.2)];
      if (capMesh) ps.push(this.anim.vanish(capMesh, this.cfg.style));
      if (m.castle) {
        const h = m.fr;
        const rf = m.castle === 'K' ? 7 : 0;
        const rt = m.castle === 'K' ? 5 : 3;
        const rm = this.meshAt[h][rf];
        ps.push(this.anim.wait(120).then(() => this.anim.slide(rm, sqPos(h, rt), 420, 0.35)));
      }
      this.sound.play('move');
      await Promise.all(ps);
    }

    this.meshAt[m.fr][m.fc] = null;
    if (capSq) {
      this.meshAt[capSq[0]][capSq[1]] = null;
      this.capturedBy[pc.c].push(capPiece.t);
    }
    this.meshAt[m.tr][m.tc] = mover;
    if (m.castle) {
      const h = m.fr;
      const rf = m.castle === 'K' ? 7 : 0;
      const rt = m.castle === 'K' ? 5 : 3;
      this.meshAt[h][rt] = this.meshAt[h][rf];
      this.meshAt[h][rf] = null;
    }

    if (m.promo) {
      disposePiece(this.setup.scene, mover);
      const nm = makePiece(m.promo, pc.c);
      nm.position.copy(toPos);
      this.setup.scene.add(nm);
      this.meshAt[m.tr][m.tc] = nm;
      this.anim.burst(toPos.clone().add(new V3(0, 0.7, 0)), { n: 60, colors: [0xffd97a, 0xffffff], power: 2.4, size: 0.16 });
      this.anim.flash(nm, 0xffd97a);
      if (this.cfg.moves) this.narrator.say(`${teamName(pc.c)} pawn becomes a ${PNAME[m.promo].toLowerCase()}!`, false);
    }

    makeMove(this.G, m);
    this.lastMove = m;
    this.moveList.push(s);
    this.repetition.record(this.G);
    this.curLegal = legalMoves(this.G);
    this.drawStatic();

    if (inCheck(this.G) && this.curLegal.length && this.cfg.moves) {
      this.narrator.say('Check!', false);
    }

    this.checkEnd();
    this.renderUI();

    if (!this.over && this.game.mode === 'pvp' && this.cfg.autoRot) {
      await this.rotateCamTo(this.G.turn);
    }

    this.busy = false;
    this.pliesSinceQuiz++;

    if (!this.over && this.cfg.quiz && !this.isAITurn() && this.pliesSinceQuiz >= 4) {
      this.pliesSinceQuiz = 0;
      await this.quizManager.runQuiz();
    }

    if (!this.over && this.isAITurn()) {
      this.scheduleAI();
    }
  }

  scheduleAI() {
    this.busy = true;
    this.renderStatus('think');
    const reqId = ++this.aiWorkerRequestId;
    const bot = this.whoPlays(this.G.turn).bot;

    if (this.aiWorker) {
      this.aiWorker.postMessage({ id: reqId, g: this.G, bot });
    } else {
      setTimeout(() => {
        if (this.over || reqId !== this.aiWorkerRequestId) {
          this.busy = false;
          return;
        }
        const m = aiPick(this.G, bot);
        if (m) {
          const real =
            this.curLegal.find(
              x =>
                x.fr === m.fr &&
                x.fc === m.fc &&
                x.tr === m.tr &&
                x.tc === m.tc &&
                x.promo === m.promo
            ) || m;
          this.doMove(real);
        } else {
          this.busy = false;
        }
      }, 450);
    }
  }

  checkEnd() {
    if (!this.curLegal.length) {
      if (inCheck(this.G)) this.endGame(opp(this.G.turn), 'Checkmate');
      else this.endGame('d', 'Stalemate');
    } else if (this.G.half >= 100) {
      this.endGame('d', '50-move rule');
    } else if (this.repetition.isThreefold(this.G)) {
      this.endGame('d', 'Same position three times');
    } else if (insufficient(this.G)) {
      this.endGame('d', 'Not enough pieces to checkmate');
    }
  }

  endGame(winner, reason) {
    if (this.over) return;
    this.over = true;
    this.sel = null;
    this.setLift(null);
    this.drawStatic();
    $('wordCard').hidden = true;

    const blocks = [];
    if (!this.game.rated) {
      this.game.rated = true;
      const prev = {};
      for (const c of ['w', 'b']) {
        const p = this.whoPlays(c);
        prev[c] = p.bot ? p.bot.elo : this.storage.getProfile(p.name).elo;
      }
      for (const c of ['w', 'b']) {
        const p = this.whoPlays(c);
        if (p.bot) continue;
        const S = winner === 'd' ? 0.5 : winner === c ? 1 : 0;
        const R = prev[c];
        const oppR = prev[opp(c)];
        const { Ea, d } = eloCalc(R, oppR, S);
        const r = this.storage.updateProfile(p.name, d, S);
        blocks.push({
          name: p.name,
          R,
          oppR,
          oppName: this.whoPlays(opp(c)).name,
          S,
          Ea,
          d,
          newR: r.elo
        });
      }
    }

    const title = winner === 'd' ? "It's a draw!" : `${teamName(winner)} wins!`;
    $('resTitle').textContent = title;
    $('resReason').textContent = reason;
    $('resElo').innerHTML = blocks
      .map(b => {
        const cls = b.d > 0 ? 'up' : b.d < 0 ? 'down' : 'flat';
        const sStr = b.S === 1 ? '1 (win)' : b.S === 0 ? '0 (loss)' : '0.5 (draw)';
        return `<div class="res-block"><div class="row"><span>${this.esc(b.name)}</span><span class="elo">${b.R} → ${b.newR} <span class="delta ${cls}">(${b.d > 0 ? '+' : ''}${b.d})</span></span></div>
        <div class="formula">Opponent: ${this.esc(b.oppName)} · Elo ${b.oppR}<br>E = 1/(1+10^((${b.oppR}−${b.R})/400)) = ${b.Ea.toFixed(2)}<br>S = ${sStr} · K = ${K_FACTOR}<br>Δ = ${K_FACTOR} × (${b.S} − ${b.Ea.toFixed(2)}) = ${b.d > 0 ? '+' : ''}${b.d}</div></div>`;
      })
      .join('');

    if (this.cfg.moves || this.cfg.voice) {
      this.narrator.say(winner === 'd' ? `It's a draw! ${reason}.` : `${reason}! ${teamName(winner)} team wins!`, false);
    }

    if (winner !== 'd') {
      const k = findKing(this.G, opp(winner));
      this.anim.burst(sqPos(k[0], k[1]).add(new V3(0, 1, 0)), {
        n: 90,
        colors: [0xffd23f, 0xffffff, 0xff7ad9, 0x5ee0ff],
        power: 3,
        size: 0.2,
        life: 1.4,
        grav: 2
      });
      this.sound.play('twinkle');
    }

    setTimeout(() => {
      $('result').hidden = false;
    }, 900);
    this.renderUI();
  }

  async rotateCamTo(color) {
    const off = new V3().subVectors(this.setup.camera.position, this.setup.controls.target);
    const sp = new THREE.Spherical().setFromVector3(off);
    const t0 = sp.theta;
    const t1 = color === 'w' ? 0 : Math.PI;
    if (Math.abs(lerpAngle(t0, t1, 1) - t0) < 0.01) return;
    this.setup.controls.enabled = false;
    await this.anim.tween(900, e => {
      const s = new THREE.Spherical(sp.radius, sp.phi, lerpAngle(t0, t1, e));
      this.setup.camera.position.copy(this.setup.controls.target).add(new V3().setFromSpherical(s));
    });
    this.setup.controls.enabled = true;
  }

  esc(s) {
    return String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);
  }

  eloOf(p) {
    return p.bot ? p.bot.elo : this.storage.getProfile(p.name).elo;
  }

  renderStatus(state) {
    const hud = $('hud');
    const st = $('statusText');
    $('turnDot').className = 'dot ' + this.G.turn;
    hud.classList.remove('check');

    if (this.over) {
      st.textContent = 'Game over';
      return;
    }
    if (state === 'think') {
      st.textContent = `${this.whoPlays(this.G.turn).name} is thinking…`;
      return;
    }
    if (state === 'anim') {
      st.textContent = `${teamName(this.G.turn)} is moving…`;
      return;
    }

    const chk = inCheck(this.G);
    if (chk) hud.classList.add('check');
    st.textContent = `${teamName(this.G.turn)}'s turn · ${this.whoPlays(this.G.turn).name}${chk ? ' · Check!' : ''}`;
  }

  renderStars() {
    const s = this.storage.getStars();
    $('hudStars').textContent = '⭐ ' + s;
    $('panelStars').textContent = `⭐ ${s} star${s === 1 ? '' : 's'}`;
    $('qStars').textContent = '⭐ ' + s;
  }

  renderUI() {
    $('nameW').textContent = this.game.white.name;
    $('nameB').textContent = this.game.black.name;
    $('eloW').textContent = this.eloOf(this.game.white);
    $('eloB').textContent = this.eloOf(this.game.black);
    $('rowW').classList.toggle('active', !this.over && this.G.turn === 'w');
    $('rowB').classList.toggle('active', !this.over && this.G.turn === 'b');

    const mat = c => this.capturedBy[c].reduce((s, t) => s + PV[t], 0);
    const dw = Math.round((mat('w') - mat('b')) / 100);
    const capStr = c =>
      this.capturedBy[c]
        .slice()
        .sort((a, b) => PV[b] - PV[a])
        .map(t => SYM[opp(c)][t])
        .join('');

    $('capW').textContent = capStr('w') + (dw > 0 ? '  +' + dw : '');
    $('capB').textContent = capStr('b') + (dw < 0 ? '  +' + -dw : '');

    const mv = $('moves');
    if (!this.moveList.length) {
      mv.innerHTML = '<span class="empty" style="grid-column:1/-1">No moves yet.</span>';
    } else {
      let h = '';
      const last = this.moveList.length - 1;
      for (let i = 0; i < this.moveList.length; i += 2) {
        h += `<span class="n">${i / 2 + 1}.</span><span class="${i === last ? 'last' : ''}">${this.moveList[i]}</span><span class="${i + 1 === last ? 'last' : ''}">${this.moveList[i + 1] || ''}</span>`;
      }
      mv.innerHTML = h;
      mv.scrollTop = mv.scrollHeight;
    }

    $('btnResign').disabled = this.over;
    this.renderStatus();
    this.renderLB();
    this.renderStars();
  }

  renderLB() {
    const rows = this.storage.getLeaderboard(10);
    if (!rows.length) {
      $('lb').innerHTML = '<p class="empty">No rated games yet. Finish a game to join the ranking.</p>';
      return;
    }
    $('lb').innerHTML =
      '<table class="lb"><thead><tr><th>#</th><th>Player</th><th class="num">Elo</th><th class="num">W-D-L</th></tr></thead><tbody>' +
      rows
        .map(
          (r, i) =>
            `<tr><td>${i + 1}</td><td>${this.esc(r.name)}</td><td class="num">${r.elo}</td><td class="num">${r.w}-${r.d}-${r.l}</td></tr>`
        )
        .join('') +
      '</tbody></table>';
  }

  setMode(m) {
    this.cfg.mode = m;
    $('modeAI').setAttribute('aria-pressed', m === 'ai');
    $('modePVP').setAttribute('aria-pressed', m === 'pvp');
    $('fP2').hidden = m !== 'pvp';
    $('fDiff').hidden = m !== 'ai';
    $('fSide').hidden = m !== 'ai';
    $('lblP1').textContent = m === 'ai' ? 'Your name' : "Blue player's name";
  }

  bindEvents() {
    $('modeAI').onclick = () => this.setMode('ai');
    $('modePVP').onclick = () => this.setMode('pvp');

    $('btnNew').onclick = () => {
      this.cfg.p1 = $('inP1').value;
      this.cfg.p2 = $('inP2').value;
      this.cfg.diff = $('selDiff').value;
      this.cfg.side = $('selSide').value;
      this.startGame();
    };

    $('selStyle').onchange = e => (this.cfg.style = e.target.value);
    $('tBattle').onchange = e => (this.cfg.battle = e.target.checked);
    $('tVoice').onchange = e => {
      this.cfg.voice = e.target.checked;
      this.narrator.enabled = this.cfg.voice;
    };
    $('tMoves').onchange = e => (this.cfg.moves = e.target.checked);
    $('tQuiz').onchange = e => (this.cfg.quiz = e.target.checked);
    $('tRotate').onchange = e => (this.cfg.autoRot = e.target.checked);
    $('tSound').onchange = e => {
      this.cfg.sound = e.target.checked;
      this.sound.enabled = this.cfg.sound;
    };

    $('wcSay').onclick = () => this.narrator.say($('wordCard').dataset.say || '');

    $('btnQuiz').onclick = () => {
      if (this.busy || this.quizManager.quizActive) return;
      this.pliesSinceQuiz = 0;
      this.quizManager.runQuiz().then(() => {
        if (!this.over && this.isAITurn()) this.scheduleAI();
      });
    };

    $('btnResign').onclick = () => {
      if (this.over || this.busy) return;
      const loser = this.game.mode === 'ai' ? this.game.human : this.G.turn;
      this.endGame(opp(loser), `${teamName(loser)} resigned`);
    };

    $('btnFlip').onclick = () => {
      if (this.busy) return;
      const sp = new THREE.Spherical().setFromVector3(
        new V3().subVectors(this.setup.camera.position, this.setup.controls.target)
      );
      this.rotateCamTo(Math.abs(lerpAngle(sp.theta, 0, 1) - sp.theta) < Math.PI / 2 ? 'b' : 'w');
    };

    $('skipBtn').onclick = () => {
      this.anim.timeScale = 25;
      this.narrator.cancel();
    };

    $('resView').onclick = () => {
      $('result').hidden = true;
    };

    $('resNew').onclick = () => {
      $('result').hidden = true;
      $('btnNew').click();
    };

    // 3D Picking Raycaster with tap/drag separation
    const ray = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    let down = null;

    this.setup.renderer.domElement.addEventListener('pointerdown', e => {
      down = { x: e.clientX, y: e.clientY };
      this.sound.resume();
    });

    this.setup.renderer.domElement.addEventListener('pointerup', e => {
      if (!down) return;
      const dx = e.clientX - down.x;
      const dy = e.clientY - down.y;
      down = null;
      if (dx * dx + dy * dy > 49) return; // Ignore drag moves for camera

      const rect = this.setup.renderer.domElement.getBoundingClientRect();
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      ray.setFromCamera(ndc, this.setup.camera);

      const objs = [...this.board.squares];
      for (const row of this.meshAt) {
        for (const m of row) {
          if (m) objs.push(m);
        }
      }

      const hits = ray.intersectObjects(objs, true);
      if (!hits.length) return;

      let o = hits[0].object;
      if (o.userData.sq) {
        this.onPick(o.userData.sq[0], o.userData.sq[1]);
        return;
      }
      while (o.parent && o.parent !== this.setup.scene) o = o.parent;
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (this.meshAt[r][c] === o) {
            this.onPick(r, c);
            return;
          }
        }
      }
    });
  }

  startLoop() {
    let lastT = performance.now();
    const tick = now => {
      requestAnimationFrame(tick);
      const dtms = Math.min(50, now - lastT);
      lastT = now;

      this.anim.update(dtms);

      // Waving flags on Rooks
      if (this.meshAt) {
        for (const row of this.meshAt) {
          for (const m of row) {
            if (m?.userData?.rig?.flag) {
              const r = m.userData.rig;
              r.flag.rotation.y = Math.sin(now / 380 + r.phase) * 0.35;
            }
          }
        }
      }

      if (this.anim.bounceMesh) {
        this.anim.bounceMesh.position.y = Math.abs(Math.sin(now / 160)) * 0.22;
      }

      this.setup.controls.update();

      let off = null;
      if (this.anim.shake > 0.002) {
        off = new V3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(this.anim.shake);
        this.setup.camera.position.add(off);
        this.anim.shake *= 0.88;
      }

      this.setup.renderer.render(this.setup.scene, this.setup.camera);
      if (off) this.setup.camera.position.sub(off);
    };

    requestAnimationFrame(tick);
  }
}
