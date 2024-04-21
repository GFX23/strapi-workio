import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";


export enum ButtonStyles {
  SOLID = "solid",
  OUTLINE = "outline",
  NAVLINK = "navlink",
  NAVLINK_RED = "navlink-red"
}

type Props = {
  label: string;
  link: string;
  styles: ButtonStyles;
};

export const buttonStyles = {
  solid: "bg-wblue-500 rounded-full center-all text-white p px-8 py-4 gap-2",
  outline: "bg-transparent border border-wblue-500 rounded-full center-all text-wblue-500 p px-6 py-2 gap-2",
  navlink: "link",
  "navlink-red": "link text-wred-500"
};

export const ButtonLink: React.FC<Props> = ({label, link, styles = "solid"}) => {
  const arrow = styles === "navlink" || styles === "navlink-red" ? false : true;
  return (
    <Link href={link || ""} className={buttonStyles[styles as keyof typeof buttonStyles]}>
      <p className="p-small-bold">{label}</p>
      {arrow && <BiRightArrowAlt />}
    </Link>
  );
}