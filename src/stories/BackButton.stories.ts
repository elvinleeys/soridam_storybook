import type { Meta, StoryObj } from "@storybook/nextjs";
import BackBtn from "../component/iconButton/backButton/BackBtn";

const meta: Meta<typeof BackBtn> = {
  title: 'Components/IconButton/BackButton',
  component: BackBtn,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: '버튼의 크기 (Large, Medium, Small)',
    },
    onClick: { 
        action: 'clicked',
        description: '버튼 클릭 시 실행될 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackBtn>;

export const Small: Story = {
  args: {
    size: "sm",
    onClick: () => console.log('BackButton small Clicked'),
  },
  name: 'BackButton / Small',
};

export const Medium: Story = {
  args: {
    size: "md",
    onClick: () => console.log('BackButton Medium Clicked'),
  },
  name: 'BackButton / Medium',
};

export const Large: Story = {
  args: {
    size: "lg",
    onClick: () => console.log('BackButton Large Clicked'),
  },
  name: 'BackButton / Large',
};