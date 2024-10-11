import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from '@/components/loginForm'; // 실제 경로에 맞게 수정하세요

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  argTypes: {
    email: {
      control: 'text',
      description: 'The email input field',
    },
    password: {
      control: 'text',
      description: 'The password input field',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

// export const WithInvalidEmail: Story = {
//   args: {
//     email: 'invalid-email', // 유효하지 않은 이메일
//   },
// };

// export const WithValidCredentials: Story = {
//   args: {
//     email: 'user@example.com', // 유효한 이메일
//     password: 'correctpassword', // 유효한 비밀번호
//   },
// };
