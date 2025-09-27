"use client";

import React from 'react';
import { flexRow } from "@/mixin/style";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useEffect, useState } from "react";
import BackButton from "@/design-system/atom/iconButton/backButton/BackBtn";

export interface ExpandBottomSheetProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// rem 단위 상수
const NAVBAR_HEIGHT_REM = 6.25;       // 100px
const DEFAULT_HEIGHT_REM = 25.875;    // 414px
const EXPAND_THRESHOLD_REM = 7.5;     // 120px
const DISMISS_THRESHOLD_REM = 6.25;   // 100px
const SNAP_RATIO = 0.6;

export default function ExpandBottomSheet({
  title,
  isOpen,
  onClose,
  children,
}: ExpandBottomSheetProps) {
  const [maxHeight, setMaxHeight] = useState<number>(40); // rem 단위 (SSR 대비 기본값)
  const [sheetHeight, setSheetHeight] = useState<number>(DEFAULT_HEIGHT_REM);
  const [expanded, setExpanded] = useState<boolean>(false);

  // mount 시/리사이즈 시 최대 높이 갱신
  useEffect(() => {
    const compute = () => {
      const vhInRem = window.innerHeight / 16; // px → rem
      setMaxHeight(Math.max(18.75, vhInRem - NAVBAR_HEIGHT_REM)); // 최소 300px = 18.75rem
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // 열릴 때마다 초기화
  useEffect(() => {
    if (isOpen) {
      setExpanded(false);
      setSheetHeight(DEFAULT_HEIGHT_REM);
    }
  }, [isOpen]);

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (expanded) return;
    setSheetHeight((prev) => {
      const deltaRem = info.delta.y / 16; // px → rem
      const next = prev - deltaRem;
      return Math.min(Math.max(DEFAULT_HEIGHT_REM, next), maxHeight);
    });
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (expanded) return;

    const offsetRem = info.offset.y / 16; // px → rem

    if (offsetRem > DISMISS_THRESHOLD_REM) {
      onClose();
      return;
    }

    if (-offsetRem > EXPAND_THRESHOLD_REM || sheetHeight >= maxHeight * SNAP_RATIO) {
      setExpanded(true);
      setSheetHeight(maxHeight);
      return;
    }

    setExpanded(false);
    setSheetHeight(DEFAULT_HEIGHT_REM);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          className="bg-black/60 fixed inset-0 w-full flex items-end"
          style={{ top: 0, left: 0, right: 0, bottom: `${NAVBAR_HEIGHT_REM}rem` }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="bottomSheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            drag={expanded ? false : "y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            dragMomentum={false}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            style={{ height: `${sheetHeight}rem`, bottom: `${NAVBAR_HEIGHT_REM}rem` }}
            className={`
              w-full
              max-h-[calc(100vh-6.25rem)]
              bg-white
              shadow-[0.25rem_0.25rem_0.8125rem_0px_#00000040]
              ${expanded ? "" : "rounded-tl-lg rounded-tr-lg"}
              overflow-y-hidden
              transition-[height] duration-200
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {expanded && (
              <motion.header
                className={`
                  w-full 
                  h-[3.8125rem] 
                  pt-[0.6875rem] 
                  pr-[8.3125rem] 
                  pb-[1.625rem] 
                  pl-[1rem]
                  ${flexRow}
                  items-center
                  justify-between
                `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <BackButton onClick={onClose} />
                <p className="text-xl font-bold color-neutral-black">
                  {title}
                </p>
              </motion.header>
            )}
            <main 
              className={`
                w-full 
                h-full
                flex
                flex-col 
                pr-[1rem] 
                pl-[1rem]
                ${!expanded ? "pt-[2rem]" : "pt-0"} 
              `}
            >
              {children}
            </main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
