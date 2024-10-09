import type { Meta, StoryObj } from '@storybook/react';
import Label from "@/components/common/label"; // 컴포넌트 경로에 맞게 수정하세요

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: {
      control: "text",
      description: "Label 텍스트를 설정합니다.",
    },
    className: {
      control: "text",
      description: "커스텀 스타일을 설정합니다.",
    },
    isRequired: {
      control: "boolean",
      description: "필수 여부를 설정합니다. true일 경우 * 표시가 추가됩니다.",
    },
    htmlFor: {
      control: "text",
      description: "Label이 가리킬 input의 id를 설정합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Label Text",
    htmlFor: "input-id",
    className: "",
    isRequired: false,
  },
};

export const Required: Story = {
  args: {
    text: "Required Label",
    htmlFor: "input-id",
    isRequired: true,
  },
};

export const CustomStyle: Story = {
  args: {
    text: "Custom Styled Label",
    htmlFor: "input-id",
    className: "text-red-500 font-bold",
    isRequired: true,
  },
};
