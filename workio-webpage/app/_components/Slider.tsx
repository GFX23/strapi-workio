"use client";

import Slider from "react-slick";
import { BlogPostEntity, UploadFile } from "../_gql/types";
import { ImageW } from "./ImageW";
import { ButtonLink, ButtonStyles } from "./ButtonLink";

type Props = {
  dataBlogPosts: BlogPostEntity[];
  locale: string;
  readTitle: string;
}

export const BlogSlider: React.FC<Props> = ({ dataBlogPosts, locale, readTitle }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <Slider {...settings} className="news-carousel">
      {dataBlogPosts?.map((blog, index) => (
        <div
          key={index}
          className="border-[1px] border-opacity-80 border-stone-300 rounded-xl max-w-[320px] flex flex-col"
        >
          <div className="h-[160px] w-full relative rounded-xl overflow-hidden">
            <ImageW
              data={blog?.attributes?.image?.data?.attributes as UploadFile}
              abs
              cover
            />
          </div>
          <div className="flex px-4 gap-4 flex-col pb-12">
            <p className="p-bold text-wyellow-500 mt-4">
              {new Date(blog?.attributes?.createdAt).toLocaleDateString(locale)}
            </p>
            <p className="p-bold">{blog?.attributes?.title}</p>
            <div className="flex w-fit ">
              <ButtonLink
                label={readTitle as string}
                styles={"outline" as ButtonStyles}
                link={`/blog/${blog.id}`}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}