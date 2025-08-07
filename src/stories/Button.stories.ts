import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from '../component/button/Button'; // Button 컴포넌트의 실제 경로에 맞게 수정해주세요.

// Button 컴포넌트에 대한 메타데이터를 정의합니다.
// Storybook UI에서 'Components/Button'으로 표시됩니다.
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // Storybook 문서 자동 생성 기능을 활성화합니다.
  argTypes: {
    // Storybook Controls 패널에서 각 prop을 조작할 수 있도록 설정합니다.
    buttonType: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'ghost'],
      description: '버튼의 시각적 타입 (Primary, Secondary, Ghost)',
    },
    size: {
      control: { type: 'radio' },
      options: ['medium', 'large'],
      description: '버튼의 크기 (Medium, Large)',
    },
    children: {
      control: 'text',
      description: '버튼 내부에 표시될 내용입니다. 텍스트, 아이콘, 또는 다른 컴포넌트가 올 수 있습니다.',
    },
    onClick: {
      action: 'clicked', // 버튼 클릭 시 Storybook Actions 패널에 로그를 남깁니다.
      description: '버튼 클릭 시 실행될 핸들러',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS 클래스를 사용하여 기본 스타일을 오버라이드합니다.',
    },
  },
};

export default meta;

// StoryObj 타입을 사용하여 각 스토리의 타입을 명확히 합니다.
type Story = StoryObj<typeof Button>;

// --- Primary Button Stories ---

export const PrimaryLarge: Story = {
  args: {
    buttonType: 'primary',
    size: 'large',
    children: '측정 저장',
    onClick: () => console.log('Primary Large Clicked'),
  },
  name: 'Primary / Large', // Storybook UI에 표시될 스토리 이름
};

export const PrimaryMedium: Story = {
  args: {
    buttonType: 'primary',
    size: 'medium',
    children: '확인',
    onClick: () => console.log('Primary Medium Clicked'),
  },
  name: 'Primary / Medium',
};

// --- Secondary Button Stories ---

export const SecondaryLarge: Story = {
  args: {
    buttonType: 'secondary',
    size: 'large',
    children: '측정 취소',
    onClick: () => console.log('Secondary Large Clicked'),
  },
  name: 'Secondary / Large',
};

// --- Ghost Button Stories ---

export const GhostLarge: Story = {
  args: {
    buttonType: 'ghost',
    size: 'large',
    children: '측정 취소',
    onClick: () => console.log('Ghost Large Clicked'),
  },
  name: 'Ghost / Large',
};