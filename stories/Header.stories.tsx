import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/header';
import { SessionProvider } from 'next-auth/react';

const withSession = (sessionData: any) => (Story: any) => (
  <SessionProvider session={sessionData}>
    <Story />
  </SessionProvider>
);

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedOut: Story = {
  decorators: [withSession(null)],
};

export const LoggedIn: Story = {
  decorators: [
    withSession({
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      expires: '9999-12-31T23:59:59.999Z',
    }),
  ],
};
