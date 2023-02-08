import type { Asset, Entry } from "contentful";
import type { Article } from "types/generated";

type PropsType = {
  articles: Entry<Article>[];
};

const Articles = ({ articles }: PropsType) => {
  return (
    <div className="m-10">
      {articles.map((article) => {
        if (!article) return null;
        return (
          <div key={article.sys.id} className="card">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  // TODO: Asset の型を解決する
                  src={(article.fields.coverImage as any).fields.file.url || ""}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{article.fields.title}</h2>
              </div>
              <button className="btn">
                <a href={`/media/${article.fields.slug}`}>詳細へ</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
