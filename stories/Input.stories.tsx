import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/common/input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['default', 'error', 'success'], // 선택 가능한 상태
      },
    },
    placeholder: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    status: 'default',
    placeholder: 'Enter text...',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    placeholder: 'This is an error state',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    placeholder: 'This is a success state',
  },
};

export const Disabled: Story = {
  args: {
    status: 'default',
    placeholder: 'Disabled input',
    disabled: true,
  },
};
