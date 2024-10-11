import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/common/button'; // 컴포넌트 경로에 맞게 수정하세요

const meta: Meta<typeof Button> = {
  title: 'Components/Button', // Storybook에서 보여질 컴포넌트의 카테고리와 이름
  component: Button,
  argTypes: {
    styleType: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'error'], // 선택 가능한 옵션
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['l', 'm', 's'], // 선택 가능한 사이즈
      },
    },
    isLoading: {
      control: 'boolean', // 로딩 여부를 토글할 수 있도록 설정
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    styleType: 'primary',
    size: 'm',
    isLoading: false,
  },
};
export const Secondary: Story = {
  args: {
    styleType: 'secondary',
    size: 'm',
    isLoading: false,
  },
};
export const Error: Story = {
  args: {
    styleType: 'error',
    size: 'm',
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    styleType: 'primary',
    size: 'm',
    isLoading: true,
  },
};
