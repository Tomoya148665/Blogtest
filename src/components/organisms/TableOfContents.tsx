import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
// import { Link } from "react-scroll";
import type { Document } from "@contentful/rich-text-types";
import type { IArticle } from "types/contentful";
import { HeadingContent } from "@components/contentful/Blocks";

type PropsType = {
  article: IArticle;
};

const HEADINGS = [BLOCKS.HEADING_2, BLOCKS.HEADING_3];

const TableOfContents = ({ article }: PropsType) => {
  const blocks = article.fields.content.content;
  const headings = blocks.filter((b) => HEADINGS.includes(b.nodeType));
  return (
    <nav className="toc bg-gray-200">
      <p className="toc__title">目次</p>
      {headings.map((heading) => {
        if (heading.nodeType === BLOCKS.HEADING_2) {
          return <HeadingContent content={heading.content[0]} />;
        }
        if (heading.nodeType === BLOCKS.HEADING_3) {
          return <HeadingContent content={heading.content[0]} />;
        }
      })}
    </nav>
  );
};

export default TableOfContents;
