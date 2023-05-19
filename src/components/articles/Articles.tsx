import { formatDatetimeWithDay } from "src/utilities/formatDatetime";
import type { IArticle } from "types/contentful";

type PropsType = {
  articles: IArticle[];
};

const Articles = ({ articles }: PropsType) => {
  const firstArticle = articles[0];

  return (
    <div className="max-w-[900px] mx-auto">
      <h1 className="text-4xl font-bold py-10">最新の記事</h1>
      <a href={`/media/${firstArticle.fields.slug}`}>
        <div
          key={firstArticle.sys.id}
          className="card w-full bg-base-100 shadow-card flex-row"
        >
          <figure className="min-w-[50%] max-w-[50%]">
            <img
              src={firstArticle.fields.coverImage.fields.file.url || ""}
              alt="Shoes"
            />
          </figure>
          <div className="indicator">
            <span className="indicator-item badge badge-primary h-10 w-20 text-white">
              new
            </span>
            <div className="card-body">
              <h2 className="card-title text-3xl">
                {firstArticle.fields.title}
              </h2>
              <p>{firstArticle.fields.description}</p>
              <p>{formatDatetimeWithDay(firstArticle.sys.createdAt, false)}</p>
            </div>
          </div>
        </div>
      </a>
      <div className="grid grid-cols-2 gap-10 my-10">
        {articles.slice(1).map(article => {
          if (!article) return null;
          return (
            <a href={`/media/${article.fields.slug}`} className="grow">
              <div
                key={article.sys.id}
                className="card bg-base-100 shadow-card h-full"
              >
                <figure>
                  <img
                    src={article.fields.coverImage.fields.file.url || ""}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">{article.fields.title}</h2>
                  <p>{article.fields.description}</p>
                  <p>{formatDatetimeWithDay(article.sys.createdAt, false)}</p>
                  {article.fields.countries && (
                    <div>
                      {article.fields.countries.map(country => {
                        return <p>{country.fields.name}</p>;
                      })}
                    </div>
                  )}
                  {article.fields.industries && (
                    <div>
                      {article.fields.industries.map(industry => {
                        return <p>{industry.fields.name}</p>;
                      })}
                    </div>
                  )}
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
