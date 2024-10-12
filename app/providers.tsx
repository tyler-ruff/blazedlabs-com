'use client'

import { AuthContextProvider } from '@/context/AuthContext';
import { ThemeProvider } from 'next-themes';

export function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <ThemeProvider attribute="class">
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </ThemeProvider>
  );
}