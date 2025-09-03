"use client";

import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface NoiseMeterChartProps {
  db: number;          // 현재 데시벨
  time: string;        // "00:15" 또는 "+00:03"
}

export default function NoiseMeterChart({ 
  db, 
  time 
}: NoiseMeterChartProps) {
  const progressValue = db === 0 ? 0.01 : db;
  const displayDb = db < 10 ? `0${db}` : db;

  return (
    <div className="w-[13.75rem] h-[13.75rem]"> {/* 220px = 13.75rem */}
      <CircularProgressbarWithChildren
        value={progressValue}
        maxValue={120} // 최대 dB 스케일
        strokeWidth={12}
        styles={buildStyles({
          pathColor: "#3D87FF",
          trailColor: "#CFE2FF",
          pathTransitionDuration: 0.5,
          strokeLinecap: "round"   // 끝점을 둥글게
        })}
      >
        <p 
          className={`
            absolute 
            top-1/2 
            left-1/2 
            -translate-x-1/2 
            -translate-y-1/2
            font-medium 
            text-[4.375rem] 
            leading-[3.875rem] 
            tracking-[0.125rem] 
            text-black
          `}
        >
          {displayDb}
        </p>
        <p 
          className={`
            absolute 
            left-1/2 
            top-[calc(50%+1.125rem)] 
            -translate-x-1/2
            text-sm 
            font-medium
            text-neutral-sub
            mt-[1.125rem]
          `}
        >
          {time}
        </p>
      </CircularProgressbarWithChildren>
    </div>
  );
}
