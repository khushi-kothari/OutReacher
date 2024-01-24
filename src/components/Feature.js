import { useMemo, useEffect } from "react";

const Feature = ({
  frame1743,
  readyToUseCompone,
  frame1747,
  hightQualityUIYou,
  propColor,
}) => {
  const hightQualityUIStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

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
    <div className="self-stretch flex flex-row items-start justify-start gap-[48px] text-left text-lg text-gray-100 font-inter">
      <div className="flex-1 flex flex-row items-start justify-start gap-[32px]">
        <img
          className="relative w-20 h-[77px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          alt=""
          src={frame1743}
          data-animate-on-scroll
        />
        <div className="flex-1 flex flex-col items-center justify-center gap-[12px]">
          <b className="self-stretch relative leading-[18px] font-semibold">
            {readyToUseCompone}
          </b>
          <p className="m-0 self-stretch relative text-base leading-[150%] text-dimgray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[32px]">
        <img
          className="relative w-20 h-[77px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          alt=""
          src={frame1747}
          data-animate-on-scroll
        />
        <div className="flex-1 flex flex-col items-center justify-center gap-[11px]">
          <b
            className="self-stretch relative leading-[18px] font-semibold"
            style={hightQualityUIStyle}
          >
            {hightQualityUIYou}
          </b>
          <p className="m-0 self-stretch relative text-base leading-[150%] text-dimgray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
