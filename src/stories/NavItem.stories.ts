import type { Meta, StoryObj } from '@storybook/nextjs';
import NavItem from '../design-system/atom/navItem/NavItem';


const meta: Meta<typeof NavItem> = {
  title: 'Atom/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: {
        control: "text",
        description: 'NavItem의 이동 경로(url)',
    },
    img: {
      control: 'object',
      description: 'NavItem 아이콘 데이터',
    },
    label: {
      control: 'text',
      description: 'NavItem 표시 텍스트',
    },
    currentPath: {
      control: 'text',
      description: 'Storybook 용 활성화 path',
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavItem>;

// 기본 데이터
const defaultImg = {
  icon: '/icons/nav/ico_measure_inactive.svg',
  iconLabel: '소음 측정',
  activeIcon: '/icons/nav/ico_measure_active.svg',
};

export const Inactive: Story = {
  args: {
    // 여기서 Next.js href 대신 Storybook LinkTo를 사용
    href: '/measure', 
    img: defaultImg,
    label: '소음 측정',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/', // 👉 usePathname()이 '/'로 mock됨
      },
    },
  },
};

export const Active: Story = {
  args: {
    href: '/measure',
    img: defaultImg,
    label: '소음 측정',
    currentPath: '/measure',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/measure', // 👉 usePathname()이 '/measure'로 mock됨
      },
    },
  },
};
