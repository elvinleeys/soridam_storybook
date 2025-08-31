'use client';

import { flexRowCenter } from "@/mixin/style";

// 버튼 타입에 따른 Tailwind 클래스를 미리 정의
const buttonStyles = {
  primary: "bg-primary-blue text-white",
  secondary: "bg-neutral-gray text-white",
  tertiary: "bg-white text-primary-blue border-[0.054375rem] border-primary-blue", 
  ghost: "bg-white text-neutral-gray-light border-none", // 배경이 흰색, 글씨가 #808080
};

// 버튼 크기에 따른 Tailwind 클래스를 미리 정의
const sizeStyles = {
  large: "w-[21.25rem] h-[3.125rem] rounded-[3.625rem] font-semibold text-xl", // 340x50, 58px, semibold(600), 20px
  medium: "w-[15.25rem] h-[2.5rem] rounded-[0.437rem] font-medium text-md", // 244x40, 6.99px, medium(500), 16px
  small: "w-[9.875rem] h-[2.5rem] rounded-[0.437rem] font-regular text-base",
  xsmall: "w-[6.875rem] h-[2.5rem] rounded-[0.437rem] font-regular text-base",
};

// buttonStyles 객체의 키를 타입으로 지정
export type ButtonType = keyof typeof buttonStyles;

// sizeStyles 객체의 키를 타입으로 지정
export type ButtonSize = keyof typeof sizeStyles;

export interface ButtonProps {
  /** What button type? */
  buttonType?: ButtonType;
  /** How large should the button be? */
  size?: ButtonSize;
  /** Button contents */
  children: React.ReactNode;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Optional custom class to override default styles */
  className?: string; // ✅ 사용자 지정 클래스 추가
}

/** Primary UI component for user interaction */
export default function Button({
  buttonType = 'primary',
  size = 'large',
  children,
  onClick,
  className,
  ...props
}: ButtonProps) {
  // 공통적으로 사용되는 폰트 스타일 및 중앙 정렬 클래스
  const commonStyles = `${flexRowCenter}`;
  
  const typeStyles = buttonStyles[buttonType];
  const currentSizeStyles = sizeStyles[size];

  // 모든 클래스를 합쳐서 className에 전달
  const finalClassNames = `${commonStyles} ${typeStyles} ${currentSizeStyles} ${className || ''}`;

  return (
    <button
      type="button"
      className={finalClassNames}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};