import Blocks from "@components/contentful/Blocks";
import TableOfContents from "@components/organisms/TableOfContents";
import type { IArticle } from "types/contentful";
import type { Article } from "types/generated";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import type { ReactNode } from "react";

type PropsType = {
  article: IArticle;
};

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode) => <p>{children}</p>,
    [BLOCKS.HEADING_2]: (_node: any, children: ReactNode) => (
      <h2 className="text-3xl my-5">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: ReactNode) => (
      <h3 className="text-xl my-5">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: ReactNode) => (
      <ul className="list-disc list-inside my-7">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: ReactNode) => {
      return <li className="text-lg">{children}</li>;
    },
    [BLOCKS.OL_LIST]: (_node: any, children: ReactNode) => (
      <ol className="list-decimal list-inside my-7">{children}</ol>
    ),
  },
};

const Article = ({ article }: PropsType) => {
  if (!article.fields) {
    return null;
  }

  const blocks = article.fields.content.content;
  const richTextDocument = article.fields.content;

  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-10 pb-20">
      <figure>
        <img
          className="w-full h-96 object-cover"
          src={article.fields.coverImage.fields.file.url || ""}
          alt="Shoes"
        />
      </figure>
      <div className="my-2">
        <a href="/media" className="link">
          記事一覧へ
        </a>
      </div>
      <h1 className="text-5xl my-10">{article.fields.title}</h1>
      <div className="bg-red-100 my-10">{article.fields.description}</div>
      <TableOfContents article={article} />
      {false && ( // react-renderer に切り替え
        <Blocks blocks={blocks} />
      )}
      {documentToReactComponents(richTextDocument, options)}
    </div>
  );
};

export default Article;
