import type { Meta, StoryObj } from '@storybook/nextjs';
import FilterBtn from '../design-system/atom/filterButton/FilterBtn';

const meta: Meta<typeof FilterBtn> = {
  title: 'Atom/FilterButton',
  component: FilterBtn,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: 'text', description: '버튼 하단 텍스트' },
    iconSrc: { control: 'text', description: '버튼 아이콘 경로' },
    className: { control: 'text', description: '버튼 스타일 클래스' },
    textClassName: { control: 'text', description: '텍스트 스타일 클래스' },
    onClick: { action: 'clicked', description: '클릭 이벤트 핸들러' },
  },
};
export default meta;

type Story = StoryObj<typeof FilterBtn>;

export const Default: Story = {
  args: {
    label: '필터',
    iconSrc: '/icons/filter/map-filter-ico.webp',
  },
};

export const CustomTextStyle: Story = {
  args: {
    label: '강조 버튼',
    textClassName: 'text-primary font-semibold',
    iconSrc: '/icons/filter/map-filter-ico.webp',
  },
};

export const CustomButtonStyle: Story = {
  args: {
    label: '커스텀 버튼',
    className: 'bg-primary-blue text-white rounded-lg',
    iconSrc: '/icons/filter/map-filter-ico.webp',
  },
};