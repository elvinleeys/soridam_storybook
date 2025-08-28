"use client";

import Image from "next/image";

const sizeStyles = {
  sm: "w-[1.125rem] h-[1.125rem]",
  md: "w-[1.5rem] h-[1.5rem]",
  lg: "w-[2rem] h-[2rem]",
}

export type InfoBtnSize = keyof typeof sizeStyles;

export interface InfoBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size?: InfoBtnSize; // 기본값 md
}

export default function InfoBtn({
  onClick,
  size = "md",
}: InfoBtnProps) {

  const currentSize = `${sizeStyles[size]}`;

  return (
    <button
      className={`${currentSize} relative`}
      onClick={onClick}
      aria-label="정보 버튼"
    >
      <Image src="/icons/info-ico.svg" alt="info button" fill priority/>
    </button>
  );
}