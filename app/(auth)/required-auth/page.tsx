'use client';
import { Button } from '@/components/common/button';
import Modal from '@/components/common/modal';
import { useState } from 'react';

export default function RequiredAuthPage() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <h1>RequiredAuthPage</h1>
      <Button onClick={() => setIsShowModal(true)}>modal open</Button>
      <Modal
        isShow={isShowModal}
        title={{ text: 'Info' }}
        onClose={() => setIsShowModal(false)}
        subButton={{ text: '취소', onClick: () => setIsShowModal(false) }}
        mainButton={{ text: '확인', onClick: () => setIsShowModal(false) }}
        content={'정말로 로그아웃을 하시겠습니까?'}
      ></Modal>
    </>
  );
}
