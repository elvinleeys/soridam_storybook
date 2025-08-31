"use client";

import { flexCol } from "@/mixin/style";
import Decibel from "@/design-system/atom/decibelLevel/Decibel";

type DecibelLevel = "default" | "quiet" | "moderate" | "loud";

interface MeasureDecibelLabelProps {
  level: DecibelLevel;
}

const labelMap: Record<DecibelLevel, string> = {
    default: "측정전",
    quiet: "조용함",
    moderate: "적절함",
    loud: "시끄러움",
};

export default function MDecibelLabel({ level }: MeasureDecibelLabelProps) {
    return (
        <div 
            className={`
                min-w-[3.25rem]
                h-[3.875rem]
                ${flexCol}
                items-center
                gap-[0.625rem]
            `}
        >
            <Decibel size="lg" level={level} />
            <p 
                className={`
                    text-xl 
                    font-bold 
                    ${level === "default" ? "text-neutral-sub" : "text-primary"}
                `}
            >
                {labelMap[level]}
            </p>
        </div>
    );
}