import { apolloClient } from "../../apolloClient";
import { cenikData } from "../_gql/query/queries";
import { CenikEntity } from "../_gql/types";
import { ButtonLink, ButtonStyles } from "./ButtonLink";
import { Headline } from "./Headline";

type Props = {
  locale: string;
};

export const Cenik: React.FC<Props> = async ({ locale }) => {
  const r = await apolloClient.query({
    query: cenikData,
    variables: { locale: locale },
  });

  const data = r.data.cenik.data as CenikEntity;

  const { subTitle, title, perex, cenikBlock } = data.attributes || {};

  return (
    <div
      id="cenik"
      className="flex relative xl:max-w-[1200px] flex-col items-center w-full xl:px-0 px-4 pt-6 z-10 mb-10"
    >
      <div className="flex flex-col items-center max-w-[450px]">
        <Headline
          title={title || ""}
          className="xl:py-8  py-4 items-center text-center text-wblue-500 w-full"
          type="h2-bold"
        />
        <p className="h3-bold mb-3 text-center">{subTitle}</p>
        <p className="p mb-10 text-center">{perex}</p>
      </div>
      <div className="flex xl:flex-row flex-col gap-16 xl:px-20 ">
        {cenikBlock?.map((block, index) => (
          <div className="border-2 border-wblue-300 rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="h2-bold text-center">{block?.title}</p>
            <p className="p text-center my-3">{block?.desc}</p>
            <div className="flex items-end text-wblue-500 gap-[2px]">
              <p className="h2-bold  text-center pb-0.5">{block?.price}</p>
              <p className="p text-center">Kč</p>
            </div>
            <p className="p-small text-center my-3 pb-3">
              {block?.priceComment}
            </p>
            <ButtonLink
              label={block?.button?.title as string}
              styles={block?.button?.style as ButtonStyles}
              link={block?.button?.link || ""}
            />
            <p className="p-small uppercase text-center mt-3">
              {block?.disclaimer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
