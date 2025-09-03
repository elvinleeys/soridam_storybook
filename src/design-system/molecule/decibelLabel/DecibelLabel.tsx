import React from 'react';
import { flexRow } from "@/mixin/style";
import Decibel from "@/design-system/atom/decibelLevel/Decibel";

type DecibelLevel = "quiet" | "moderate" | "loud";

interface DecibelLabelProps {
  level: DecibelLevel;
}

const labelMap: Record<DecibelLevel, string> = {
  quiet: "조용함",
  moderate: "적절함",
  loud: "시끄러움",
};

export default function DecibelLabel({ level }: DecibelLabelProps) {
  return (
    <div 
        className={`
            min-w-[4.625rem]
            h-[1.5rem]
            ${flexRow} 
            items-center 
            gap-[0.5rem]
        `}
    >
      <Decibel size="md" level={level} />
      <p className="font-medium text-base text-neutral-black">
        {labelMap[level]}
      </p>
    </div>
  );
}