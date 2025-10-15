import React from 'react';
import Image from "next/image";

// 데시벨 레벨별 아이콘 경로
const DECIBEL_ICONS = {
    default: "/icons/decibel/default.webp",
    quiet: "/icons/decibel/quiet.webp",
    moderate: "/icons/decibel/moderate.webp",
    loud: "/icons/decibel/loud.webp",
};

// 아이콘 크기. TailwindCSS 클래스를 적용합니다.
const SIZE_CLASSES = {
    sm: "w-[1.25rem] h-[1.25rem]",
    md: "w-[1.5rem] h-[1.5rem]",
    lg: "w-[2rem] h-[2rem]",
};

export type DecibelIconSize = keyof typeof SIZE_CLASSES;
export type DecibelIconLevel = keyof typeof DECIBEL_ICONS;

export interface DecibelIconProps {
    level?: DecibelIconLevel;
    size?: DecibelIconSize;
    iconClassName?: string; // 아이콘 컨테이너 스타일
}

export default function Decibel({
    level = "default",
    size = "md",
    iconClassName = "",
}: DecibelIconProps) {

    const iconSrc = DECIBEL_ICONS[level];
    const sizeClass = SIZE_CLASSES[size];

    return (
        <div className={`relative ${sizeClass} ${iconClassName}`}>
            <Image src={iconSrc} alt={`${level} decibel level icon`} fill priority/>
        </div>
    );
}