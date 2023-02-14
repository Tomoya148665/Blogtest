import { formatDatetimeWithDay } from "src/utilities/formatDatetime";
import type { IArticle } from "types/contentful";

type PropsType = {
  articles: IArticle[];
};

const Articles = ({ articles }: PropsType) => {
  const firstArticle = articles[0];

  if (!firstArticle || !import.meta.env.DEV) {
    return <div>準備中</div>;
  }

  return (
    <div className="max-w-[900px] mx-auto ">
      <h1 className="text-4xl font-bold my-10">最新の記事</h1>
      <a href={`/media/${firstArticle.fields.slug}`}>
        <div
          key={firstArticle.sys.id}
          className="card w-full bg-base-100 shadow-xl flex-row"
        >
          <figure className="min-w-[50%]">
            <img
              src={firstArticle.fields.coverImage.fields.file.url || ""}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{firstArticle.fields.title}</h2>
            <p>{firstArticle.fields.description}</p>
            <p>{formatDatetimeWithDay(firstArticle.sys.createdAt, false)}</p>
          </div>
        </div>
      </a>
      <div className="grid grid-cols-3 gap-10 my-10">
        {articles.slice(1).map((article) => {
          if (!article) return null;
          return (
            <a href={`/media/${article.fields.slug}`} className="grow">
              <div key={article.sys.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={article.fields.coverImage.fields.file.url || ""}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">{article.fields.title}</h2>
                  <p>{firstArticle.fields.description}</p>
                  <p>
                    {formatDatetimeWithDay(firstArticle.sys.createdAt, false)}
                  </p>
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
