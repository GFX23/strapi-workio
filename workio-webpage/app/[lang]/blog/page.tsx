import { NextPage } from "next";
import { apolloClient } from "../../../apolloClient";
import { getTotalBlogs, newsData } from "../../_gql/query/queries";
import { BlogPostEntity, NovinkyEntity } from "../../_gql/types";
import { Headline } from "../../_components/Headline";
import { BlogPostCard } from "../../_components/BlogPostCard";
import { Pagination } from "../../_components/Pagination";
import { Contact } from "@/_components/Contact";

type Props = {
  params: { [lang: string]: string };
  searchParams: { limit: string; page: string };
};

const Blog: NextPage<Props> = async ({
  params: { lang },
  searchParams: { limit, page },
}) => {
  const limitNumber = 8;
  const pageNumber = parseInt(page) || 1;

  const blogCountR = await apolloClient.query({
    query: getTotalBlogs,
    variables: {
      locale: lang,
    },
  });

  const r = await apolloClient.query({
    query: newsData,
    variables: {
      locale: lang,
      blogPostsLocale2: lang,
      pagination: {
        limit: limitNumber,
        start: (parseInt(page) - 1) * limitNumber,
      },
    },
  });

  const dataNews = r.data.novinky.data as NovinkyEntity;
  const dataBlogPosts = r.data.blogPosts.data as BlogPostEntity[];

  const { title, readTitle } = dataNews.attributes || {};

  return (
    <main className="flex w-full justify-center flex-col items-center xl:pt-28 pt-24 bg-wblue-100 overflow-hidden px-4">
      <div
        id="blog"
        className="flex relative xl:max-w-[1200px] flex-col items-center w-full xl:px-0 px-4 pt-6 z-10 mb-10"
      >
        <div className="absolute hidden xl:flex w-[487px] h-[487px] -right-[620px]  top-[350px] -z-10 rounded-full bg-gradient-to-b from-transparent  to-wred-500 opacity-70"></div>
        <div className="absolute hidden xl:flex w-[234px] h-[234px] -right-[310px]  top-[690px] -z-10 rounded-full bg-gradient-to-b from-transparent  to-wblue-500 opacity-70"></div>

        <Headline
          title={title || ""}
          className="text-center w-full items-center"
          type="h2-bold"
        />
        <div className="xl:flex-row flex-wrap justify-center gap-6 w-full pt-8 flex">
          {dataBlogPosts?.map((blog, index) => (
            <BlogPostCard
              key={index}
              blog={blog}
              readTitle={readTitle as "Přečíst další"}
              idx={index}
              lang={lang}
            />
          ))}
        </div>
      </div>
      <Pagination
        length={blogCountR.data.blogPosts.data.length}
        currentPage={pageNumber}
        limit={limitNumber}
      />
      <div className="relative pt-28 mt-10">
        <div className="absolute w-[200vw] xl:h-[1060px] h-[2000px] xl:-right-[1000px] md:-right-[780px] -right-[495px] bg-white top-[0px] xl:rounded-tr-[734px] rounded-tr-[450px]"></div>
        <div className="absolute hidden xl:flex w-[778px] h-[778px] -left-[1530px] -top-[650px] rounded-full bg-gradient-to-b opacity-50 from-transparent to-wyellow-400"></div>
      </div>
      <Contact locale={lang} />
    </main>
  );
};

export default Blog;
