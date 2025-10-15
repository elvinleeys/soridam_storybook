"use client";

import React from 'react';
import { flexRow } from "@/mixin/style";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PwInputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function PwInput({ 
    value, 
    onChange, 
    placeholder = "비밀번호",
    ...props
} : PwInputProps ) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

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
                <Image src="/icons/login/password-ico.webp" alt="password icon" fill priority/> 
            </div>
            <input 
                type={showPassword ? "text" : "password"}
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
            <AnimatePresence>
                {value && value.length > 0 && (
                    <motion.button
                        key="pw-toggle-btn"
                        type="button"
                        onClick={togglePassword}
                        className="w-[1.5rem] h-[1.5rem] relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {showPassword ? (
                                <motion.div
                                    key="open"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src="/icons/login/pw-open-ico.webp"
                                        alt="password show"
                                        fill
                                        priority
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src="/icons/login/pw-close-ico.webp"
                                        alt="password hide"
                                        fill
                                        priority
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
} 