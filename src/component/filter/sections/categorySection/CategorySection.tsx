import { flexCol, flexRow, flexRowCenter } from "@/mixin/style";
import CategoryIconButton from "../../buttons/categoryIconButton/CategoryIconButton";
import Image from "next/image";

interface CategoryOption {
    label: string;       // 데시벨 이름
    iconSrc: string;     // 데시벨 아이콘 경로
}

type CategorySectionProps = {
  title: string;  //Section 제목
  options: CategoryOption[]; // 데시벨 옵션 버튼 항목과 이미지 경로
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  selected: string[] | string; 
  onSelect: (option: string) => void;
  allowMultiple: true;
};

export default function DecibelSection({
    title,
    options,
    onClose,
    selected,
    onSelect,
    allowMultiple = true,
}: CategorySectionProps) {

    return (
        <div 
            className={`
                w-[21.875rem] 
                ${flexCol} 
                gap-[1.375rem]
            `}
        >
            {/* 제목 + 중복선택 표시 */}
            <div className={`w-[21.875rem] h-[2rem] ${flexRow} items-end justify-between`}>
                <div className={`${flexRow} gap-[0.6875rem]`}>
                    <p className="font-medium text-base text-neutral-black">
                        {title}
                    </p>
                    {allowMultiple && (
                        <p className={`text-[#757575] text-sm ${flexRowCenter}`}>
                            중복선택 가능
                        </p>
                    )}
                </div>
                <button 
                    onClick={onClose}
                    className="w-8 h-8 relative"
                >
                    <Image src="/icons/filter/close.svg" alt="close button" fill />
                </button>
            </div>
            {/* 옵션 목록 */}
            <div
                className={`${flexRow} overflow-x-auto whitespace-nowrap w-[21.875rem]`}
                // scrollbar-hide 같은 플러그인을 추가하였으나, 
                // 스토리북내 scrollbar가 숨겨지면 드래그가 안되는 이슈로 제거
            >
                <ul className={`${flexRow} items-center gap-2`}>
                    {options.map((option) => (
                        <li key={option.label} className="inline-block">
                            <CategoryIconButton
                                label={option.label}
                                iconSrc={option.iconSrc}
                                active={
                                    allowMultiple
                                    ? (selected as string[]).includes(option.label)
                                    : selected === option.label
                                }
                                onClick={() => onSelect(option.label)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  );
}