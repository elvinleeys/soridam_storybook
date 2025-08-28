import { flexCol, flexRow, flexRowCenter } from "@/mixin/style";
import DecibelButton from "@/design-system/molecule/decibelButton/DecibelButton";

interface DecibelOption {
    label: string;       // 데시벨 이름
    decibelLv: "default" | "quiet" | "moderate" | "loud";     // 데시벨 아이콘 경로
}

interface DecibelSectionProps {
    title: string;                 // section 제목
    options: DecibelOption[];      // 옵션 목록
    selected: string[] | string;            // 선택된 옵션들
    onSelect: (option: string) => void; // 버튼 클릭 핸들러
    allowMultiple?: boolean;       // 중복 선택 가능 여부
}

export default function DecibelSection({
    title,
    options,
    selected,
    onSelect,
    allowMultiple = true,
}: DecibelSectionProps) {

    return (
        <div className={`${flexCol} gap-5`}>
            {/* 제목 + 중복선택 표시 */}
            <div className={`${flexRow} gap-2`}>
                <p className="font-medium text-base text-neutral-black">
                    {title}
                </p>
                {allowMultiple && (
                    <p className={`text-[#757575] text-sm ${flexRowCenter}`}>
                        중복선택 가능
                    </p>
                )}
            </div>

            {/* 옵션 목록 */}
            <ul className={`${flexCol} gap-4`}>
                {options.map((option, index) => (
                    <li key={option.label} className={`${flexRow} items-center`}>
                        <DecibelButton
                            label={option.label}
                            level={option.decibelLv}
                            active={
                                allowMultiple
                                ? (selected as string[]).includes(option.label)
                                : selected === option.label
                            }
                            onClick={() => onSelect(option.label)}
                        />
                        {index === 0 && (
                            <span className={`ml-2 text-[#757575] text-sm ${flexRowCenter}`}>
                                기본값
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
  );
}