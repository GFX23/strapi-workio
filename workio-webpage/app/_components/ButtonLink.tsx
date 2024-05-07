import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import cs from "classnames";


export enum ButtonStyles {
  SOLID = "solid",
  OUTLINE = "outline",
  NAVLINK = "navlink",
  NAVLINK_RED = "navlinkRed",
  NAVLINK_FOOTER = "navlinkFooter",
}

type Props = {
  label: string;
  link: string;
  styles: ButtonStyles;
  size?: "small" | "medium" | "large";
};

export const buttonStyles = {
  solid:
    "bg-wblue-500 rounded-full center-all text-white p-small-bold px-6 gap-2",
  outline:
    "bg-transparent border border-wblue-500 rounded-full center-all text-wblue-500 p-small-bold px-6 gap-2",
  navlink: "link",
  navlinkFooter: "text-white p-footer",
  navlinkRed: "link text-wred-500",
};

export const sizes = {
  small: "py-2.5",
  medium: "py-3.5",
  large: "py-5",
};

export const ButtonLink: React.FC<Props> = ({label, link, styles = "solid", size = "medium"}) => {
  const arrow = styles === "solid" || styles === "outline" ? true : false;
  return (
    <Link aria-label={`Link to: ${link}`} href={link || ""} className={cs(buttonStyles[styles as keyof typeof buttonStyles], sizes[size as keyof typeof sizes] )}>
      <p className="text-nowrap">{label}</p>
      {arrow && <BiRightArrowAlt size={20} />}
    </Link>
  );
}