import { flexCol, flexRow, flexRowCenter } from "@/mixin/style";
import DecibelButton from "../../buttons/decibelButton/DecibelButton";

interface DecibelOption {
    label: string;       // 데시벨 이름
    iconSrc: string;     // 데시벨 아이콘 경로
}

type MultiSelectProps = {
  title: string;  //Section 제목
  options: DecibelOption[]; // 데시벨 옵션 버튼 항목과 이미지 경로
  selected: string[]; 
  onSelect: (option: string) => void;
  allowMultiple: true;
};

type SingleSelectProps = {
  title: string;
  options: DecibelOption[];
  selected: string;
  onSelect: (option: string) => void;
  allowMultiple?: false;
};

type SelectProps = MultiSelectProps | SingleSelectProps;

export default function DecibelSection({
    title,
    options,
    selected,
    onSelect,
    allowMultiple = true,
}: SelectProps) {

    return (
        <div className={`${flexCol} gap-5`}>
            {/* 제목 + 중복선택 표시 */}
            <div className={`${flexRow} gap-2`}>
                <p className="font-medium text-base text-neutral-black">
                    {title}
                </p>
                {allowMultiple && (
                    <p className={`text-neutral-gray text-sm ${flexRowCenter}`}>
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
                            iconSrc={option.iconSrc}
                            active={
                                allowMultiple
                                ? (selected as string[]).includes(option.label)
                                : selected === option.label
                            }
                            onClick={() => onSelect(option.label)}
                        />
                        {index === 0 && (
                            <span className={`ml-2 text-neutral-gray text-sm ${flexRowCenter}`}>
                                기본값
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
  );
}