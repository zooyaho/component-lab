'use client';
import { PropsWithChildren } from 'react';
import { IoClose } from 'react-icons/io5';
import { Button } from '@/components/common/button';

interface ModalPropsType extends PropsWithChildren {
  isShow: boolean;
  title?: { text: string; className?: string };
  content?: string;
  onClose?: () => void;
  mainButton?: {
    syleType?: 'primary' | 'secondary' | 'error';
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick: () => void;
  };
  subButton?: {
    syleType?: 'primary' | 'secondary' | 'error';
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick: () => void;
  };
}

export default function Modal({
  isShow,
  title,
  content,
  onClose,
  mainButton,
  subButton,
  children,
}: ModalPropsType) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex-center hidden transition-opacity duration-300 ${isShow ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      >
        <div
          className={`bg-white min-w-[40vw] rounded-md px-5 py-5 shadow-level-3 transform transition-transform duration-300 ${isShow ? 'scale-100' : 'scale-95'}`}
        >
          {(title || onClose) && (
            <header className="flex justify-between pb-3">
              <h2 className={`title-s ${title?.className}`}>{title?.text}</h2>
              {onClose && (
                <button className="flex-center" onClick={onClose}>
                  <IoClose />
                </button>
              )}
            </header>
          )}
          <div className="my-2">
            {children}
            {content && <p className="body-s text-gray-700">{content}</p>}
          </div>
          {(subButton || mainButton) && (
            <footer className="flex justify-end gap-2 pt-3">
              {subButton && (
                <Button
                  styleType={subButton.syleType || 'secondary'}
                  onClick={subButton.onClick}
                  disabled={subButton.disabled}
                  isLoading={subButton.isLoading}
                >
                  {subButton.text}
                </Button>
              )}
              {mainButton && (
                <Button
                  styleType={mainButton.syleType || 'primary'}
                  onClick={mainButton.onClick}
                  disabled={mainButton.disabled}
                  isLoading={mainButton.isLoading}
                >
                  {mainButton.text}
                </Button>
              )}
            </footer>
          )}
        </div>
      </div>
    </>
  );
}
