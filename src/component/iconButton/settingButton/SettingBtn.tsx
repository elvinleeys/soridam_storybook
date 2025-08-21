"use client";

import Image from "next/image";

const sizeStyles = {
  sm: "w-[1.125rem] h-[1.125rem]",
  md: "w-[1.5rem] h-[1.5rem]",
  lg: "w-[2rem] h-[2rem]",
}

export type SettingBtnSize = keyof typeof sizeStyles;

export interface SettingBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size?: SettingBtnSize; // 기본값 md
}

export default function SettingBtn({
  onClick,
  size = "md",
}: SettingBtnProps) {

  const currentSize = `${sizeStyles[size]}`;

  return (
    <button
      className={`${currentSize} relative`}
      onClick={onClick}
      aria-label="설정 버튼"
    >
      <Image src="/icons/setting-ico.svg" alt="setting button" fill priority/>
    </button>
  );
}