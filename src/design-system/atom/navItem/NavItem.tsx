'use client';

import React from 'react';
import { flexColCenter, flexRowCenter } from "@/mixin/style";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavImg {
    icon: string;
    iconLabel: string; // next/image용 정적 import 아이콘
    activeIcon: string; // 선택 시 아이콘 변경
}

type NavItemProps = {
  href: string;
  img: NavImg;
  label: string;
  currentPath?: string; // Storybook용 fallback
};

export default function NavItem({
  href,
  img,
  label,
  currentPath, 
}: NavItemProps) {
    const path = usePathname() ?? currentPath ?? ""; // null이면 빈 문자열
    const isActive = path.startsWith(href);
    const prefersReducedMotion = useReducedMotion();

    return (
        <Link 
            href={href} 
            className={`
                w-[3.25rem] 
                h-[3.125rem] 
                ${flexColCenter} 
                gap-[0.375rem]
            `}
        >
            <div className="w-[1.5rem] h-[1.5rem] relative">
                <AnimatePresence mode="wait" initial={false}>
                    {isActive ? (
                        <motion.div
                            key="active-icon"
                            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                            transition={{ duration: 0.18 }}
                            className="absolute inset-0"
                        >
                            <Image src={img.activeIcon} alt={img.iconLabel} fill priority/>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="idle-icon"
                            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                            transition={{ duration: 0.18 }}
                            className="absolute inset-0"
                        >
                            <Image src={img.icon} alt={img.iconLabel} fill priority/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <motion.p 
                className={`
                    ${flexRowCenter}
                    font-pretendard 
                    font-medium 
                    text-sm 
                    leading-5 
                    tracking-[0]
                `}
                animate={{
                    color: isActive ? 'var(--color-primary-blue)' : 'var(--color-neutral-black)',
                    scale: prefersReducedMotion ? 1 : (isActive ? 1.02 : 1),
                }}
                transition={{ duration: 0.18 }}
            >
                {label}
            </motion.p>
        </Link>
    );
}