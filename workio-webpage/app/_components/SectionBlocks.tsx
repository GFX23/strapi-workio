import { siteConfig } from "../../siteConfig";
import { ComponentSectionSection2 } from "../_gql/types";
import Image from "next/image";
import cs from "classnames";

type Props = {
  section2: ComponentSectionSection2;
};

export const SectionBlocks: React.FC<Props> = async ({ section2 }) => {
  return (
    <div className="flex gap-6 xl:h-[680px] xl:bg-gradient-to-t  xl:from-wblue-100 xl:to-wblue-50 w-screen relative justify-center xl:-mb-[350px] -mb-[150px]">
      <div className="flex xl:flex-row flex-col xl:mx-4 xl:gap-10 xl:max-w-[1200px] xl:-mt-12">
        {section2?.blocks?.map((block, idx) => (
          <div
            key={idx}
            className={cs(
              "flex xl:w-1/3 w-full flex-col gap-4 px-4 xl:px-0 xl:bg-none bg-gradient-to-t from-wblue-100 to-wblue-50",
              idx === 2 ? "pb-56" : "pb-28"
            )}
          >
            <Image
              src={
                block?.icon?.data?.attributes?.url
                  ? siteConfig.strapiUrl + block?.icon?.data?.attributes?.url!
                  : ""
              }
              alt={block?.icon?.data?.attributes?.alternativeText || ""}
              width={90}
              height={90}
              className="-mt-12 xl:mt-0"
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
              <p className="p mt-4">{block?.perex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
