'use client';
import { useTheme } from '../../lib/theme-context';

export function ThemeBody({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return <body className={theme === 'labs' ? 'theme-labs' : ''}>{children}</body>;
} 