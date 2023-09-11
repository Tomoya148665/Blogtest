import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type MigratingToLinear101CardType = {
  imageAltText?: string;
  eventDate?: string;
  courseImageUrl?: string;
  articleImageUrl?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const MigratingToLinear101Card: NextPage<MigratingToLinear101CardType> = ({
  imageAltText,
  eventDate,
  courseImageUrl,
  articleImageUrl,
  propBackgroundColor,
  propColor,
}) => {
  const badgeBaseStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-center text-sm text-steelblue font-text-lg-semibold mq700:flex-col">
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[212px] object-cover mq700:flex-[unset] mq700:self-stretch"
        alt=""
        src={imageAltText}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] mq700:flex-[unset] mq700:self-stretch">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
            {eventDate}
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative text-lg leading-[28px] font-semibold font-text-lg-semibold text-gray-100 text-left">
              {courseImageUrl}
            </div>
            <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
              {articleImageUrl}
            </div>
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start mix-blend-multiply">
            <div
              className="rounded-2xl bg-aliceblue-100 flex flex-row py-0.5 px-2.5 items-center justify-center"
              style={badgeBaseStyle}
            >
              <div
                className="relative leading-[20px] font-medium"
                style={textStyle}
              >
                Design
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
            <div className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
              <div className="relative leading-[20px] font-medium">
                Research
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigratingToLinear101Card;
