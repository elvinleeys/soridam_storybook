"use client";

import { flexRow } from "@/mixin/style";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BackButton from "../iconButton/backButton/BackBtn";

export interface ExpandBottomSheetProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const NAVBAR_HEIGHT = "6.25rem"; // 100px
const DEFAULT_HEIGHT = "25.875rem"; // 414px

export function ExpandBottomSheet({ 
    title, 
    isOpen, 
    onClose, 
    children 
}: ExpandBottomSheetProps) {

    const [expanded, setExpanded] = useState(false);

    const handleDragEnd = (_: any, info: any) => {
        if (info.offset.y > 100) {
            onClose();
        } else if (info.offset.y < -100) {
            setExpanded(true);
        } else {
            setExpanded(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="overlay"
                    className="bg-black/60 fixed inset-0 w-full flex items-end"
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
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    style={{
                        height: expanded ? `calc(100vh - ${NAVBAR_HEIGHT})` : DEFAULT_HEIGHT,
                    }}
                    className={`
                        w-full
                        max-h-[calc(100vh-6.25rem)]
                        bg-white
                        ${expanded ? "" : "rounded-tl-lg rounded-tr-lg"}
                        overflow-y-auto
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
                            transition={{ duration: 0.3 }}
                        >
                            <BackButton onClick={onClose}/>
                            <p className="text-xl font-bold color-neutral-black">
                                {title}
                            </p>
                        </motion.header>
                    )}
                    <main className="w-full h-100% pr-[1rem] pl-[1rem]">
                        {children}
                    </main>
                </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}