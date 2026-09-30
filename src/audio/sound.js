export class SoundEffects {
  constructor() {
    this.ac = null;
    this.enabled = true;
  }

  getAudioContext() {
    if (!this.ac && typeof window !== 'undefined') {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ac = new AudioCtx();
      } catch (e) {
        this.ac = null;
      }
    }
    return this.ac;
  }

  resume() {
    const a = this.getAudioContext();
    if (a && a.state === 'suspended') {
      a.resume();
    }
  }

  noiseSrc(a, dur) {
    const b = a.createBuffer(1, Math.max(1, (a.sampleRate * dur) | 0), a.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const s = a.createBufferSource();
    s.buffer = b;
    return s;
  }

  tone(a, type, f0, f1, dur, vol, t0 = 0) {
    const t = a.currentTime + t0;
    const o = a.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = a.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g);
    g.connect(a.destination);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  nz(a, dur, type, f0, f1, vol, q = 1, t0 = 0) {
    const t = a.currentTime + t0;
    const s = this.noiseSrc(a, dur);
    const f = a.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(f0, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    f.Q.value = q;
    const g = a.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f);
    f.connect(g);
    g.connect(a.destination);
    s.start(t);
  }

  play(key) {
    if (!this.enabled) return;
    const a = this.getAudioContext();
    if (!a) return;
    this.resume();

    switch (key) {
      case 'move':
        this.tone(a, 'triangle', 240, 120, 0.14, 0.14);
        break;
      case 'tick':
        this.tone(a, 'triangle', 520, 380, 0.1, 0.05);
        break;
      case 'hit':
        this.nz(a, 0.18, 'bandpass', 2400, 0, 0.35, 1.5);
        this.tone(a, 'square', 1300, 700, 0.25, 0.04);
        break;
      case 'whoosh':
        this.nz(a, 0.35, 'bandpass', 300, 1500, 0.22);
        break;
      case 'neigh':
        for (let i = 0; i < 6; i++) {
          this.tone(a, 'sawtooth', 720 - i * 45, 660 - i * 45, 0.09, 0.05, i * 0.07);
        }
        break;
      case 'hoof':
        this.tone(a, 'triangle', 180, 90, 0.08, 0.25);
        this.tone(a, 'triangle', 160, 80, 0.08, 0.2, 0.1);
        break;
      case 'zap':
        this.tone(a, 'sine', 1400, 300, 0.3, 0.16);
        this.tone(a, 'square', 900, 200, 0.25, 0.03);
        break;
      case 'beam':
        this.tone(a, 'sawtooth', 200, 800, 0.7, 0.07);
        this.nz(a, 0.7, 'bandpass', 800, 3000, 0.15);
        break;
      case 'boom':
        this.nz(a, 0.5, 'lowpass', 600, 80, 0.6);
        this.tone(a, 'sine', 90, 40, 0.4, 0.4);
        break;
      case 'explode':
        this.nz(a, 0.8, 'lowpass', 1500, 100, 0.55);
        break;
      case 'boing':
        this.tone(a, 'sine', 200, 800, 0.35, 0.22);
        break;
      case 'twinkle':
        [880, 1175, 1568, 2093].forEach((f, i) => this.tone(a, 'sine', f, 0, 0.25, 0.09, i * 0.08));
        break;
      case 'star':
        [523, 659, 784, 1047].forEach((f, i) => this.tone(a, 'triangle', f, 0, 0.22, 0.14, i * 0.09));
        break;
      case 'wrong':
        this.tone(a, 'square', 330, 0, 0.16, 0.06);
        this.tone(a, 'square', 220, 0, 0.22, 0.06, 0.16);
        break;
      case 'shatter':
        this.nz(a, 0.6, 'lowpass', 3000, 300, 0.45);
        break;
      default:
        break;
    }
  }
}
