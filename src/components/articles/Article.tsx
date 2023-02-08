import type { Article } from "types/generated";

type PropsType = {
  article: Article;
};

const Article = ({ article }: any) => {
  const blocks = article.fields?.content.content || [];
  return (
    <div>
      {blocks.map((block: any) => {
        console.log(block.content);
        return (
          <div>
            {block.content.map((a) => {
              return (
                <div>
                  <h1>{a.value}</h1>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Article;
