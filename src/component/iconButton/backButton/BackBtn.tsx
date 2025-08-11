"use client";

import Image from "next/image";

const sizeStyles = {
  sm: "w-[1.125rem] h-[1.125rem]",
  md: "w-[1.5rem] h-[1.5rem]",
  lg: "w-[2rem] h-[2rem]",
}

export type BackButtonSize = keyof typeof sizeStyles;

export interface BackButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size?: BackButtonSize; // 기본값 md
}

export default function BackBtn({
  onClick,
  size = "md",
}: BackButtonProps) {

  const currentSize = `${sizeStyles[size]}`;

  return (
    <button
      className={`${currentSize} relative`}
      onClick={onClick}
      aria-label="뒤로가기"
    >
      <Image src="/icons/back-ico.svg" alt="back button" fill />
    </button>
  );
}