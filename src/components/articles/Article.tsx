import Blocks from "@components/contentful/Blocks";
import TableOfContents from "@components/organisms/TableOfContents";
import type { Entry } from "contentful";
import type { IArticle } from "types/contentful";
import type { Article } from "types/generated";

type PropsType = {
  article: IArticle;
};

const Article = ({ article }: PropsType) => {
  if (!article.fields) {
    return null;
  }

  const blocks = article.fields.content.content;

  return (
    <div className="my-20 max-w-6xl mx-auto px-5 lg:px-10">
      <figure>
        <img
          className="w-full h-96 object-cover"
          src={article.fields.coverImage.fields.file.url || ""}
          alt="Shoes"
        />
      </figure>
      <div className="my-2">
        <a href="/media">記事一覧へ</a>
      </div>
      <h1 className="text-5xl my-10">{article.fields.title}</h1>
      <TableOfContents article={article} />
      <Blocks blocks={blocks} />
    </div>
  );
};

export default Article;
