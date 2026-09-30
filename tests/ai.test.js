import { describe, it, expect } from 'vitest';
import { newGame, legalMoves } from '../src/engine/chess.js';
import { aiPick, BOTS, evaluate } from '../src/engine/ai.js';

describe('AI Engine', () => {
  it('should evaluate standard starting board as 0', () => {
    const g = newGame();
    expect(evaluate(g)).toBe(0);
  });

  it('Easy bot should return a legal move from starting position', () => {
    const g = newGame();
    const legal = legalMoves(g);
    const move = aiPick(g, BOTS.easy);
    expect(move).toBeDefined();
    const isLegal = legal.some(m => m.fr === move.fr && m.fc === move.fc && m.tr === move.tr && m.tc === move.tc);
    expect(isLegal).toBe(true);
  });

  it('Medium bot should return a legal move from starting position', () => {
    const g = newGame();
    const legal = legalMoves(g);
    const move = aiPick(g, BOTS.med);
    expect(move).toBeDefined();
    const isLegal = legal.some(m => m.fr === move.fr && m.fc === move.fc && m.tr === move.tr && m.tc === move.tc);
    expect(isLegal).toBe(true);
  });

  it('Hard bot should return a legal move from starting position', () => {
    const g = newGame();
    const legal = legalMoves(g);
    const move = aiPick(g, BOTS.hard);
    expect(move).toBeDefined();
    const isLegal = legal.some(m => m.fr === move.fr && m.fc === move.fc && m.tr === move.tr && m.tc === move.tc);
    expect(isLegal).toBe(true);
  });

  it('should return null on checkmated or no legal moves position', () => {
    const g = newGame();
    // Empty board
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) g.b[r][c] = null;
    }
    expect(aiPick(g, BOTS.easy)).toBeNull();
  });
});
