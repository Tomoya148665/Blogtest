import type { ArticleType } from "../../../types/entities";

type PropsType = {
  articles: ArticleType[];
};

const Articles = ({ articles }: PropsType) => {
  return (
    <div>
      <div>Articles 画面！！</div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <div>{article.title}</div>
            <div>{article.coverImage}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
