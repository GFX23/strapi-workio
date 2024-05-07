import { footerData } from "../_gql/query/queries";
import { apolloClient } from "../../apolloClient";
import { Footer as FooterType, UploadFile } from "../_gql/types";
import { ImageW } from "./ImageW";
import Image from "next/image";
import { ButtonLink, ButtonStyles } from "./ButtonLink";
import Link from "next/link";

type Props = {
  locale: "cs" | "en";
};

export const Footer: React.FC<Props> = async ({ locale }) => {
  const r = await apolloClient.query({
    query: footerData,
    variables: { locale: locale },
  });

  const {
    logo,
    title,
    downloadHere,
    links,
    socialSites,
    footerText,
    cornerIcon,
  } = r.data.footer.data.attributes as FooterType;

  return (
    <div className="w-full center-all bg-wblue-500">
      <div className="flex flex-col max-w-[1200px] pt-8 gap-10 items-center xl:items-start w-full z-50 px-4 xl:px-0">
        <ImageW data={logo?.data?.attributes as UploadFile} />
        <div className="flex w-full flex-col xl:flex-row gap-10 items-center">
          <div className="xl:w-[340px] items-center xl:items-start flex flex-col">
            <div className="p-bold text-white inline">
              <p className="mx-auto text-center xl:text-left">{title}</p>
            </div>
            <p className="p-bold text-white pt-4">{downloadHere}</p>
            <div className="flex gap-6 pt-3 flex-col xl:flex-row">
              <Image
                src="/download-icons/appstore-cs.png"
                alt="appstore"
                style={{width: "auto"}}
                width={138}
                height={46}
              />
              <Image
                src="/download-icons/google-cs.png"
                alt="googleplay"
                style={{width: "auto"}}
                width={155}
                height={46}
              />
            </div>
          </div>
          <div className="flex md:gap-5 gap-7 md:flex-row flex-col items-center md:items-start">
            {links?.map((link, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center md:items-start px-5 md:gap-3 gap-4 text-nowrap"
              >
                <p className="p-bold text-white">{link?.title}</p>
                <div className="flex flex-col items-center md:items-start">
                  {link?.link?.map((l, idx) => (
                    <ButtonLink
                      key={idx}
                      label={l?.title || ""}
                      link={l?.link || ""}
                      size="small"
                      styles={l?.style as ButtonStyles}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            {socialSites?.map((social, idx) => (
              <Link href={social?.url || ""}>
                <ImageW
                  key={idx}
                  data={social?.icon?.data?.attributes as UploadFile}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t-[1px] w-full border-wblue-50 py-7 md:mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:gap-0 gap-6">
            <p className="p-footer text-white">{footerText}</p>
            <ImageW data={cornerIcon?.data?.attributes as UploadFile} />
          </div>
        </div>
      </div>
    </div>
  );
};
