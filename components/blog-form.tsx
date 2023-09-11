import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import IPhone17 from "./i-phone17";
import PortalDrawer from "./portal-drawer";

type BlogFormType = {
  dimensions?: string;

  /** Style props */
  iconMenuBackgroundImage?: CSSProperties["backgroundImage"];
};

const BlogForm: NextPage<BlogFormType> = ({
  dimensions,
  iconMenuBackgroundImage,
}) => {
  const fullLogoTransparentNoBufferStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: iconMenuBackgroundImage,
    };
  }, [iconMenuBackgroundImage]);

  const [isIPhone17Open, setIPhone17Open] = useState(false);

  const openIPhone17 = useCallback(() => {
    setIPhone17Open(true);
  }, []);

  const closeIPhone17 = useCallback(() => {
    setIPhone17Open(false);
  }, []);

  return (
    <>
      <div className="w-full h-[61px] flex flex-row items-start justify-start gap-[14px] max-w-[1152px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[188.11px] h-[60px] bg-[url('/fulllogotransparentnobuffer11@3x.png')] bg-cover bg-no-repeat bg-[top]"
          style={fullLogoTransparentNoBufferStyle}
        />
        <div className="flex-1 flex flex-row items-center justify-end gap-[12px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[35.16px] h-[30.63px] hidden mq700:flex"
            onClick={openIPhone17}
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={dimensions}
            />
          </button>
          <div className="flex flex-row items-center justify-end gap-[12px] mq700:hidden">
            <button className="cursor-pointer [border:none] p-2 bg-[transparent] h-[49px] flex flex-row box-border items-center justify-start">
              <div className="relative text-xl leading-[24px] font-text-lg-semibold text-gray-100 text-left">
                Blog
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-2 bg-[transparent] h-[49px] flex flex-row box-border items-center justify-start">
              <div className="relative text-xl leading-[24px] font-text-lg-semibold text-gray-100 text-left">
                Projects
              </div>
            </button>
          </div>
        </div>
      </div>
      {isIPhone17Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeIPhone17}
        >
          <IPhone17 onClose={closeIPhone17} />
        </PortalDrawer>
      )}
    </>
  );
};

export default BlogForm;
