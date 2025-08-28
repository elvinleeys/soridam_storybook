"use client";

import { flexRow } from "@/mixin/style";
import React from "react";

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
          <React.Fragment key={index}>
            <div
                className={`
                    w-2.5
                    h-2.5 
                    rounded-full 
                    transition-colors 
                    duration-300
                    ${isActive ? "bg-primary" : "bg-[#F5F5F5]"}
                `}
            ></div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;