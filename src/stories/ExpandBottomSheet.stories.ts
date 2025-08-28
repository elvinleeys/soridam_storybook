import type { Meta, StoryObj } from '@storybook/nextjs';
import { ExpandBottomSheet } from '../design-system/molecule/expandBottomSheet/ExpandBottomSheet';

const meta: Meta<typeof ExpandBottomSheet> = {
    title: 'Molecule/ExpandBottomSheet',
    component: ExpandBottomSheet,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'BottomSheet 상단에 표시될 제목',
        },
        isOpen: {
            control: 'boolean',
            description: 'BottomSheet 활성화 여부',
        },
        onClose: {
            action: 'closed',
            description: 'BottomSheet 닫기 핸들러',
        },
        children: {
            control: 'text',
            description: 'BottomSheet 내부에 표시될 내용입니다. 문자열, 버튼, 또는 다른 컴포넌트가 올 수 있습니다.',
        },
    },
};
export default meta;

type Story = StoryObj<typeof ExpandBottomSheet>;

export const Default: Story = {
    args: {
        title: 'BottomSheet 제목',
        isOpen: true,
        onClose: () => console.log('BottomSheet is closed'),
        children: 'BottomSheet 내용입니다.', // 문자열 예시
    },
    parameters: {
        docs: {
            description: {
                story: 'ExpandBottomSheet 컴포넌트입니다. 화면 하단에서 슬라이드 업되며, 드래그 또는 닫기 버튼으로 닫을 수 있습니다.',
            },
        },
    },
};