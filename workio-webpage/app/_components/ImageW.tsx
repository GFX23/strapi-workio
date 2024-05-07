import Image from "next/image";
import { siteConfig } from "../../siteConfig";
import { UploadFile } from "../_gql/types";
import cs from "classnames";

type IProps = {
  data?: UploadFile;
  abs?: boolean;
  cover?: boolean;
  rounded?: boolean;
};

export const ImageW: React.FC<IProps> = ({
  data,
  abs,
  cover,
  rounded
}) => {

  const { url, alternativeText, width, height } = data || {};

  const absProps = {
    fill: true,
  };

  const relProps = {
    width: width || 0,
    height: height || 0,
  };
  return (
    <Image
      src={url ? siteConfig.strapiUrl + url : ""}
      alt={alternativeText || ""}
      sizes="400px"
      {...(abs ? absProps : relProps)}
      className={cs(rounded && "rounded-xl flex",cover ? "object-cover" : "object-contain") }
    />
  );
};
