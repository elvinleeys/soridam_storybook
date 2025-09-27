import React4, { forwardRef, useState, useEffect } from 'react';
import Image10 from 'next/image';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Cell, LabelList } from 'recharts';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// src/design-system/atom/button/Button.tsx

// src/mixin/style.ts
var flexRow = "flex flex-row";
var flexCol = "flex flex-col";
var flexRowCenter = `${flexRow} items-center justify-center`;
var flexColCenter = `${flexCol} items-center justify-center`;

// src/design-system/atom/button/Button.tsx
var buttonStyles = {
  primary: "bg-primary-blue text-white",
  secondary: "bg-neutral-gray text-white",
  tertiary: "bg-white text-primary-blue border-[0.054375rem] border-primary-blue",
  ghost: "bg-white text-neutral-gray-light border-none"
  // 배경이 흰색, 글씨가 #808080
};
var sizeStyles = {
  large: "w-[21.25rem] h-[3.125rem] rounded-[3.625rem] font-semibold text-xl",
  // 340x50, 58px, semibold(600), 20px
  medium: "w-[15.25rem] h-[2.5rem] rounded-[0.437rem] font-medium text-md",
  // 244x40, 6.99px, medium(500), 16px
  small: "w-[9.875rem] h-[2.5rem] rounded-[0.437rem] font-regular text-base",
  xsmall: "w-[6.875rem] h-[2.5rem] rounded-[0.437rem] font-regular text-base"
};
var Button = forwardRef(({
  buttonType = "primary",
  size = "large",
  children,
  onClick,
  className,
  ...props
}, ref) => {
  const commonStyles = `${flexRowCenter}`;
  const typeStyles = buttonStyles[buttonType];
  const currentSizeStyles = sizeStyles[size];
  const finalClassNames = `${commonStyles} ${typeStyles} ${currentSizeStyles} ${className || ""}`;
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      ref,
      type: "button",
      className: finalClassNames,
      onClick,
      ...props
    },
    children
  );
});
Button.displayName = "Button";
var Button_default = Button;
function CategoryIconButton({
  iconSrc,
  label,
  active,
  className = "",
  iconClassName = "",
  textClassName = "",
  onClick
}) {
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      onClick,
      className: `
                min-w-[4.75rem] 
                min-h-[2.5rem] 
                rounded-[1.25rem] 
                border 
                px-[1rem]
                py-[0.625rem] 
                ${active ? "border-primary-blue bg-neutral-gray-bg" : "border-neutral-gray-soft bg-white"} 
                ${className}
                ${flexRowCenter}
            `
    },
    /* @__PURE__ */ React4.createElement("div", { className: `${flexRowCenter}` }, /* @__PURE__ */ React4.createElement(
      "div",
      {
        className: `
                        relative 
                        w-[1.5rem] 
                        h-[1.5rem] 
                        ${iconClassName}
                        ${flexRowCenter}
                    `
      },
      /* @__PURE__ */ React4.createElement(Image10, { src: iconSrc, alt: `${label}`, fill: true, priority: true })
    ), /* @__PURE__ */ React4.createElement(
      "p",
      {
        className: `
                        text-sm
                        font-regular 
                        ${active ? "text-[#0062FF]" : "text-[#727272]"} 
                        ${flexRowCenter}
                        ${textClassName}
                    `
      },
      label
    ))
  );
}
function NoiseMeterChart({
  db,
  time
}) {
  const progressValue = db === 0 ? 0.01 : db;
  const displayDb = db < 10 ? `0${db}` : db;
  return /* @__PURE__ */ React4.createElement("div", { className: "w-[13.75rem] h-[13.75rem]" }, " ", /* @__PURE__ */ React4.createElement(
    CircularProgressbarWithChildren,
    {
      value: progressValue,
      maxValue: 120,
      strokeWidth: 12,
      styles: buildStyles({
        pathColor: "#3D87FF",
        trailColor: "#CFE2FF",
        pathTransitionDuration: 0.5,
        strokeLinecap: "round"
        // 끝점을 둥글게
      })
    },
    /* @__PURE__ */ React4.createElement(
      "p",
      {
        className: `
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
          `
      },
      displayDb
    ),
    /* @__PURE__ */ React4.createElement(
      "p",
      {
        className: `
            absolute 
            left-1/2 
            top-[calc(50%+1.125rem)] 
            -translate-x-1/2
            text-sm 
            font-medium
            text-neutral-sub
            mt-[1.125rem]
          `
      },
      time
    )
  ));
}
function TimeDBChart({ data, currentRange }) {
  const barRadius = 10.62;
  const renderDbLabel = (props) => {
    const { x, y, width, value } = props;
    if (value !== void 0 && value !== null) {
      const entry = data.find((d) => d.db === value);
      const isCurrent = entry && entry.timeRange === currentRange;
      if (isCurrent) {
        return /* @__PURE__ */ React4.createElement(
          "text",
          {
            x: x + width / 2,
            y: y - 10,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#060606",
            fontFamily: "Pretendard",
            fontWeight: "400",
            fontSize: "0.929375rem"
          },
          value,
          " dB"
        );
      }
    }
    return null;
  };
  const renderCountLabel = (props) => {
    const { x, y, width, height, value } = props;
    return /* @__PURE__ */ React4.createElement(
      "text",
      {
        x: x + width / 2,
        y: y + height / 2,
        textAnchor: "middle",
        dominantBaseline: "middle",
        fill: "#060606",
        fontFamily: "Pretendard",
        fontWeight: "500",
        fontSize: "1.061875rem"
      },
      value
    );
  };
  return /* @__PURE__ */ React4.createElement("div", { className: "w-full h-[6.875rem] flex justify-center items-center" }, /* @__PURE__ */ React4.createElement(ResponsiveContainer, { width: "100%", height: "100%" }, /* @__PURE__ */ React4.createElement(
    BarChart,
    {
      data,
      barGap: "20%"
    },
    /* @__PURE__ */ React4.createElement(
      XAxis,
      {
        dataKey: "timeRange",
        interval: 0,
        tick: {
          fill: "#060606",
          fontFamily: "Pretendard",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: 14.87,
          letterSpacing: "0px"
        },
        tickLine: false
      }
    ),
    /* @__PURE__ */ React4.createElement(YAxis, { domain: [0, 120], tick: false, width: 1, axisLine: true, tickLine: false }),
    /* @__PURE__ */ React4.createElement(
      Bar,
      {
        dataKey: "db",
        radius: [barRadius, barRadius, 0, 0]
      },
      data.map((entry, index) => {
        const isCurrent = entry.timeRange === currentRange;
        return /* @__PURE__ */ React4.createElement(
          Cell,
          {
            key: `cell-${index}`,
            fill: isCurrent ? "#7BD685" : "#979797"
          }
        );
      }),
      /* @__PURE__ */ React4.createElement(LabelList, { dataKey: "db", content: renderDbLabel }),
      /* @__PURE__ */ React4.createElement(LabelList, { dataKey: "count", content: renderCountLabel })
    )
  )));
}
function OneLineReviewInput({
  value,
  onChange,
  submitAttempted = false,
  maxLength = 150,
  ...props
}) {
  const isEmpty = value.trim().length === 0;
  const isMax = value.length === maxLength;
  const showError = submitAttempted && isEmpty || isMax;
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("div", { className: `${flexCol} gap-[0.75rem] w-full mb-[0.5rem]` }, /* @__PURE__ */ React4.createElement("label", { htmlFor: "oneLineReview", className: "text-base !font-bold" }, "\uD55C\uC904\uD3C9"), /* @__PURE__ */ React4.createElement(
    motion.div,
    {
      className: "w-full h-[6.4375rem]",
      animate: submitAttempted && isEmpty ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 },
      transition: { duration: 0.4 }
    },
    /* @__PURE__ */ React4.createElement(
      "textarea",
      {
        id: "oneLineReview",
        value,
        onChange: (e) => {
          const next = e.target.value;
          if (next.length <= maxLength) onChange(next);
        },
        placeholder: "\uC18C\uC74C \uC0C1\uD669\uC774\uB098 \uCD94\uAC00\uB85C \uC801\uACE0 \uC2F6\uC740 \uB0B4\uC6A9\uC744 150\uC790 \uC774\uB0B4\uB85C \uAC04\uB2E8\uD788 \uC791\uC131\uD574\uC8FC\uC138\uC694. (\uC608: \uACF5\uC0AC \uC18C\uC74C\uC73C\uB85C \uC778\uD574 \uC2DC\uB044\uB7EC\uC6C0)",
        className: `
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
                    `,
        "aria-invalid": showError,
        ...props
      }
    )
  )), isEmpty ? /* @__PURE__ */ React4.createElement(
    "p",
    {
      className: `
                    text-right 
                    text-sm 
                    font-regular 
                    ${submitAttempted ? "text-error" : "text-neutral-gray-light"}
                `
    },
    "\uD55C \uC904\uD3C9\uC744 \uC785\uB825\uD574\uC57C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
  ) : /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `
                    text-right 
                    text-sm 
                    font-regular 
                    ${isMax ? "text-error" : "text-neutral-gray-light"}
                `
    },
    value.length,
    " / ",
    maxLength
  ));
}
var DECIBEL_ICONS = {
  default: "/icons/default.svg",
  quiet: "/icons/quiet.svg",
  moderate: "/icons/moderate.svg",
  loud: "/icons/loud.svg"
};
var SIZE_CLASSES = {
  sm: "w-[1.25rem] h-[1.25rem]",
  md: "w-[1.5rem] h-[1.5rem]",
  lg: "w-[2rem] h-[2rem]"
};
function Decibel({
  level = "default",
  size = "md",
  iconClassName = ""
}) {
  const iconSrc = DECIBEL_ICONS[level];
  const sizeClass = SIZE_CLASSES[size];
  return /* @__PURE__ */ React4.createElement("div", { className: `relative ${sizeClass} ${iconClassName}` }, /* @__PURE__ */ React4.createElement(Image10, { src: iconSrc, alt: `${level} decibel level icon`, fill: true, priority: true }));
}
function EmailInput({
  value,
  onChange,
  placeholder = "\uC774\uBA54\uC77C",
  ...props
}) {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `
                w-full 
                h-[2.75rem]
                py-[0.625rem]
                px-4
                ${flexRow}
                items-center
                gap-[0.5rem]
                bg-neutral-gray-bg
                rounded-[0.5rem]
            `
    },
    /* @__PURE__ */ React4.createElement("div", { className: "w-[1.125rem] h-[1.125rem] relative" }, /* @__PURE__ */ React4.createElement(Image10, { src: "/icons/login/email-ico.svg", alt: "email icon", fill: true, priority: true })),
    /* @__PURE__ */ React4.createElement(
      "input",
      {
        type: "email",
        value,
        onChange,
        placeholder,
        ...props,
        className: "\r\n                    flex-1\r\n                    font-regular\r\n                    text-base \r\n                    placeholder-[#808080]\r\n                    bg-transparent\r\n                    focus:outline-none\r\n                "
      }
    )
  );
}
function FilterBtn({
  label = "\uD544\uD130",
  iconSrc = "/icons/filter/ico_map_filter.svg",
  className = "",
  textClassName = "",
  onClick
}) {
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      onClick,
      className: `
                min-w-[4.375rem] 
                min-h-[2.5rem]
                py-[0.25rem] px-[0.3125rem]
                bg-neutral-gray-bg 
                border border-neutral-gray-soft
                ${flexRowCenter}
                gap-[0.5rem]
                ${className}
            `,
      "aria-label": label
    },
    /* @__PURE__ */ React4.createElement("div", { className: "w-[1.5rem] h-[1.5rem] relative" }, /* @__PURE__ */ React4.createElement(Image10, { src: iconSrc, alt: "filterIcon", fill: true, priority: true })),
    /* @__PURE__ */ React4.createElement("p", { className: `text-base font-regular ${textClassName}` }, label)
  );
}
var sizeStyles2 = {
  sm: "w-[1.125rem] h-[1.125rem]",
  md: "w-[1.5rem] h-[1.5rem]",
  lg: "w-[2rem] h-[2rem]"
};
function BackButton({
  size = "md",
  href,
  onClick
}) {
  const currentSize = sizeStyles2[size];
  const icon = /* @__PURE__ */ React4.createElement(
    Image10,
    {
      src: "/icons/back-ico.svg",
      alt: "back button",
      fill: true,
      priority: true
    }
  );
  if (href) {
    return /* @__PURE__ */ React4.createElement(
      Link,
      {
        href,
        "aria-label": "\uB4A4\uB85C\uAC00\uAE30",
        className: `${currentSize} relative inline-block`
      },
      icon
    );
  }
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      type: "button",
      className: `${currentSize} relative`,
      "aria-label": "\uB4A4\uB85C\uAC00\uAE30",
      onClick
    },
    icon
  );
}
var sizeStyles3 = {
  sm: "w-[1.125rem] h-[1.125rem]",
  md: "w-[1.5rem] h-[1.5rem]",
  lg: "w-[2rem] h-[2rem]"
};
function InfoBtn({
  onClick,
  size = "md"
}) {
  const currentSize = `${sizeStyles3[size]}`;
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      className: `${currentSize} relative`,
      onClick,
      "aria-label": "\uC815\uBCF4 \uBC84\uD2BC"
    },
    /* @__PURE__ */ React4.createElement(Image10, { src: "/icons/info-ico.svg", alt: "info button", fill: true, priority: true })
  );
}
var sizeStyles4 = {
  sm: "w-[1.125rem] h-[1.125rem]",
  md: "w-[1.5rem] h-[1.5rem]",
  lg: "w-[2rem] h-[2rem]"
};
function SettingBtn({
  onClick,
  size = "md"
}) {
  const currentSize = `${sizeStyles4[size]}`;
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      className: `${currentSize} relative`,
      onClick,
      "aria-label": "\uC124\uC815 \uBC84\uD2BC"
    },
    /* @__PURE__ */ React4.createElement(Image10, { src: "/icons/setting-ico.svg", alt: "setting button", fill: true, priority: true })
  );
}
var Input = forwardRef(
  ({
    inputType = "text",
    value,
    onChange,
    placeholder,
    hasError = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ React4.createElement(
      motion.div,
      {
        animate: hasError ? {
          x: [0, -8, 8, -6, 6, -4, 4, 0]
        } : {},
        transition: { duration: 0.4 },
        className: `
          w-full 
          h-[2.75rem]
          py-[0.625rem]
          px-[0.75rem]
          rounded-[0.5rem]
          bg-neutral-gray-bg
          ${hasError ? "border border-error" : "border-none"}
        `
      },
      /* @__PURE__ */ React4.createElement(
        "input",
        {
          ref,
          type: inputType,
          value,
          onChange,
          placeholder,
          ...props,
          className: "\r\n            flex-1\r\n            font-regular\r\n            text-base \r\n            placeholder-[#808080]\r\n            bg-transparent\r\n            focus:outline-none\r\n          "
        }
      )
    );
  }
);
Input.displayName = "Input";
var Input_default = Input;
var sizeMap = {
  md: "w-[6.5rem] h-[1.5625rem]",
  lg: "w-[9.1875rem] h-[2.24875rem]"
};
function Logo({ size = "md" }) {
  return /* @__PURE__ */ React4.createElement("div", { className: `${sizeMap[size]} relative` }, /* @__PURE__ */ React4.createElement(Image10, { src: "/icons/logo.svg", alt: "soridam logo", fill: true, priority: true }));
}
function NavItem({
  href,
  img,
  label,
  currentPath
}) {
  var _a, _b;
  const path = (_b = (_a = usePathname()) != null ? _a : currentPath) != null ? _b : "";
  const isActive = href === "/" ? path === "/" : path.startsWith(href);
  const prefersReducedMotion = useReducedMotion();
  return /* @__PURE__ */ React4.createElement(
    Link,
    {
      href,
      className: `
                w-[3.25rem] 
                h-[3.125rem] 
                ${flexColCenter} 
                gap-[0.375rem]
            `
    },
    /* @__PURE__ */ React4.createElement("div", { className: "w-[1.5rem] h-[1.5rem] relative" }, /* @__PURE__ */ React4.createElement(AnimatePresence, { mode: "wait", initial: false }, isActive ? /* @__PURE__ */ React4.createElement(
      motion.div,
      {
        key: "active-icon",
        initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
        transition: { duration: 0.18 },
        className: "absolute inset-0"
      },
      /* @__PURE__ */ React4.createElement(Image10, { src: img.activeIcon, alt: img.iconLabel, fill: true, priority: true })
    ) : /* @__PURE__ */ React4.createElement(
      motion.div,
      {
        key: "idle-icon",
        initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
        transition: { duration: 0.18 },
        className: "absolute inset-0"
      },
      /* @__PURE__ */ React4.createElement(Image10, { src: img.icon, alt: img.iconLabel, fill: true, priority: true })
    ))),
    /* @__PURE__ */ React4.createElement(
      motion.p,
      {
        className: `
                    ${flexRowCenter}
                    font-pretendard 
                    font-medium 
                    text-sm 
                    leading-5 
                    tracking-[0]
                `,
        animate: {
          color: isActive ? "var(--color-primary-blue)" : "var(--color-neutral-black)",
          scale: prefersReducedMotion ? 1 : isActive ? 1.02 : 1
        },
        transition: { duration: 0.18 }
      },
      label
    )
  );
}
function PwInput({
  value,
  onChange,
  placeholder = "\uBE44\uBC00\uBC88\uD638",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `
                w-full 
                h-[2.75rem]
                py-[0.625rem]
                px-4
                ${flexRow}
                items-center
                gap-[0.5rem]
                bg-neutral-gray-bg
                rounded-[0.5rem]
            `
    },
    /* @__PURE__ */ React4.createElement("div", { className: "w-[1.125rem] h-[1.125rem] relative" }, /* @__PURE__ */ React4.createElement(Image10, { src: "/icons/login/password-ico.svg", alt: "password icon", fill: true, priority: true })),
    /* @__PURE__ */ React4.createElement(
      "input",
      {
        type: showPassword ? "text" : "password",
        value,
        onChange,
        placeholder,
        ...props,
        className: "\r\n                    flex-1\r\n                    font-regular\r\n                    text-base \r\n                    placeholder-[#808080]\r\n                    bg-transparent\r\n                    focus:outline-none\r\n                "
      }
    ),
    /* @__PURE__ */ React4.createElement(AnimatePresence, null, value && value.length > 0 && /* @__PURE__ */ React4.createElement(
      motion.button,
      {
        key: "pw-toggle-btn",
        type: "button",
        onClick: togglePassword,
        className: "w-[1.5rem] h-[1.5rem] relative",
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
        transition: { duration: 0.2 }
      },
      /* @__PURE__ */ React4.createElement(AnimatePresence, { mode: "wait", initial: false }, showPassword ? /* @__PURE__ */ React4.createElement(
        motion.div,
        {
          key: "open",
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          transition: { duration: 0.2 },
          className: "absolute inset-0"
        },
        /* @__PURE__ */ React4.createElement(
          Image10,
          {
            src: "/icons/login/pw-open-ico.svg",
            alt: "password show",
            fill: true,
            priority: true
          }
        )
      ) : /* @__PURE__ */ React4.createElement(
        motion.div,
        {
          key: "close",
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          transition: { duration: 0.2 },
          className: "absolute inset-0"
        },
        /* @__PURE__ */ React4.createElement(
          Image10,
          {
            src: "/icons/login/pw-close-ico.svg",
            alt: "password hide",
            fill: true,
            priority: true
          }
        )
      ))
    ))
  );
}
function RadiusButton({
  label,
  active = false,
  onClick,
  className
}) {
  const commonStyles = `${flexRowCenter} w-[6.1875rem] h-[2.5rem] rounded-[1.25rem] font-regular text-sm`;
  const activeStyles = "border border-primary text-primary-blue-strong bg-neutral-gray-bg";
  const inactiveStyles = "border border-neutral-gray-soft text-neutral-gray-sub bg-white";
  const buttonStyle = active ? activeStyles : inactiveStyles;
  const finalClassNames = `${commonStyles} ${buttonStyle} ${className || ""}`;
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      type: "button",
      className: finalClassNames,
      onClick
    },
    label
  );
}
function SearchBar({
  placeholder = "\uC9C0\uBC88, \uB3C4\uB85C\uBA85 \uC8FC\uC18C \uAC80\uC0C9",
  onClick
}) {
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      type: "button",
      onClick,
      className: `
                w-[16.25rem]
                h-[2.5rem]
                py-2
                px-3
                ${flexRow}
                items-center
                gap-[0.5rem]
                bg-neutral-gray-bg
                rounded-[6.25rem] 
                border border-neutral-gray-soft
            `
    },
    /* @__PURE__ */ React4.createElement("div", { className: "w-[1.5rem] h-[1.5rem] relative" }, /* @__PURE__ */ React4.createElement(Image10, { src: "/icons/search-ico.svg", alt: "search-icon", fill: true, priority: true })),
    /* @__PURE__ */ React4.createElement(
      "div",
      {
        className: "\r\n                    flex-1\r\n                    font-regular\r\n                    text-base \r\n                    text-[#808080]\r\n                    bg-transparent\r\n                    text-start\r\n                "
      },
      placeholder
    )
  );
}
var StepIndicator = ({
  totalSteps,
  currentStep,
  className = ""
}) => {
  return /* @__PURE__ */ React4.createElement("div", { className: `${flexRow} items-center space-x-2 ${className}` }, Array.from({ length: totalSteps }).map((_, index) => {
    const stepNumber = index + 1;
    const isActive = stepNumber <= currentStep;
    return /* @__PURE__ */ React4.createElement(
      motion.div,
      {
        key: index,
        className: "w-2.5 h-2.5 rounded-full",
        animate: {
          backgroundColor: isActive ? "#007bff" : "#F5F5F5",
          // active / inactive 색상
          scale: isActive ? 1.2 : 1
          // 선택된 단계만 살짝 커지게
        },
        transition: { duration: 0.3 }
      }
    );
  }));
};
var StepIndicator_default = StepIndicator;
function BottomSheet({ isOpen, onClose, children }) {
  return /* @__PURE__ */ React4.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ React4.createElement(
    motion.div,
    {
      key: "overlay",
      className: "bg-black/60 fixed inset-0 w-full h-screen flex items-end",
      onClick: onClose,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    /* @__PURE__ */ React4.createElement(
      motion.div,
      {
        key: "bottomSheet",
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { type: "tween", duration: 0.3 },
        drag: "y",
        dragConstraints: { top: 0, bottom: 0 },
        dragElastic: 0.2,
        onDragEnd: (event, info) => {
          if (info.offset.y > 100) {
            onClose();
          }
        },
        className: "\r\n                            w-full\r\n                            h-[80vh]\r\n                            max-h-[40.3125rem]\r\n                            rounded-tl-lg \r\n                            rounded-tr-lg \r\n                            shadow-[0.25rem_0.25rem_0.8125rem_0px_#00000040]\r\n                            bg-white\r\n                            overflow-y-auto\r\n                        ",
        onClick: (e) => e.stopPropagation()
      },
      children
    )
  ));
}
var NAVBAR_HEIGHT_REM = 6.25;
var DEFAULT_HEIGHT_REM = 25.875;
var EXPAND_THRESHOLD_REM = 7.5;
var DISMISS_THRESHOLD_REM = 6.25;
var SNAP_RATIO = 0.6;
function ExpandBottomSheet({
  title,
  isOpen,
  onClose,
  children
}) {
  const [maxHeight, setMaxHeight] = useState(40);
  const [sheetHeight, setSheetHeight] = useState(DEFAULT_HEIGHT_REM);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const compute = () => {
      const vhInRem = window.innerHeight / 16;
      setMaxHeight(Math.max(18.75, vhInRem - NAVBAR_HEIGHT_REM));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  useEffect(() => {
    if (isOpen) {
      setExpanded(false);
      setSheetHeight(DEFAULT_HEIGHT_REM);
    }
  }, [isOpen]);
  const handleDrag = (_, info) => {
    if (expanded) return;
    setSheetHeight((prev) => {
      const deltaRem = info.delta.y / 16;
      const next = prev - deltaRem;
      return Math.min(Math.max(DEFAULT_HEIGHT_REM, next), maxHeight);
    });
  };
  const handleDragEnd = (_, info) => {
    if (expanded) return;
    const offsetRem = info.offset.y / 16;
    if (offsetRem > DISMISS_THRESHOLD_REM) {
      onClose();
      return;
    }
    if (-offsetRem > EXPAND_THRESHOLD_REM || sheetHeight >= maxHeight * SNAP_RATIO) {
      setExpanded(true);
      setSheetHeight(maxHeight);
      return;
    }
    setExpanded(false);
    setSheetHeight(DEFAULT_HEIGHT_REM);
  };
  return /* @__PURE__ */ React4.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ React4.createElement(
    motion.div,
    {
      key: "overlay",
      className: "bg-black/60 fixed inset-0 w-full flex items-end",
      style: { top: 0, left: 0, right: 0, bottom: `${NAVBAR_HEIGHT_REM}rem` },
      onClick: onClose,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    /* @__PURE__ */ React4.createElement(
      motion.div,
      {
        key: "bottomSheet",
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { type: "tween", duration: 0.3 },
        drag: expanded ? false : "y",
        dragConstraints: { top: 0, bottom: 0 },
        dragElastic: 0.2,
        dragMomentum: false,
        onDrag: handleDrag,
        onDragEnd: handleDragEnd,
        style: { height: `${sheetHeight}rem`, bottom: `${NAVBAR_HEIGHT_REM}rem` },
        className: `
              w-full
              max-h-[calc(100vh-6.25rem)]
              bg-white
              shadow-[0.25rem_0.25rem_0.8125rem_0px_#00000040]
              ${expanded ? "" : "rounded-tl-lg rounded-tr-lg"}
              overflow-y-auto
              transition-[height] duration-200
            `,
        onClick: (e) => e.stopPropagation()
      },
      expanded && /* @__PURE__ */ React4.createElement(
        motion.header,
        {
          className: `
                  w-full 
                  h-[3.8125rem] 
                  pt-[0.6875rem] 
                  pr-[8.3125rem] 
                  pb-[1.625rem] 
                  pl-[1rem]
                  ${flexRow}
                  items-center
                  justify-between
                `,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.25 }
        },
        /* @__PURE__ */ React4.createElement(BackButton, { onClick: onClose }),
        /* @__PURE__ */ React4.createElement("p", { className: "text-xl font-bold color-neutral-black" }, title)
      ),
      /* @__PURE__ */ React4.createElement(
        "main",
        {
          className: `
                w-full h-auto pr-[1rem] pl-[1rem]
                ${!expanded ? "pt-[2rem]" : "pt-0"} 
              `
        },
        children
      )
    )
  ));
}
function DecibelButton({
  level,
  label,
  active,
  className = "",
  textClassName = "",
  onClick
}) {
  return /* @__PURE__ */ React4.createElement(
    "button",
    {
      onClick,
      className: `
                min-w-[10.125rem] 
                min-h-[2.5rem] 
                rounded-[1.25rem] 
                border 
                px-[1rem]
                py-[0.625rem] 
                ${active ? "border-primary bg-neutral-gray-bg" : "border-neutral-gray-soft bg-white"} 
                ${className}
                ${flexRowCenter}
            `
    },
    /* @__PURE__ */ React4.createElement("div", { className: `${flexRowCenter} gap-[0.375rem]` }, /* @__PURE__ */ React4.createElement(Decibel, { level, size: "sm" }), /* @__PURE__ */ React4.createElement(
      "p",
      {
        className: `
                        text-sm
                        font-regular 
                        ${active ? "text-primary-blue-strong" : "text-neutral-gray-sub"} 
                        ${flexRowCenter}
                        ${textClassName}
                    `
      },
      label
    ))
  );
}
var labelMap = {
  quiet: "\uC870\uC6A9\uD568",
  moderate: "\uC801\uC808\uD568",
  loud: "\uC2DC\uB044\uB7EC\uC6C0"
};
function DecibelLabel({ level }) {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `
            min-w-[4.625rem]
            h-[1.5rem]
            ${flexRow} 
            items-center 
            gap-[0.5rem]
        `
    },
    /* @__PURE__ */ React4.createElement(Decibel, { size: "md", level }),
    /* @__PURE__ */ React4.createElement("p", { className: "font-medium text-base text-neutral-black" }, labelMap[level])
  );
}
var labelMap2 = {
  default: "\uCE21\uC815\uC804",
  quiet: "\uC870\uC6A9\uD568",
  moderate: "\uC801\uC808\uD568",
  loud: "\uC2DC\uB044\uB7EC\uC6C0"
};
function MDecibelLabel({ level }) {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `
                min-w-[3.25rem]
                h-[3.875rem]
                ${flexCol}
                items-center
                gap-[0.625rem]
            `
    },
    /* @__PURE__ */ React4.createElement(Decibel, { size: "lg", level }),
    /* @__PURE__ */ React4.createElement(
      "p",
      {
        className: `
                    text-xl 
                    font-bold 
                    ${level === "default" ? "text-neutral-sub" : "text-primary"}
                `
      },
      labelMap2[level]
    )
  );
}
var overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};
var modalVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 }
};
function Modal({ isOpen, onClose, children }) {
  return /* @__PURE__ */ React4.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(
    motion.div,
    {
      key: "overlay",
      className: `bg-black/60 fixed inset-0 ${flexColCenter} w-full h-screen`,
      onClick: onClose,
      variants: overlayVariants,
      initial: "hidden",
      animate: "visible",
      exit: "exit"
    },
    /* @__PURE__ */ React4.createElement(
      motion.div,
      {
        key: "modal",
        className: "bg-white \r\n                          shadow-modal \r\n                          rounded-[0.960625rem] \r\n                          p-[1rem_0.96875rem] \r\n                        ",
        variants: modalVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit"
      },
      children
    )
  )));
}
var container = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.06, duration: 0.18 }
  }
};
var child = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } }
};
function NavList({
  items,
  currentPath
}) {
  return /* @__PURE__ */ React4.createElement(
    motion.nav,
    {
      variants: container,
      initial: "hidden",
      animate: "show",
      className: `
                w-full 
                h-[6.25rem] 
                ${flexRowCenter}
                shadow-[0_-1px_4px_0_rgba(0,0,0,0.15)] 
                pt-2.5 
                pr-[2.9375rem] 
                pb-10 
                pl-[2.875rem]
            `
    },
    /* @__PURE__ */ React4.createElement(
      "div",
      {
        className: `
                    w-full
                    h-[3.125rem]
                    ${flexRow} 
                    items-center 
                    justify-between
                `
      },
      items.map((item) => /* @__PURE__ */ React4.createElement(motion.div, { key: item.href, variants: child }, /* @__PURE__ */ React4.createElement(
        NavItem,
        {
          key: item.href,
          href: item.href,
          img: item.img,
          label: item.label,
          currentPath
        }
      )))
    )
  );
}

export { BackButton, BottomSheet, Button_default as Button, CategoryIconButton, Decibel, DecibelButton, DecibelLabel, EmailInput, ExpandBottomSheet, FilterBtn as FilterButton, InfoBtn as InfoButton, Input_default as Input, Logo, MDecibelLabel as MeasureDecibelLabel, Modal, NavItem, NavList, NoiseMeterChart, OneLineReviewInput, PwInput as PasswordInput, RadiusButton, SearchBar, SettingBtn as SettingButton, StepIndicator_default as StepIndicator, TimeDBChart };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map