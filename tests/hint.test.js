import { describe, it, expect } from 'vitest';
import { newGame, legalMoves } from '../src/engine/chess.js';
import { getMoveHint } from '../src/engine/hint.js';

describe('Chess Move Hint Engine', () => {
  it('should return a valid move hint for initial game position', () => {
    const g = newGame();
    const hint = getMoveHint(g);
    expect(hint).toBeDefined();
    expect(hint.move).toBeDefined();
    expect(hint.titleVi).toContain('Gợi ý');
    expect(hint.reasonVi).toBeTruthy();
    expect(hint.fromSq).toMatch(/^[a-h][1-8]$/);
    expect(hint.toSq).toMatch(/^[a-h][1-8]$/);

    const legal = legalMoves(g);
    const isValid = legal.some(m => m.fr === hint.move.fr && m.fc === hint.move.fc && m.tr === hint.move.tr && m.tc === hint.move.tc);
    expect(isValid).toBe(true);
  });

  it('should return null when no legal moves exist', () => {
    const g = newGame();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) g.b[r][c] = null;
    }
    const hint = getMoveHint(g);
    expect(hint).toBeNull();
  });
});
