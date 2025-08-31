import type { Meta, StoryObj } from "@storybook/nextjs";
import Decibel from "../design-system/atom/decibelLevel/Decibel";

const meta: Meta<typeof Decibel> = {
  title: "Atom/DecibelIcon",
  component: Decibel,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    level: {
        control: { type: "select" },
        options: ["default", "quiet", "moderate", "loud"],
        description: 'decibel 수준의 시각적 타입(default, quiet, moderate, loud)',
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: 'decibel icon 크기(Large, Medium, Small)',
    },
    iconClassName: {
      control: "text",
      description: "아이콘 컨테이너에 추가할 커스텀 클래스",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Decibel>;

export const Default: Story = {
  args: {
    level: "default",
    size: "md",
  },
};

export const Quiet: Story = {
  args: {
    level: "quiet",
    size: "md",
  },
};

export const Moderate: Story = {
  args: {
    level: "moderate",
    size: "md",
  },
};

export const Loud: Story = {
  args: {
    level: "loud",
    size: "md",
  },
};