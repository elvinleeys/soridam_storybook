import type { Meta, StoryObj } from "@storybook/nextjs";
import OneLineReviewInput from "../design-system/atom/comment/OneLineReviewInput";

const meta: Meta<typeof OneLineReviewInput> = {
  title: "Atom/OneLineReviewInput",
  component: OneLineReviewInput,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: "text",
      description: "입력 값",
    },
    submitAttempted: {
      control: "boolean",
      description: "폼 제출 시도 여부 (빈 값일 경우 안내 문구 빨간색)",
    },
    maxLength: {
      control: "number",
      description: "최대 입력 글자 수",
      defaultValue: 150,
    },
    onChange: { 
        action: "changed",
        description:
        "입력 값이 변경될 때 호출되는 콜백. 새로운 문자열을 인자로 받음.\n" +
        "예: `(nextValue: string) => void`", 
    },
  },
};
export default meta;

type Story = StoryObj<typeof OneLineReviewInput>;

export const Default: Story = {
  args: {
    value: "",
    submitAttempted: false,
  },
};

export const WithText: Story = {
  args: {
    value: "소음이 조금 들려요.",
    submitAttempted: false,
  },
};

export const EmptyWithSubmitAttempt: Story = {
  args: {
    value: "",
    submitAttempted: true,
  },
};

export const MaxLengthReached: Story = {
  args: {
    value: "A".repeat(150),
    submitAttempted: false,
  },
};
