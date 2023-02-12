import type { Document } from "@contentful/rich-text-types";

type PropsType = {
  blocks: Document["content"];
};

type ContentType = {
  content: Document["content"][0]["content"][0];
};

type ContentArrayType = {
  content: Document["content"][0]["content"];
};

const ParagraphContent = ({ content }: ContentType) => {
  switch (content.nodeType) {
    case "text":
      return <p className="text-lg">{content.value}</p>;
    default:
      throw new Error(`Unexpected content type ${content.nodeType}`);
  }
};

export const HeadingContent = ({ content }: ContentType) => {
  switch (content.nodeType) {
    case "text":
      return <h2 className="text-3xl my-5">{content.value}</h2>;
    default:
      throw new Error(`Unexpected content type ${content.nodeType}`);
  }
};

const OrderedListContent = ({ content }: ContentArrayType) => {
  return (
    <ul className="list-disc list-inside my-7">
      {content.map((c) => {
        switch (c.nodeType) {
          case "list-item":
            const listItemContent = c.content[0];
            switch (listItemContent.nodeType) {
              case "paragraph":
                const listParagraphContent = listItemContent.content[0];
                switch (listParagraphContent.nodeType) {
                  case "text":
                    return (
                      <li className="text-lg">{listParagraphContent.value}</li>
                    );
                }
            }
        }
      })}
    </ul>
  );
};

const Blocks = ({ blocks }: PropsType) => {
  return (
    <div className="gap-y-5">
      {blocks.map((block) => {
        switch (block.nodeType) {
          case "paragraph":
            return <ParagraphContent content={block.content[0]} />;
          case "heading-1":
            throw new Error("Don't use heading-1 for rich text");
          case "heading-2":
            return <HeadingContent content={block.content[0]} />;
          case "ordered-list":
            return <OrderedListContent content={block.content} />;
          default:
            throw new Error(`Unexpected block type ${block.nodeType}`);
        }
      })}
    </div>
  );
};

export default Blocks;
