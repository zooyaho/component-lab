import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '@/components/common/input';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
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
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    status: 'default',
    placeholder: 'Enter your password...',
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
