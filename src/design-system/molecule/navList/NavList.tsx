'use client';

import React from "react";
import NavItem from "@/design-system/atom/navItem/NavItem";
import { flexRowCenter, flexRow } from "@/mixin/style";
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
  currentPath?: string;
}

const container = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.06, duration: 0.18 },
  },
};

export default function NavList({ items, currentPath }: NavListProps) {
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className={`
        w-full h-[6.25rem]
        ${flexRowCenter} 
        shadow-[0_-1px_4px_0_rgba(0,0,0,0.15)]
        pt-2.5 pr-[2.9375rem] pb-10 pl-[2.875rem]
        fixed 
        bottom-0 
        left-0 
        bg-white 
        z-[200]
      `}
    >
      <div className={`w-full h-[3.125rem] ${flexRow} items-center justify-between`}>
        {items.map(item => (
          <NavItem
            key={item.href}
            href={item.href}
            img={item.img}
            label={item.label}
            currentPath={currentPath}
          />
        ))}
      </div>
    </motion.nav>
  );
}
