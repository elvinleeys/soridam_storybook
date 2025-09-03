"use client";

import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
    return(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="overlay"
                    className="bg-black/60 fixed inset-0 w-full h-screen flex items-end"
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
                        onDragEnd={(event, info) => {
                            if (info.offset.y > 100) {
                                onClose();
                            }
                        }}
                        className="
                            w-full
                            h-[80vh]
                            max-h-[40.3125rem]
                            rounded-tl-lg 
                            rounded-tr-lg 
                            shadow-[0.25rem_0.25rem_0.8125rem_0px_#00000040]
                            bg-white
                            overflow-y-auto
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}