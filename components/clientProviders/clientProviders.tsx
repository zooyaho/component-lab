'use client';
import { SessionProvider } from 'next-auth/react';
import { ToastCustomContainer } from '@/components/common/toast';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ToastCustomContainer>{children}</ToastCustomContainer>
    </SessionProvider>
  );
}
