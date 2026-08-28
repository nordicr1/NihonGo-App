/**
 * Audio helper using Web Speech API for native Japanese pronunciation
 */
export function playJapaneseAudio(text: string, rate = 0.9): Promise<void> {
  return new Promise((resolve) => {
    try {
      if (!text) {
        resolve();
        return;
      }
      
      // Use unofficial Google Translate TTS (tw-ob client allows Audio tag usage without CORS issues)
      // Provides much higher quality (often WaveNet-based) neural voice than standard window.speechSynthesis
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=ja&client=tw-ob`;
      
      const audio = new Audio(url);
      audio.playbackRate = rate;
      
      audio.onended = () => resolve();
      
      // If the neural fetch fails (e.g., text too long, offline, or rate limited), fallback to native
      audio.onerror = () => {
        fallbackToSpeechSynthesis(text, rate).then(resolve);
      };
      
      audio.play().catch(err => {
        fallbackToSpeechSynthesis(text, rate).then(resolve);
      });
      
    } catch (err) {
      fallbackToSpeechSynthesis(text, rate).then(resolve);
    }
  });
}

function fallbackToSpeechSynthesis(text: string, rate = 0.9): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported on this browser');
      resolve();
      return;
    }

    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = rate; // slightly slower for didactic clarity
      utterance.pitch = 1.0;

      // Try to find a high quality Japanese voice if available
      const voices = window.speechSynthesis.getVoices();
      const jaVoice = voices.find(v => v.lang.startsWith('ja') || v.lang.includes('JP'));
      if (jaVoice) {
        utterance.voice = jaVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Audio fallback error:', err);
      resolve();
    }
  });
}

// Sound effects synthesizer using Web Audio API for rewarding gamified feedback
class SoundFX {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  playSuccess() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Classic "Coin" style success sound
      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

      gain.gain.setValueAtTime(0.0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.02);
      gain.gain.setValueAtTime(0.1, now + 0.08);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch {
      // Audio context silenced or blocked
    }
  }

  playError() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Classic "Buzzer" error sound
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now); 
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);

      gain.gain.setValueAtTime(0.0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // ignore
    }
  }

  playCardFlip() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Plucky "Woodblock" pop sound
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.05);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch {
      // ignore
    }
  }
}

export const soundFX = new SoundFX();
