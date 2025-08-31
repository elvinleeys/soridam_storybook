import type { Meta, StoryObj } from '@storybook/nextjs';
import BottomSheet from '../design-system/molecule/bottomSheet/BottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'Molecule/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'bottomSheet의 활성화 상태',
    },
    onClose: {
      action: 'closed',
      description: 'bottomSheet 비활성화 핸들러',
    },
    children: {
      control: 'text',
      description: 'bottomSheet 내부에 표시될 내용입니다. 텍스트, 버튼, 또는 다른 컴포넌트가 올 수 있습니다.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof BottomSheet>;


export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("BottomSheet is closed"),
    children: "BottomSheet 내용입니다.", // ✅ 문자열만
  },
  parameters: {
    docs: {
      description: {
        story: 'BottomSheet 컴포넌트입니다. 화면 하단에서 슬라이드 업되며, 드래그 또는 닫기 버튼으로 닫을 수 있습니다.',
      },
    },
  },
};