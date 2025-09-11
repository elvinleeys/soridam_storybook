import type { Meta, StoryObj } from "@storybook/nextjs";
import SearchBar from "../design-system/atom/searchBar/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Atom/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      action: "clicked",
      description: "검색 버튼 클릭 시 호출되는 이벤트 핸들러(onClick)",
    },
    placeholder: {
      control: "text",
      description: "검색 버튼에 표시되는 안내 문구(placeholder)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: "지번, 도로명 주소 검색",
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "장소 또는 건물명을 입력하세요",
  },
};