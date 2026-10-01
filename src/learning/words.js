export const TEAM = {
  w: { name: 'Blue', cloth: 0x2f6fe4, cloth2: 0x1b4bb0, trim: 0xffd23f, gem: 0xff3b6b, hair: 0x8a5a2b, base: 0x16284f, css: '#2f6fe4' },
  b: { name: 'Red', cloth: 0xe23a31, cloth2: 0x9e1f1a, trim: 0xffffff, gem: 0x3bd1ff, hair: 0x3b2718, base: 0x4d1512, css: '#e23a31' }
};

export const teamName = col => TEAM[col].name;

export const PNAME = {
  p: 'Pawn',
  n: 'Knight',
  b: 'Bishop',
  r: 'Rook',
  q: 'Queen',
  k: 'King'
};

export const PLURAL = {
  p: 'pawns',
  n: 'knights',
  b: 'bishops',
  r: 'rooks',
  q: 'queens',
  k: 'kings'
};

export const LEARN = {
  p: { hint: 'Say it like: "pawn"', line: 'The pawn walks forward, one step at a time.' },
  n: { hint: 'Sounds like "night". The K is silent!', line: 'The knight jumps in an L shape.' },
  b: { hint: 'Say it like: "BISH-up"', line: 'The bishop moves on the diagonals.' },
  r: { hint: 'Rhymes with "book"', line: 'The rook moves in straight lines.' },
  q: { hint: 'Say it like: "kween"', line: 'The queen can move in any direction.' },
  k: { hint: 'Say it like: "king"', line: 'The king moves one step in any direction. Keep him safe!' }
};

export const ATTACK = {
  p: 'Shield Bash',
  n: 'Cavalry Charge',
  b: 'Magic Bolts',
  r: 'Cannon Blast',
  q: 'Whirlwind Slash',
  k: 'Royal Smash'
};

export const NUMW = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
