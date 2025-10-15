"use client";

import React from 'react';
import { flexRow } from "@/mixin/style";
import Image from "next/image";

type SearchBarProps = {
  placeholder?: string;
  onClick?: () => void; // 클릭 시 처리
};

export default function SearchBar({
    placeholder = "지번, 도로명 주소 검색",
    onClick,
}: SearchBarProps) {

    return(
        <button
            type='button'
            onClick={onClick} 
            className={`
                w-[16.25rem]
                h-[2.5rem]
                py-2
                px-3
                ${flexRow}
                items-center
                gap-[0.5rem]
                bg-neutral-gray-bg
                rounded-[6.25rem] 
                border border-neutral-gray-soft
            `}
        >
            <div className="w-[1.5rem] h-[1.5rem] relative">
                <Image src="/icons/search-ico.webp" alt="search-icon" fill priority/>
            </div>
            <div
                className="
                    flex-1
                    font-regular
                    text-base 
                    text-[#808080]
                    bg-transparent
                    text-start
                "
            >
                {placeholder}
            </div>
        </button>
    );
}