import Image from "next/image";
import cs from "classnames";

type Props = {
  className?: string;
  title: string;
  type: string;
}

export const Headline: React.FC<Props> = ({className, title, type}) => {
  return (
    <div className={cs("flex flex-col", className)}>
      <Image src="logo-mini.svg" alt="line" width={33} height={11} />
      <div className="flex text-wrap">
        <p className={type}>{title}</p>
      </div>
    </div>
  );
}