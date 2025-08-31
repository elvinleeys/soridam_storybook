import { Meta, StoryObj } from "@storybook/nextjs";
import StepIndicator from "../design-system/atom/stepIndicator/StepIndicator";

const meta: Meta<typeof StepIndicator> = {
  title: "Atom/SignUp/StepIndicator",
  component: StepIndicator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    totalSteps: { 
        control: "number",
        description: '전체 단계 수를 설정합니다.',
    },
    currentStep: { 
        control: "number", 
        description: "현재 진행 중인 단계를 지정합니다 (1부터 시작).",
    },
    className: { 
        control: "text",
        description: "필요에 따라 추가 CSS 클래스를 적용할 수 있습니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof StepIndicator>;


export const FirstStep: Story = {
  args: {
    totalSteps: 4,
    currentStep: 1,
  },
};

export const LastStep: Story = {
  args: {
    totalSteps: 4,
    currentStep: 4,
  },
};

export const CustomClass: Story = {
  args: {
    totalSteps: 5,
    currentStep: 3,
    className: "bg-gray-100 p-4 rounded-lg",
  },
};