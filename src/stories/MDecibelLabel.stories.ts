import type { Meta, StoryObj } from "@storybook/nextjs";
import MDecibelLabel from "../component/decibel/measureDecibelLabel/MDecibelLabel";

const meta: Meta<typeof MDecibelLabel> = {
    title: "Components/Decibels/MDecibelLabel",
    component: MDecibelLabel,
    tags: ["autodocs"],
    argTypes: {
        level: {
        control: "radio",
        options: ["default", "quiet", "moderate", "loud"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MDecibelLabel>;

export const Default: Story = {
  args: {
    level: "default",
  },
};

export const Quiet: Story = {
  args: {
    level: "quiet",
  },
};

export const Moderate: Story = {
  args: {
    level: "moderate",
  },
};

export const Loud: Story = {
  args: {
    level: "loud",
  },
};