import React from 'react';
import { flexRow } from "@/mixin/style";
import Image from "next/image";

type EmailInputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function EmailInput({ 
    value, 
    onChange, 
    placeholder = "이메일",
    ...props
} : EmailInputProps ) {

    return(
        <div 
            className={`
                w-full 
                h-[2.75rem]
                py-[0.625rem]
                px-4
                ${flexRow}
                items-center
                gap-[0.5rem]
                bg-neutral-gray-bg
                rounded-[0.5rem]
            `}
        >
            <div className="w-[1.125rem] h-[1.125rem] relative">
                <Image src="/icons/login/email-ico.svg" alt="email icon" fill priority/> 
            </div>
            <input 
                type="email"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
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