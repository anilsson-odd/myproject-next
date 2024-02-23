'use client';
import StoreProvider from '@/context/store';
import { NextUIProvider } from '@nextui-org/react';

export default function Providers({ children }) {
  return (
    <StoreProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </StoreProvider>
  );
}
