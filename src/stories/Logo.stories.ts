import type { Meta, StoryObj } from "@storybook/nextjs";
import Logo from "../component/logo/Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["md", "lg"],
      description: "로고 크기 선택",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Medium: Story = {
  args: {
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: '소음 측정 화면에서 사용할 Medium size 로고입니다.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: '로그인 화면에서 사용할 large size 로고입니다.',
      },
    },
  },
};