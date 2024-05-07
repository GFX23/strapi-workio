import { apolloClient } from "../../apolloClient";
import { newsData } from "../_gql/query/queries";
import { BlogPostEntity, NovinkyEntity } from "../_gql/types";
import { BlogPostCard } from "./BlogPostCard";
import { ButtonLink, ButtonStyles } from "./ButtonLink";
import { Headline } from "./Headline";
import { BlogSlider } from "./Slider";

type Props = {
  locale: string;
};

export const News: React.FC<Props> = async ({ locale }) => {
  const r = await apolloClient.query({
    query: newsData,
    variables: {
      locale: locale,
      blogPostsLocale2: locale,
      pagination: { limit: 4 },
    },
  });

  const dataNews = r.data.novinky.data as NovinkyEntity;
  const dataBlogPosts = r.data.blogPosts.data as BlogPostEntity[];

  const { title, nextButton, readTitle } = dataNews.attributes || {};

  return (
    <div
      id="news"
      className="flex relative xl:max-w-[1200px] max-w-[380px] flex-col items-center w-full xl:px-0 px-4 pt-6 z-10 mb-10"
    >
      <Headline
        title={title || ""}
        className="xl:py-8  py-4 items-center text-center text-wblue-500 w-full"
        type="h2-bold"
      />
      <div className="xl:flex-row flex-col gap-6 w-full pt-2 mb-12 hidden xl:flex">
        {dataBlogPosts?.map((blog, index) => (
          <BlogPostCard
            key={index}
            blog={blog}
            readTitle={readTitle as "Přečíst další"}
            idx={index}
            lang={locale}
          />
        ))}
      </div>
      <div className="flex flex-col w-full pt-6 mb-16 xl:hidden">
        <BlogSlider
          dataBlogPosts={dataBlogPosts}
          locale={locale}
          readTitle={readTitle!}
        />
      </div>
      <ButtonLink
        label={nextButton?.title as string}
        styles={nextButton?.style as ButtonStyles}
        size={"large"}
        link={nextButton?.link || ""}
      />
    </div>
  );
};
