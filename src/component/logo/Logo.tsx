import Image from "next/image";

type LogoSize = "md" | "lg";

const sizeMap: Record<LogoSize, string> = {
  md: "w-[6.5rem] h-[1.5625rem]",
  lg: "w-[9.1875rem] h-[2.24875rem]",
};

export default function Logo({ size = "md" }: { size?: LogoSize }) {
    return (
        <div className={`${sizeMap[size]} relative`} >
            <Image src="/icons/logo.svg" alt="soridam logo" fill />
        </div>
    );
}