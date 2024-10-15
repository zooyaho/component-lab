import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/common/button';
import { Toast, ToastCustomContainer } from '@/components/common/toast';
import 'react-toastify/dist/ReactToastify.css';
import { ToastOptions, ToastContent } from 'react-toastify';
import { ToastType } from '@/components/common/toast/toast';

interface ToastArgs {
  type: ToastType;
  content: ToastContent;
  options: Partial<ToastOptions>;
}

const meta: Meta = {
  title: 'Components/Toast',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'error', 'info', 'warning', 'default'],
      },
    },
    content: {
      control: 'text',
    },
    options: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<ToastArgs>;

// 기본 스토리
export const Default: Story = {
  args: {
    type: 'default',
    content: 'This is a default toast message',
    options: {},
  },
  render: (args) => (
    <>
      <Button
        styleType="primary"
        onClick={() => Toast(args.type, args.content, args.options)}
      >
        Show Toast
      </Button>
      <ToastCustomContainer />
    </>
  ),
};

// 성공 상태 스토리
export const SuccessToast: Story = {
  args: {
    type: 'success',
    content: 'Operation was successful!',
    options: {},
  },
  render: (args) => (
    <>
      <Button
        styleType="primary"
        onClick={() => Toast(args.type, args.content, args.options)}
      >
        Show Success Toast
      </Button>
      <ToastCustomContainer />
    </>
  ),
};

// 오류 상태 스토리
export const ErrorToast: Story = {
  args: {
    type: 'error',
    content: 'There was an error!',
    options: {},
  },
  render: (args) => (
    <>
      <Button
        styleType="primary"
        onClick={() => Toast(args.type, args.content, args.options)}
      >
        Show Error Toast
      </Button>
      <ToastCustomContainer />
    </>
  ),
};

// 커스텀 스토리
export const CustomToast: Story = {
  args: {
    type: 'info',
    content: (
      <p className=" line-clamp-1">
        'This is a custom toast message, This is a custom toast message, This is
        a custom toast message'
      </p>
    ),
    options: { closeButton: true, autoClose: false },
  },
  render: (args) => (
    <>
      <Button
        styleType="primary"
        onClick={() => Toast(args.type, args.content, args.options)}
      >
        Custom Toast
      </Button>
      <ToastCustomContainer />
    </>
  ),
};
