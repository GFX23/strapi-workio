import { apolloClient } from "../../apolloClient";
import { funkceData } from "../_gql/query/queries";
import { FunkceEntity, UploadFile } from "../_gql/types";
import { ButtonLink, ButtonStyles } from "./ButtonLink";
import { Headline } from "./Headline";
import { ImageW } from "./ImageW";

type Props = {
  locale: string;
};

export const Funkce: React.FC<Props> = async ({ locale }) => {
  const r = await apolloClient.query({
    query: funkceData,
    variables: { locale: locale },
  });

  const data = r.data.funkce.data as FunkceEntity;

  const { block, lastBlock, title } = data.attributes || {};

  return (
    <div
      id="product"
      className="flex relative xl:max-w-[1200px] flex-col xl:items-start items-center w-full xl:px-0 px-4 pt-6 z-10 mb-10"
    >
      <div className="absolute w-[200vw] h-[660px] xl:-right-[480px] -right-[80px] bg-white top-0 -z-10 xl:rounded-tr-[650px] rounded-tr-[214px]"></div>
      <div className="absolute hidden xl:flex w-[1329px] h-[1329px] -right-[450px] bg-white top-0 -z-10 rounded-full bg-gradient-to-b from-white via-white to-wred-100 opacity-70"></div>
      <div className="absolute hidden xl:flex w-[730px] h-[730px] -left-[580px] bg-white top-[1050px] -z-10 rounded-full bg-gradient-to-b from-white via-white to-wyellow-100 opacity-50"></div>
      <Headline
        title={title || ""}
        className="xl:pt-20 pt-4 xl:text-left text-center text-wblue-500"
        type="h1-bold"
      />
      <div className="flex flex-col xl:h-[1254px] xl:max-w-full max-w-[540px] mt-10 gap-[30px]">
        <div className="flex xl:flex-row flex-col gap-[30px]">
          <div className="flex flex-col w-full h-full gap-[30px] xl:w-2/3">
            {/* RYCHLÁ NOTIFIKACE */}
            <div className="xl:h-[280px] h-[485px] bg-wyellow-300 rounded-xl flex">
              <div className="relative">
                <div className="flex absolute xl:-top-[108px] xl:-left-[163px] top-[155px] -left-[144px] xl:w-[550px] xl:h-[600px] w-[484px] h-[506px]">
                  <ImageW
                    data={block?.[0]?.image?.data?.attributes as UploadFile}
                    abs
                  />
                </div>
              </div>
              <div className="flex xl:w-[380px] items-start gap-2.5 xl:pt-9 pt-[25px] pl-[25px] xl:pl-0 xl:ml-[335px]">
                <ImageW
                  data={block?.[0]?.icon?.data?.attributes as UploadFile}
                />
                <div className="pt-1">
                  <p className="h3-bold mb-2">{block?.[0]?.title}</p>
                  <p className="p">{block?.[0]?.perex}</p>
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row flex-col xl:h-[280px] gap-[30px]">
              {/* STÍŽNOSTI ZAMĚSTNANCŮ */}
              <div className="xl:w-[386px] h-[281px] bg-wred-100 rounded-xl xl:px-9 pb-9">
                <div className="relative">
                  <div className="flex absolute xl:top-[120px] xl:left-[250px] left-[220px] top-[100px] w-[76px] h-[184px]">
                    <ImageW
                      data={block?.[1]?.image?.data?.attributes as UploadFile}
                      abs
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2.5 xl:pt-9 pt-[25px] px-[25px] xl:pl-0">
                  <ImageW
                    data={block?.[1]?.icon?.data?.attributes as UploadFile}
                  />
                  <div className="pt-1">
                    <p className="h3-bold mb-2">{block?.[1]?.title}</p>
                    <p className="p w-3/4">{block?.[1]?.perex}</p>
                  </div>
                </div>
              </div>
              {/* INTERNÍ KOMUNIKACE */}
              <div className="grow bg-wblue-200 rounded-xl xl:w-[387px]">
                <div className="relative">
                  <div className="flex absolute xl:-top-[15px] xl:left-[100px] -top-4 left-[60px] w-[227px] h-[112px]">
                    <ImageW
                      data={block?.[2]?.image?.data?.attributes as UploadFile}
                      abs
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-[122px] xl:px-9 px-[25px] pb-[25px] xl:pb-0">
                  <ImageW
                    data={block?.[2]?.icon?.data?.attributes as UploadFile}
                  />
                  <div className="pt-1">
                    <p className="h3-bold mb-2">{block?.[2]?.title}</p>
                    <p className="p">{block?.[2]?.perex}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DOTAZNÍKY */}
          <div className="grow bg-wred-100 rounded-xl xl:w-[367px] xl:h-full h-[496px]">
            <div className="relative">
              <div className="absolute xl:-top-[53px] xl:-left-[215px] top-[35px] -left-[230px] w-[800px] xl:h-[900px] h-[600px]">
                <ImageW
                  data={block?.[3]?.image?.data?.attributes as UploadFile}
                  abs
                />
              </div>
            </div>
            <div className="flex items-start gap-2.5 xl:p-9 p-[25px] xl:pb-0">
              <ImageW data={block?.[3]?.icon?.data?.attributes as UploadFile} />
              <div className="pt-1">
                <p className="h3-bold mb-2">{block?.[3]?.title}</p>
                <p className="p">{block?.[3]?.perex}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col xl:h-[280px] gap-[30px]">
          {/* ŽÁDOSTI ZAMĚSTNANCŮ */}
          <div className="xl:w-[386px] bg-wyellow-100 rounded-xl">
            <div className="flex items-start gap-2.5 xl:pt-9 xl:px-9 p-[25px]">
              <ImageW data={block?.[4]?.icon?.data?.attributes as UploadFile} />
              <div className="pt-1">
                <p className="h3-bold mb-2">{block?.[4]?.title}</p>
                <p className="p">{block?.[4]?.perex}</p>
              </div>
            </div>
          </div>
          {/* ONBOARDING ZAMĚSTNANCŮ */}
          <div className="xl:w-[784px] h-[468px] xl:h-full bg-wred-300 rounded-xl">
            <div className="relative">
              <div className="absolute xl:-top-[213px] xl:-left-[205px] -left-[210px] top-[30px] xl:w-[700px] xl:h-[700px] w-[700px] h-[586px]">
                <ImageW
                  data={block?.[5]?.image?.data?.attributes as UploadFile}
                  abs
                />
              </div>
            </div>
            <div className="flex items-start gap-2.5 xl:pt-9 p-[25px] xl:ml-[387px]">
              <ImageW data={block?.[5]?.icon?.data?.attributes as UploadFile} />
              <div className="pt-1">
                <p className="h3-bold mb-2">{block?.[5]?.title}</p>
                <p className="p">{block?.[5]?.perex}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col-reverse w-full xl:items-end items-start overflow-hidden xl:h-[320px] bg-wblue-100 rounded-xl">
          <ImageW data={lastBlock?.image?.data?.attributes as UploadFile} />
          <div className="w-full xl:w-fit xl:items-start h-full px-4 justify-center flex flex-col items-center xl:pt-0 pt-8 xl:pl-[54px]">
            <div className="flex flex-col items-center">
              <p className="h2-bold pb-2.5 text-center xl:text-left">
                {lastBlock?.title}
              </p>
              <p className="p">{lastBlock?.desc}</p>
            </div>
            <div className="flex xl:flex-row flex-col xl:gap-0 gap-5 w-fit justify-between xl:w-full py-10 xl:pt-[45px]">
              {lastBlock?.button?.map((b) => (
                <ButtonLink
                  label={b?.title || ""}
                  styles={b?.style as ButtonStyles}
                  size={"large"}
                  link={b?.link || "/"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
