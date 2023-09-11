import type { NextPage } from "next";
import BlogPostCardContainer from "./blog-post-card-container";
import MigratingToLinear101Card from "./migrating-to-linear101-card";

type BlogPostProps = {
  coverImage: string;
  date: string;
  title: string;
  image: string;
  description: string;
  category1: string;
  category2: string;
  category3: string;
};

type MigratingToLinear101CardProps = {
  imageAltText: string;
  eventDate: string;
  courseImageUrl: string;
  articleImageUrl: string;
  propBackgroundColor?: string;
  propColor?: string;
};

type RecentBlogPostsContainerProps = {
  posts: any[];
  blogPost: BlogPostProps;
  migratingCards: MigratingToLinear101CardProps[];
};

const RecentBlogPostsContainer: NextPage<RecentBlogPostsContainerProps> = ({
  posts,
}) => {
  const firstPost = posts[0];

  const blogPostData = {
    coverImage: firstPost.fields.coverImage.fields?.file?.url,
    date: new Date(firstPost.sys.createdAt).toISOString().split("T")[0],
    title: firstPost.fields.title,
    image: "/arrowupright.svg",
    description: firstPost.fields.description,
    category: firstPost.fields.category || [],
    slug: firstPost.fields.slug,
  };

  return (
    <div className="self-stretch bg-white flex flex-col py-[30px] px-0 items-center justify-start text-left text-5xl text-gray-100 font-text-lg-semibold">
      <div className="w-full flex flex-col py-0 px-4 box-border items-start justify-start gap-[32px] max-w-[1152px]">
        <div className="self-stretch relative leading-[32px] font-semibold">
          Recent blog posts
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-center text-sm text-slateblue mq1152:flex-col">
          <BlogPostCardContainer {...blogPostData} />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[32px] text-steelblue mq1152:flex-[unset] mq1152:self-stretch">
            <MigratingToLinear101Card
              imageAltText="/image1@2x.png"
              eventDate="Phoenix Baker • 1 Jan 2023"
              courseImageUrl="Migrating to Linear 101"
              articleImageUrl="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
            />
            <MigratingToLinear101Card
              imageAltText="/image2@2x.png"
              eventDate="Lana Steiner • 1 Jan 2023"
              courseImageUrl="Building your API Stack"
              articleImageUrl="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
              propBackgroundColor="#ecfdf3"
              propColor="#027a48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogPostsContainer;
