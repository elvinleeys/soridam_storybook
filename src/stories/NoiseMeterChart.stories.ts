import { Meta, StoryObj } from "@storybook/nextjs";
import { NoiseMeterChart } from "../component/chart/noiseMeterChart/NoiseMeterChart";

const meta: Meta<typeof NoiseMeterChart> = {
  title: "Chart/NoiseMeterChart",
  component: NoiseMeterChart,
  tags: ["autodocs"],
  argTypes: {
    db: {
      control: 'number',
      description: 'decibel 수치',
    },
    time: {
      control: 'text',
      description: '소음 측정 시간',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NoiseMeterChart>;

// 기본 db와 time 값 예시
export const Default: Story = {
  args: {
    db: 65,
    time: "00:15",
  },
};

// 다른 상태 예시: 감소 중
export const DecreasingTime: Story = {
  args: {
    db: 50,
    time: "00:10",
  },
};

// 다른 상태 예시: 증가 중
export const IncreasingTime: Story = {
  args: {
    db: 80,
    time: "+00:02",
  },
};