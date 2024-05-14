'use client';
import StoreProvider from '@/context/store';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

export default function Providers({ children }) {
  return (
    <StoreProvider>
      <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </StoreProvider>
  );
}
