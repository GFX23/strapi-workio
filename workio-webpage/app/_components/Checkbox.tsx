import Image from "next/image";

type Props = {
  label: string | JSX.Element;
  onChange?: () => void;
}

export const Checkbox: React.FC<Props> = ({ label, onChange }) => {
  return (
    <div className="flex gap-2 items-center relative">
      <input type="checkbox" onChange={onChange} className="peer w-[18px] h-[18px] shrink-0 appearance-none border-2 rounded-sm border-wblue-200 checked:bg-wblue-200" />
      <Image src="/checkmark.svg" alt="check" width={12} height={9} className="absolute left-0.5 hidden peer-checked:block pointer-events-none" />
      <div className="p ml-1 flex items-center flex-wrap">{label}</div>
    </div>
  );
}