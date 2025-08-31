import type { Meta, StoryObj } from "@storybook/nextjs";
import MDecibelLabel from "../design-system/molecule/measureDecibelLabel/MDecibelLabel";

const meta: Meta<typeof MDecibelLabel> = {
    title: "Molecule/Measure/MDecibelLabel",
    component: MDecibelLabel,
    tags: ["autodocs"],
    parameters: {
      layout: "centered",
    },
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