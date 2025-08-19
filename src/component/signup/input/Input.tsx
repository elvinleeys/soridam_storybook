"use client";

import { motion } from "framer-motion";

type InputProps = {
    inputType: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    hasError?: boolean;
};

export default function Input({
    inputType="text", 
    value, 
    onChange, 
    placeholder,
    hasError = false,
    ...props
} : InputProps) {
    return (
        <motion.div
            // 흔들림 애니메이션
            animate={
                hasError
                ? {
                    x: [0, -8, 8, -6, 6, -4, 4, 0],
                    }
                : {}
            }
            transition={{ duration: 0.4 }}
            className={`
                w-full 
                h-[2.75rem]
                py-[0.625rem]
                px-[0.75rem]
                rounded-[0.5rem]
                bg-[#F5F5F5]
                ${hasError ? "border border-[#FF3131]" : "border-none"}
            `}
        >
            <input 
                type={inputType}
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
        </motion.div>
    );
}