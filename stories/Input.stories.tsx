import type { Meta, StoryObj } from '@storybook/react';
import { Input } from "@/components/common/input"; // 경로에 맞게 수정하세요

const meta: Meta<typeof Input> = {
  title: "Components/Deafult Input", // Storybook에서 보여질 컴포넌트의 카테고리와 이름
  component: Input,
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    className: "w-[200px]",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const CustomStyled: Story = {
  args: {
    placeholder: "Custom styled input",
    className: "border-red-500",
  },
};
