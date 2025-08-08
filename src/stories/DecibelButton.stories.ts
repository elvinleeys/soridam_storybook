import type { Meta, StoryObj } from "@storybook/nextjs";
import DecibelButton from "../component/filter/decibelButton/DecibelButton";

const meta: Meta<typeof DecibelButton> = {
  title: "Filter/Buttons/DecibelButton",
  component: DecibelButton,
  tags: ["autodocs"],
  argTypes: {
    iconSrc: {
      control: "text",
      description: "아이콘 이미지 경로 (public 폴더 기준)",
    },
    label: {
      control: "text",
      description: "버튼에 표시될 라벨",
    },
    className: {
      control: "text",
      description: "버튼 컨테이너에 추가할 커스텀 클래스",
    },
    iconClassName: {
      control: "text",
      description: "아이콘 컨테이너에 추가할 커스텀 클래스",
    },
    textClassName: {
      control: "text",
      description: "텍스트에 추가할 커스텀 클래스",
    },
    onClick: { 
        action: "clicked",
        description: "버튼 클릭 시 실행될 핸들러", 
    },
  },
};

export default meta;

type Story = StoryObj<typeof DecibelButton>;

/**
 * 0~70db: 조용함
 */
export const Quiet: Story = {
  args: {
    iconSrc: "/icons/filter/decibel/quiet.svg",
    label: "0~70dB (조용함)",
  },
};

/**
 * 70~100db: 보통
 */
export const Moderate: Story = {
  args: {
    iconSrc: "/icons/filter/decibel/moderate.svg",
    label: "70~100dB (보통)",
  },
};

/**
 * 100~120db: 시끄러움
 */
export const Loud: Story = {
  args: {
    iconSrc: "/icons/filter/decibel/loud.svg",
    label: "100~120dB (시끄러움)",
  },
};

/**
 * 커스텀 스타일 적용 예시
 */
export const CustomStyled: Story = {
  args: {
    iconSrc: "/icons/filter/decibel/quiet.svg",
    label: "커스텀 버튼",
    className: "border-green-500 bg-green-50 hover:bg-green-100",
    iconClassName: "w-[2rem] h-[2rem]",
    textClassName: "text-green-700 font-bold",
  },
};