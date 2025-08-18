'use client';

import { flexRow, flexRowCenter } from "@/mixin/style";
import NavItem from "../navItem/NavItem";
import { motion } from "framer-motion";

export interface NavListItem {
    href: string;
    label: string;
    img: {
        icon: string;
        iconLabel: string;
        activeIcon: string;
    };
}

interface NavListProps {
    items: NavListItem[];
    currentPath?: string; // Storybook에서 Active 상태 확인용
}

const container = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.06, duration: 0.18 },
  },
};

const child = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

export default function NavList({ 
    items, 
    currentPath 
}: NavListProps) {

    return (
        <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className={`
                w-full 
                h-[6.25rem] 
                ${flexRowCenter}
                shadow-[0_-1px_4px_0_rgba(0,0,0,0.15)] 
                pt-2.5 
                pr-[2.9375rem] 
                pb-10 
                pl-[2.875rem]
            `}
        >
            <div 
                className={`
                    w-full
                    h-[3.125rem]
                    ${flexRow} 
                    items-center 
                    justify-between
                `}
            >
                {items.map((item) => (
                    <motion.div key={item.href} variants={child}>
                        <NavItem
                            key={item.href}
                            href={item.href}
                            img={item.img}
                            label={item.label}
                            currentPath={currentPath} // Active 상태 fallback
                        />
                    </motion.div>
                ))}
            </div>
        </motion.nav>
    );
}