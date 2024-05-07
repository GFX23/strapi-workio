import Image from "next/image";
import cs from "classnames";

type Props = {
  className?: string;
  title: string;
  type: string;
  small?: boolean;
}

export const Headline: React.FC<Props> = ({className, title, type, small}) => {
  return (
    <div className={cs("flex flex-col", className)}>
      <Image src="/logo-mini.svg" alt="line" width={!small ? 33 : 25} height={!small ? 11 : 8} />
      <div className="flex text-wrap">
        <p className={type}>{title}</p>
      </div>
    </div>
  );
}