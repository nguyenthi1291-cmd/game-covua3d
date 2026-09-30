import { describe, it, expect } from 'vitest';
import { newGame, legalMoves } from '../src/engine/chess.js';
import { san } from '../src/engine/san.js';

describe('Chess SAN Notation', () => {
  it('should generate standard pawn move e4', () => {
    const g = newGame();
    const moves = legalMoves(g);
    const e4 = moves.find(m => m.fr === 1 && m.fc === 4 && m.tr === 3 && m.tc === 4);
    expect(san(g, e4, moves)).toBe('e4');
  });

  it('should generate knight move Nf3', () => {
    const g = newGame();
    const moves = legalMoves(g);
    const nf3 = moves.find(m => m.fr === 0 && m.fc === 6 && m.tr === 2 && m.tc === 5);
    expect(san(g, nf3, moves)).toBe('Nf3');
  });

  it('should generate kingside castling notation O-O', () => {
    const g = newGame();
    g.b[0][5] = null;
    g.b[0][6] = null;
    const moves = legalMoves(g);
    const castleK = moves.find(m => m.castle === 'K');
    expect(san(g, castleK, moves)).toBe('O-O');
  });
});
