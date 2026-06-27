import React, { createContext, useContext, useState, useEffect } from 'react';

interface AudioContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playSwoosh: () => void;
  playAccessGranted: () => void;
}

const AudioCtx = createContext<AudioContextType>({
  soundEnabled: false,
  toggleSound: () => {},
  playClick: () => {},
  playSwoosh: () => {},
  playAccessGranted: () => {}
});

export const useAudioEngine = () => useContext(AudioCtx);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioContext && typeof window !== 'undefined') {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      if (Ctx) {
        const ctx = new Ctx();
        setAudioContext(ctx);
        return ctx;
      }
    }
    return audioContext;
  };

  const toggleSound = () => {
    if (!soundEnabled) {
      const ctx = initAudio();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume();
      }
      setSoundEnabled(true);
      // Play a subtle boot chime
      setTimeout(() => playAccessGranted(), 50);
    } else {
      setSoundEnabled(false);
    }
  };

  const playClick = () => {
    if (!soundEnabled) return;
    try {
      const ctx = initAudio();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {
      // Benign audio failure handling
    }
  };

  const playSwoosh = () => {
    if (!soundEnabled) return;
    try {
      const ctx = initAudio();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 0.12);
      
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {
      // Benign
    }
  };

  const playAccessGranted = () => {
    if (!soundEnabled) return;
    try {
      const ctx = initAudio();
      if (!ctx) return;
      const now = ctx.currentTime;
      
      // Chord chime
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        
        gain.gain.setValueAtTime(0.06, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.8);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.8);
      });
    } catch (e) {
      // Benign
    }
  };

  return (
    <AudioCtx.Provider value={{ soundEnabled, toggleSound, playClick, playSwoosh, playAccessGranted }}>
      {children}
    </AudioCtx.Provider>
  );
};
