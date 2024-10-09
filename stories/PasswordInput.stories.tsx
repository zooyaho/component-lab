import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from "@/components/common/input"; // 경로에 맞게 수정하세요

const meta: Meta<typeof PasswordInput> = {
  title: "Components/Password Input",
  component: PasswordInput,
  argTypes: {
    placeholder: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter your password...",
    className: "",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};
