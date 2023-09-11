import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Header1 from "../components/header1";
import ArticleCard from "../components/article-card";
import RelatedArticlesContainer from "../components/related-articles-container";
import { getPosts } from "../lib/contentful";
import { ArticleCardProps } from "../components/ArticleCard";

interface ArticleDetailProps {
  article: {
    sys: {
      createdAt: string;
    };
    fields: {
      category: string[];
      title: string;
      content: Document; // Document は適切な import から取得する必要があります。
      coverImage: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      // 他の fields プロパティも必要に応じて追加
    };
  };
}

const ArticleDetail: NextPage<ArticleDetailProps> = ({ article }) => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start gap-[10px]">
      <Header1 />
      <main className="self-stretch flex flex-col items-center justify-start">
        <ArticleCard
          category={article.fields.category}
          date={article.sys.createdAt} // Contentfulのデータから日付を取得する場合はこのようになるかと思います。
          title={article.fields.title}
          richTextcontent={article.fields.content}
          image={article.fields.coverImage.fields.file.url} // 仮にcoverImageが画像のURLを持っている場合
        />
        <RelatedArticlesContainer />
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getPosts();

  const paths = articles.map((article) => ({
    params: { slug: article.fields.slug }, // slugフィールドが存在することを仮定
  }));

  return {
    paths,
    fallback: "blocking", // or 'true' if you want to use Incremental Static Regeneration
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const articles = await getPosts();
  const article = articles.find((a) => a.fields.slug === slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
};

export default ArticleDetail;
