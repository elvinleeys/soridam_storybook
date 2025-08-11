import type { Meta, StoryObj } from "@storybook/nextjs";
import DecibelLabel from "../component/decibel/decibelLabel/DecibelLabel";

const meta: Meta<typeof DecibelLabel> = {
  title: "Components/Decibels/DecibelLabel",
  component: DecibelLabel,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: { type: "radio" },
      options: ["quiet", "moderate", "loud"],
      description: "데시벨 수준",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DecibelLabel>;

export const Quiet: Story = {
  args: {
    level: "quiet",
  },
  name: "조용함",
};

export const Moderate: Story = {
  args: {
    level: "moderate",
  },
  name: "적절함",
};

export const Loud: Story = {
  args: {
    level: "loud",
  },
  name: "시끄러움",
};