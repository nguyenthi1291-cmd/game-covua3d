import { aiPick } from './ai.js';

self.onmessage = function (e) {
  const { id, g, bot } = e.data;
  try {
    const move = aiPick(g, bot);
    self.postMessage({ id, move, ok: true });
  } catch (err) {
    self.postMessage({ id, error: err.message, ok: false });
  }
};
