"use client";

import Image from "next/image";
import Link from "next/link";

const sizeStyles = {
  sm: "w-[1.125rem] h-[1.125rem]",
  md: "w-[1.5rem] h-[1.5rem]",
  lg: "w-[2rem] h-[2rem]",
};

export type BackButtonSize = keyof typeof sizeStyles;

export interface BackButtonProps {
  size?: BackButtonSize;
  href?: string; // 있으면 Link 동작
  onClick?: () => void; // 없으면 모달 등 커스텀 동작
}

export default function BackButton({
  size = "md",
  href,
  onClick,
}: BackButtonProps) {
  const currentSize = sizeStyles[size];

  const icon = (
    <Image
      src="/icons/back-ico.svg"
      alt="back button"
      fill
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="뒤로가기"
        className={`${currentSize} relative inline-block`}
      >
        {icon}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${currentSize} relative`}
      aria-label="뒤로가기"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}