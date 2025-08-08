"use client";
import React, { useState } from "react";
import Image from "next/image";
import { flexRowCenter } from "@/mixin/style";

type DecibelButtonProps = {
    iconSrc: string; // 아이콘 경로
    label: string; // 버튼 하단 텍스트
    className?: string; // 버튼 스타일
    iconClassName?: string; // 아이콘 컨테이너 스타일
    textClassName?: string; // 텍스트 스타일
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // 클릭 이벤트
};

export default function DecibelButton({
    iconSrc,
    label,
    className = "",
    iconClassName = "",
    textClassName = "",
    onClick,
}: DecibelButtonProps) {
    const [active, setActive] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setActive((prev) => !prev);
        onClick?.(e);
    };

    return (
        <button
            onClick={handleClick}
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
                <div
                    className={`
                        relative 
                        w-[1.25rem] 
                        h-[1.25rem] 
                        ${iconClassName}
                        ${flexRowCenter}
                    `}
                >
                    <Image src={iconSrc} alt="" fill />
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