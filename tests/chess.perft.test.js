import { describe, it, expect } from 'vitest';
import { newGame, perft } from '../src/engine/chess.js';

describe('Chess Engine - Perft Benchmarks', () => {
  it('depth 1 should return 20 nodes', () => {
    const g = newGame();
    expect(perft(g, 1)).toBe(20);
  });

  it('depth 2 should return 400 nodes', () => {
    const g = newGame();
    expect(perft(g, 2)).toBe(400);
  });

  it('depth 3 should return 8,902 nodes', () => {
    const g = newGame();
    expect(perft(g, 3)).toBe(8902);
  });

  it('depth 4 should return 197,281 nodes', () => {
    const g = newGame();
    expect(perft(g, 4)).toBe(197281);
  });
});
