"use client";

import { flexRowCenter } from "@/mixin/style";
import Image from "next/image";

type DecibelButtonProps = {
    label: string; // 버튼 하단 텍스트
    iconSrc?: string;
    className?: string; // 버튼 스타일
    textClassName?: string; // 텍스트 스타일
    onClick: React.MouseEventHandler<HTMLButtonElement>; // 클릭 이벤트
};

export default function FilterBtn({
    label="필터",
    iconSrc = "/icons/filter/ico_map_filter.svg",
    className = "",
    textClassName = "",
    onClick,
}: DecibelButtonProps) {

    return (
        <button
            onClick={onClick}
            className={`
                min-w-[4.375rem] 
                min-h-[2.5rem]
                py-[0.25rem] px-[0.3125rem]
                bg-neutral-gray-bg 
                border border-neutral-gray-soft
                ${flexRowCenter}
                gap-[0.5rem]
                ${className}
            `}
            aria-label={label}
        >
            <div className="w-[1.5rem] h-[1.5rem] relative">
                <Image src={iconSrc} alt="filterIcon" fill priority/>
            </div>
            <p className={`text-base font-regular ${textClassName}`}>
                {label}
            </p>
        </button>
    );
}