"use client";

import { flexRow } from "@/mixin/style";
import Image from "next/image";
import { ChangeEvent } from "react";

type SearchBarProps = {
  value: string; // 외부에서 관리하는 입력값
  onChange: (value: string) => void; // 입력 이벤트 핸들러
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "지번, 도로명 주소 검색",
}: SearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return(
        <div 
            className={`
                w-[16.25rem]
                h-[2.5rem]
                py-2
                px-3
                ${flexRow}
                items-center
                gap-[0.5rem]
                bg-[#F5F5F5]
                rounded-[6.25rem] 
                border border-[#808080]
            `}
        >
            <div className="w-[1.5rem] h-[1.5rem] relative">
                <Image src="/icons/search-ico.svg" alt="search-icon" fill priority/>
            </div>
            <input 
                type="search" 
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="
                    flex-1
                    font-regular
                    text-base 
                    placeholder-[#808080]
                    bg-transparent
                    focus:outline-none
                "
            />
        </div>
    );
}