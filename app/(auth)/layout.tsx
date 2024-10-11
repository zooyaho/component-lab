import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Header from '@/components/header';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);
  console.log('session >> ', session);

  if (!session) {
    redirect('/component-view');
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}
