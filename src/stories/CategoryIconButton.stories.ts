import type { Meta, StoryObj } from "@storybook/nextjs";
import CategoryIconButton from "../component/filter/buttons/categoryIconButton/CategoryIconButton";

const meta: Meta<typeof CategoryIconButton> = {
    title: "Filter/Buttons/CategoryIconButton",
    component: CategoryIconButton,
    tags: ["autodocs"],
    argTypes: {
        iconSrc: {
            control: "text",
            description: "아이콘 이미지 경로",
        },
        label: {
            control: "text",
            description: "버튼 하단 텍스트",
        },
        active: {
          control: "boolean",
          description: "버튼의 활성화 상태를 지정합니다.",
          defaultValue: false,
        },
        className: { 
            control: "text",
            description: "Tailwind CSS 클래스를 사용하여 버튼 기본 스타일을 오버라이드합니다.", 
        },
        iconClassName: { 
            control: "text",
            description: "Tailwind CSS 클래스를 사용하여 icon 기본 스타일을 오버라이드합니다.",  
        },
        textClassName: { 
            control: "text",
            description: "Tailwind CSS 클래스를 사용하여 text 기본 스타일을 오버라이드합니다.",  
        },
        onClick: { 
            action: "clicked",
            description: "버튼 클릭 시 실행될 핸들러",  
        },
    },
};

export default meta;

type Story = StoryObj<typeof CategoryIconButton>;

export const Cafe: Story = {
  args: {
    iconSrc: "/icons/filter/category/cafe.svg",
    label: "카페",
    active: false,
  },
};

export const Culture: Story = {
  args: {
    iconSrc: "/icons/filter/category/culture.svg",
    label: "문화시설",
    active: true,
  },
};

export const Cutlery: Story = {
  args: {
    iconSrc: "/icons/filter/category/cutlery.svg",
    label: "음식점",
    active: false,
  },
};

export const Tour: Story = {
  args: {
    iconSrc: "/icons/filter/category/tour.svg",
    label: "관광명소",
    active: true,
  },
};

export const CustomStyles: Story = {
  args: {
    iconSrc: "/icons/filter/category/cafe.svg",
    label: "스타일 변경",
    active: true,
    className: "border-green-500 bg-green-100",
    iconClassName: "w-[2rem] h-[2rem]",
    textClassName: "text-green-700 font-bold",
  },
};