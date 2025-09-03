import * as react from 'react';

declare const buttonStyles: {
    primary: string;
    secondary: string;
    tertiary: string;
    ghost: string;
};
declare const sizeStyles$3: {
    large: string;
    medium: string;
    small: string;
    xsmall: string;
};
type ButtonType = keyof typeof buttonStyles;
type ButtonSize = keyof typeof sizeStyles$3;
interface ButtonProps {
    /** What button type? */
    buttonType?: ButtonType;
    /** How large should the button be? */
    size?: ButtonSize;
    /** Button contents */
    children: React.ReactNode;
    /** Click handler */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Optional custom class to override default styles */
    className?: string;
}
/** Primary UI component for user interaction */
declare function Button({ buttonType, size, children, onClick, className, ...props }: ButtonProps): react.JSX.Element;

type CategoryIconButtonProps = {
    iconSrc: string;
    label: string;
    active?: boolean;
    className?: string;
    iconClassName?: string;
    textClassName?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
declare function CategoryIconButton({ iconSrc, label, active, className, iconClassName, textClassName, onClick, }: CategoryIconButtonProps): react.JSX.Element;

interface NoiseMeterChartProps {
    db: number;
    time: string;
}
declare function NoiseMeterChart({ db, time }: NoiseMeterChartProps): react.JSX.Element;

interface TimeDBChartProps {
    data: {
        timeRange: string;
        db: number;
        count: number;
    }[];
    currentRange: string;
}
declare function TimeDBChart({ data, currentRange }: TimeDBChartProps): react.JSX.Element;

interface OneLineReviewInputProps {
    value: string;
    onChange: (value: string) => void;
    submitAttempted?: boolean;
    maxLength?: number;
}
declare function OneLineReviewInput({ value, onChange, submitAttempted, maxLength, }: OneLineReviewInputProps): react.JSX.Element;

declare const DECIBEL_ICONS: {
    default: string;
    quiet: string;
    moderate: string;
    loud: string;
};
declare const SIZE_CLASSES: {
    sm: string;
    md: string;
    lg: string;
};
type DecibelIconSize = keyof typeof SIZE_CLASSES;
type DecibelIconLevel = keyof typeof DECIBEL_ICONS;
interface DecibelIconProps {
    level?: DecibelIconLevel;
    size?: DecibelIconSize;
    iconClassName?: string;
}
declare function Decibel({ level, size, iconClassName, }: DecibelIconProps): react.JSX.Element;

type EmailInputProps = {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};
declare function EmailInput({ value, onChange, placeholder, ...props }: EmailInputProps): react.JSX.Element;

type DecibelButtonProps$1 = {
    label: string;
    iconSrc?: string;
    className?: string;
    textClassName?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};
declare function FilterBtn({ label, iconSrc, className, textClassName, onClick, }: DecibelButtonProps$1): react.JSX.Element;

declare const sizeStyles$2: {
    sm: string;
    md: string;
    lg: string;
};
type BackButtonSize = keyof typeof sizeStyles$2;
interface BackButtonProps {
    size?: BackButtonSize;
    href?: string;
    onClick?: () => void;
}
declare function BackButton({ size, href, onClick, }: BackButtonProps): react.JSX.Element;

declare const sizeStyles$1: {
    sm: string;
    md: string;
    lg: string;
};
type InfoBtnSize = keyof typeof sizeStyles$1;
interface InfoBtnProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    size?: InfoBtnSize;
}
declare function InfoBtn({ onClick, size, }: InfoBtnProps): react.JSX.Element;

declare const sizeStyles: {
    sm: string;
    md: string;
    lg: string;
};
type SettingBtnSize = keyof typeof sizeStyles;
interface SettingBtnProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    size?: SettingBtnSize;
}
declare function SettingBtn({ onClick, size, }: SettingBtnProps): react.JSX.Element;

declare const Input: react.ForwardRefExoticComponent<{
    inputType?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    hasError?: boolean;
} & react.InputHTMLAttributes<HTMLInputElement> & react.RefAttributes<HTMLInputElement>>;

type LogoSize = "md" | "lg";
declare function Logo({ size }: {
    size?: LogoSize;
}): react.JSX.Element;

interface NavImg {
    icon: string;
    iconLabel: string;
    activeIcon: string;
}
type NavItemProps = {
    href: string;
    img: NavImg;
    label: string;
    currentPath?: string;
};
declare function NavItem({ href, img, label, currentPath, }: NavItemProps): react.JSX.Element;

type PwInputProps = {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};
declare function PwInput({ value, onChange, placeholder, ...props }: PwInputProps): react.JSX.Element;

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare function BottomSheet({ isOpen, onClose, children }: BottomSheetProps): react.JSX.Element;

interface ExpandBottomSheetProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare function ExpandBottomSheet({ title, isOpen, onClose, children, }: ExpandBottomSheetProps): react.JSX.Element;

type DecibelButtonProps = {
    level: DecibelIconLevel;
    label: string;
    active?: boolean;
    className?: string;
    textClassName?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
declare function DecibelButton({ level, label, active, className, textClassName, onClick, }: DecibelButtonProps): react.JSX.Element;

type DecibelLevel$1 = "quiet" | "moderate" | "loud";
interface DecibelLabelProps {
    level: DecibelLevel$1;
}
declare function DecibelLabel({ level }: DecibelLabelProps): react.JSX.Element;

type DecibelLevel = "default" | "quiet" | "moderate" | "loud";
interface MeasureDecibelLabelProps {
    level: DecibelLevel;
}
declare function MDecibelLabel({ level }: MeasureDecibelLabelProps): react.JSX.Element;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare function Modal({ isOpen, onClose, children }: ModalProps): react.JSX.Element;

interface NavListItem {
    href: string;
    label: string;
    img: {
        icon: string;
        iconLabel: string;
        activeIcon: string;
    };
}
interface NavListProps {
    items: NavListItem[];
    currentPath?: string;
}
declare function NavList({ items, currentPath }: NavListProps): react.JSX.Element;

export { BackButton, BottomSheet, Button, CategoryIconButton, Decibel, DecibelButton, DecibelLabel, EmailInput, ExpandBottomSheet, FilterBtn as FilterButton, InfoBtn as InfoButton, Input, Logo, MDecibelLabel as MeasureDecibelLabel, Modal, NavItem, NavList, NoiseMeterChart, OneLineReviewInput, PwInput as PasswordInput, SettingBtn as SettingButton, TimeDBChart };
