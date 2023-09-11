import type { NextPage } from "next";
import { useEffect } from "react";

type IPhone17Type = {
  onClose?: () => void;
};

const IPhone17: NextPage<IPhone17Type> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white h-[844px] overflow-hidden flex flex-row items-start justify-center [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] w-full max-h-[90%]"
      data-animate-on-scroll
    >
      <div className="self-stretch w-[390px] flex flex-col pt-0 px-0 pb-[150px] box-border items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <button className="cursor-pointer [border:none] p-2 bg-[transparent] flex flex-row items-start justify-start">
            <div className="relative text-lg leading-[24px] font-text-lg-semibold text-black text-left">
              Blog
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-2 bg-[transparent] flex flex-row items-start justify-start">
            <div className="relative text-lg leading-[24px] font-text-lg-semibold text-black text-left">
              Projects
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhone17;
