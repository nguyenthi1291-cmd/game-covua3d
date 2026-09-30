export const K_FACTOR = 32;

export function expectedScore(playerRating, oppRating) {
  return 1 / (1 + Math.pow(10, (oppRating - playerRating) / 400));
}

export function eloCalc(playerRating, oppRating, score) {
  const Ea = expectedScore(playerRating, oppRating);
  const d = Math.round(K_FACTOR * (score - Ea));
  return {
    Ea,
    d,
    newRating: playerRating + d
  };
}

export function calculateMatchResult(playerA, playerB, scoreA) {
  const scoreB = scoreA === 1 ? 0 : scoreA === 0 ? 1 : 0.5;
  const resA = playerA.bot
    ? { Ea: 0, d: 0, newRating: playerA.elo }
    : eloCalc(playerA.elo, playerB.elo, scoreA);
  const resB = playerB.bot
    ? { Ea: 0, d: 0, newRating: playerB.elo }
    : eloCalc(playerB.elo, playerA.elo, scoreB);

  return { playerA: resA, playerB: resB };
}
