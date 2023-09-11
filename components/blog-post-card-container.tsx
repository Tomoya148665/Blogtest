import type { NextPage } from "next";
import Link from "next/link";

type BlogPostCardContainerType = {
  coverImage?: string;
  date?: string;
  title?: string;
  image?: string;
  slug?: string;
  description?: string;
  category: string[];
};

const BlogPostCardContainer: NextPage<BlogPostCardContainerType> = ({
  coverImage,
  date,
  title,
  image,
  description,
  category,
  slug,
}) => {
  return (
    <div className="flex-1 h-[456px] flex flex-col items-start justify-start gap-[32px] text-center text-sm text-slateblue font-text-lg-semibold mq1152:flex-[unset] mq1152:self-stretch">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={coverImage}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <Link href={`/${slug}`} legacyBehavior>
          <a className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px] text-decoration-none">
            <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
              {date}
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-lg-semibold text-gray-100 text-left">
                {title}
              </div>
              <div className="flex flex-col pt-1 px-0 pb-0 items-start justify-start">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src={image}
                />
              </div>
            </div>
            <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
              {description}
            </div>
          </a>
        </Link>

        <div className="flex flex-row items-start justify-start mix-blend-multiply">
          {Array.isArray(category)
            ? category.map((catObj, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center"
                >
                  <div>{catObj.fields.category}</div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCardContainer;
