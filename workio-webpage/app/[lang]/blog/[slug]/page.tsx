import { NextPage } from "next";
import { apolloClient } from "@apollo";
import { getBlog } from "@gql/query/queries";
import {
  BlogPostEntity,
  ComponentBlogPostSubSection,
  UploadFile,
} from "@gql/types";
import { Headline } from "@components/Headline";
import { ImageW } from "@/_components/ImageW";
import { News } from "@/_components/News";
import { BiHomeAlt2 } from "react-icons/bi";
import Link from "next/link";
import { Contact } from "@/_components/Contact";

type Props = {
  params: { lang: string; slug: string };
};

const BlogPost: NextPage<Props> = async ({ params: { lang, slug } }) => {
  const blogPostR = await apolloClient.query({
    query: getBlog,
    variables: {
      locale: lang,
      blogPostId: slug,
    },
  });

  const blog = blogPostR.data.blogPost.data as BlogPostEntity;

  const { title, image, perex, subSection } = blog.attributes || {};

  return (
    <main className="flex w-full justify-center flex-col items-center xl:pt-[104px] pt-20 bg-wblue-100 overflow-hidden px-4">
      <div className="flex gap-3 items-center xl:justify-start justify-center w-full max-w-[1200px] px-4">
        <Link href="/">
          <BiHomeAlt2 className="text-wblue-500" size={24} />
        </Link>
        <div className="w-1 h-1 bg-wblue-500 rounded-full" />
        <Link href="/blog" className="p underline">
          Blog
        </Link>
        <div className="w-1 h-1 bg-wblue-500 rounded-full" />
        <p className="p text-wblack-50">{title}</p>
      </div>
      <div
        id="blog"
        className="flex relative max-w-[750px] flex-col items-center w-full xl:px-0 px-4 pt-6 z-10 mb-10"
      >
        <div className="absolute hidden xl:flex w-[234px] h-[234px] -right-[410px]  top-[690px] rounded-full bg-gradient-to-b from-transparent  to-wblue-500 opacity-70"></div>
        <div className="absolute hidden xl:flex w-[487px] h-[487px] -right-[720px]  top-[350px] rounded-full bg-gradient-to-b from-transparent  to-wred-500 opacity-70"></div>

        <Headline
          title={title || ""}
          className="text-center w-full py-4 xl:items-start items-center"
          type="h2-bold"
        />
        <div className="max-h-[480px] flex w-full relative my-4">
          <ImageW data={image?.data?.attributes as UploadFile} rounded cover />
        </div>
        <p className="p text-wblack-50 py-4">{perex}</p>
        {subSection &&
          subSection.map(
            (section: ComponentBlogPostSubSection | null, index) => (
              <div key={index}>
                <p className="h3-bold ">{section?.title}</p>
                <p className="p text-wblack-50 py-4">{section?.desc}</p>
              </div>
            )
          )}
      </div>
      <div className="relative pt-4 mt-6">
        <div className="absolute w-[200vw] xl:h-[1660px] h-[2000px] xl:-right-[1000px] md:-right-[650px] -right-[450px] bg-white top-[0px] xl:rounded-tr-[734px] rounded-tr-[450px]"></div>
        <div className="absolute hidden xl:flex w-[778px] h-[778px] -left-[1430px] -top-[650px] rounded-full bg-gradient-to-b opacity-50 from-transparent to-wyellow-400"></div>
      </div>
      <News locale={lang} />
      <Contact locale={lang} />
    </main>
  );
};

export default BlogPost;
