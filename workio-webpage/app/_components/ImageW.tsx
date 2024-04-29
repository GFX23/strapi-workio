import Image from "next/image";
import { siteConfig } from "../../siteConfig";
import { UploadFile } from "../_gql/types";

type IProps = {
  data: UploadFile;
};

export const ImageW: React.FC<IProps> = ({
  data: { url, alternativeText, width, height },
}) => {
  return (
    <Image
      src={url ? siteConfig.strapiUrl + url : ""}
      alt={alternativeText || ""}
      width={width || 0}
      height={height || 0}
    />
  );
};
