import { siteConfig } from "../../siteConfig";
import { ComponentSectionSection2 } from "../_gql/types";
import { Headline } from "./Headline";
import Image from "next/image";

type Props = {
  section2: ComponentSectionSection2;
};

export const Section2: React.FC<Props> = async ({section2}) => {
  return (
    <div className="bg-blue-100 w-full flex justify-center">
      <div
        id="section2"
        className="flex xl:flex-row-reverse max-w-[1200px] flex-col mx-4 xl:items-start items-center w-full pt-10"
      >
        <div className="flex flex-col items-center xl:items-start xl:w-1/2">
          <Headline
            title={section2?.title || ""}
            className="xl:pt-6 pt-8 xl:text-left text-center xl:items-start items-center"
            type="h2-bold"
          />
          <p className="p-bold mt-6 text-center xl:text-left">
            {section2?.subTitle}
          </p>
          <p className="p mt-4 text-center xl:text-left">{section2?.perex}</p>
          <p className="p mt-4 text-center xl:text-left">{section2?.perex2}</p>
        </div>
        <div className="relative h-[506px] xl:h-[520px] mt-5">
          <div className="absolute xl:-top-[160px] xl:-left-[740px] -left-[230px] xl:w-[800px] xl:h-[695px] w-[444px] h-[456px]">
            <Image
              src={
                section2?.picture?.data?.attributes?.url
                  ? siteConfig.strapiUrl +
                    section2?.picture?.data?.attributes?.url!
                  : ""
              }
              alt={section2?.picture?.data?.attributes?.alternativeText || ""}
              fill
              sizes="500px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
