export const STORE_ELO = 'knights_chess_elo_v1';
export const STORE_STARS = 'knights_chess_stars_v1';
export const STORE_SETTINGS = 'knights_chess_settings_v1';

export function loadJSON(key, defaultValue) {
  try {
    if (typeof localStorage === 'undefined') return defaultValue;
    const v = localStorage.getItem(key);
    if (v === null || v === undefined) return defaultValue;
    return JSON.parse(v);
  } catch (e) {
    return defaultValue;
  }
}

export function saveJSON(key, value) {
  try {
    if (typeof localStorage === 'undefined') return false;
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

export class StorageManager {
  constructor() {
    this.profiles = loadJSON(STORE_ELO, {});
    this.stars = Number(loadJSON(STORE_STARS, 0)) || 0;
  }

  getProfile(name) {
    const key = (name || '').trim() || 'Player';
    if (!this.profiles[key]) {
      this.profiles[key] = { elo: 1200, g: 0, w: 0, d: 0, l: 0 };
    }
    return this.profiles[key];
  }

  updateProfile(name, eloDelta, score) {
    const p = this.getProfile(name);
    p.elo += eloDelta;
    p.g++;
    if (score === 1) p.w++;
    else if (score === 0) p.l++;
    else p.d++;
    this.save();
    return p;
  }

  getStars() {
    return this.stars;
  }

  addStars(n = 1) {
    this.stars += n;
    saveJSON(STORE_STARS, this.stars);
    return this.stars;
  }

  save() {
    saveJSON(STORE_ELO, this.profiles);
  }

  getLeaderboard(limit = 10) {
    return Object.entries(this.profiles)
      .filter(([, r]) => r.g > 0)
      .sort((a, b) => b[1].elo - a[1].elo)
      .slice(0, limit)
      .map(([name, r]) => ({ name, ...r }));
  }
}
