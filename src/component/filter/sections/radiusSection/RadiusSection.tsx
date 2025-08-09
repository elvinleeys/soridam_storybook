import { flexCol } from "@/mixin/style";
import RadiusButton from "../../buttons/radiusButton/RadiusButton";

interface RadiusFilterGroupProps {
    title: string; // section title
    options: string[]; // option button list
    selected: string | null; // 활성화된 option button
    onSelect: (option: string) => void; // option button 클릭 이벤트 핸들러
}

export default function RadiusSection({
    title,
    options,
    selected,
    onSelect
}: RadiusFilterGroupProps) {
    return (
        <div className={`${flexCol} gap-[0.625rem]`}>
            <p 
                className={`
                    font-medium
                    text-base
                    leading-[1.05rem]
                    text-neutral-black
                `}
            >
                {title}
            </p>
            <ul 
                className={`
                    ${flexCol}
                    gap-[0.625rem]
                `}
            >
                {options.map((option) => (
                    <li 
                        key={option}
                    >
                        <RadiusButton
                            label={option}
                            active={selected === option}
                            onClick={() => onSelect(option)}
                        />
                    </li>
                ))}
            </ul>
        </div>
  );
}