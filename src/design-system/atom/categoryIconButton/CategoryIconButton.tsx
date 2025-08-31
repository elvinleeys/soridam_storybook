"use client";

import Image from "next/image";
import { flexRowCenter } from "@/mixin/style";

type CategoryIconButtonProps = {
    iconSrc: string; // 아이콘 경로
    label: string; // 버튼 하단 텍스트
    active?: boolean; // 버튼 활성화 상태
    className?: string; // 버튼 스타일
    iconClassName?: string; // 아이콘 컨테이너 스타일
    textClassName?: string; // 텍스트 스타일
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // 클릭 이벤트
};

export default function CategoryIconButton({
    iconSrc,
    label,
    active,
    className = "",
    iconClassName = "",
    textClassName = "",
    onClick,
}: CategoryIconButtonProps) {

    return (
        <button
            onClick={onClick}
            className={`
                min-w-[4.75rem] 
                min-h-[2.5rem] 
                rounded-[1.25rem] 
                border 
                px-[1rem]
                py-[0.625rem] 
                ${active ? "border-primary-blue bg-neutral-gray-bg" : "border-neutral-gray-soft bg-white"} 
                ${className}
                ${flexRowCenter}
            `}
        >
            <div className={`${flexRowCenter}`}>
                <div
                    className={`
                        relative 
                        w-[1.5rem] 
                        h-[1.5rem] 
                        ${iconClassName}
                        ${flexRowCenter}
                    `}
                >
                    <Image src={iconSrc} alt={`${label}`} fill priority/>
                </div>
                <p
                    className={`
                        text-sm
                        font-regular 
                        ${active ? "text-[#0062FF]" : "text-[#727272]"} 
                        ${flexRowCenter}
                        ${textClassName}
                    `}
                >
                    {label}
                </p>
            </div>
        </button>
    );
}