"use client";

import { flexRowCenter } from "@/mixin/style";
import Decibel, { DecibelIconLevel } from "@/component/decibel/decibelLevel/Decibel";

type DecibelButtonProps = {
    level: DecibelIconLevel; // 데시벨 단계
    label: string; // 버튼 하단 텍스트
    active?: boolean; // 버튼 활성화 상태
    className?: string; // 버튼 스타일
    textClassName?: string; // 텍스트 스타일
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // 클릭 이벤트
};

export default function DecibelButton({
    level,
    label,
    active,
    className = "",
    textClassName = "",
    onClick,
}: DecibelButtonProps) {

    return (
        <button
            onClick={onClick}
            className={`
                min-w-[10.125rem] 
                min-h-[2.5rem] 
                rounded-[1.25rem] 
                border 
                px-[1rem]
                py-[0.625rem] 
                ${active ? "border-primary-blue bg-[#F5F5F5]" : "border-[#808080] bg-white"} 
                ${className}
                ${flexRowCenter}
            `}
        >
            <div className={`${flexRowCenter} gap-[0.375rem]`}>
                <Decibel level={level} size="sm" />
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