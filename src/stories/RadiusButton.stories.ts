import type { Meta, StoryObj } from '@storybook/nextjs';
import RadiusButton from '../component/filter/radiusButton/RadiusButton';

// 👇 기본 메타 설정
const meta: Meta<typeof RadiusButton> = {
  title: 'Filter/Buttons/RadiusButton',
  component: RadiusButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
      defaultValue: '500m 이하',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 핸들러',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS 클래스를 사용하여 기본 스타일을 오버라이드합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadiusButton>;

// ✅ 기본 버튼 스토리
export const Within500m: Story = {
  args: {
    label: '500m 이하',
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 시 내부 상태(active)에 따라 스타일이 바뀝니다.',
      },
    },
  },
};

export const Within1km: Story = {
  args: {
    label: '1km 이하',
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 시 내부 상태(active)에 따라 스타일이 바뀝니다.',
      },
    },
  },
};

export const Within2km: Story = {
  args: {
    label: '2km 이하',
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 시 내부 상태(active)에 따라 스타일이 바뀝니다.',
      },
    },
  },
};
