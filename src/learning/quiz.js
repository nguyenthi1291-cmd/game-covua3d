import * as THREE from 'three';
import { TEAM, PNAME, PLURAL, NUMW, teamName } from './words.js';
import { FILES } from '../engine/chess.js';
import { sqPos } from '../scene/board.js';

const V3 = THREE.Vector3;
const pick = a => a[(Math.random() * a.length) | 0];
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export class QuizManager {
  constructor(elements, storage, sound, narrator, anim, highlights, getBoardState) {
    this.el = elements;
    this.storage = storage;
    this.sound = sound;
    this.narrator = narrator;
    this.anim = anim;
    this.highlights = highlights;
    this.getBoardState = getBoardState;
    this.quizActive = null;
  }

  bounceOnce(mesh) {
    if (!mesh) return;
    this.anim.tween(500, (e, k) => {
      mesh.position.y = Math.sin(k * Math.PI) * 0.35;
    }, null).then(() => {
      if (mesh.parent) mesh.position.y = 0;
    });
  }

  runQuiz() {
    return new Promise(resolve => {
      const { G, meshAt } = this.getBoardState();
      const pieces = [];
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (G.b[r][c]) pieces.push({ r, c, p: G.b[r][c] });
        }
      }

      if (!pieces.length) {
        resolve();
        return;
      }

      const kind = pick(['tap', 'tap', 'color', 'count', 'file', 'rank']);
      let tries = 0;
      let spoken = '';
      const qMsg = this.el.qMsg;
      qMsg.textContent = '';
      qMsg.className = 'q-msg';
      this.el.qOpts.innerHTML = '';
      this.el.quiz.hidden = false;
      this.el.renderStars();

      const close = delay => {
        this.quizActive = null;
        setTimeout(() => {
          this.el.quiz.hidden = true;
          this.anim.bounceMesh = null;
          for (const row of meshAt) {
            for (const m of row) {
              if (m) m.position.y = 0;
            }
          }
          this.highlights.clearHL();
          this.el.drawStatic();
          resolve();
        }, delay);
      };

      const good = (msg, pos) => {
        this.storage.addStars(1);
        this.el.renderStars();
        this.sound.play('star');
        qMsg.textContent = msg + ' ⭐ +1';
        qMsg.className = 'q-msg ok';
        this.narrator.say(msg);
        this.anim.burst(pos || new V3(0, 2, 0), {
          n: 70,
          colors: [0xffd23f, 0xffffff, 0xff7ad9, 0x5ee0ff],
          power: 2.6,
          size: 0.2,
          life: 1.2,
          grav: 2
        });
        close(2000);
      };

      const bad = msg => {
        tries++;
        this.sound.play('wrong');
        qMsg.textContent = msg;
        qMsg.className = 'q-msg bad';
        this.narrator.say(msg);
      };

      const ask = (html, text) => {
        this.el.qText.innerHTML = html;
        spoken = text;
        this.narrator.say(text);
      };

      this.el.qSay.onclick = () => this.narrator.say(spoken);
      this.el.qSkip.onclick = () => {
        this.narrator.cancel();
        close(0);
      };

      const options = (list, correct, rightMsg, revealMsg, render, pos) => {
        const box = this.el.qOpts;
        box.innerHTML = '';
        for (const v of list) {
          const b = document.createElement('button');
          b.className = 'q-opt';
          render(b, v);
          b.onclick = () => {
            if (!this.quizActive) return;
            if (v === correct) {
              b.classList.add('right');
              good(rightMsg, pos);
            } else {
              b.classList.add('wrong');
              b.disabled = true;
              bad(`${b.dataset.say || v}? Not quite. Try again!`);
              if (tries >= 2) {
                this.quizActive = null;
                const rb = [...box.children].find(x => x.dataset.v === String(correct));
                if (rb) rb.classList.add('right');
                qMsg.textContent = revealMsg;
                this.narrator.say(revealMsg);
                close(2600);
              }
            }
          };
          b.dataset.v = String(v);
          box.appendChild(b);
        }
        this.quizActive = { opts: true };
      };

      if (kind === 'tap') {
        const tgt = pick(pieces).p;
        const label = `${teamName(tgt.c).toLowerCase()} ${PNAME[tgt.t].toLowerCase()}`;
        ask(`Tap a <b style="color:${TEAM[tgt.c].css}">${teamName(tgt.c)}</b> <b>${PNAME[tgt.t]}</b> on the board!`, `Can you tap a ${label}?`);

        this.quizActive = {
          tap: (r, c) => {
            const p = G.b[r][c];
            if (p && p.t === tgt.t && p.c === tgt.c) {
              this.bounceOnce(meshAt[r][c]);
              this.highlights.addHL(r, c, 'sel');
              good(`Great job! That's a ${label}!`, sqPos(r, c).add(new V3(0, 1.2, 0)));
            } else {
              if (p) {
                this.bounceOnce(meshAt[r][c]);
                bad(`Oops! That's a ${teamName(p.c).toLowerCase()} ${PNAME[p.t].toLowerCase()}. Try again!`);
              } else {
                bad('That square is empty. Try again!');
              }
              if (tries >= 3) {
                this.quizActive = null;
                const f = pieces.find(x => x.p.t === tgt.t && x.p.c === tgt.c);
                if (f) {
                  this.highlights.addHL(f.r, f.c, 'sel');
                  this.anim.bounceMesh = meshAt[f.r][f.c];
                }
                const msg = `Here it is! This is the ${label}.`;
                qMsg.textContent = msg;
                this.narrator.say(msg);
                close(2800);
              }
            }
          }
        };
      } else if (kind === 'color') {
        const t = pick(pieces);
        this.highlights.addHL(t.r, t.c, 'sel');
        this.anim.bounceMesh = meshAt[t.r][t.c];
        const ans = teamName(t.p.c);
        ask('What <b>color</b> is the jumping piece?', 'What color is the jumping piece?');
        const CSS = { Blue: '#2f6fe4', Red: '#e23a31', Green: '#2fbf6a', Yellow: '#f2c14e' };
        options(
          shuffle(['Blue', 'Red', 'Green', 'Yellow']),
          ans,
          `Yes! It's ${ans}!`,
          `It's ${ans}!`,
          (b, v) => {
            b.textContent = v;
            b.style.background = CSS[v];
            b.style.color = v === 'Yellow' ? '#1a1409' : '#fff';
          },
          sqPos(t.r, t.c).add(new V3(0, 1.2, 0))
        );
      } else if (kind === 'count') {
        let col = 'w';
        let t = 'p';
        let n = 0;
        for (let i = 0; i < 12 && n === 0; i++) {
          col = pick(['w', 'b']);
          t = pick(['p', 'p', 'n', 'b', 'r']);
          n = pieces.filter(x => x.p.c === col && x.p.t === t).length;
        }
        const set = new Set([n]);
        while (set.size < 3) {
          const v = n + pick([-2, -1, 1, 2, 3]);
          if (v >= 0 && v <= 8) set.add(v);
        }
        const word = n === 1 ? PNAME[t].toLowerCase() : PLURAL[t];
        ask(
          `How many <b style="color:${TEAM[col].css}">${teamName(col)}</b> <b>${PLURAL[t]}</b> can you see?`,
          `How many ${teamName(col).toLowerCase()} ${PLURAL[t]} can you see?`
        );
        options(
          shuffle([...set]),
          n,
          `Yes! ${NUMW[n]} ${word}!`,
          `The answer is ${NUMW[n]}.`,
          (b, v) => {
            b.innerHTML = `${v}<small>${NUMW[v]}</small>`;
            b.dataset.say = NUMW[v];
          }
        );
      } else if (kind === 'file') {
        const f = (Math.random() * 8) | 0;
        for (let r = 0; r < 8; r++) this.highlights.addHL(r, f, 'col');
        const L = FILES[f].toUpperCase();
        const set = new Set([L]);
        while (set.size < 3) set.add(FILES[(Math.random() * 8) | 0].toUpperCase());
        ask('Which <b>letter</b> is the glowing column?', 'Which letter is the glowing column?');
        options(
          shuffle([...set]),
          L,
          `Yes! It's the letter ${L}!`,
          `It's the letter ${L}.`,
          (b, v) => {
            b.textContent = v;
          }
        );
      } else {
        const rk = (Math.random() * 8) | 0;
        for (let c = 0; c < 8; c++) this.highlights.addHL(rk, c, 'col');
        const n = rk + 1;
        const set = new Set([n]);
        while (set.size < 3) set.add(1 + ((Math.random() * 8) | 0));
        ask('Which <b>number</b> is the glowing row?', 'Which number is the glowing row?');
        options(
          shuffle([...set]),
          n,
          `Yes! Row number ${NUMW[n]}!`,
          `It's number ${NUMW[n]}.`,
          (b, v) => {
            b.innerHTML = `${v}<small>${NUMW[v]}</small>`;
            b.dataset.say = NUMW[v];
          }
        );
      }
    });
  }
}
