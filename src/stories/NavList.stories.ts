import type { Meta, StoryObj } from '@storybook/nextjs';
import NavList, { NavListItem } from '../component/navList/NavList';

const meta: Meta<typeof NavList> = {
  title: 'Components/NavList',
  component: NavList,
  tags: ['autodocs'],
  argTypes: {
    items: { 
        control: 'object', 
        description: 'NavList에 표시할 NavItem 배열'
    },
    currentPath: { 
        control: 'text', 
        description: '현재 경로로 Active 상태 표시'
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavList>;

// NavItem 기본 이미지 데이터
const measureImg = {
  icon: '/icons/nav/ico_measure_inactive.svg',
  iconLabel: '소음 측정',
  activeIcon: '/icons/nav/ico_measure_active.svg',
};

const mapImg = {
  icon: '/icons/nav/ico_map_inactive.svg',
  iconLabel: '소음 지도',
  activeIcon: '/icons/nav/ico_map_active.svg',
};

const saveImg = {
  icon: '/icons/nav/ico_save_inactive.svg',
  iconLabel: '저장',
  activeIcon: '/icons/nav/ico_save_active.svg',
};

// NavList 아이템 예제
const navItems: NavListItem[] = [
  { href: '/measure', label: '소음 측정', img: measureImg },
  { href: '/history', label: '소음 지도', img: mapImg },
  { href: '/save', label: '저장', img: saveImg },
];

export const Default: Story = {
  args: {
    items: navItems,
    currentPath: '/', // Active 없음
  },
};

export const ActiveMeasure: Story = {
  args: {
    items: navItems,
    currentPath: '/measure', // 첫 번째 NavItem 활성화
  },
};

export const ActiveSettings: Story = {
  args: {
    items: navItems,
    currentPath: '/save', // 마지막 NavItem 활성화
  },
};
