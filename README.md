# Knights Chess Arena 3D

An educational and casual competitive 3D chess web game with medieval fantasy piece aesthetics, cinematic capture battles, Web Worker AI, procedural Web Audio, speech narration, quizzes, and Elo rating tracking.

---

## Features

- **3D Interactive Castle Arena**: Built with Three.js with full lighting, soft shadows, reflective knight armor materials, and responsive OrbitControls (mouse drag, wheel zoom, mobile touch tap/drag).
- **Fantasy Medieval Pieces**: Custom 3D knight pieces based on classic fantasy chess sets (armored warrior King with greatsword, regal Queen, mitre Bishop, rearing warhorse Knight, fortress Rook with waving banner, and crested Pawn).
- **Chess Engine & Verification**:
  - Full FIDE rules: castling, en passant, pawn promotion, check/checkmate/stalemate, 50-move rule, threefold repetition, and insufficient material detection.
  - Perft benchmarks depth 1 to 4 verified (197,281 nodes at depth 4).
- **Web Worker AI Engine**:
  - Negamax with alpha-beta pruning, quiescence search, and difficulty noise levels (Easy 800, Medium 1200, Hard 1600).
  - Runs in a background Web Worker so the main 3D rendering thread stays smooth at 60 fps.
- **Cinematic Capture Battles**:
  - 6 unique battle sequences: Pawn Shield Bash, Knight Cavalry Charge, Bishop Magic Bolts & Beam, Rook Cannon Blast, Queen Whirlwind Slash, King Royal Smash.
  - Cartoon & Epic (piece shatter) battle styles with a 25× skip button.
- **English Learning & Quizzes**:
  - Word cards with pronunciation and piece rules.
  - Voice narration via Web Speech API.
  - Interactive quizzes with star rewards (tap piece, identify color, piece count, file/rank coordinates).
- **Elo Ratings & Leaderboard**:
  - Complete Elo rating calculator ($K=32$) with match histories and local browser persistence.

---

## Quick Start

### Development Server
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Run Tests
```bash
npm run test
```
