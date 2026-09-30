import { describe, it, expect } from 'vitest';
import { loadJSON, saveJSON, StorageManager } from '../src/storage/storage.js';

describe('Storage & Persistence', () => {
  it('loadJSON should return fallback on invalid key or error', () => {
    expect(loadJSON('non_existent_key', { def: 1 })).toEqual({ def: 1 });
  });

  it('StorageManager should manage profiles and ratings correctly', () => {
    const sm = new StorageManager();
    const prof = sm.getProfile('TestPlayer');
    expect(prof.elo).toBe(1200);

    sm.updateProfile('TestPlayer', 29, 1);
    expect(sm.getProfile('TestPlayer').elo).toBe(1229);
    expect(sm.getProfile('TestPlayer').w).toBe(1);
    expect(sm.getProfile('TestPlayer').g).toBe(1);
  });

  it('StorageManager should add and track stars', () => {
    const sm = new StorageManager();
    const startStars = sm.getStars();
    sm.addStars(5);
    expect(sm.getStars()).toBe(startStars + 5);
  });
});
