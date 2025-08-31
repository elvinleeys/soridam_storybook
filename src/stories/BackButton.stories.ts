import type { Meta, StoryObj } from "@storybook/nextjs";
import BackBtn from "../design-system/atom/iconButton/backButton/BackBtn";

const meta: Meta<typeof BackBtn> = {
  title: 'Atom/IconButton/BackButton',
  component: BackBtn,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: '버튼의 크기 (Large, Medium, Small)',
    },
    href: {
      control: "text",
      description: "Link 모드일 경우 이동할 경로",
    },
    onClick: { 
        action: 'clicked',
        description: '버튼 클릭 시 실행될 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackBtn>;

export const LinkSmall: Story = {
  args: {
    size: "sm",
    href: "/home",
  },
  name: "Link / Small",
};

export const LinkMedium: Story = {
  args: {
    size: "md",
    href: "/home",
  },
  name: "Link / Medium",
};

export const LinkLarge: Story = {
  args: {
    size: "lg",
    href: "/home",
  },
  name: "Link / Large",
};

// Modal 모드
export const ModalSmall: Story = {
  args: {
    size: "sm",
    onClick: () => console.log("Modal Small Clicked"),
  },
  name: "Modal / Small",
};

export const ModalMedium: Story = {
  args: {
    size: "md",
    onClick: () => console.log("Modal Medium Clicked"),
  },
  name: "Modal / Medium",
};

export const ModalLarge: Story = {
  args: {
    size: "lg",
    onClick: () => console.log("Modal Large Clicked"),
  },
  name: "Modal / Large",
};