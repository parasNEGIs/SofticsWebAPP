'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'studio' | 'labs';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>('studio');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('softics-theme') : null;
    if (stored === 'studio' || stored === 'labs') setThemeState(stored);
  }, []);

  const setTheme = (t: ThemeType) => {
    setThemeState(t);
    if (typeof window !== 'undefined') localStorage.setItem('softics-theme', t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
} 