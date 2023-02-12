import type { IArticle } from "types/contentful";

type PropsType = {
  articles: IArticle[];
};

const Articles = ({ articles }: PropsType) => {
  const firstArticle = articles[0];
  return (
    <div className="max-w-[1200px] mx-auto ">
      <h1 className="text-4xl font-bold my-10">最新の記事</h1>
      <a href={`/media/${firstArticle.fields.slug}`}>
        <div
          key={firstArticle.sys.id}
          className="card w-full bg-base-100 shadow-xl flex-row"
        >
          <figure>
            <img
              src={firstArticle.fields.coverImage.fields.file.url || ""}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{firstArticle.fields.title}</h2>
          </div>
        </div>
      </a>
      <div className="flex space-x-10 my-10">
        {articles.slice(1).map((article) => {
          if (!article) return null;
          return (
            <a href={`/media/${article.fields.slug}`}>
              <div
                key={article.sys.id}
                className="card w-96 bg-base-100 shadow-xl"
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
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
