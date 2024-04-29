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
  link: string;
  styles: ButtonStyles;
};

export const buttonStyles = {
  solid: "bg-wblue-500 rounded-full center-all text-white p-small-bold px-6 py-5 gap-2",
  outline: "bg-transparent border border-wblue-500 rounded-full center-all text-wblue-500 p-small-bold px-6 py-5 gap-2",
  navlink: "link",
  "navlink-footer": "text-white p-footer",
  "navlink-red": "link text-wred-500"
};

export const ButtonLink: React.FC<Props> = ({label, link, styles = "solid"}) => {
  const arrow = styles === "solid" || styles === "outline" ? true : false;
  return (
    <Link href={link || ""} className={buttonStyles[styles as keyof typeof buttonStyles]}>
      <p className="text-nowrap">{label}</p>
      {arrow && <BiRightArrowAlt />}
    </Link>
  );
}