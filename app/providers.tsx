'use client'

import { AuthContextProvider } from '@/context/AuthContext';
import { ThemeProvider } from 'next-themes';

export function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <AuthContextProvider>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
    </AuthContextProvider>
    );
}