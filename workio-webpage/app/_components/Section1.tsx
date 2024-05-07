import { siteConfig } from "../../siteConfig";
import { ComponentSectionSection1 } from "../_gql/types";
import { ButtonLink, ButtonStyles } from "./ButtonLink";
import { Headline } from "./Headline";
import Image from "next/image";

type Props = {
  section1: ComponentSectionSection1;
};

export const Section1: React.FC<Props> = async ({section1}) => {
  return (
    <div className="bg-blue-100 w-full flex justify-center pt-14">
      <div
        id="section1"
        className="flex xl:flex-row relative max-w-[1200px] flex-col xl:items-start items-center xl:h-fit w-full mx-4 pt-10"
      >
        <div className="w-[484px] h-[484px] absolute bg-gradient-to-r from-wred-500 rounded-full rotate-[150deg] left-[1140px] top-96"></div>
        <div className="w-[787px] h-[787px] absolute bg-gradient-to-r from-wblue-500 rounded-full rotate-[250deg] -left-[850px] top-56"></div>
        <div className="flex flex-col items-center xl:items-start xl:w-1/2">
          <Headline
            title={section1?.title || ""}
            className="xl:pt-28 pt-4 xl:text-left text-center xl:items-start items-center"
            type="h1-bold"
          />
          <p className="p mt-8 text-center xl:text-left">{section1?.perex}</p>
          <div className="flex xl:flex-row flex-col  w-fit gap-6 mt-8">
            {section1?.linkButton?.map((button, idx) => (
              <ButtonLink
                key={idx}
                link={button?.link || ""}
                label={button?.title!}
                size={"large"}
                styles={button?.style as ButtonStyles}
              />
            ))}
          </div>
        </div>
        <div className="relative h-[506px] xl:h-[700px] mt-5">
          <div className="flex absolute xl:top-[0px] xl:left-[0px] -left-[170px] xl:relative xl:w-[652px] xl:h-[695px] w-[484px] h-[506px]">
            <Image
              src={
                section1?.picture?.data?.attributes?.url
                  ? siteConfig.strapiUrl +
                    section1?.picture?.data?.attributes?.url!
                  : ""
              }
              alt={section1?.picture?.data?.attributes?.alternativeText || ""}
              fill
              priority
              sizes="500px"
              className="object-contain"
            />
          </div>
          <div className="flex absolute xl:top-[340px] animate-bounce xl:left-[0px] top-[250px] -left-[170px] xl:w-[104px] xl:h-[80px] w-[76px] h-[58px]">
            <Image
              src={
                section1?.buble_picture?.data?.attributes?.url
                  ? siteConfig.strapiUrl +
                    section1?.buble_picture?.data?.attributes?.url!
                  : ""
              }
              alt={
                section1?.buble_picture?.data?.attributes?.alternativeText || ""
              }
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
