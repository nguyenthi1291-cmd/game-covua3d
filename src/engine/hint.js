import { PV, legalMoves, makeMove, unmakeMove, inCheck, findKing, FILES, opp } from './chess.js';
import { evaluate, search, orderMoves } from './ai.js';
import { PNAME, teamName } from '../learning/words.js';

const VI_PNAME = {
  p: 'Tốt',
  n: 'Mã',
  b: 'Tượng',
  r: 'Xe',
  q: 'Hậu',
  k: 'Vua'
};

const VI_TEAM = {
  w: 'Xanh (Trắng)',
  b: 'Đỏ (Đen)'
};

export function getMoveHint(G) {
  const moves = legalMoves(G);
  if (!moves.length) return null;

  orderMoves(G, moves);

  let bestMove = null;
  let bestScore = -Infinity;

  for (const m of moves) {
    const undo = makeMove(G, m);
    // 2-ply deep search for evaluation
    const score = -search(G, 2, -100000, 100000, 1, true);
    unmakeMove(G, m, undo);

    if (score > bestScore) {
      bestScore = score;
      bestMove = m;
    }
  }

  if (!bestMove) bestMove = moves[0];

  // Analyze reasons for the move
  const fromSq = `${FILES[bestMove.fc]}${bestMove.fr + 1}`;
  const toSq = `${FILES[bestMove.tc]}${bestMove.tr + 1}`;
  const moverPiece = G.b[bestMove.fr][bestMove.fc];
  const pieceNameVi = VI_PNAME[moverPiece?.t || 'p'];
  const pieceNameEn = PNAME[moverPiece?.t || 'p'];

  let reasonVi = '';
  let reasonEn = '';

  // Check if moving out of check
  if (inCheck(G)) {
    reasonVi = `Bảo vệ Vua và thoát khỏi đòn chiếu!`;
    reasonEn = `Escape check and keep your King safe!`;
  } else if (bestMove.cap) {
    const targetVi = VI_PNAME[bestMove.cap.t];
    const targetEn = PNAME[bestMove.cap.t];
    reasonVi = `Ăn ${targetVi} đối phương ở ${toSq} để giành ưu thế hơn quân (+${PV[bestMove.cap.t] / 100} điểm)!`;
    reasonEn = `Capture enemy ${targetEn} at ${toSq} (+${PV[bestMove.cap.t] / 100} advantage)!`;
  } else if (bestMove.castle) {
    reasonVi = `Nhập thành (${bestMove.castle === 'K' ? 'O-O' : 'O-O-O'}) để đưa Vua vào nơi an toàn và kích hoạt Xe xuất trận!`;
    reasonEn = `Castle to secure your King and activate the Rook!`;
  } else if (bestMove.promo) {
    reasonVi = `Phong cấp Tốt thành ${VI_PNAME[bestMove.promo]} ở ${toSq}!`;
    reasonEn = `Promote pawn to ${PNAME[bestMove.promo]} at ${toSq}!`;
  } else {
    // Check if checks opponent
    const u = makeMove(G, bestMove);
    const givesCheck = inCheck(G);
    unmakeMove(G, bestMove, u);

    if (givesCheck) {
      reasonVi = `Chiếu Vua đối phương tại ${toSq} tạo thế tấn công áp đảo!`;
      reasonEn = `Deliver a check to the enemy King at ${toSq}!`;
    } else if ((bestMove.tr === 3 || bestMove.tr === 4) && (bestMove.tc === 3 || bestMove.tc === 4)) {
      reasonVi = `Kiểm soát ô trung tâm chiến lược ${toSq} để làm chủ bàn cờ!`;
      reasonEn = `Control key central square ${toSq} to dominate the board!`;
    } else if (moverPiece?.t === 'n' || moverPiece?.t === 'b') {
      reasonVi = `Phát triển ${pieceNameVi} lên ${toSq} mở đường tấn công và kiểm soát không gian!`;
      reasonEn = `Develop ${pieceNameEn} to ${toSq} to control key squares!`;
    } else if (moverPiece?.t === 'r') {
      reasonVi = `Kích hoạt Xe kiểm soát cột/hàng ${toSq} tạo sức ép!`;
      reasonEn = `Activate Rook along line ${toSq} to exert pressure!`;
    } else if (moverPiece?.t === 'q') {
      reasonVi = `Đưa Hậu đến ${toSq} tạo đe dọa đa hướng!`;
      reasonEn = `Position Queen at ${toSq} for multi-directional pressure!`;
    } else {
      reasonVi = `Nước đi chiến thuật vững chắc đưa ${pieceNameVi} lên ${toSq}!`;
      reasonEn = `Solid positional move placing ${pieceNameEn} at ${toSq}!`;
    }
  }

  const titleVi = `💡 Gợi ý: ${pieceNameVi} ${fromSq} ➔ ${toSq}`;
  const titleEn = `💡 Hint: ${pieceNameEn} ${fromSq} ➔ ${toSq}`;

  return {
    move: bestMove,
    fromSq,
    toSq,
    piece: moverPiece?.t,
    color: moverPiece?.c,
    titleVi,
    titleEn,
    reasonVi,
    reasonEn,
    sanStr: `${pieceNameVi} (${fromSq} ➔ ${toSq})`
  };
}
