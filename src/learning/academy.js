import { newGame, makeMove, legalMoves, FILES } from '../engine/chess.js';

export const LESSONS = [
  {
    id: 'intro',
    titleVi: '1. Bàn cờ & Cách sắp xếp',
    titleEn: '1. Board & Setup',
    icon: '🏰',
    summaryVi: 'Tìm hiểu về 64 ô cờ, hàng ngang, cột dọc và cách bố trí 32 quân cờ ban đầu.',
    summaryEn: 'Learn about the 64 squares, ranks, files, and standard piece setup.',
    contentVi: `
      <h3>👑 Bàn cờ vua và thiết lập ban đầu</h3>
      <ul>
        <li><strong>Bàn cờ 64 ô:</strong> Gồm 8 hàng ngang (đánh số 1 đến 8) và 8 cột dọc (đánh chữ a đến h), xen kẽ giữa các ô sáng và ô tối.</li>
        <li><strong>Quy tắc đặt bàn cờ:</strong> Ô góc dưới cùng bên tay phải của mỗi người chơi luôn luôn là <strong>ô sáng (trắng)</strong>.</li>
        <li><strong>Hàng 1 & 2:</strong> Vị trí xuất phát của quân Xanh/Trắng. 8 quân Tốt ở hàng 2.</li>
        <li><strong>Hàng 7 & 8:</strong> Vị trí xuất phát của quân Đỏ/Đen. 8 quân Tốt ở hàng 7.</li>
        <li><strong>Vị trí Hậu và Vua:</strong> Hậu màu nào đứng ở ô màu đó (Hậu trắng ô trắng, Hậu đen ô đen). Vua đứng ở ô còn lại cạnh Hậu.</li>
        <li><strong>Mục tiêu tối thượng:</strong> Tấn công và bắt Vua (Chiếu bí - Checkmate) của đối thủ!</li>
      </ul>
    `,
    contentEn: `
      <h3>👑 Chess Board and Setup</h3>
      <ul>
        <li><strong>64 Squares:</strong> 8 ranks (numbered 1 to 8) and 8 files (lettered a to h).</li>
        <li><strong>Board orientation:</strong> "White on right" - bottom right corner square is always light.</li>
        <li><strong>Queen on her color:</strong> White Queen on white square, Black Queen on black square.</li>
        <li><strong>Ultimate Goal:</strong> Checkmate the enemy King to win the game!</li>
      </ul>
    `,
    drill: {
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      promptVi: 'Hãy đi thử nước mở đầu tốt nhất: Đẩy Tốt e2 lên e4 để chiếm trung tâm!',
      promptEn: 'Try the classic opening move: Move Pawn from e2 to e4!',
      expectedMove: { fr: 1, fc: 4, tr: 3, tc: 4 },
      rewardStars: 2
    }
  },
  {
    id: 'pawn',
    titleVi: '2. Quân Tốt (Pawn)',
    titleEn: '2. The Pawn',
    icon: '♟️',
    summaryVi: 'Cách đi thẳng 1-2 ô, cách ăn chéo, và sức mạnh tiến về phía trước.',
    summaryEn: 'Moves forward 1-2 squares, captures diagonally, never moves backwards.',
    contentVi: `
      <h3>♟️ Quân Tốt - Những chiến binh tiền tuyến</h3>
      <ul>
        <li><strong>Nước đi thông thường:</strong> Tốt chỉ đi thẳng về phía trước <strong>1 ô</strong> (không được lùi).</li>
        <li><strong>Nước đi đầu tiên:</strong> Khi còn ở vị trí xuất phát (hàng 2 cho Trắng, hàng 7 cho Đen), Tốt có quyền chọn đi <strong>1 ô hoặc 2 ô</strong> về phía trước.</li>
        <li><strong>Cách ăn quân:</strong> Tốt <em>không thể</em> ăn thẳng! Tốt ăn chéo về phía trước 1 ô sang trái hoặc sang phải.</li>
        <li><strong>Vật cản:</strong> Nếu có quân cờ đứng ngay trước mặt Tốt, Tốt sẽ bị chặn lại và không thể tiến lên cho đến khi ô đó trống.</li>
      </ul>
    `,
    contentEn: `
      <h3>♟️ The Pawn - Foot Soldiers</h3>
      <ul>
        <li><strong>Movement:</strong> Moves straight forward 1 square. Cannot move backwards.</li>
        <li><strong>First Move Option:</strong> On its first move, a pawn can advance 1 or 2 squares.</li>
        <li><strong>Capturing:</strong> Pawns capture diagonally forward one square.</li>
      </ul>
    `,
    drill: {
      fen: '8/8/8/3p4/4P3/8/8/8 w - - 0 1',
      promptVi: 'Tốt trắng tại e4 hãy ăn Tốt đen tại d5 theo đường chéo!',
      promptEn: 'Capture the black pawn at d5 with your pawn at e4!',
      expectedMove: { fr: 3, fc: 4, tr: 4, tc: 3 },
      rewardStars: 2
    }
  },
  {
    id: 'knight',
    titleVi: '3. Quân Mã (Knight)',
    titleEn: '3. The Knight',
    icon: '♞',
    summaryVi: 'Bước nhảy chữ L thần tốc và khả năng nhảy vượt qua đầu các quân cờ khác.',
    summaryEn: 'Jumps in an L-shape and can leap over any other pieces on the board.',
    contentVi: `
      <h3>♞ Quân Mã - Kỵ binh dũng mãnh</h3>
      <ul>
        <li><strong>Bước nhảy hình chữ L:</strong> Đi 2 ô thẳng rồi rẽ ngang 1 ô (hoặc 1 ô thẳng rồi rẽ ngang 2 ô).</li>
        <li><strong>Đổi màu ô sau mỗi nước:</strong> Nếu Mã đang đứng ở ô sáng, sau khi nhảy sẽ luôn đáp xuống ô tối, và ngược lại.</li>
        <li><strong>Khả năng đặc biệt duy nhất:</strong> Mã là quân cờ DUY NHẤT có thể <strong>nhảy qua đầu</strong> các quân cờ khác (cả quân mình lẫn quân địch) mà không bị cản trở!</li>
        <li><strong>Ăn quân:</strong> Mã ăn quân đối phương đứng ở ô mà nó đáp xuống.</li>
      </ul>
    `,
    contentEn: `
      <h3>♞ The Knight - Agile Cavalry</h3>
      <ul>
        <li><strong>L-Shaped Movement:</strong> 2 squares in one direction, then 1 square perpendicular.</li>
        <li><strong>Leaping Power:</strong> The only piece that can jump over any intervening pieces!</li>
        <li><strong>Square Color Swap:</strong> Always lands on an opposite-colored square.</li>
      </ul>
    `,
    drill: {
      fen: '8/8/8/8/8/8/8/4N3 w - - 0 1',
      promptVi: 'Nhảy Mã từ e1 lên ô trung tâm f3 (hoặc d3) theo hình chữ L!',
      promptEn: 'Jump the Knight from e1 to f3 in an L-shape!',
      expectedMove: { fr: 0, fc: 4, tr: 2, tc: 5 },
      rewardStars: 2
    }
  },
  {
    id: 'bishop',
    titleVi: '4. Quân Tượng (Bishop)',
    titleEn: '4. The Bishop',
    icon: '♝',
    summaryVi: 'Sát thủ đường chéo với tầm kiểm soát xuyên suốt chiều dài bàn cờ.',
    summaryEn: 'Diagonal sniper moving any distance along light or dark diagonals.',
    contentVi: `
      <h3>♝ Quân Tượng - Pháp sư đường chéo</h3>
      <ul>
        <li><strong>Di chuyển:</strong> Tượng đi theo các đường chéo không giới hạn số ô (miễn là không có quân cản).</li>
        <li><strong>Tượng ô sáng & Tượng ô tối:</strong> Mỗi người chơi có 1 Tượng đi trên ô sáng và 1 Tượng đi trên ô tối. Tượng sẽ mãi mãi di chuyển trên màu ô xuất phát của nó.</li>
        <li><strong>Tầm bắn xa:</strong> Khi đường chéo thông thoáng, Tượng có thể kiểm soát từ góc này sang góc kia của bàn cờ!</li>
      </ul>
    `,
    contentEn: `
      <h3>♝ The Bishop - Diagonal Sniper</h3>
      <ul>
        <li><strong>Movement:</strong> Moves any number of squares diagonally.</li>
        <li><strong>Color Bound:</strong> Each bishop stays on its original square color (light or dark) forever.</li>
      </ul>
    `,
    drill: {
      fen: '8/8/8/8/8/8/8/2B5 w - - 0 1',
      promptVi: 'Di chuyển Tượng từ c1 lên g5 dọc theo đường chéo sáng!',
      promptEn: 'Move Bishop from c1 to g5 along the diagonal!',
      expectedMove: { fr: 0, fc: 2, tr: 4, tc: 6 },
      rewardStars: 2
    }
  },
  {
    id: 'rook',
    titleVi: '5. Quân Xe (Rook)',
    titleEn: '5. The Rook',
    icon: '♜',
    summaryVi: 'Pháo đài kiên cố di chuyển theo các hàng ngang và cột dọc không giới hạn.',
    summaryEn: 'Heavy fortress piece controlling open ranks and files.',
    contentVi: `
      <h3>♜ Quân Xe - Cỗ xe pháo thành trì</h3>
      <ul>
        <li><strong>Di chuyển:</strong> Xe di chuyển theo các đường thẳng (ngang và dọc) với số ô tùy ý nếu không bị chặn.</li>
        <li><strong>Giá trị:</strong> Xe trị giá 5 điểm, là quân cờ mạnh thứ hai trên bàn cờ (sau Hậu).</li>
        <li><strong>Kiểm soát cột mở:</strong> Đặt Xe vào các cột không có Tốt cản (cột mở) sẽ tạo ra sức ép cực lớn lên trận địa đối phương.</li>
        <li><strong>Nhập thành:</strong> Xe phối hợp cùng Vua để thực hiện nước Nhập thành bảo vệ Vua.</li>
      </ul>
    `,
    contentEn: `
      <h3>♜ The Rook - Powerful Castle</h3>
      <ul>
        <li><strong>Movement:</strong> Moves any number of squares vertically or horizontally.</li>
        <li><strong>Value:</strong> Worth 5 points. Excels on open files and 7th rank.</li>
      </ul>
    `,
    drill: {
      fen: '8/8/8/8/8/8/8/R7 w - - 0 1',
      promptVi: 'Di chuyển Xe từ a1 tiến thẳng lên ô a8!',
      promptEn: 'Move the Rook straight up from a1 to a8!',
      expectedMove: { fr: 0, fc: 0, tr: 7, tc: 0 },
      rewardStars: 2
    }
  },
  {
    id: 'queen',
    titleVi: '6. Quân Hậu (Queen)',
    titleEn: '6. The Queen',
    icon: '♛',
    summaryVi: 'Nữ hoàng quyền lực nhất, kết hợp sức mạnh phi thường của cả Xe và Tượng.',
    summaryEn: 'The most powerful piece, combining the movement of both Rook and Bishop.',
    contentVi: `
      <h3>♛ Quân Hậu - Uy quyền tối thượng</h3>
      <ul>
        <li><strong>Di chuyển vô song:</strong> Hậu có thể đi ngang, đi dọc VÀ đi chéo với số ô không giới hạn!</li>
        <li><strong>Giá trị cao nhất:</strong> Trị giá 9 điểm, là quân tấn công chủ lực lợi hại nhất trên bàn cờ.</li>
        <li><strong>Mẹo chiến thuật:</strong> Tránh đưa Hậu ra quá sớm ở đầu ván cờ, vì đối thủ có thể vừa phát triển quân vừa tấn công Hậu của bạn.</li>
      </ul>
    `,
    contentEn: `
      <h3>♛ The Queen - Supreme Ruler</h3>
      <ul>
        <li><strong>Movement:</strong> Any distance in any direction (horizontal, vertical, diagonal).</li>
        <li><strong>Value:</strong> 9 points. Protect her carefully!</li>
      </ul>
    `,
    drill: {
      fen: '8/8/8/8/8/8/8/3Q4 w - - 0 1',
      promptVi: 'Di chuyển Hậu từ d1 bay chéo lên ô h5!',
      promptEn: 'Move Queen diagonally from d1 to h5!',
      expectedMove: { fr: 0, fc: 3, tr: 4, tc: 7 },
      rewardStars: 2
    }
  },
  {
    id: 'king',
    titleVi: '7. Quân Vua (King)',
    titleEn: '7. The King',
    icon: '♚',
    summaryVi: 'Trái tim của toàn bộ ván cờ. Di chuyển 1 ô mọi hướng và phải được bảo vệ.',
    summaryEn: 'The heart of your army. Moves 1 square in any direction. Protect at all costs!',
    contentVi: `
      <h3>♚ Quân Vua - Trọng tâm sinh tử</h3>
      <ul>
        <li><strong>Di chuyển:</strong> Vua đi <strong>1 ô</strong> theo bất kỳ hướng nào (ngang, dọc, chéo).</li>
        <li><strong>Luật an toàn:</strong> Vua KHÔNG BAO GIỜ được phép đi vào ô đang bị quân đối phương kiểm soát (ô bị chiếu).</li>
        <li><strong>Khoảng cách giữa hai Vua:</strong> Hai Vua không bao giờ được đứng sát cạnh nhau (phải cách nhau ít nhất 1 ô).</li>
        <li><strong>Khi bị tấn công:</strong> Khi Vua bị đe dọa (Chiếu tướng), bạn BẮT BUỘC phải hóa giải chiếu ngay lập tức.</li>
      </ul>
    `,
    contentEn: `
      <h3>♚ The King - The Royal Sovereign</h3>
      <ul>
        <li><strong>Movement:</strong> 1 square in any direction.</li>
        <li><strong>Safety:</strong> Can never step into check (threatened squares).</li>
      </ul>
    `,
    drill: {
      fen: '8/8/8/8/8/8/8/4K3 w - - 0 1',
      promptVi: 'Di chuyển Vua từ e1 tiến lên e2 1 ô an toàn!',
      promptEn: 'Step the King forward from e1 to e2!',
      expectedMove: { fr: 0, fc: 4, tr: 1, tc: 4 },
      rewardStars: 2
    }
  },
  {
    id: 'special',
    titleVi: '8. Các nước đi đặc biệt',
    titleEn: '8. Special Moves',
    icon: '✨',
    summaryVi: 'Nhập thành (Castling), Phong cấp (Promotion) và Bắt tốt qua đường (En Passant).',
    summaryEn: 'Master Castling, Pawn Promotion, and En Passant captures.',
    contentVi: `
      <h3>✨ Ba nước đi đặc biệt trong cờ vua</h3>
      <ul>
        <li><strong>1. Nhập thành (Castling):</strong> Nước đi duy nhất di chuyển 2 quân cùng lúc (Vua và Xe). Vua đi 2 ô về phía Xe, Xe nhảy qua đầu Vua đứng cạnh Vua.
          <br><em>Điều kiện:</em> Vua và Xe chưa từng di chuyển, không có quân ở giữa, Vua không bị chiếu và không đi qua ô bị chiếu.</li>
        <li><strong>2. Phong cấp (Promotion):</strong> Khi Tốt tiến tới hàng cuối cùng (hàng 8 với Trắng, hàng 1 với Đen), Tốt ngay lập tức được biến đổi thành Hậu, Xe, Tượng hoặc Mã!</li>
        <li><strong>3. Bắt tốt qua đường (En Passant):</strong> Khi Tốt đối phương nhảy 2 ô vượt qua ô kiểm soát của Tốt bạn, Tốt của bạn có quyền ăn Tốt đối phương chéo qua như thể nó chỉ đi 1 ô (chỉ áp dụng ngay ở nước đi kế tiếp).</li>
      </ul>
    `,
    contentEn: `
      <h3>✨ The Three Special Rules</h3>
      <ul>
        <li><strong>Castling:</strong> King moves 2 squares toward Rook, Rook jumps over King.</li>
        <li><strong>Promotion:</strong> Pawn reaching the 8th rank transforms into Queen, Rook, Bishop, or Knight!</li>
        <li><strong>En Passant:</strong> Special pawn capture immediately after an opponent pawn double-steps past yours.</li>
      </ul>
    `,
    drill: {
      fen: '4k3/4P3/8/8/8/8/8/4K3 w - - 0 1',
      promptVi: 'Đẩy Tốt e7 lên e8 để phong cấp thành HẬU uy lực!',
      promptEn: 'Push pawn e7 to e8 to promote to a Queen!',
      expectedMove: { fr: 6, fc: 4, tr: 7, tc: 4, promo: 'q' },
      rewardStars: 3
    }
  },
  {
    id: 'checkmate',
    titleVi: '9. Chiếu & Chiếu bí (Checkmate)',
    titleEn: '9. Check & Mate',
    icon: '⚔️',
    summaryVi: '3 cách giải chiếu (CPR) và nhận biết đòn Chiếu bí kết thúc ván đấu.',
    summaryEn: 'The 3 ways to escape check and how checkmate ends the battle.',
    contentVi: `
      <h3>⚔️ Chiếu tướng, Thoát chiếu & Chiếu bí</h3>
      <ul>
        <li><strong>Chiếu (Check):</strong> Khi một quân cờ đang tấn công trực diện vào Vua.</li>
        <li><strong>3 Cách thoát chiếu (Quy tắc CPR):</strong>
          <br>1. <strong>C (Capture):</strong> Dùng quân mình ĂN quân đang chiếu.
          <br>2. <strong>P (Protect/Block):</strong> Dùng quân khác CHẮN giữa đường chiếu.
          <br>3. <strong>R (Run):</strong> Di chuyển Vua CHẠY sang ô an toàn.
        </li>
        <li><strong>Chiếu bí (Checkmate):</strong> Khi Vua bị chiếu mà KHÔNG THỂ thực hiện bất kỳ cách thoát chiếu nào. Ván đấu kết thúc ngay lập tức với chiến thắng cho bên chiếu bí!</li>
        <li><strong>Hòa cờ (Stalemate):</strong> Khi bên đến lượt đi không bị chiếu nhưng KHÔNG CÒN NƯỚC ĐI HỢP LỆ nào. Ván cờ xử HÒA.</li>
      </ul>
    `,
    contentEn: `
      <h3>⚔️ Checkmate & Stalemate</h3>
      <ul>
        <li><strong>Check:</strong> King is under direct attack.</li>
        <li><strong>Escape Rules (CPR):</strong> Capture attacker, Protect/Block the line, Run away.</li>
        <li><strong>Checkmate:</strong> King is in check and has no escape -> Game Won!</li>
        <li><strong>Stalemate:</strong> Not in check, but no legal moves -> Draw!</li>
      </ul>
    `,
    drill: {
      fen: 'k7/8/1K6/8/8/8/8/7R w - - 0 1',
      promptVi: 'Đưa Xe h1 lên h8 chiếu bí Vua đen ở góc để thắng ngay ván cờ!',
      promptEn: 'Deliver checkmate by moving Rook from h1 to h8!',
      expectedMove: { fr: 0, fc: 7, tr: 7, tc: 7 },
      rewardStars: 3
    }
  },
  {
    id: 'tactics',
    titleVi: '10. Chiến thuật & Khai cuộc',
    titleEn: '10. Strategy & Tactics',
    icon: '🎯',
    summaryVi: 'Các đòn phối hợp kinh điển: Ghim quân (Pin), Bắt đôi (Fork), và kiểm soát trung tâm.',
    summaryEn: 'Key tactics: Fork, Pin, Skewer, and opening principles for victory.',
    contentVi: `
      <h3>🎯 Chiến thuật và Nguyên tắc vàng</h3>
      <ul>
        <li><strong>1. Nguyên tắc Khai cuộc:</strong>
          <br>• Kiểm soát 4 ô trung tâm (e4, d4, e5, d5).
          <br>• Phát triển nhanh các quân nhẹ (Mã và Tượng).
          <br>• Nhập thành sớm để Vua an toàn và nối 2 Xe.
          <br>• Đừng đi một quân nhiều lần ở khai cuộc.
        </li>
        <li><strong>2. Đòn Bắt đôi (Fork):</strong> Một quân cờ tấn công đồng thời 2 quân cờ có giá trị của đối phương (đặc sản của quân Mã và Tốt).</li>
        <li><strong>3. Đòn Ghim quân (Pin):</strong> Khóa chân một quân cờ đối phương vì phía sau nó là Vua hoặc quân có giá trị lớn hơn.</li>
        <li><strong>4. Đòn Xiên (Skewer):</strong> Tấn công quân lớn (như Vua hoặc Hậu) buộc nó phải chạy, để lộ quân đứng phía sau để ta ăn.</li>
      </ul>
    `,
    contentEn: `
      <h3>🎯 Tactics and Winning Principles</h3>
      <ul>
        <li><strong>Golden Rules:</strong> Control the center, develop Knights and Bishops, castle early!</li>
        <li><strong>Fork:</strong> Attack two pieces at once (Knight's superpower).</li>
        <li><strong>Pin:</strong> Paralyze an enemy piece that shields a higher value target.</li>
      </ul>
    `,
    drill: {
      fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/4n3/3P1N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
      promptVi: 'Dùng Tốt d3 ăn Tốt/Mã đen tại e4 để giành lợi thế và kiểm soát trung tâm!',
      promptEn: 'Capture the black piece on e4 with pawn at d3 to gain the advantage!',
      expectedMove: { fr: 2, fc: 3, tr: 3, tc: 4 },
      rewardStars: 3
    }
  }
];

export class ChessAcademy {
  constructor(containerEl, sound, storage, narrator, onTryDrill) {
    this.container = containerEl;
    this.sound = sound;
    this.storage = storage;
    this.narrator = narrator;
    this.onTryDrill = onTryDrill;
    this.currentLessonIdx = 0;
    this.completedLessons = new Set(this.storage.getJson('completed_lessons') || []);
  }

  show() {
    if (!this.container) return;
    this.container.hidden = false;
    this.render();
  }

  hide() {
    if (!this.container) return;
    this.container.hidden = true;
  }

  render() {
    if (!this.container) return;
    const lesson = LESSONS[this.currentLessonIdx];
    const isCompleted = this.completedLessons.has(lesson.id);

    this.container.innerHTML = `
      <div class="academy-modal">
        <div class="academy-header">
          <div class="academy-title">
            <span class="badge">🎓 CHESS ACADEMY</span>
            <h2>Học chơi cờ vua & Chiến thuật</h2>
          </div>
          <button class="btn close-btn" id="acadClose">✕ Đóng</button>
        </div>

        <div class="academy-body">
          <div class="academy-sidebar">
            <div class="lesson-list">
              ${LESSONS.map((l, idx) => {
                const done = this.completedLessons.has(l.id);
                const active = idx === this.currentLessonIdx;
                return `
                  <button class="lesson-item ${active ? 'active' : ''} ${done ? 'done' : ''}" data-idx="${idx}">
                    <span class="l-icon">${l.icon}</span>
                    <div class="l-info">
                      <span class="l-title">${l.titleVi}</span>
                      <small class="l-sub">${l.titleEn}</small>
                    </div>
                    ${done ? '<span class="l-check">✓</span>' : ''}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <div class="academy-content">
            <div class="lesson-view">
              <div class="lesson-head">
                <span class="big-icon">${lesson.icon}</span>
                <div>
                  <h3>${lesson.titleVi}</h3>
                  <p class="en-sub">${lesson.titleEn}</p>
                </div>
              </div>

              <div class="lesson-text">
                ${lesson.contentVi}
              </div>

              <div class="lesson-drill-box">
                <div class="drill-head">
                  <span>🎯 Bài tập thực hành (${lesson.drill.rewardStars} ⭐)</span>
                </div>
                <p class="drill-prompt">${lesson.drill.promptVi}</p>
                <p class="drill-prompt-en"><em>${lesson.drill.promptEn}</em></p>
                <div class="drill-actions">
                  <button class="btn primary" id="btnPlayDrill">⚡ Thực hành trên bàn cờ ngay!</button>
                  <button class="btn" id="btnAcadVoice">🔊 Nghe hướng dẫn</button>
                </div>
              </div>

              <div class="lesson-nav">
                <button class="btn" id="btnPrevLesson" ${this.currentLessonIdx === 0 ? 'disabled' : ''}>← Bài trước</button>
                <span class="nav-count">Bài ${this.currentLessonIdx + 1} / ${LESSONS.length}</span>
                <button class="btn" id="btnNextLesson" ${this.currentLessonIdx === LESSONS.length - 1 ? 'disabled' : ''}>Bài tiếp →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind event listeners
    this.container.querySelector('#acadClose').onclick = () => this.hide();

    this.container.querySelectorAll('.lesson-item').forEach(el => {
      el.onclick = () => {
        this.currentLessonIdx = parseInt(el.dataset.idx, 10);
        this.render();
      };
    });

    const prevBtn = this.container.querySelector('#btnPrevLesson');
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.currentLessonIdx > 0) {
          this.currentLessonIdx--;
          this.render();
        }
      };
    }

    const nextBtn = this.container.querySelector('#btnNextLesson');
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.currentLessonIdx < LESSONS.length - 1) {
          this.currentLessonIdx++;
          this.render();
        }
      };
    }

    const voiceBtn = this.container.querySelector('#btnAcadVoice');
    if (voiceBtn && this.narrator) {
      voiceBtn.onclick = () => {
        this.narrator.say(lesson.drill.promptEn);
      };
    }

    const drillBtn = this.container.querySelector('#btnPlayDrill');
    if (drillBtn) {
      drillBtn.onclick = () => {
        this.hide();
        if (this.onTryDrill) {
          this.onTryDrill(lesson, () => {
            this.markCompleted(lesson.id, lesson.drill.rewardStars);
          });
        }
      };
    }
  }

  markCompleted(lessonId, stars = 2) {
    if (!this.completedLessons.has(lessonId)) {
      this.completedLessons.add(lessonId);
      this.storage.setJson('completed_lessons', Array.from(this.completedLessons));
      this.storage.addStars(stars);
      this.sound.play('twinkle');
    }
  }
}
