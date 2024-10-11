'use client';
import Link from 'next/link';
import { Button } from '@/components/common/button';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full h-[80px] bg-black-opacity-70 flex justify-between items-center px-4">
      <nav className="">
        <ul className="flex gap-6 text-white">
          <li className="hover:text-black-opacity-70">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hover:text-black-opacity-70">
            <Link href={'/component-view'}>component-view</Link>
          </li>
          {session && (
            <li className="hover:text-black-opacity-70">
              <Link href={'/required-auth'}>required-auth</Link>
            </li>
          )}
        </ul>
      </nav>
      {session ? (
        <Button styleType="primary" onClick={() => signOut()}>
          Logout
        </Button>
      ) : (
        <Link
          href={'/login'}
          className="flex-center w-fit px-3 py-1 rounded-md text-mint-600 bg-transparent border border-mint-600 hover:border-mint-800 hover:text-mint-800"
        >
          Login
        </Link>
      )}
    </header>
  );
}
