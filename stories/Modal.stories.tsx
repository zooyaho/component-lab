import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@/components/common/modal';
import { Button } from '@/components/common/button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isShow: {
      control: 'boolean',
      description: '모달을 표시할지 여부',
    },
    title: {
      control: 'text',
      description: '모달 제목',
    },
    content: {
      control: 'text',
      description: '모달 내용',
    },
    onClose: { action: 'closed' },
    mainButton: {
      control: 'object',
      description: '메인 버튼 설정',
    },
    subButton: {
      control: 'object',
      description: '서브 버튼 설정',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isShow: true,
    title: { text: 'Default Modal' },
    content: 'This is a default modal',
    mainButton: {
      syleType: 'primary',
      text: 'Confirm',
      onClick: () => alert('Main button clicked!'),
    },
    subButton: {
      syleType: 'secondary',
      text: 'Cancel',
      onClick: () => alert('Sub button clicked!'),
    },
  },
};

export const WithoutButtons: Story = {
  args: {
    isShow: true,
    title: { text: 'Modal without buttons' },
    content: 'This modal has no buttons.',
  },
};

export const WithCustomContent: Story = {
  args: {
    isShow: true,
    title: { text: 'Modal with custom content' },
    children: (
      <div>
        <p>This is custom content inside the modal.</p>
        <Button
          styleType="primary"
          onClick={() => alert('Button inside modal clicked!')}
        >
          Click Me!
        </Button>
      </div>
    ),
  },
};
