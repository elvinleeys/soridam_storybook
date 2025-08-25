import { Meta, StoryObj } from "@storybook/nextjs";
import { TimeDBChart, TimeDBChartProps } from "../component/chart/timeDBChart/TimeDBChart";

const meta: Meta<typeof TimeDBChart> = {
    title: "Chart/TimeDBChart",
    component: TimeDBChart,
    tags: ["autodocs"],
    argTypes: {
        data: {
            control: "object", // array나 object 형태는 object 컨트롤
            description: "Bar 차트에 표시할 데이터 배열 (timeRange, db, count 포함)",
        },
        currentRange: {
            control: "text",
            description: "현재 시간대 표시 (해당하는 bar만 강조)",
        },
    },
};

export default meta;

type Story = StoryObj<typeof TimeDBChart>;

// 기본 예시 데이터
const sampleData: TimeDBChartProps["data"] = [
  { timeRange: "5-11", db: 50, count: 2 },
  { timeRange: "11-18", db: 80, count: 5 },
  { timeRange: "18-22", db: 65, count: 3 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    currentRange: "11-18",
  },
};

// currentRange 변경 예시
export const CurrentRange5to11: Story = {
  args: {
    data: sampleData,
    currentRange: "5-11",
  },
};

// 빈 데이터 예시
export const EmptyData: Story = {
  args: {
    data: [],
    currentRange: "",
  },
};
