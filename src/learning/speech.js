export class SpeechNarrator {
  constructor() {
    this.hasSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window;
    this.voice = null;
    this.enabled = true;
    if (this.hasSpeech) {
      this.initVoice();
      try {
        window.speechSynthesis.onvoiceschanged = () => this.initVoice();
      } catch (e) {}
    }
  }

  initVoice() {
    try {
      const vs = window.speechSynthesis.getVoices();
      this.voice =
        vs.find(v => /en[-_]US/i.test(v.lang) && /samantha|google us|aria|jenny|female/i.test(v.name)) ||
        vs.find(v => /en[-_]US/i.test(v.lang)) ||
        vs.find(v => /^en/i.test(v.lang)) ||
        null;
    } catch (e) {
      this.voice = null;
    }
  }

  say(text, interrupt = true) {
    if (!this.hasSpeech || !this.enabled || !text) return;
    try {
      if (interrupt) {
        window.speechSynthesis.cancel();
      }
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.85;
      u.pitch = 1.1;
      if (this.voice) u.voice = this.voice;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  cancel() {
    if (!this.hasSpeech) return;
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}
