'use client';
import { useEffect } from 'react';
import { useTheme } from '../lib/theme-context';

export function ThemeClassSetter() {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.classList.remove('theme-labs');
    if (theme === 'labs') {
      document.body.classList.add('theme-labs');
      document.body.style.setProperty('--brand-gradient', 'linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)');
      console.log('Theme set to Labs, class applied, variable set');
    } else {
      document.body.style.setProperty('--brand-gradient', 'linear-gradient(90deg, #8B5CF6 0%, #FF9933 100%)');
      console.log('Theme set to Studio, class removed, variable set');
    }
  }, [theme]);
  return null;
} 