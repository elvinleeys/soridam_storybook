import type { Meta, StoryObj } from "@storybook/nextjs";
import SearchBar from "../design-system/atom/searchBar/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Atom/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {
    value: { 
      control: "text", 
      description: "검색창의 입력 값(value), 외부 상태와 연동하여 Controlled Input으로 사용" 
    },
    onChange: { 
      action: "changed", 
      description: "입력값이 변경될 때 호출되는 이벤트 핸들러(onChange)" 
    },
    placeholder: { 
      control: "text", 
      description: "검색창에 표시되는 안내 문구(placeholder)" 
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "지번, 도로명 주소 검색",
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    value: "",
    placeholder: "장소 또는 건물명을 입력하세요",
  },
};