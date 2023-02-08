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
      return <p>{content.value}</p>;
    default:
      return <div></div>;
  }
};

const HeadingContent = ({ content }: ContentType) => {
  switch (content.nodeType) {
    case "text":
      return <h2 className="text-3xl">{content.value}</h2>;
    default:
      return <div></div>;
  }
};

const OrderedListContent = ({ content }: ContentArrayType) => {
  return (
    <ul className="list-disc list-inside">
      {content.map((c) => {
        switch (c.nodeType) {
          case "list-item":
            const listItemContent = c.content[0];
            switch (listItemContent.nodeType) {
              case "paragraph":
                const listParagraphContent = listItemContent.content[0];
                switch (listParagraphContent.nodeType) {
                  case "text":
                    return <li>{listParagraphContent.value}</li>;
                }
            }
        }
      })}
    </ul>
  );
};

const Blocks = ({ blocks }: PropsType) => {
  return (
    <div>
      {blocks.map((block) => {
        switch (block.nodeType) {
          case "paragraph":
            return <ParagraphContent content={block.content[0]} />;
          case "heading-2":
            return <HeadingContent content={block.content[0]} />;
          case "ordered-list":
            return <OrderedListContent content={block.content} />;
          default:
            throw new Error("Unexpected block type");
        }
      })}
    </div>
  );
};

export default Blocks;
