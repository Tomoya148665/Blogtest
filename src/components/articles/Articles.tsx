import type { IArticle } from "types/contentful";

type PropsType = {
  articles: IArticle[];
};

const Articles = ({ articles }: PropsType) => {
  return (
    <div className="flex">
      {articles.map((article) => {
        if (!article) return null;
        return (
          <div
            key={article.sys.id}
            className="card w-96 bg-base-100 shadow-xl m-10"
          >
            <figure>
              <img
                src={article.fields.coverImage.fields.file.url || ""}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{article.fields.title}</h2>
            </div>
            <a href={`/media/${article.fields.slug}`}>
              <button className="btn w-full">詳細へ</button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
