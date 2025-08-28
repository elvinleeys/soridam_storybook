import type { Meta, StoryObj } from "@storybook/nextjs";
import SettingBtn from "../design-system/atom/iconButton/settingButton/SettingBtn";

const meta: Meta<typeof SettingBtn> = {
  title: 'Atom/IconButton/SettingButton',
  component: SettingBtn,
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
type Story = StoryObj<typeof SettingBtn>;

export const Small: Story = {
  args: {
    size: "sm",
    onClick: () => console.log('SettinButton small Clicked'),
  },
  name: 'SettinButton / Small',
};

export const Medium: Story = {
  args: {
    size: "md",
    onClick: () => console.log('SettinButton Medium Clicked'),
  },
  name: 'SettinButton / Medium',
};

export const Large: Story = {
  args: {
    size: "lg",
    onClick: () => console.log('SettinButton Large Clicked'),
  },
  name: 'SettinButton / Large',
};