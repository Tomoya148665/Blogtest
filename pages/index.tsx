import type { NextPage } from "next";
import { getPosts } from "../lib/contentful";
import Header from "../components/header";
import SearchFormContainer from "../components/search-form-container";
import RecentBlogPostsContainer from "../components/recent-blog-posts-container";
import DesignGridContainer from "../components/design-grid-container";
import BlogPostSectionContainer from "../components/blog-post-section-container";

const LightMode10: NextPage<{ posts: any[] }> = ({ posts }) => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-center text-[183px] text-gray-100 font-text-lg-semibold">
      <Header />
      <div className="self-stretch bg-white flex flex-row pt-8 px-0 pb-[62px] items-start justify-center">
        <div className="flex-1 flex flex-row py-[38px] px-0 items-start justify-center border-t-[1px] border-solid border-gray-200 border-b-[1px]">
          <b className="relative inline-block w-[1462px] shrink-0 lg:text-[135px] md:text-71xl sm:text-71xl mq590:text-[46px]">
            jetGee BLOG
          </b>
        </div>
      </div>
      <SearchFormContainer />
      <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start">
        <RecentBlogPostsContainer posts={posts} />
        <DesignGridContainer />
        <BlogPostSectionContainer />
      </div>
      <div className="self-stretch bg-white flex flex-row pt-0 px-0 pb-36 items-start justify-center text-sm text-slateblue">
        <div className="flex-1 flex flex-row py-0 px-4 box-border items-start justify-start max-w-[1152px]">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[32px] mq1152:gap-[16px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[300px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                alt=""
                src="/image4@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
                    Alec Whitten • 1 Jan 2023
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-lg-semibold text-gray-100 text-left">
                      Bill Walsh leadership lessons
                    </div>
                    <div className="flex flex-col pt-1 px-0 pb-0 items-start justify-start">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
                    Like to know the secrets of transforming a 2-14 team into a
                    3x Super Bowl winning Dynasty?
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start mix-blend-multiply">
                    <div className="rounded-2xl bg-ghostwhite-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Leadership
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkslateblue">
                    <div className="rounded-2xl bg-ghostwhite-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Management
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                    <div className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[300px] text-steelblue">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                alt=""
                src="/image5@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
                    Demi WIlkinson • 1 Jan 2023
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-lg-semibold text-gray-100 text-left">
                      PM mental models
                    </div>
                    <div className="flex flex-col pt-1 px-0 pb-0 items-start justify-start">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
                    Mental models are simple expressions of complex processes or
                    relationships.
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start mix-blend-multiply">
                    <div className="rounded-2xl bg-aliceblue-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Product
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                    <div className="rounded-2xl bg-aliceblue-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Research
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mix-blend-multiply text-firebrick">
                    <div className="rounded-2xl bg-seashell flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Frameworks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[300px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                alt=""
                src="/image6@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
                    Candice Wu • 1 Jan 2023
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-lg-semibold text-gray-100 text-left">
                      What is Wireframing?
                    </div>
                    <div className="flex flex-col pt-1 px-0 pb-0 items-start justify-start">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
                    Introduction to Wireframing and its Principles. Learn from
                    the best in the industry.
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start mix-blend-multiply">
                    <div className="rounded-2xl bg-ghostwhite-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Design
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                    <div className="rounded-2xl bg-aliceblue-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Research
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                    <div className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[300px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                alt=""
                src="/image7@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
                    Natali Craig • 1 Jan 2023
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-lg-semibold text-gray-100 text-left">
                      How collaboration makes us better designers
                    </div>
                    <div className="flex flex-col pt-1 px-0 pb-0 items-start justify-start">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
                    Collaboration can make our teams stronger, and our
                    individual designs better.
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start mix-blend-multiply">
                    <div className="rounded-2xl bg-ghostwhite-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Design
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                    <div className="rounded-2xl bg-aliceblue-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Research
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                    <div className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[300px] text-seagreen">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                alt=""
                src="/image8@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
                    Drew Cano • 1 Jan 2023
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-lg-semibold text-gray-100 text-left">
                      Our top 10 Javascript frameworks to use
                    </div>
                    <div className="flex flex-col pt-1 px-0 pb-0 items-start justify-start">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
                    JavaScript frameworks make development easy with extensive
                    features and functionalities.
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start mix-blend-multiply">
                    <div className="rounded-2xl bg-honeydew flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Software Development
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                    <div className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Tools
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mix-blend-multiply text-crimson">
                    <div className="rounded-2xl bg-lavenderblush-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        SaaS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[300px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                alt=""
                src="/image9@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
                    Orlando Diggs • 1 Jan 2023
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-lg-semibold text-gray-100 text-left">
                      Podcast: Creating a better CX Community
                    </div>
                    <div className="flex flex-col pt-1 px-0 pb-0 items-start justify-start">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
                    Starting a community doesn’t need to be complicated, but how
                    do you get started?
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start mix-blend-multiply">
                    <div className="rounded-2xl bg-ghostwhite-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Podcasts
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkslateblue">
                    <div className="rounded-2xl bg-ghostwhite-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Customer Success
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                    <div className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                      <div className="relative leading-[20px] font-medium">
                        Presentation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default LightMode10;
