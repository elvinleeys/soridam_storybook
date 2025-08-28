import type { Meta, StoryObj } from '@storybook/nextjs';
import { Modal } from '../design-system/molecule/modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Molecule/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
        control: "boolean",
        description: 'modal의 활성화 상태',
    },
    onClose: {
      action: "clicked",
      description: 'modal 비활성화 핸들러',
    },
    children: {
      control: 'text',
      description: 'modal 내부에 표시될 내용입니다. 텍스트, 버튼, 또는 다른 컴포넌트가 올 수 있습니다.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const InfoModal: Story = {
  args: {
    isOpen: true,
    onClose: () => { console.log("Modal is Close") },
    children: "Modal test입니다."
  },
  parameters: {
    docs: {
      description: {
        story: '모달입니다.',
      },
    },
  },
};