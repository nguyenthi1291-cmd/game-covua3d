import { PV, legalMoves, makeMove, unmakeMove, inCheck } from './chess.js';

export const BOTS = {
  easy: { name: 'Computer · Easy', elo: 800, depth: 1, noise: 110, quies: false },
  med: { name: 'Computer · Medium', elo: 1200, depth: 2, noise: 12, quies: true },
  hard: { name: 'Computer · Hard', elo: 1600, depth: 3, noise: 0, quies: true }
};

const PST_P = [
  0, 0, 0, 0, 0, 0, 0, 0,
  5, 10, 10, -20, -20, 10, 10, 5,
  5, -5, -10, 0, 0, -10, -5, 5,
  0, 0, 0, 20, 20, 0, 0, 0,
  5, 5, 10, 25, 25, 10, 5, 5,
  10, 10, 20, 30, 30, 20, 10, 10,
  50, 50, 50, 50, 50, 50, 50, 50,
  0, 0, 0, 0, 0, 0, 0, 0
];

const CEN = (r, c) => (3.5 - Math.abs(c - 3.5)) + (3.5 - Math.abs(r - 3.5));

export function evaluate(g) {
  let s = 0;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = g.b[r][c];
      if (!p) continue;
      const rr = p.c === 'w' ? r : 7 - r;
      let v = PV[p.t];
      if (p.t === 'p') v += PST_P[rr * 8 + c];
      else if (p.t === 'n') v += CEN(r, c) * 6 - 12;
      else if (p.t === 'b') v += CEN(r, c) * 3;
      else if (p.t === 'q') v += CEN(r, c);
      else if (p.t === 'r') v += (rr === 6 ? 15 : 0);
      else if (p.t === 'k') v += (rr === 0 ? (c === 6 || c === 2 ? 25 : 10) : -20);

      s += p.c === 'w' ? v : -v;
    }
  }
  return s;
}

export function orderMoves(g, ms) {
  for (const m of ms) {
    let sc = 0;
    if (m.cap) {
      const moverVal = g.b[m.fr]?.[m.fc] ? PV[g.b[m.fr][m.fc].t] : 100;
      sc += 1000 + 10 * PV[m.cap.t] - moverVal;
    }
    if (m.promo) sc += m.promo === 'q' ? 900 : 100;
    if (m.castle) sc += 50;
    m._s = sc;
  }
  ms.sort((a, b) => b._s - a._s);
}

export function quies(g, alpha, beta, qd, useQ) {
  const sp = (g.turn === 'w' ? 1 : -1) * evaluate(g);
  if (!useQ || qd >= 4) return sp;
  if (sp >= beta) return sp;
  if (sp > alpha) alpha = sp;

  const caps = legalMoves(g).filter(m => m.cap || m.promo === 'q');
  orderMoves(g, caps);

  for (const m of caps) {
    const u = makeMove(g, m);
    const v = -quies(g, -beta, -alpha, qd + 1, useQ);
    unmakeMove(g, m, u);
    if (v >= beta) return v;
    if (v > alpha) alpha = v;
  }
  return alpha;
}

export function search(g, depth, alpha, beta, ply, useQ) {
  const moves = legalMoves(g);
  if (!moves.length) return inCheck(g) ? -100000 + ply : 0;
  if (g.half >= 100) return 0;
  if (depth === 0) return quies(g, alpha, beta, 0, useQ);

  orderMoves(g, moves);
  for (const m of moves) {
    const u = makeMove(g, m);
    const v = -search(g, depth - 1, -beta, -alpha, ply + 1, useQ);
    unmakeMove(g, m, u);
    if (v >= beta) return v;
    if (v > alpha) alpha = v;
  }
  return alpha;
}

export function aiPick(g, bot) {
  const moves = legalMoves(g);
  if (!moves.length) return null;
  orderMoves(g, moves);

  let best = null;
  let bestV = -1e9;
  const useQ = bot.quies !== false;
  const depth = bot.depth || 1;
  const noise = bot.noise || 0;

  for (const m of moves) {
    const u = makeMove(g, m);
    let v = -search(g, depth - 1, -1e9, -(bestV - noise - 1), 1, useQ);
    unmakeMove(g, m, u);

    if (noise > 0) {
      v += (Math.random() - 0.5) * 2 * noise;
    }
    if (v > bestV) {
      bestV = v;
      best = m;
    }
  }
  return best || moves[0];
}
