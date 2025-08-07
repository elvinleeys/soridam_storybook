'use client';

import { flexRowCenter } from "@/mixin/style";
import { useState } from "react";

export interface RadiusBtnProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function RadiusButton({
  label,
  onClick,
  className
}: RadiusBtnProps) {
  const [active, setActive] = useState(false);

  // 공통 스타일
  const commonStyles =
    `${flexRowCenter} w-[6.1875rem] h-[2.5rem] rounded-[1.25rem] font-regular text-sm`;

  // 활성/비활성 스타일 분리
  const activeStyles =
    'border border-[#007BFF] text-[#0062FF] bg-[#F5F5F5]';
  const inactiveStyles =
    'border border-[#808080] text-[#727272] bg-white';

  const buttonStyle = active ? activeStyles : inactiveStyles;

  const finalClassNames = `${commonStyles} ${buttonStyle} ${className || ''}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(!active);
    onClick?.(e); // onClick prop이 있을 때만 실행
  };

  return (
    <button
      type="button"
      className={finalClassNames}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}