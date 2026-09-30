# KNIGHTS CHESS ARENA
## Master Development Prompt for Google Antigravity
**Project type:** 3D Chess Web Game · Educational + Casual Competitive  
**Primary language:** English-only UI  
**Development approach:** Preserve the existing prototype, refactor incrementally, test continuously.

---

# 1. ROLE AND MISSION

Act as a senior game engineer, Three.js specialist, front-end architect, QA engineer, and technical designer.

Your task is to continue developing **Knights Chess Arena**, a kid-friendly 3D chess web game, using the existing `knights-chess-arena.html` prototype as the source of truth.

The prototype is a single HTML file of approximately 2,000 lines, using vanilla JavaScript and Three.js r128 from a CDN.

The mission is to:
1. Inspect and understand the entire prototype before changing it.
2. Preserve every existing working feature unless a change is explicitly approved.
3. Refactor the prototype into a maintainable Vite + ES modules project.
4. Improve reliability, performance, accessibility, mobile usability, and code quality.
5. Retain a bright, original medieval-knight visual identity.
6. Support both a young child learning English/chess and adults who want a casual Elo-rated game.

**Do not silently remove, simplify, replace, or alter existing behavior.** If a requirement conflicts with the prototype, document the conflict and ask before making a destructive or behavior-changing decision.

The entire player-facing interface, including buttons, messages, dialogs, labels, tutorials, and accessibility labels, must be in **English**. Source-code comments and developer documentation may be in English.

---

# 2. REQUIRED WORKFLOW — READ BEFORE CODING

## Step 0 — Inspect and report

Before editing any file:

1. Locate and read the complete `knights-chess-arena.html` file. Do not rely on a partial preview.
2. Inspect the existing project files, assets, scripts, and package configuration, if present.
3. Identify all existing features, state variables, event handlers, chess rules, rendering logic, animations, sounds, and persistence behavior.
4. Create a feature inventory and map each existing feature to its intended destination in the new architecture.
5. Identify risks, duplicated logic, bugs, missing tests, and unclear requirements.
6. Present a concise **Prototype Audit Report** containing:
   - Existing features found.
   - Existing features that are incomplete or broken.
   - Proposed file/module mapping.
   - Potential migration risks.
   - Questions that genuinely block implementation.

Do not begin destructive refactoring until the audit is complete. If no blocking ambiguity exists, proceed with Phase 1 without asking unnecessary questions. Make conservative, reversible decisions and document them.

## Step 1 — Work safely

- Create a Git checkpoint/branch before major changes if Git is available.
- Never overwrite or delete the original prototype. Keep it as a reference or backup.
- Migrate in small, verifiable steps.
- Keep the application runnable after each meaningful step.
- Do not replace working features with placeholders.
- Do not claim a feature or test works unless you have actually verified it.
- If a dependency, model, or browser API is unavailable, implement a graceful fallback and document the limitation.

## Step 2 — Verify after every phase

At the end of each phase:
1. Run the relevant tests.
2. Run the production build.
3. Launch the app and perform the applicable manual smoke tests.
4. Fix regressions before moving on.
5. Report changed files, implemented features, test/build results, known limitations, and the next phase.

**Stop at the end of each phase and show the result.** Do not start Phase 3 without explicit approval. Do not silently move into later phases.

---

# 3. PRODUCT REQUIREMENTS

## 3.1 Target users

### Child learning mode
- Designed for a child around six years old.
- Simple English vocabulary and short sentences.
- Large, clear controls and forgiving interactions.
- Visual and spoken feedback.
- No blood, frightening violence, gambling, or manipulative reward mechanics.
- Avoid time pressure by default.

### Casual adult mode
- Complete chess rules.
- Computer opponents with selectable difficulty.
- Elo rating and match history/leaderboard.
- Clear move history and game result.
- No claim that bot Elo is equivalent to a human online rating.

## 3.2 Core user experience

The primary layout is:
- A large 3D chess stage.
- A right-side control/information panel on wide screens.
- At widths below 880 px, stack the panel below the stage.
- Responsive layout for desktop, tablet, and mobile.
- Touch controls: tap to select, tap a destination to move, drag to rotate, pinch to zoom.
- Provide visible, understandable feedback for selected pieces, legal moves, captures, check, and the side to move.

The game must remain usable if speech, audio, WebGL, or local storage is unavailable. Provide clear fallback behavior rather than crashing.

---

# 4. TECHNOLOGY AND PROJECT ARCHITECTURE

## 4.1 Required stack

- Vite
- Vanilla JavaScript with ES modules
- Latest stable Three.js compatible with the project at implementation time, installed through npm
- `OrbitControls` from `three/examples/jsm/controls/OrbitControls.js`
- Vitest for unit tests
- Web Worker for AI search
- Browser Web Speech API where available
- Web Audio API for procedural sound effects
- `localStorage` for local persistence, with every read/write protected by `try/catch`

Use a lockfile and pin dependency versions through the package manager. Do not load Three.js from a CDN in the refactored application.

Required commands:
```bash
npm install
npm run dev
npm run build
npm run test
```

Add `npm run test:watch` if practical.

## 4.2 Suggested structure

Keep this structure unless the audit identifies a clear technical reason to adjust it. If you change it, document why.

```text
knights-chess-arena/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── public/
│   ├── models/
│   ├── textures/
│   └── icons/
├── src/
│   ├── main.js
│   ├── app/
│   │   ├── App.js
│   │   ├── GameController.js
│   │   ├── state.js
│   │   └── settings.js
│   ├── engine/
│   │   ├── chess.js
│   │   ├── fen.js
│   │   ├── san.js
│   │   ├── repetition.js
│   │   ├── ai.js
│   │   └── ai.worker.js
│   ├── scene/
│   │   ├── setup.js
│   │   ├── board.js
│   │   ├── materials.js
│   │   ├── highlights.js
│   │   ├── picking.js
│   │   ├── animation.js
│   │   ├── assetLoader.js
│   │   └── pieces/
│   │       ├── shared.js
│   │       ├── pawn.js
│   │       ├── rook.js
│   │       ├── knight.js
│   │       ├── bishop.js
│   │       ├── queen.js
│   │       └── king.js
│   ├── battles/
│   │   ├── index.js
│   │   ├── battleController.js
│   │   ├── pawn.js
│   │   ├── knight.js
│   │   ├── bishop.js
│   │   ├── rook.js
│   │   ├── queen.js
│   │   └── king.js
│   ├── learning/
│   │   ├── speech.js
│   │   ├── words.js
│   │   └── quiz.js
│   ├── rating/
│   │   └── elo.js
│   ├── audio/
│   │   └── sound.js
│   ├── storage/
│   │   └── storage.js
│   ├── ui/
│   │   ├── layout.js
│   │   ├── boardPanel.js
│   │   ├── dialogs.js
│   │   ├── wordCard.js
│   │   ├── quizPanel.js
│   │   ├── leaderboard.js
│   │   └── settingsPanel.js
│   └── styles/
│       ├── main.css
│       ├── layout.css
│       ├── components.css
│       └── responsive.css
└── tests/
    ├── chess.perft.test.js
    ├── chess.rules.test.js
    ├── chess.san.test.js
    ├── chess.draws.test.js
    ├── ai.test.js
    ├── elo.test.js
    └── storage.test.js
```

Avoid circular dependencies. The chess engine must not import Three.js or UI modules. The AI must operate on a serializable chess position and must not manipulate the scene or DOM.

---

# 5. FEATURE PRESERVATION AND IMPLEMENTATION SPECIFICATION

## 5.1 Chess engine — correctness is mandatory

Preserve and verify all existing rules:

- Legal move generation.
- Check and king-safety validation.
- Castling on both sides, including restrictions when the king is in check, crosses an attacked square, or ends in check.
- En passant, including the rule that an en-passant move cannot expose the moving king to check.
- Promotion to queen, rook, bishop, or knight.
- Check, checkmate, and stalemate.
- Fifty-move draw rule.
- Threefold repetition.
- Insufficient material, at minimum:
  - King versus king.
  - King and one bishop versus king.
  - King and one knight versus king.
- SAN move notation with disambiguation and `+` / `#` suffixes.
- Correct turn switching and game-over state.

Board convention from the prototype:
- `board[r][c]`
- `r = 0` is rank 1 (Blue home rank).
- `c = 0` is file a.

Preserve this convention throughout the migration. If the prototype has a different internal convention in any module, document the mapping and ensure all public interfaces use one consistent convention.

### Chess engine design
- Separate pseudo-legal moves from legal moves.
- Make and unmake moves safely, or use an equivalent tested approach.
- Avoid mutating shared state during move generation.
- Ensure special move state is restored correctly after unmake.
- Keep repetition history accurate and reset it correctly for a new game.
- Keep SAN generation separate from UI rendering.
- Use deterministic, testable engine functions where possible.

### Mandatory perft tests

From the standard starting position, tests must pass:

| Depth | Expected nodes |
|---:|---:|
| 1 | 20 |
| 2 | 400 |
| 3 | 8,902 |
| 4 | 197,281 |

Also add targeted positions for castling, en passant, promotion, pins, discovered check, checkmate, and stalemate. Use well-known test positions where possible and document their expected results.

Do not change expected perft numbers to make tests pass. Investigate and fix the engine if they fail.

## 5.2 Game modes

### Versus Computer
- Easy: target bot Elo 800; depth 1; substantial random move noise; quiescence disabled.
- Medium: target bot Elo 1200; depth 2; quiescence enabled.
- Hard: target bot Elo 1600; depth 3; quiescence enabled.
- Player chooses Blue, Red, or Random.
- Defaults: Easy and Blue.
- Bot ratings are descriptive fixed values and are not updated after a game.

### Two Players on one device
- Both sides are controlled locally.
- Optional camera auto-rotation toward the side to move.
- Both human players receive Elo updates after a rated result, according to the rating rules below.
- Do not reveal private information or use online multiplayer features; no backend is included.

### Game controls
- Resign.
- Turn the board.
- New game.
- Disable battles.
- Promotion picker for human promotion.
- Confirm destructive actions such as starting a new game if a game is in progress.
- Prevent duplicate input while an animation or modal makes the board temporarily unavailable.

Define clear behavior for resignation, draw, checkmate, stalemate, and restarting. Do not award a win to the resigning player.

## 5.3 AI engine

- Run AI search inside a Web Worker so the main thread remains responsive.
- Use negamax with alpha-beta pruning and quiescence search for the specified levels.
- Easy may use randomized move selection/noise, but must always return a legal move.
- The worker must receive serializable position data and return a move/result message.
- Include message IDs or another safe mechanism to ignore stale responses after a new game, undo-like state reset, or position change.
- Handle worker errors and terminate/recreate the worker safely when needed.
- Do not block rendering while searching.
- Do not promise a particular Elo strength based only on search depth. Treat the listed Elo values as target labels, not guaranteed playing strength.
- Add tests for legal AI output, terminal positions, and stable handling of worker messages where feasible.

## 5.4 Elo rating

Formula:
\[
E = \frac{1}{1 + 10^{(R_{opp}-R_{you})/400}}
\]

\[
R_{new}=R_{old}+K(S-E)
\]

Where:
- Initial human rating: 1200.
- K = 32.
- S = 1 for win, 0.5 for draw, 0 for loss.
- Round the rating change to an integer before applying it.
- Bots have fixed ratings and are never updated.
- In two-player mode, update both human players using the same pre-game ratings and complementary scores.
- A game that is abandoned or restarted without a result must not change ratings.
- Prevent duplicate rating updates for the same completed game.

The result dialog must show:
- Player's starting rating.
- Opponent rating.
- Expected score (E).
- Actual score (S).
- K factor.
- Rating change (Δ).
- New rating.

Add tests, including the specified example: a 1200-rated player beats a 1600-rated opponent and receives approximately +29 points under the stated rounding rule. Confirm the exact result in the implementation.

### Leaderboard
- Top 10 human profiles by Elo.
- Show W-D-L.
- Persist locally.
- Use stable profile identifiers, not display names alone.
- Handle duplicate names and corrupted/missing storage safely.
- Make it clear that this is a local-device leaderboard, not a global ranking.
- Do not imply ratings are verified or comparable across devices.

## 5.5 Visual identity — Knights Chess Arena

Use a bright, polished, kid-friendly medieval fantasy style. Maintain readability and strong contrast.

### Teams
- Blue: tabard `#2f6fe4`, yellow cross.
- Red: tabard `#e23a31`, white cross.
- Both: shiny silver armour, chainmail texture, gold trim, round cobblestone bases.

Team identity must use both colour and explicit text/icons. Never rely on colour alone.

### Piece concepts
- **Pawn:** small knight, plumed great helm, kite shield with cross, sword.
- **Rook:** stone-brick tower, battlements, wooden door, window slit, team-colour band, waving flag.
- **Knight:** rearing silver horse, team-colour caparison, small rider raising a sword.
- **Bishop:** tall pointed mitre-style helm, shield, sword held forward.
- **Queen:** gown, cape, jeweled crown, long hair, scepter.
- **King:** beard, crown, cape, large shield, large sword planted down.

Each piece should have an identifiable rig or animation structure for the parts that need to move (arms, shield, sword, horse, cape, flag, etc.). Avoid fragile animation code that depends on deeply nested mesh indices.

### Rendering quality
- Consistent scale, pivot points, ground contact, orientation, and silhouette.
- Stable shadows and readable lighting.
- Use shared geometries/materials where possible.
- Avoid excessive polygon counts and expensive transparent effects.
- Avoid adding dynamic lights during effects because this can trigger shader recompilation.
- Use reusable particle/effect pools where practical.
- Dispose of geometries, materials, textures, render targets, and listeners when objects/scenes are removed.
- Handle window resize and device pixel ratio responsibly. Cap pixel ratio if needed for performance.
- Include a loading state and a graceful fallback if a GLTF asset fails.

### Phase 1 visual rule
Phase 1 is a refactor, not a redesign. Preserve the prototype's appearance and behavior as closely as possible. Do not introduce new models or materially change the visual style in Phase 1.

### Phase 2 model rule
Replace procedural meshes with original low-poly GLTF models in the same visual style. Do not copy a commercial chess set, copyrighted character, or existing proprietary model. Keep procedural models as a fallback.

If original GLTF models cannot be generated or sourced within the available environment, do not pretend they exist. Keep the procedural fallback, define the required asset specifications, and report which assets remain outstanding.

## 5.6 Battle scenes

Each capture can trigger a unique cinematic battle based on the **attacking piece type**. Target duration is approximately five seconds per capture.

### Standard flow
1. Camera moves to a cinematic side view.
2. Attacker approaches and both pieces face each other.
3. Play the attacker-specific sequence.
4. Play a non-graphic finish.
5. Attacker moves to the captured piece's square.
6. Camera returns to the normal board view.

Include a **Skip battle** control that accelerates the remaining battle sequence by 25× or completes it immediately if acceleration would be visually unstable. The game must remain logically correct regardless of skipping. Battles can be disabled.

### Attacks
- Pawn — **Shield Bash:** two shield bashes and one sword chop.
- Knight — **Cavalry Charge:** horse rears and neighs, followed by two galloping charges.
- Bishop — **Magic Bolts:** three coloured magic orbs followed by a light beam.
- Rook — **Cannon Blast:** tower recoils and fires three cannonballs in arcs, with smoke and explosions.
- Queen — **Whirlwind Slash:** spins around the target with sparkles, then performs a final strike.
- King — **Royal Smash:** two sword chops, a high jump, and a ground slam with a shockwave ring.

### Battle styles
- **Cartoon** (default): loser flies upward, spins, and bursts into stars. Comic words may include `POW!`, `ZAP!`, `BOOM!`, `NEIGH!`, and `BYE-BYE!`.
- **Epic:** loser breaks into stylized, non-graphic debris.

All combat must remain playful and non-gory:
- No blood, wounds, body damage, or realistic injury.
- No weapons hitting faces.
- Avoid frightening camera shake or excessive flashes.
- Respect reduced-motion preferences.
- Battle failure must never prevent the chess move from completing.

Show a banner such as: `Blue Knight attacks Red Queen — Cavalry Charge!` Ensure the banner reflects the actual attacking piece, captured piece, team, and battle type.

### Battle state safety
- Separate chess-state changes from battle presentation.
- Ensure one capture starts at most one battle.
- Skipping, disabling, resizing, changing tabs, or starting a new game during a battle must not leave orphaned animations or lock the board.
- Clean up temporary objects and animation callbacks.
- Use a single authoritative game state; visual effects must not independently decide chess outcomes.

## 5.7 English learning

### Piece word card
When a player taps/selects a piece, show a word card containing:
- Large uppercase piece name, e.g. `KNIGHT`.
- A simple pronunciation hint, e.g. `Sounds like “night.” The K is silent!`
- One short, child-friendly sentence explaining how the piece moves.
- A speaker button to replay pronunciation.

Use Web Speech API when available:
- Language: `en-US`
- Rate: `0.85`
- Pitch: `1.1`

Do not assume every browser has the same voice. If speech synthesis is unavailable or fails, keep the written content available and do not crash.

### Spoken game feedback
Support the following types of spoken feedback:
- `Blue knight to E 4.`
- `Red rook attacks blue queen! Cannon Blast!`
- `Blue castles!`
- `Check!`
- `Checkmate! Blue team wins!`

Use consistent square naming and avoid announcing an incorrect move or result. Respect the relevant settings and avoid overlapping speech excessively.

### Quiz system
Offer a quiz approximately every four plies on a human turn, and a manual **Quiz me!** button.

Question types:
1. Tap a named piece on the board, e.g. `Tap a red bishop!`
2. Identify the colour of a bouncing piece (Blue, Red, Green, Yellow).
3. Count pieces, e.g. `How many blue pawns?`; show answers as both digit and word.
4. Identify the letter of a glowing file.
5. Identify the number of a glowing rank.

Rules:
- Correct answer: add one star and show a brief celebration.
- Incorrect answer: speak a friendly correction, e.g. `Oops! That's a red rook. Try again!`
- After two or three misses, reveal the answer and explain it kindly.
- Do not subtract stars for incorrect answers.
- Persist stars locally.
- Avoid repeating the same question excessively in a short session.
- Do not interrupt a battle, promotion picker, or critical game dialog.
- Provide a way to dismiss or postpone a quiz without losing the chess game.

### Settings
Provide toggles for:
- Battle scenes.
- Battle style (Cartoon / Epic).
- Say piece names.
- Read every move.
- Quiz time.
- Auto-rotate (2-player mode).
- Sound effects.

Persist settings safely. Use accessible labels and clear current-state indicators.

## 5.8 Sound design

Use procedural Web Audio effects; no external audio files are required for the initial implementation.

Effects to support:
- Move.
- Selection tick.
- Hit.
- Whoosh.
- Neigh.
- Hooves.
- Zap.
- Beam.
- Cannon boom.
- Explosion.
- Boing.
- Twinkle.
- Star reward.
- Wrong answer.
- Shatter.

Audio must:
- Start or resume only after a user gesture, in accordance with browser autoplay policies.
- Respect the sound setting and reduced-motion/accessibility considerations.
- Avoid excessive loudness, harsh clipping, and repetitive sound fatigue.
- Have a safe fallback when Web Audio is unavailable.
- Clean up scheduled nodes and event listeners where practical.

---

# 6. INPUT, CAMERA, AND RESPONSIVE BEHAVIOR

## Desktop
- Mouse click selects a piece and a destination.
- Drag rotates the camera.
- Wheel zooms.
- Controls remain reachable without covering important parts of the board.

## Touch devices
- Tap a piece to select it.
- Tap a highlighted square to move.
- Drag on the 3D stage to rotate.
- Pinch to zoom where supported by OrbitControls.
- Prevent accidental page scrolling while interacting with the canvas, without blocking normal scrolling elsewhere.
- Ensure controls have comfortable touch targets.

## Camera
- Provide sensible limits for polar angle and zoom.
- Prevent the camera from going under the board or into unusable positions.
- Board-turn control should rotate to a predictable orientation.
- Optional auto-rotation should not fight with active user camera input.
- Restore the camera smoothly after battles unless reduced motion is enabled.

## Responsive layout
- At widths above 880 px: 3D stage and side panel.
- Below 880 px: panel stacks below the stage.
- Ensure the board remains usable in portrait and landscape orientations.
- Handle resize, orientation changes, and browser zoom without broken layout.

---

# 7. ACCESSIBILITY, SAFETY, AND RELIABILITY

- Respect `prefers-reduced-motion`.
- When reduced motion is enabled, disable battles by default, avoid bouncing, and use short or no camera transitions.
- Provide visible keyboard focus.
- Use semantic buttons and clear English accessible names.
- Support keyboard operation for essential UI actions and chess-square selection where practical.
- Do not use colour as the only indicator.
- Maintain sufficient text/background contrast.
- Avoid flashing effects and excessive screen shake.
- Do not make essential information audio-only.
- Ensure dialogs can be closed and focus is handled sensibly.
- Handle WebGL context loss gracefully where feasible.
- Show a useful message if WebGL is unavailable.
- Handle corrupted, missing, or blocked localStorage.
- Avoid uncaught promise rejections and console errors.
- Ensure a failed optional feature (speech, sound, battle, model) does not break core chess gameplay.

---

# 8. PERFORMANCE AND CODE QUALITY

Target a stable, responsive experience on a mid-range laptop and modern mobile devices. Aim for 60 fps where hardware permits; do not claim a guaranteed frame rate across all devices.

Requirements:
- AI search must not run on the main thread.
- Avoid unnecessary allocations inside the render loop.
- Reuse geometry and materials.
- Pool particles and temporary effects where practical.
- Do not create dynamic lights during effects.
- Dispose of removed resources correctly.
- Avoid duplicate animation loops and duplicate event listeners.
- Pause or reduce nonessential rendering when the page is hidden, where safe.
- Avoid layout thrashing and excessive DOM updates.
- Keep chess logic independent of rendering and presentation.
- Use clear names, small modules, and explicit interfaces.
- Avoid adding dependencies without a concrete need.
- Do not leave dead code, debug logs, or placeholder buttons in completed phases.

If profiling tools are available, record a short performance observation for the main scene and a Hard AI turn. Report the device/browser used and do not generalize one measurement to every device.

---

# 9. TESTING AND ACCEPTANCE CRITERIA

## Automated tests

Use Vitest. At minimum test:

### Chess
- Perft depths 1–4 from the starting position.
- Legal moves and king safety.
- Both castling sides and castling through check.
- En passant, including discovered-check edge cases.
- All four promotion choices.
- SAN disambiguation, check, and checkmate suffixes.
- Checkmate and stalemate.
- Fifty-move rule.
- Threefold repetition.
- Insufficient material cases listed above.
- Make/unmake state restoration.

### AI
- Returned moves are legal.
- Terminal positions return no move safely.
- Easy, Medium, and Hard configurations use the intended search settings.
- Stale worker responses cannot make a move in a newer game.

### Elo
- Expected-score formula.
- Win, draw, and loss.
- Integer rounding.
- Two-player updates use the same pre-game ratings.
- Bot ratings remain fixed.
- A game result cannot be applied twice.

### Storage
- Missing storage.
- Malformed JSON.
- Storage access throwing an exception.
- Settings and stars restore correctly when storage works.
- Safe fallback when persistence is unavailable.

## Manual smoke tests

At minimum:
1. Start a new game in every game mode.
2. Play legal moves for both teams.
3. Verify selection, highlights, captures, and move announcements.
4. Test castling, en passant, and promotion in suitable positions.
5. Complete a checkmate and a draw scenario.
6. Play one capture with each attacker type.
7. Skip a battle and disable battles during a game.
8. Test Cartoon and Epic styles.
9. Test speech, quiz, stars, and sound toggles.
10. Refresh and verify persistence.
11. Test desktop mouse and mobile/touch interactions.
12. Test reduced-motion behavior.
13. Verify that the app remains responsive during Hard AI search.
14. Check for console errors and failed asset requests.

## Phase acceptance
A phase is complete only when:
- Its acceptance criteria are met.
- Relevant automated tests pass.
- Production build succeeds.
- No known critical regression remains.
- Any incomplete item is explicitly reported.

Do not mark a feature complete merely because its UI exists.

---

# 10. PHASED DELIVERY PLAN

## PHASE 1 — Refactor and stabilize (no visual redesign)

### Objectives
- Audit the prototype.
- Migrate to Vite and ES modules.
- Preserve all existing features.
- Separate engine, AI, scene, battles, learning, rating, audio, storage, and UI.
- Move AI search into a Web Worker.
- Add Vitest coverage.
- Keep the visual appearance as close to the prototype as possible.

### Acceptance criteria
- `npm install` succeeds.
- `npm run dev` starts the game.
- `npm run build` succeeds.
- `npm run test` passes, including mandatory perft tests.
- All prototype features remain available and functional.
- Hard AI does not freeze the UI.
- No critical console errors.
- The original prototype remains available as a reference.

At the end, provide:
- Prototype audit summary.
- Final project tree.
- Feature migration checklist.
- Test/build results.
- Known issues and deferred items.

**Stop and wait for approval before Phase 2.**

## PHASE 2 — Original low-poly GLTF pieces

### Objectives
- Create or integrate six original low-poly knight-themed GLTF models.
- Keep procedural models as fallback.
- Add simple idle, attack, hit, and defeat animations where appropriate.
- Preserve team colours, readability, scale, pivots, and board alignment.
- Optimize model and texture sizes.

### Acceptance criteria
- All six piece types render correctly for both teams.
- Models load without blocking core game startup.
- Fallback activates when a model fails to load.
- Animations do not alter chess logic.
- Resource disposal is correct.
- Performance remains acceptable on representative desktop and mobile devices.

At the end, provide an asset inventory, licensing/origin notes, animation coverage, and performance observations.

**Stop and wait for approval before Phase 3.**

## PHASE 3 — Learning upgrades (approval required)

Do not start this phase unless the user explicitly approves it.

Potential features:
- Learn the Pieces lesson mode, with voice and movement demonstrations.
- Sticker/badge collection unlocked through stars.
- Parent/guardian progress screen showing learned words and quiz accuracy.

Keep the learning experience positive, optional, privacy-conscious, and usable without an account or backend. Do not collect or transmit a child's personal information.

Before implementation, present a small design proposal and clarify any material product decisions. After approval, implement and test the agreed scope only.

## PHASE 4 — Polish and optional features

Implement only after approval of the preceding phase or an explicit request to proceed.

Potential features:
- Undo button, disabled in rated games.
- Optional move timer.
- Save/resume current game.
- PWA install support.

For save/resume, validate saved data before restoring it. Do not allow corrupted saved state to crash the application. Clearly distinguish casual/unrated games from rated games.

---

# 11. DATA AND STATE DESIGN

Maintain one authoritative application/game state. Suggested state domains:
- Chess position and move history.
- Current game mode and difficulty.
- Human side and side to move.
- Game result and completion status.
- Player profiles and ratings.
- Learning stars and quiz progress.
- User settings.
- Current battle presentation state.
- Camera and scene presentation state.

Keep persistent data versioned. Add a storage schema version and a safe migration path for future changes. Validate values read from localStorage; never trust persisted data blindly.

Do not persist transient objects such as Three.js meshes, Web Audio nodes, worker instances, or animation callbacks. Persist only serializable game/settings/profile data.

---

# 12. ERROR HANDLING AND FALLBACKS

Implement graceful behavior for:
- WebGL unavailable or context lost.
- GLTF model missing or invalid.
- Speech synthesis unavailable.
- Web Audio unavailable or blocked.
- localStorage blocked, full, or malformed.
- Worker creation or execution failure.
- User resizing or changing tabs during a battle.
- A new game being started while asynchronous work is pending.

Core chess gameplay should remain available even if optional visual, audio, or learning features fail.

Use concise, friendly English messages in the UI. Put technical details in developer logs only when appropriate; avoid exposing stack traces to children.

---

# 13. README AND DEVELOPER HANDOFF

Create a `README.md` that explains:
- Project overview.
- Prerequisites.
- Installation and run commands.
- Production build and test commands.
- Project structure.
- How the chess engine and AI worker communicate.
- How to add or replace a piece model.
- How to add a battle sequence.
- How to add vocabulary or quiz questions.
- Persistence behavior and limitations.
- Known limitations and future work.

Keep the documentation aligned with the actual code. Do not document features that have not been implemented.

---

# 14. FINAL INSTRUCTIONS TO ANTIGRAVITY

Use this order of priority when making decisions:

1. Correct chess rules and game-state integrity.
2. Preserve existing working prototype features.
3. Keep the application runnable and recoverable.
4. Maintain responsive UI and performance.
5. Keep the visual identity and child-friendly experience.
6. Improve maintainability and test coverage.
7. Add optional enhancements only in their approved phase.

Do not perform a large rewrite in one step. Do not invent completed assets or test results. Do not silently change game rules, rating behavior, or existing UX.

**Start now with Step 0: inspect the complete prototype and provide the Prototype Audit Report before editing code.** Then proceed with Phase 1 if there are no blocking questions. At the end of Phase 1, stop and present the results for review.
