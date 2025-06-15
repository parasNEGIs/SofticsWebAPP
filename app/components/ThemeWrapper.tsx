'use client';
import { useTheme } from '../lib/theme-context';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return <div className={theme === 'labs' ? 'theme-labs' : ''}>{children}</div>;
} 