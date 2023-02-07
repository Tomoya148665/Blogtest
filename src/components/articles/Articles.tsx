import type { ArticleItem } from "types/generated";

type PropsType = {
  articles: ArticleItem[];
};

const Articles = ({ articles }: PropsType) => {
  console.log(articles[0].content?.coverImage);
  return (
    <div className="m-10">
      {articles.map((article) => {
        return (
          <div key={article.id} className="card">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={article.content?.coverImage?.filename} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{article.content?.title}</h2>
              </div>
              <button className="btn">
                <a href={`/media/${article.slug}`}>詳細へ</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
