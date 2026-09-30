import { describe, it, expect } from 'vitest';
import { newGame, insufficient } from '../src/engine/chess.js';
import { RepetitionTracker } from '../src/engine/repetition.js';

describe('Chess Draws & Terminal Conditions', () => {
  it('should detect insufficient material for King vs King', () => {
    const g = newGame();
    // Clear all pieces except kings
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (g.b[r][c]?.t !== 'k') g.b[r][c] = null;
      }
    }
    expect(insufficient(g)).toBe(true);
  });

  it('should detect insufficient material for King+Bishop vs King', () => {
    const g = newGame();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (g.b[r][c]?.t !== 'k') g.b[r][c] = null;
      }
    }
    g.b[2][2] = { t: 'b', c: 'w' };
    expect(insufficient(g)).toBe(true);
  });

  it('should detect insufficient material for King+Knight vs King', () => {
    const g = newGame();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (g.b[r][c]?.t !== 'k') g.b[r][c] = null;
      }
    }
    g.b[2][2] = { t: 'n', c: 'b' };
    expect(insufficient(g)).toBe(true);
  });

  it('should NOT detect insufficient material when pawns or rooks are present', () => {
    const g = newGame();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (g.b[r][c]?.t !== 'k') g.b[r][c] = null;
      }
    }
    g.b[2][2] = { t: 'p', c: 'w' };
    expect(insufficient(g)).toBe(false);
  });

  it('should track threefold repetition', () => {
    const g = newGame();
    const tracker = new RepetitionTracker();
    tracker.reset(g);

    expect(tracker.count(g)).toBe(1);
    expect(tracker.isThreefold(g)).toBe(false);

    tracker.record(g);
    expect(tracker.count(g)).toBe(2);
    expect(tracker.isThreefold(g)).toBe(false);

    tracker.record(g);
    expect(tracker.count(g)).toBe(3);
    expect(tracker.isThreefold(g)).toBe(true);
  });
});
