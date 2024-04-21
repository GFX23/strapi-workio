import { gql } from "@apollo/client";
import { NextPage } from "next";
import { apolloClient } from "../../apolloClient";
import { HomepageEntity } from "../_gql/graphql";
import { Headline } from "../_components/Headline";
import Image from "next/image";
import { siteConfig } from "../../siteConfig";
import { ButtonLink } from "../_components/ButtonLink";

type Props = {
  params: { [lang: string]: string };
};

const Home: NextPage<Props> = async ({ params: { lang } }) => {
  const getHomepageData = gql`
    query ($locale: I18NLocaleCode) {
      homepage(locale: $locale) {
        data {
          id
          attributes {
            section1 {
              title
              perex
              linkButton {
                link
                title
                style
              }
              picture {
                data {
                  attributes {
                    name
                    width
                    height
                    url
                    alternativeText
                  }
                }
              }
            }
            section2 {
              title
              subTitle
              perex
              perex2
              picture {
                data {
                  attributes {
                    name
                    width
                    height
                    url
                    alternativeText
                  }
                }
              }
              blocks {
                icon {
                  data {
                    attributes {
                      width
                      height
                      alternativeText
                      url
                    }
                  }
                }
                title
                perex
              }
            }
          }
        }
      }
    }
  `;

  const r = await apolloClient.query({
    query: getHomepageData,
    variables: { locale: lang },
  });

  const data = r.data.homepage.data as HomepageEntity;

  const section1 = data?.attributes?.section1;
  const section2 = data?.attributes?.section2;

  console.log(data);
  console.log(lang);

  return (
    <main className="flex relative min-h-screen flex-col max-w-7xl mx-auto items-center pt-24 bg-wblue-100">
      <div className="w-[484px] h-[484px] absolute bg-gradient-to-r from-wred-500 rounded-full rotate-[150deg] -right-96 top-96"></div>
      <div className="w-[787px] h-[787px] absolute bg-gradient-to-r from-wblue-500 rounded-full rotate-[250deg] -left-[850px] top-56"></div>
      <div
        id="section1"
        className="flex max-h-[700px] min-h-[600px] px-10 w-full pt-10"
      >
        <div className="flex flex-col w-1/2">
          <Headline
            title={section1?.title || ""}
            className="pt-28"
            type="h1-bold"
          />
          <p className="p mt-8">{section1?.perex}</p>
          <div className="flex gap-6 mt-8">
            {section1?.linkButton?.map((button, idx) => (
              <ButtonLink
                key={idx}
                link={button?.link || ""}
                label={button?.title!}
                styles={button?.style === "solid" ? "solid" : "outline"}
                arrow
              />
            ))}
          </div>
        </div>
        <div className="flex relative w-[650px] h-full">
          <Image
            src={
              siteConfig.strapiUrl +
                section1?.picture?.data?.attributes?.url! || ""
            }
            alt={section1?.picture?.data?.attributes?.alternativeText || ""}
            width={section1?.picture?.data?.attributes?.width!}
            height={section1?.picture?.data?.attributes?.height!}
            className="w-full h-full"
          />
        </div>
      </div>
      <div id="section2" className="flex max-h-[700px] min-h-[600px] w-full">
        <div className="flex h-full w-[650px] relative">
          <Image
            src={
              siteConfig.strapiUrl +
                section2?.picture?.data?.attributes?.url! || ""
            }
            alt={section2?.picture?.data?.attributes?.alternativeText || ""}
            width={section2?.picture?.data?.attributes?.width!}
            height={section2?.picture?.data?.attributes?.height!}
            className="-top-14 -left-10 absolute"
          />
        </div>
        <div className="w-1/2">
          <Headline
            title={section2?.title || ""}
            className="pt-16"
            type="h2-bold"
          />
          <p className="p-bold mt-6">{section2?.subTitle}</p>
          <p className="p mt-4">{section2?.perex}</p>
          <p className="p mt-8">{section2?.perex2}</p>
        </div>
      </div>
      <div className="flex gap-6 bg-wblue-50 h-[375px] w-screen z-20 items-center relative justify-center">
        <div className="flex gap-6 max-w-7xl -top-20 absolute">
          {section2?.blocks?.map((block, idx) => (
            <div key={idx} className="flex w-1/3 flex-col gap-4 mt-8">
              <Image
                src={
                  siteConfig.strapiUrl + block?.icon?.data?.attributes?.url! ||
                  ""
                }
                alt={block?.icon?.data?.attributes?.alternativeText || ""}
                width={90}
                height={90}
              />
              <div>
                <p className="p-bold">{block?.title}</p>
                <p className="p mt-2">{block?.perex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
