import type { Meta, StoryObj } from '@storybook/nextjs';
import RadiusButton from '../component/filter/buttons/radiusButton/RadiusButton';

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
    active: {
      control: 'boolean',
      description: '버튼의 활성화 상태를 지정합니다.',
      defaultValue: false,
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
    active: false,
  },
  parameters: {
    docs: {
      description: {
        story: '500m 이하 범위를 나타내는 버튼입니다. `active` prop으로 선택 상태를 제어합니다.',
      },
    },
  },
};

export const Within1km: Story = {
  args: {
    label: '1km 이하',
    active: true,
  },
  parameters: {
    docs: {
      description: {
        story: '1km 이하 범위를 나타내는 버튼입니다. 이 예시는 `active`가 true인 상태입니다.',
      },
    },
  },
};

export const Within2km: Story = {
  args: {
    label: '2km 이하',
    active: false,
  },
  parameters: {
    docs: {
      description: {
        story: '2km 이하 범위를 나타내는 버튼입니다.',
      },
    },
  },
};
