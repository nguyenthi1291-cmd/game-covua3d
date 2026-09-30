import { FILES, makeMove, unmakeMove, legalMoves, inCheck } from './chess.js';

export function san(g, m, legal) {
  const p = g.b[m.fr][m.fc];
  let s;

  if (m.castle) {
    s = m.castle === 'K' ? 'O-O' : 'O-O-O';
  } else {
    const to = FILES[m.tc] + (m.tr + 1);
    const cap = !!m.cap;

    if (p.t === 'p') {
      s = (cap ? FILES[m.fc] + 'x' : '') + to + (m.promo ? '=' + m.promo.toUpperCase() : '');
    } else {
      let dis = '';
      const others = (legal || legalMoves(g)).filter(
        o => o.tr === m.tr && o.tc === m.tc && !(o.fr === m.fr && o.fc === m.fc) && g.b[o.fr][o.fc]?.t === p.t
      );
      if (others.length) {
        const sameFile = others.some(o => o.fc === m.fc);
        const sameRank = others.some(o => o.fr === m.fr);
        if (!sameFile) {
          dis = FILES[m.fc];
        } else if (!sameRank) {
          dis = String(m.fr + 1);
        } else {
          dis = FILES[m.fc] + (m.fr + 1);
        }
      }
      s = p.t.toUpperCase() + dis + (cap ? 'x' : '') + to;
    }
  }

  const u = makeMove(g, m);
  const lm = legalMoves(g);
  const chk = inCheck(g);
  unmakeMove(g, m, u);

  if (chk) {
    s += lm.length ? '+' : '#';
  }
  return s;
}
