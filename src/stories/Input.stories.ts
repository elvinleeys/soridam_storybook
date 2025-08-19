import type { Meta, StoryObj } from "@storybook/nextjs";
import Input from "../component/signup/input/Input";

const meta: Meta<typeof Input> = {
  title: "SignUp/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    inputType: {
        control: { type: "select" },
        options: ["text", "email", "password", "number"],
        description: "Input의 HTML type 속성",
    },
    value: {
        control: "text",
        description: "Input의 현재 값",
    },
    placeholder: {
        control: "text",
        description: "Input의 placeholder 텍스트",
    },
    hasError: {
        control: "boolean",
        description: "에러 여부 (true일 경우 border와 애니메이션 표시)",
    },
    onChange: {
        action: "changed",
        description: "Input 값 변경 이벤트 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    inputType: "text",
    value: "",
    placeholder: "이메일을 입력하세요",
    hasError: false,
  },
};

export const WithError: Story = {
  args: {
    inputType: "text",
    value: "잘못된 입력",
    placeholder: "이메일을 입력하세요",
    hasError: true,
  },
};