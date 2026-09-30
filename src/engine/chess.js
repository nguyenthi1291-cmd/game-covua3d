export const FILES = 'abcdefgh';
export const PV = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };
export const SYM = {
  w: { k: '♔', q: '♕', r: '♖', b: '♗', n: '♘', p: '♙' },
  b: { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' }
};

export const KN = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
export const KG = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
export const DIAG = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
export const ORTH = [[1, 0], [-1, 0], [0, 1], [0, -1]];

export const inB = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
export const opp = c => (c === 'w' ? 'b' : 'w');

export function newGame() {
  const b = Array.from({ length: 8 }, () => Array(8).fill(null));
  const back = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
  for (let c = 0; c < 8; c++) {
    b[0][c] = { t: back[c], c: 'w' };
    b[1][c] = { t: 'p', c: 'w' };
    b[6][c] = { t: 'p', c: 'b' };
    b[7][c] = { t: back[c], c: 'b' };
  }
  return {
    b,
    turn: 'w',
    cr: { wK: 1, wQ: 1, bK: 1, bQ: 1 },
    ep: null,
    half: 0,
    full: 1
  };
}

export function cloneGame(g) {
  return {
    b: g.b.map(row => row.map(cell => (cell ? { ...cell } : null))),
    turn: g.turn,
    cr: { ...g.cr },
    ep: g.ep ? { ...g.ep } : null,
    half: g.half,
    full: g.full
  };
}

export function attacked(g, r, c, by) {
  const b = g.b;
  const pd = by === 'w' ? -1 : 1; // pawn direction of the attacker
  // Check pawn attacks
  for (const dc of [-1, 1]) {
    const rr = r + pd;
    const cc = c + dc;
    if (inB(rr, cc)) {
      const p = b[rr][cc];
      if (p && p.c === by && p.t === 'p') return true;
    }
  }
  // Check knight attacks
  for (const [dr, dc] of KN) {
    const rr = r + dr;
    const cc = c + dc;
    if (inB(rr, cc)) {
      const p = b[rr][cc];
      if (p && p.c === by && p.t === 'n') return true;
    }
  }
  // Check king attacks
  for (const [dr, dc] of KG) {
    const rr = r + dr;
    const cc = c + dc;
    if (inB(rr, cc)) {
      const p = b[rr][cc];
      if (p && p.c === by && p.t === 'k') return true;
    }
  }
  // Check diagonal attacks (bishop, queen)
  for (const [dr, dc] of DIAG) {
    let rr = r + dr;
    let cc = c + dc;
    while (inB(rr, cc)) {
      const p = b[rr][cc];
      if (p) {
        if (p.c === by && (p.t === 'b' || p.t === 'q')) return true;
        break;
      }
      rr += dr;
      cc += dc;
    }
  }
  // Check orthogonal attacks (rook, queen)
  for (const [dr, dc] of ORTH) {
    let rr = r + dr;
    let cc = c + dc;
    while (inB(rr, cc)) {
      const p = b[rr][cc];
      if (p) {
        if (p.c === by && (p.t === 'r' || p.t === 'q')) return true;
        break;
      }
      rr += dr;
      cc += dc;
    }
  }
  return false;
}

export function findKing(g, col) {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = g.b[r][c];
      if (p && p.t === 'k' && p.c === col) return [r, c];
    }
  }
  return [0, 0];
}

export function inCheck(g, col = g.turn) {
  const k = findKing(g, col);
  return attacked(g, k[0], k[1], opp(col));
}

export function pseudo(g) {
  const col = g.turn;
  const b = g.b;
  const mv = [];
  const o = opp(col);

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = b[r][c];
      if (!p || p.c !== col) continue;

      if (p.t === 'p') {
        const dir = col === 'w' ? 1 : -1;
        const start = col === 'w' ? 1 : 6;
        const last = col === 'w' ? 7 : 0;

        const add = (tr, tc, cap, ep) => {
          if (tr === last) {
            for (const pr of ['q', 'r', 'b', 'n']) {
              mv.push({ fr: r, fc: c, tr, tc, cap, promo: pr });
            }
          } else {
            mv.push({ fr: r, fc: c, tr, tc, cap, ep: !!ep });
          }
        };

        // Single push
        if (inB(r + dir, c) && !b[r + dir][c]) {
          add(r + dir, c, null);
          // Double push
          if (r === start && inB(r + 2 * dir, c) && !b[r + 2 * dir][c]) {
            mv.push({ fr: r, fc: c, tr: r + 2 * dir, tc: c, cap: null, dbl: true });
          }
        }

        // Captures
        for (const dc of [-1, 1]) {
          const tr = r + dir;
          const tc = c + dc;
          if (!inB(tr, tc)) continue;
          const t = b[tr][tc];
          if (t && t.c === o) {
            add(tr, tc, t);
          } else if (!t && g.ep && g.ep.r === tr && g.ep.c === tc) {
            // En passant capture
            mv.push({ fr: r, fc: c, tr, tc, cap: b[r][tc], ep: true });
          }
        }
      } else if (p.t === 'n' || p.t === 'k') {
        const deltas = p.t === 'n' ? KN : KG;
        for (const [dr, dc] of deltas) {
          const tr = r + dr;
          const tc = c + dc;
          if (!inB(tr, tc)) continue;
          const t = b[tr][tc];
          if (!t || t.c === o) {
            mv.push({ fr: r, fc: c, tr, tc, cap: t || null });
          }
        }

        // Castling
        if (p.t === 'k') {
          const h = col === 'w' ? 0 : 7;
          if (r === h && c === 4) {
            // Kingside
            if (
              g.cr[col + 'K'] &&
              !b[h][5] &&
              !b[h][6] &&
              b[h][7] &&
              b[h][7].t === 'r' &&
              b[h][7].c === col &&
              !attacked(g, h, 4, o) &&
              !attacked(g, h, 5, o) &&
              !attacked(g, h, 6, o)
            ) {
              mv.push({ fr: r, fc: c, tr: h, tc: 6, cap: null, castle: 'K' });
            }
            // Queenside
            if (
              g.cr[col + 'Q'] &&
              !b[h][3] &&
              !b[h][2] &&
              !b[h][1] &&
              b[h][0] &&
              b[h][0].t === 'r' &&
              b[h][0].c === col &&
              !attacked(g, h, 4, o) &&
              !attacked(g, h, 3, o) &&
              !attacked(g, h, 2, o)
            ) {
              mv.push({ fr: r, fc: c, tr: h, tc: 2, cap: null, castle: 'Q' });
            }
          }
        }
      } else {
        // Slider pieces: b, r, q
        const dirs = p.t === 'b' ? DIAG : p.t === 'r' ? ORTH : KG;
        for (const [dr, dc] of dirs) {
          let tr = r + dr;
          let tc = c + dc;
          while (inB(tr, tc)) {
            const t = b[tr][tc];
            if (t) {
              if (t.c === o) mv.push({ fr: r, fc: c, tr, tc, cap: t });
              break;
            }
            mv.push({ fr: r, fc: c, tr, tc, cap: null });
            tr += dr;
            tc += dc;
          }
        }
      }
    }
  }
  return mv;
}

export function makeMove(g, m) {
  const b = g.b;
  const p = b[m.fr][m.fc];
  const u = {
    cr: { ...g.cr },
    ep: g.ep ? { ...g.ep } : null,
    half: g.half,
    full: g.full,
    moved: p,
    capSq: null,
    capP: null
  };

  if (m.ep) {
    u.capSq = [m.fr, m.tc];
    u.capP = b[m.fr][m.tc];
    b[m.fr][m.tc] = null;
  } else if (b[m.tr][m.tc]) {
    u.capSq = [m.tr, m.tc];
    u.capP = b[m.tr][m.tc];
  }

  b[m.tr][m.tc] = m.promo ? { t: m.promo, c: p.c } : p;
  b[m.fr][m.fc] = null;

  if (m.castle) {
    const h = m.fr;
    if (m.castle === 'K') {
      b[h][5] = b[h][7];
      b[h][7] = null;
    } else {
      b[h][3] = b[h][0];
      b[h][0] = null;
    }
  }

  // Update castling rights
  if (p.t === 'k') {
    g.cr[p.c + 'K'] = 0;
    g.cr[p.c + 'Q'] = 0;
  }
  const rk = (r, c) => {
    if (r === 0 && c === 0) g.cr.wQ = 0;
    if (r === 0 && c === 7) g.cr.wK = 0;
    if (r === 7 && c === 0) g.cr.bQ = 0;
    if (r === 7 && c === 7) g.cr.bK = 0;
  };
  rk(m.fr, m.fc);
  rk(m.tr, m.tc);

  // Set en passant square
  g.ep = m.dbl ? { r: (m.fr + m.tr) / 2, c: m.fc } : null;

  // 50-move half-clock reset on pawn move or capture
  g.half = (p.t === 'p' || u.capP) ? 0 : g.half + 1;
  if (g.turn === 'b') g.full++;
  g.turn = opp(g.turn);

  return u;
}

export function unmakeMove(g, m, u) {
  const b = g.b;
  g.turn = opp(g.turn);
  b[m.fr][m.fc] = u.moved;
  b[m.tr][m.tc] = null;

  if (u.capSq) {
    b[u.capSq[0]][u.capSq[1]] = u.capP;
  }

  if (m.castle) {
    const h = m.fr;
    if (m.castle === 'K') {
      b[h][7] = b[h][5];
      b[h][5] = null;
    } else {
      b[h][0] = b[h][3];
      b[h][3] = null;
    }
  }

  g.cr = u.cr;
  g.ep = u.ep;
  g.half = u.half;
  g.full = u.full;
}

export function legalMoves(g) {
  const col = g.turn;
  const o = opp(col);
  return pseudo(g).filter(m => {
    const u = makeMove(g, m);
    const k = findKing(g, col);
    const ok = !attacked(g, k[0], k[1], o);
    unmakeMove(g, m, u);
    return ok;
  });
}

export function posKey(g) {
  let s = '';
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = g.b[r][c];
      s += p ? (p.c === 'w' ? p.t.toUpperCase() : p.t) : '.';
    }
  }
  return s + g.turn + g.cr.wK + g.cr.wQ + g.cr.bK + g.cr.bQ + (g.ep ? g.ep.r + '' + g.ep.c : '-');
}

export function insufficient(g) {
  const ps = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = g.b[r][c];
      if (p && p.t !== 'k') ps.push(p);
    }
  }
  return !ps.length || (ps.length === 1 && (ps[0].t === 'n' || ps[0].t === 'b'));
}

export function perft(g, depth) {
  if (depth === 0) return 1;
  const moves = legalMoves(g);
  if (depth === 1) return moves.length;
  let nodes = 0;
  for (const m of moves) {
    const u = makeMove(g, m);
    nodes += perft(g, depth - 1);
    unmakeMove(g, m, u);
  }
  return nodes;
}
