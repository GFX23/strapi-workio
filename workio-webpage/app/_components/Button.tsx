import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";


export enum ButtonStyles {
  SOLID = "solid",
  OUTLINE = "outline",
  NAVLINK = "navlink",
  NAVLINK_RED = "navlink-red",
  NAVLINK_FOOTER = "navlink-footer"
}

type Props = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style: ButtonStyles;
};

export const buttonStyles = {
  solid: "bg-wblue-500 rounded-full center-all text-white p-bold px-8 py-3 gap-2",
  outline: "bg-transparent border border-wblue-500 rounded-full center-all text-wblue-500 p-bold px-6 py-2 gap-2",
  navlink: "link",
  "navlink-footer": "text-white p-footer",
  "navlink-red": "link text-wred-500"
};

export const Button: React.FC<Props> = ({label = "Popisek", onClick, type, style = "solid"}) => {
  const arrow = style === "solid" || style === "outline" ? true : false;
  return (
    <button onClick={onClick} type={type} className={buttonStyles[style as keyof typeof buttonStyles]}>
      <p>{label}</p>
      {arrow && <BiRightArrowAlt />}
    </button>
  );
}