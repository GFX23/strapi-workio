import Image from "next/image";
import { Headline } from "@components/Headline";
import { apolloClient } from "../../apolloClient";
import { kontaktData } from "../_gql/query/queries";
import { KontaktEntity } from "../_gql/types";
import Link from "next/link";
import { ContactForm } from "@/_components/ContactForm";

type Props = {
  locale: string;
};

export const Contact: React.FC<Props> = async ({ locale }) => {
  const r = await apolloClient.query({
    query: kontaktData,
    variables: { locale: locale },
  });

  const data = r.data.kontakt.data as KontaktEntity;

  const {
    title,
    phone,
    mail,
    address,
    ico,
    dic,
  } = data.attributes || {};

  return (
    <div
      id="kontakt"
      className="flex relative w-full flex-col md:items-start items-center gap-6 max-w-[1200px] xl:mx-auto pt-12 md:px-[90px] px-6 pb-10 rounded-lg bg-gradient-to-b from-wblue-100 via-white to-white"
    >
      <Headline title={title || "Kontaktujte nás"} type="h2-bold" small />
      <div className="flex xl:flex-row w-full flex-col pt-3 gap-8">
        <ContactForm data={data} />
        <div className="flex flex-col w-full gap-3.5">
          <div className="flex md:gap-6 gap-3.5 w-full md:flex-row flex-col h-fit">
            <div className="w-full h-12 flex rounded-md items-center border-2 border-wblue-200 py-2 px-3">
              <Image src="/phone.svg" alt="phone" width={20} height={19} />
              <p className="p-small ml-2">{phone}</p>
            </div>
            <div className="w-full h-12 flex rounded-md items-center border-2 border-wblue-200 py-2 px-3">
              <Image src="/email.svg" alt="phone" width={19} height={19} />
              <Link href={`mailto:${mail}`} className="p-small ml-2 underline">
                {mail}
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col  border-2 border-wblue-200 rounded-md ">
              <div className="flex gap-3 px-3 py-1">
                <Image src="/map.svg" alt="map" width={21} height={19} />
                <div className="flex flex-col pb-2 pt-1">
                  <p className="p-small-bold">{address?.name}</p>
                  <p className="p-small">{address?.address}</p>
                </div>
              </div>
              <iframe
              title="Location of headquarter"
                src={
                  address?.googleUrl
                    ? address.googleUrl
                    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.786968254038!2d14.423450813286538!3d50.0902752714068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ea724726e5%3A0xebf9ba9db11c177a!2zUnlibsOhIDcxNi8yNCwgMTEwIDAwIFN0YXLDqSBNxJtzdG8!5e0!3m2!1sen!2scz!4v1714288630770!5m2!1sen!2scz"
                }
                className="w-full xl:h-[200px] h-[286px]"
                loading="lazy"
              />
            </div>
            <div className="flex sm:gap-5 gap-3 mt-3 p text-wblack-100 pb-6">
              <p>{`IČ: ${ico}`}</p>
              <p>{`DIČ: ${dic}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
