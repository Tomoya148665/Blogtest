import type { NextPage } from "next";
import BlogPostCardContainer from "./blog-post-card-container";

const RelatedArticlesContainer: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col py-[72px] px-4 items-center justify-start gap-[40px] text-center text-[32.25px] text-black font-text-lg-semibold">
      <div className="self-stretch relative leading-[43px] font-semibold">
        Related articles
      </div>
      <div className="w-full flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-[680px]">
        <BlogPostCardContainer
          coverImage="/image11@2x.png"
          date="Alec Whitten • 1 Jan 2023"
          title="Bill Walsh leadership"
          image="/arrowupright3.svg"
          description="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl"
          category1="Leadership"
          category2="Management"
          category3="Presentation"
        />
        <BlogPostCardContainer
          coverImage="/image12@2x.png"
          date="Demi WIlkinson • 1 Jan 2023"
          title="PM mental models"
          image="/arrowupright3.svg"
          description="Mental models are simple expressions of complex processes or relationships."
          category1="Product"
          category2="Research"
          category3="Frameworks"
        />
        <BlogPostCardContainer
          coverImage="/image13@2x.png"
          date="Candice Wu • 1 Jan 2023"
          title="What is Wireframing?"
          image="/arrowupright3.svg"
          description="Introduction to Wireframing and its Principles. Learn from the best in the industry."
          category1="Design"
          category2="Research"
          category3="Presentation"
        />
        <BlogPostCardContainer
          coverImage="/image12@2x.png"
          date="Demi WIlkinson • 1 Jan 2023"
          title="PM mental models"
          image="/arrowupright3.svg"
          description="Mental models are simple expressions of complex processes or relationships."
          category1="Product"
          category2="Research"
          category3="Frameworks"
        />
      </div>
    </section>
  );
};

export default RelatedArticlesContainer;
