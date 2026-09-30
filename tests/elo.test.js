import { describe, it, expect } from 'vitest';
import { eloCalc, expectedScore, calculateMatchResult } from '../src/rating/elo.js';

describe('Elo Rating System', () => {
  it('should calculate expected score correctly for equal ratings', () => {
    expect(expectedScore(1200, 1200)).toBeCloseTo(0.5, 4);
  });

  it('1200 beating 1600 should gain +29 points under K=32', () => {
    const res = eloCalc(1200, 1600, 1);
    expect(res.Ea).toBeCloseTo(0.0909, 3);
    expect(res.d).toBe(29);
    expect(res.newRating).toBe(1229);
  });

  it('1200 losing to 1600 should lose 3 points', () => {
    const res = eloCalc(1200, 1600, 0);
    expect(res.d).toBe(-3);
    expect(res.newRating).toBe(1197);
  });

  it('should handle match results for two human players using pre-game ratings', () => {
    const playerA = { elo: 1200, bot: null };
    const playerB = { elo: 1400, bot: null };
    const result = calculateMatchResult(playerA, playerB, 1); // A wins

    expect(result.playerA.d).toBeGreaterThan(0);
    expect(result.playerB.d).toBeLessThan(0);
    expect(result.playerA.d + result.playerB.d).toBe(0); // zero-sum delta
  });

  it('bot ratings should remain unchanged', () => {
    const human = { elo: 1200, bot: null };
    const bot = { elo: 1600, bot: { elo: 1600 } };
    const result = calculateMatchResult(human, bot, 1);

    expect(result.human?.d ?? result.playerA.d).toBe(29);
    expect(result.playerB.d).toBe(0);
    expect(result.playerB.newRating).toBe(1600);
  });
});
