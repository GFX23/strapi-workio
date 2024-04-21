import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";


type Props = {
  arrow: boolean;
  label: string;
  link: string;
  styles: "solid" | "outline";
};

export const buttonStyles = {
  solid: "bg-wblue-500 rounded-full center-all text-white p px-8 py-4 gap-2",
  outline: "bg-transparent border border-wblue-500 rounded-full center-all text-wblue-500 p px-6 py-2 gap-2"
};

export const Button: React.FC<Props> = ({label, arrow, link, styles = "solid"}) => {
  return (
    <Link href={link || ""} className={buttonStyles[styles]}>
      <p className="p-small-bold">{label}</p>
      {arrow && <BiRightArrowAlt />}
    </Link>
  );
}