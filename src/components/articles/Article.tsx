import Blocks from "@components/contentful/Blocks";
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
    <div className="m-20">
      <h1 className="text-5xl">{article.fields.title}</h1>
      <Blocks blocks={blocks} />
    </div>
  );
};

export default Article;
