"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

type InputProps = {
  inputType?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputType = "text",
      value,
      onChange,
      placeholder,
      hasError = false,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        animate={
          hasError
            ? {
                x: [0, -8, 8, -6, 6, -4, 4, 0],
              }
            : {}
        }
        transition={{ duration: 0.4 }}
        className={`
          w-full 
          h-[2.75rem]
          py-[0.625rem]
          px-[0.75rem]
          rounded-[0.5rem]
          bg-neutral-gray-bg
          ${hasError ? "border border-error" : "border-none"}
        `}
      >
        <input
          ref={ref}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
          className="
            flex-1
            font-regular
            text-base 
            placeholder-[#808080]
            bg-transparent
            focus:outline-none
          "
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export default Input;
