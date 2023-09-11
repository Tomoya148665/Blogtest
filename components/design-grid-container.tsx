import type { NextPage } from "next";

const DesignGridContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-white flex flex-col py-[30px] px-4 items-center justify-start text-center text-sm text-slateblue font-text-lg-semibold">
      <div className="w-full flex flex-col items-start justify-start max-w-[1152px]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[32px] mq700:flex-col">
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[324px] object-cover mq700:flex-[unset] mq700:self-stretch"
              alt=""
              src="/image3@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] mq700:flex-[unset] mq700:self-stretch">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-lg-semibold text-slateblue text-left">
                  Olivia Rhye • 1 Jan 2023
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-lg-semibold text-gray-100 text-left">
                    Grid system for better Design User Interface
                  </div>
                  <div className="flex flex-col pt-1 px-0 pb-0 items-start justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowupright.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative text-base leading-[24px] font-text-lg-semibold text-slategray text-left">
                  A grid system is a design tool used to arrange content on a
                  webpage. It is a series of vertical and horizontal lines that
                  create a matrix of intersecting points, which can be used to
                  align and organize page elements. Grid systems are used to
                  create a consistent look and feel across a website, and can
                  help to make the layout more visually appealing and easier to
                  navigate.
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start mix-blend-multiply">
                  <div className="rounded-2xl bg-ghostwhite-200 flex flex-row py-0.5 px-2.5 items-center justify-center">
                    <div className="relative leading-[20px] font-medium">
                      Design
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                  <div className="rounded-2xl bg-pink-50-100 flex flex-row py-0.5 px-2.5 items-center justify-center">
                    <div className="relative leading-[20px] font-medium">
                      Interface
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGridContainer;
