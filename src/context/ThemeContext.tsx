import { createContext, useContext, useEffect, useState } from 'react';
import type { TweakSettings, Era, HalftoneMode, CursorMode } from '../types';

interface ThemeContextValue {
  tweaks: TweakSettings;
  setTweak: (key: keyof TweakSettings, value: Era | HalftoneMode | CursorMode) => void;
}

const DEFAULTS: TweakSettings = {
  era: 'classic',
  halftone: 'on',
  cursor: 'comic',
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [tweaks, setTweaks] = useState<TweakSettings>(DEFAULTS);

  const setTweak = (key: keyof TweakSettings, value: Era | HalftoneMode | CursorMode) => {
    setTweaks((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    document.body.dataset.era = tweaks.era;
    document.body.dataset.halftone = tweaks.halftone;
    document.body.dataset.cursor = tweaks.cursor;
  }, [tweaks]);

  return <ThemeContext.Provider value={{ tweaks, setTweak }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
