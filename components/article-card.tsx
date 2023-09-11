import type { NextPage } from "next";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// ContentfulのリッチテキストデータをHTMLに変換する関数
const renderRichText = (richTextcontent: Document) => {
  return documentToReactComponents(richTextcontent);
};

interface ArticleCardProps {
  category: string[];
  date: string;
  title: string;
  richTextcontent: Document;
  image?: string; // 画像も動的にしたい場合はこの行を追加
}

const ArticleCard: NextPage<ArticleCardProps> = ({
  category,
  date,
  title,
  richTextcontent,
  image,
}) => {
  return (
    <div className="self-stretch flex flex-row pt-0 px-4 pb-24 items-start justify-center text-left text-mini text-black font-text-lg-semibold">
      <div className="flex-1 flex flex-col items-center justify-start gap-[48px] max-w-[680px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[10px] opacity-[0.4]">
          <img
            className="relative w-[16.5px] h-[7.36px]"
            alt=""
            src="/arrow-1.svg"
          />
          <div className="flex flex-row pt-0 px-0 pb-px items-center justify-start border-b-[1px] border-solid border-black">
            <b className="relative leading-[32px]">Back</b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-center text-sm text-pink-700">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start mix-blend-multiply">
              {category.map((catObj, index) => (
                <div className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                  <div key={index}>{catObj.fields.category}</div>
                </div>
              ))}
            </div>
            <div className="relative leading-[20px] font-medium text-black opacity-[0.6]">
              {date}
            </div>
          </div>
          <b className="self-stretch relative text-29xl leading-[48px] text-black text-left">
            {title}
          </b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] font-merriweather">
          <img
            className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[535px] shrink-0 object-cover"
            alt=""
            src={image}
          />
          <div className="self-stretch relative leading-[32px]">
            {renderRichText(richTextcontent)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
