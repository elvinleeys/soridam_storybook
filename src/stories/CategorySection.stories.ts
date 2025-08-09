import type { Meta, StoryObj } from '@storybook/nextjs';
import CategorySection from '../component/filter/sections/categorySection/CategorySection';

const meta: Meta<typeof CategorySection> = {
  title: 'Filter/Sections/CategorySection',
  component: CategorySection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'section 제목',
    },
    options: {
      control: { type: 'object' },
      description: 'option 버튼 목록과 이미지 경로',
    },
    onClose: {
        action: 'clicked',
        description: '닫기 버튼 클릭 핸들러',
    },
    selected: {
      control: { type: 'multi-select' }, // 선택형 컨트롤
      options: ['카페', '음식점', '문화시설', '관광명소'],
      description: '선택된(활성화된) option 버튼',
    },
    onSelect: {
      action: 'clicked',
      description: 'option 버튼 클릭 핸들러',
    },
    allowMultiple: {
        control: 'boolean',
        description: '중복 선택 가능 여부'
    }
  },
};

export default meta;

type Story = StoryObj<typeof CategorySection>;

// ✅ 스토리
export const CategoryFilterGroup: Story = {
  args: {
    title: "카테고리를 골라주세요",
    allowMultiple: true,
    options: [
      { label: "카페", iconSrc: "/icons/filter/category/cafe.svg" },
      { label: "음식점", iconSrc: "/icons/filter/category/cutlery.svg" },
      { label: "문화시설", iconSrc: "/icons/filter/category/culture.svg" },
      { label: "관광명소", iconSrc: "/icons/filter/category/tour.svg" },
    ],
    selected: ["카페", "관광명소"],
  },
  parameters: {
    docs: {
      description: {
        story: '지도에서 filtering할 카테고리 목록에 대한 Section입니다. 중복 선택이 가능합니다.',
      },
    },
  },
};

