"use client";

import React from "react";
import { flexRow } from "@/mixin/style";
import { motion } from "framer-motion";

interface StepIndicatorProps {
  totalSteps: number;          // 전체 단계 수
  currentStep: number;         // 현재 진행 단계 (1부터 시작)
  className?: string;          // 필요 시 추가 클래스
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  totalSteps,
  currentStep,
  className = "",
}) => {
  return (
    <div className={`${flexRow} items-center space-x-2 ${className}`}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;

        return (
          <motion.div
            key={index}
            className="w-2.5 h-2.5 rounded-full"
            animate={{
              backgroundColor: isActive ? "#007bff" : "#F5F5F5", // active / inactive 색상
              scale: isActive ? 1.2 : 1,                            // 선택된 단계만 살짝 커지게
            }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
    </div>
  );
};

export default StepIndicator;