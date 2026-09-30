import { posKey } from './chess.js';

export class RepetitionTracker {
  constructor() {
    this.counts = {};
  }

  reset(g) {
    this.counts = {};
    if (g) {
      this.record(g);
    }
  }

  record(g) {
    const key = posKey(g);
    this.counts[key] = (this.counts[key] || 0) + 1;
    return this.counts[key];
  }

  count(g) {
    const key = posKey(g);
    return this.counts[key] || 0;
  }

  isThreefold(g) {
    return this.count(g) >= 3;
  }
}
