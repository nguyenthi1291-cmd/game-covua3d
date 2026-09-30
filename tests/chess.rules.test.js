import { describe, it, expect } from 'vitest';
import { newGame, legalMoves, makeMove, unmakeMove, inCheck, attacked } from '../src/engine/chess.js';

describe('Chess Engine - Rules & Edge Cases', () => {
  it('should generate 20 opening moves for white', () => {
    const g = newGame();
    const moves = legalMoves(g);
    expect(moves.length).toBe(20);
  });

  it('should handle castling kingside and queenside', () => {
    const g = newGame();
    // Clear pieces between king and rooks for white
    g.b[0][1] = null; // b1
    g.b[0][2] = null; // c1
    g.b[0][3] = null; // d1
    g.b[0][5] = null; // f1
    g.b[0][6] = null; // g1

    const moves = legalMoves(g);
    const castleK = moves.find(m => m.castle === 'K');
    const castleQ = moves.find(m => m.castle === 'Q');

    expect(castleK).toBeDefined();
    expect(castleQ).toBeDefined();

    // Test executing kingside castle
    const u = makeMove(g, castleK);
    expect(g.b[0][6]?.t).toBe('k');
    expect(g.b[0][5]?.t).toBe('r');
    expect(g.b[0][4]).toBeNull();
    expect(g.b[0][7]).toBeNull();

    // Test unmake
    unmakeMove(g, castleK, u);
    expect(g.b[0][4]?.t).toBe('k');
    expect(g.b[0][7]?.t).toBe('r');
    expect(g.b[0][5]).toBeNull();
    expect(g.b[0][6]).toBeNull();
  });

  it('should not allow castling through check', () => {
    const g = newGame();
    g.b[0][5] = null; // f1
    g.b[0][6] = null; // g1
    // Place black rook attacking f1 (passing square)
    g.b[1][5] = null; // remove white pawn on f2
    g.b[6][5] = null; // remove black pawn on f7
    g.b[7][5] = { t: 'r', c: 'b' };

    const moves = legalMoves(g);
    const castleK = moves.find(m => m.castle === 'K');
    expect(castleK).toBeUndefined();
  });

  it('should handle en passant capture correctly', () => {
    const g = newGame();
    // White pawn on e5 (r=4, c=4), Black pawn on d7 (r=6, c=3)
    g.b[1][4] = null;
    g.b[4][4] = { t: 'p', c: 'w' };
    g.turn = 'b';

    // Black plays d7 -> d5 (double push)
    const blackDouble = { fr: 6, fc: 3, tr: 4, tc: 3, cap: null, dbl: true };
    const uBlack = makeMove(g, blackDouble);

    expect(g.ep).toEqual({ r: 5, c: 3 });

    // White should have en passant move to d6 (r=5, c=3)
    const whiteMoves = legalMoves(g);
    const epMove = whiteMoves.find(m => m.ep && m.tr === 5 && m.tc === 3);
    expect(epMove).toBeDefined();

    // Make en passant move
    const uEp = makeMove(g, epMove);
    expect(g.b[4][3]).toBeNull(); // Black pawn captured
    expect(g.b[5][3]?.t).toBe('p'); // White pawn on d6

    // Unmake
    unmakeMove(g, epMove, uEp);
    expect(g.b[4][3]?.t).toBe('p');
    expect(g.b[4][3]?.c).toBe('b');

    unmakeMove(g, blackDouble, uBlack);
  });

  it('should handle promotion to all 4 pieces (Q, R, B, N)', () => {
    const g = newGame();
    // White pawn on e7 (r=6, c=4), e8 is empty
    g.b[6][4] = { t: 'p', c: 'w' };
    g.b[7][4] = null;

    const moves = legalMoves(g);
    const promoMoves = moves.filter(m => m.fr === 6 && m.fc === 4 && m.tr === 7 && m.tc === 4);
    expect(promoMoves.length).toBe(4);
    expect(promoMoves.map(m => m.promo).sort()).toEqual(['b', 'n', 'q', 'r']);
  });
});
