import type { Meta, StoryObj } from "@storybook/nextjs";
import DecibelButton from "../component/filter/buttons/decibelButton/DecibelButton";

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
    active: {
      control: "boolean",
      description: "버튼의 활성화 상태를 지정합니다.",
      defaultValue: false,
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
    active: false,
  },
  parameters: {
    docs: {
      description: {
        story: "0~70dB 범위의 소음을 나타내는 버튼입니다.",
      },
    },
  },
};

/**
 * 70~100db: 보통
 */
export const Moderate: Story = {
  args: {
    iconSrc: "/icons/filter/decibel/moderate.svg",
    label: "70~100dB (보통)",
    active: true,
  },
  parameters: {
    docs: {
      description: {
        story: "70~100dB 범위의 소음을 나타내는 버튼입니다. 이 예시는 활성화된 상태입니다.",
      },
    },
  },
};

/**
 * 100~120db: 시끄러움
 */
export const Loud: Story = {
  args: {
    iconSrc: "/icons/filter/decibel/loud.svg",
    label: "100~120dB (시끄러움)",
    active: false,
  },
  parameters: {
    docs: {
      description: {
        story: "100~120dB 범위의 소음을 나타내는 버튼입니다.",
      },
    },
  },
};

/**
 * 커스텀 스타일 적용 예시
 */
export const CustomStyled: Story = {
  args: {
    iconSrc: "/icons/filter/decibel/quiet.svg",
    label: "커스텀 버튼",
    active: true,
    className: "border-green-500 bg-green-50 hover:bg-green-100",
    iconClassName: "w-[2rem] h-[2rem]",
    textClassName: "text-green-700 font-bold",
  },
  parameters: {
    docs: {
      description: {
        story: "커스텀 스타일이 적용된 DecibelButton 예시입니다.",
      },
    },
  },
};