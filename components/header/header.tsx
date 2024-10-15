'use client';
import Link from 'next/link';
import { Button } from '@/components/common/button';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import Modal from '../common/modal';

export default function Header() {
  const { data: session, status } = useSession();
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);

  const showModal = () => {
    setIsShowLogoutModal(true);
  };

  const closeModal = () => {
    setIsShowLogoutModal(false);
  };

  const onLogout = () => {
    signOut();
    closeModal();
  };

  return (
    <>
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
          <Button styleType="primary" onClick={showModal}>
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
      <Modal
        isShow={isShowLogoutModal}
        title={{ text: 'Info' }}
        onClose={closeModal}
        subButton={{ text: '취소', onClick: closeModal }}
        mainButton={{ text: '확인', onClick: onLogout }}
        content={'정말로 로그아웃을 하시겠습니까?'}
      />
    </>
  );
}
