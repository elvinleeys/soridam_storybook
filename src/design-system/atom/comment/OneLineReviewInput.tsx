"use client";

import { flexCol } from "@/mixin/style";
import { motion } from "framer-motion";

interface OneLineReviewInputProps {
  value: string;                          // 외부 state
  onChange: (value: string) => void;      // 외부 state setter
  submitAttempted?: boolean;              // 부모에서 '제출 시도' 여부 전달
  maxLength?: number;                     // 기본 150
}

export default function OneLineReviewInput({
  value,
  onChange,
  submitAttempted = false,
  maxLength = 150,
}: OneLineReviewInputProps) {
  const isEmpty = value.trim().length === 0;
  const isMax = value.length === maxLength;

  // 에러 조건
  const showError = (submitAttempted && isEmpty) || isMax;

  return (
    <div className={`${flexCol} gap-[0.5rem] w-full`}>
        <label className="text-base font-bold mb-[0.25rem]">
            한줄평
        </label>
        <motion.div
            animate={submitAttempted && isEmpty ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <textarea
                value={value}
                onChange={(e) => {
                    const next = e.target.value;
                    if (next.length <= maxLength) onChange(next); // 150자 초과 입력 차단
                }}
                placeholder="소음 상황이나 추가로 적고 싶은 내용을 150자 이내로 간단히 작성해주세요. (예: 공사 소음으로 인해 시끄러움)"
                className={`
                    w-full 
                    h-[6.4375rem] 
                    p-[0.625rem] 
                    rounded-[0.42rem] 
                    resize-none 
                    outline-none 
                    bg-neutral-gray-bg 
                    border ${showError ? "border-error" : "border-neutral-gray-soft"}
                    text-sm 
                    placeholder-[#808080]
                `}
                aria-invalid={showError}
            />
        </motion.div>
        {/* 안내 문구(빈값) 또는 글자수(입력됨) */}
        {isEmpty ? (
            <p 
                className={`
                    text-right 
                    text-sm 
                    font-regular 
                    ${submitAttempted ? "text-error" : "text-neutral-gray-light"}
                `}
            >
                한 줄평을 입력해야 등록할 수 있습니다.
            </p>
        ) : (
            <div 
                className={`
                    text-right 
                    text-sm 
                    font-regular 
                    ${isMax ? "text-error" : "text-neutral-gray-light"}
                `}
            >
                {value.length} / {maxLength}
            </div>
        )}
    </div>
  );
}