"use client";

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
  ReferenceLine,
} from "recharts";

export interface TimeDBChartProps {
  data: { timeRange: string; db: number; count: number }[];
  currentRange: string;
}

export default function TimeDBChart({ data, currentRange }: TimeDBChartProps) {
  const barRadius = 10.62; // px 값 그대로 사용
  
  // Recharts에서 라벨을 렌더링하기 위한 커스텀 함수
  const renderDbLabel = (props: any) => {
    const { x, y, width, value } = props;
    // value prop이 존재하고 현재 시간대일 경우에만 렌더링
    if (value !== undefined && value !== null) {
      const entry = data.find((d) => d.db === value);
      const isCurrent = entry && entry.timeRange === currentRange;
      if (isCurrent) {
        return (
          <text
            x={x + width / 2}
            y={y - 10} // 막대 위 10px 위치에 표시
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#060606"
            fontFamily="Pretendard"
            fontWeight="400"
            fontSize="0.929375rem"
          >
            {value} dB
          </text>
        );
      }
    }
    return null;
  };

  const renderCountLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    return (
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#060606"
        fontFamily="Pretendard"
        fontWeight="500"
        fontSize="1.061875rem"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="w-full h-[6.875rem] flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap="20%"
        >
          <XAxis
            dataKey="timeRange"
            interval={0}
            tick={{
              fill: "#060606",
              fontFamily: "Pretendard",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: 14.87,
              letterSpacing: "0px",
            }}
            tickLine={false}
          />
          <YAxis domain={[0, 120]} tick={false} width={1} axisLine={true} tickLine={false} />
          <Bar
            dataKey="db"
            radius={[barRadius, barRadius, 0, 0]}
          >
            {data.map((entry, index) => {
              const isCurrent = entry.timeRange === currentRange;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={isCurrent ? "#7BD685" : "#979797"}
                />
              );
            })}
            {/* dB 라벨을 Bar 위에 표시 */}
            <LabelList dataKey="db" content={renderDbLabel} />
            {/* Count 라벨을 Bar 중앙에 표시 */}
            <LabelList dataKey="count" content={renderCountLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}