import type { Meta, StoryObj } from '@storybook/nextjs';
import RadiusSection from '../component/filter/sections/radiusSection/RadiusSection';

const meta: Meta<typeof RadiusSection> = {
  title: 'Filter/Sections/RadiusSection',
  component: RadiusSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'section 제목',
    },
    options: {
      control: { type: 'object' },
      description: 'option 버튼 목록',
    },
    selected: {
      control: { type: 'select' }, // 선택형 컨트롤
      options: ['500m 이하', '1km 이하', '2km 이하', null], // null 선택 가능
      description: '선택된(활성화된) option 버튼',
    },
    onSelect: {
      action: 'clicked',
      description: 'option 버튼 클릭 핸들러',
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadiusSection>;

// ✅ 스토리
export const RadiusFilterGroup: Story = {
  args: {
    title: '반경',
    options: ['500m 이하', '1km 이하', '2km 이하'],
    selected: null,
    onSelect: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: '반경에 대한 Section입니다. 단일 선택이 가능합니다.',
      },
    },
  },
};
