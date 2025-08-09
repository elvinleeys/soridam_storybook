import type { Meta, StoryObj } from '@storybook/nextjs';
import DecibelSection from '../component/filter/sections/decibelSection/DecibelSection';

const meta: Meta<typeof DecibelSection> = {
  title: 'Filter/Sections/DecibelSection',
  component: DecibelSection,
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
    selected: {
      control: { type: 'multi-select' }, // 선택형 컨트롤
      options: ['0~70dB (조용함)', '70~100dB (보통)', '100~120dB (시끄러움)'],
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

type Story = StoryObj<typeof DecibelSection>;

// ✅ 스토리
export const DecibelFilterGroup: Story = {
  args: {
    title: "소음 수준",
    allowMultiple: true,
    options: [
      { label: "0~70dB (조용함)", iconSrc: "/icons/filter/decibel/quiet.svg" },
      { label: "70~100dB (보통)", iconSrc: "/icons/filter/decibel/moderate.svg" },
      { label: "100~120dB (시끄러움)", iconSrc: "/icons/filter/decibel/loud.svg" },
    ],
    selected: ["0~70dB (조용함)"],
  },
  parameters: {
    docs: {
      description: {
        story: '소음 수준에 대한 Section입니다. 중복 선택이 가능합니다.',
      },
    },
  },
};

