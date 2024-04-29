import { gql } from "@apollo/client";
import { NextPage } from "next";
import { apolloClient } from "../../apolloClient";
import { HomepageEntity } from "../_gql/types";
import { Headline } from "../_components/Headline";
import Image from "next/image";
import { siteConfig } from "../../siteConfig";
import { ButtonLink, ButtonStyles } from "../_components/ButtonLink";
import { homepageData } from "../_gql/query/homepage";
import cs from "classnames";

type Props = {
  params: { [lang: string]: string };
};

const Home: NextPage<Props> = async ({ params: { lang } }) => {

  const r = await apolloClient.query({
    query: homepageData,
    variables: { locale: lang },
  });

  const data = r.data.homepage.data as HomepageEntity;

  const {section1, section2} = data.attributes || {};

  return (
    <main className="flex bg-wblue-100 justify-center">
      <div className="flex relative flex-col max-w-[1200px] mx-4 items-center pt-14 bg-wblue-100">
        <div className="w-[484px] h-[484px] absolute bg-gradient-to-r from-wred-500 rounded-full rotate-[150deg] left-[1140px] top-96"></div>
        <div className="w-[787px] h-[787px] absolute bg-gradient-to-r from-wblue-500 rounded-full rotate-[250deg] -left-[850px] top-56"></div>
        <div
          id="section1"
          className="flex xl:flex-row flex-col xl:items-start items-center xl:h-fit w-full pt-10"
        >
          <div className="flex flex-col items-center xl:items-start xl:w-1/2">
            <Headline
              title={section1?.title || ""}
              className="xl:pt-28 pt-4 xl:text-left text-center"
              type="h1-bold"
            />
            <p className="p mt-8 text-center xl:text-left">{section1?.perex}</p>
            <div className="flex xl:flex-row flex-col  w-fit gap-6 mt-8">
              {section1?.linkButton?.map((button, idx) => (
                <ButtonLink
                  key={idx}
                  link={button?.link || ""}
                  label={button?.title!}
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
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div
          id="section2"
          className="flex xl:flex-row-reverse flex-col xl:items-start items-center xl:h-fit w-full pt-10"
        >
          <div className="flex flex-col items-center xl:items-start xl:w-1/2">
            <Headline
              title={section2?.title || ""}
              className="xl:pt-6 pt-8 xl:text-left text-center"
              type="h2-bold"
            />
            <p className="p-bold mt-6 text-center xl:text-left">
              {section2?.subTitle}
            </p>
            <p className="p mt-4 text-center xl:text-left">{section2?.perex}</p>
            <p className="p mt-4 text-center xl:text-left">
              {section2?.perex2}
            </p>
          </div>
          <div className="relative h-[506px] xl:h-[700px] mt-5">
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
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-6 bg-gradient-to-t h-[680px] from-wblue-100 to-wblue-50 w-screen items-center relative justify-center">
          <div className="flex gap-10 max-w-[1200px] -top-20 absolute mx-4">
            {section2?.blocks?.map((block, idx) => (
              <div key={idx} className="flex w-1/3 flex-col gap-4 mt-8">
                <Image
                  src={
                    block?.icon?.data?.attributes?.url
                      ? siteConfig.strapiUrl +
                        block?.icon?.data?.attributes?.url!
                      : ""
                  }
                  alt={block?.icon?.data?.attributes?.alternativeText || ""}
                  width={90}
                  height={90}
                />
                <div>
                  <p
                    className={cs(
                      "h2-bold pt-3",
                      idx === 0 && "text-wred-500",
                      idx === 1 && "text-wblue-500",
                      idx === 2 && "text-wyellow-500"
                    )}
                  >
                    {block?.title}
                  </p>
                  <p className="p mt-2">{block?.perex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
