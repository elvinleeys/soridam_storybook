import type { Meta, StoryObj } from "@storybook/nextjs";
import InfoBtn from "../component/iconButton/infoButton/InfoBtn";

const meta: Meta<typeof InfoBtn> = {
  title: 'Components/IconButton/InfoButton',
  component: InfoBtn,
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
type Story = StoryObj<typeof InfoBtn>;

export const Small: Story = {
  args: {
    size: "sm",
    onClick: () => console.log('InfoButton small Clicked'),
  },
  name: 'InfoButton / Small',
};

export const Medium: Story = {
  args: {
    size: "md",
    onClick: () => console.log('InfoButton Medium Clicked'),
  },
  name: 'InfoButton / Medium',
};

export const Large: Story = {
  args: {
    size: "lg",
    onClick: () => console.log('InfoButton Large Clicked'),
  },
  name: 'InfoButton / Large',
};