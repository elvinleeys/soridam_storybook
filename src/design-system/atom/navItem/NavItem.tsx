'use client';

import React from "react";
import { flexColCenter } from "@/mixin/style";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavImg {
  icon: string;
  iconLabel: string;
  activeIcon: string;
}

interface NavItemProps {
  href: string;
  img: NavImg;
  label: string;
  currentPath?: string;
  prefetch?: boolean;
}

export default function NavItem({ 
  href, 
  img, 
  label, 
  currentPath, 
  prefetch=false 
}: NavItemProps) {
  const path = usePathname() ?? currentPath ?? "";
  const isActive = href === "/" ? path === "/" : path.startsWith(href);
  const prefersReducedMotion = useReducedMotion();

  return (
    <Link
      href={href}
      aria-label={label}
      className={`w-[3.25rem] h-[3.125rem] ${flexColCenter} gap-[0.375rem]`}
      prefetch={prefetch}
    >
      <div className="w-[1.5rem] h-[1.5rem] relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isActive ? "active" : "idle"}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : isActive ? 0.9 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : isActive ? 0.9 : 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0"
          >
            <Image
              src={isActive ? img.activeIcon : img.icon}
              alt="" // aria-label로 대체
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.p
        animate={{
          color: isActive ? "var(--color-primary-blue)" : "var(--color-neutral-black)",
          scale: prefersReducedMotion ? 1 : isActive ? 1.02 : 1,
        }}
        transition={{ duration: 0.18 }}
        className="font-pretendard font-medium text-sm leading-5 tracking-[0]"
      >
        {label}
      </motion.p>
    </Link>
  );
}
