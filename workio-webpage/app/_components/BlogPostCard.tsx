import Link from "next/link";
import { BlogPostEntity, UploadFile } from "../_gql/types";
import { ButtonLink, ButtonStyles } from "./ButtonLink";
import { ImageW } from "./ImageW";

type Props = {
  blog: BlogPostEntity;
  readTitle: string;
  idx?: number;
  lang: string;
};

export const BlogPostCard: React.FC<Props> = ({ blog, readTitle, idx, lang }) => {
  return (
    <div
      key={idx}
      className="border-[1px] border-opacity-80 border-stone-300 rounded-xl max-w-[280px] flex flex-col bg-white"
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
          {new Date(blog?.attributes?.createdAt).toLocaleDateString(lang)}
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

  );
};
