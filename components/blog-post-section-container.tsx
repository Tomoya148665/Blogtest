import type { NextPage } from "next";

const BlogPostSectionContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-white flex flex-col py-[30px] px-0 items-center justify-start text-left text-5xl text-gray-100 font-text-lg-semibold">
      <div className="w-full flex flex-col py-0 px-4 box-border items-start justify-start max-w-[1152px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[32px] font-semibold">
            All blog posts
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSectionContainer;
