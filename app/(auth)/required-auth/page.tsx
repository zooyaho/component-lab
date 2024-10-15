'use client';
import { Button } from '@/components/common/button';
import Modal from '@/components/common/modal';
import { showToast } from '@/components/common/toast';
import { useState } from 'react';

export default function RequiredAuthPage() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <h1>RequiredAuthPage</h1>
      <Button styleType={'secondary'} onClick={() => setIsShowModal(true)}>
        modal open
      </Button>
      <Button
        styleType={'secondary'}
        onClick={() =>
          showToast(
            'success',
            <p className=" line-clamp-1">
              Your post has been published!Your post has been published! Your
              post has been published! Your post has been published! Your post
              has been published!
            </p>,
            {
              closeButton: true,
              autoClose: false,
            },
          )
        }
      >
        success toast open
      </Button>
      <Button
        styleType={'secondary'}
        onClick={() =>
          showToast(
            'error',
            <p>
              Your post has been published!Your post has been published! Your
              post has been published! Your post has been published! Your post
              has been published!
            </p>,
            {
              closeButton: true,
              autoClose: false,
            },
          )
        }
      >
        default toast open
      </Button>
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
