import { useEffect } from "react";

const HeroSectionContainer = () => {
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
    <div className="hero-container w-full relative h-[917px] overflow-hidden shrink-0 text-left text-5xl text-whitesmoke font-inter">
      {/* <img
        className="absolute top-[0px] left-[0px] w-full overflow-hidden"
        alt=""
        src="/frame.svg"
      /> */}
      <div className="absolute top-[800px] left-[0px] bg-whitesmoke w-full h-[200px]" />
      <div className="flex flex-row items-center justify-center py-0 px-[60px] box-border gap-10 lg:gap-25">
        <div className="w-[663px] flex flex-col items-start justify-start py-0 pr-0 pl-[40px] box-border gap-[128px] lg:gap-[100px] lg:box-border sm:pl-0 sm:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-2px] leading-[60px] font-extrabold font-inherit">
                <p className="m-0">{`Find the most `}</p>
                <p className="m-0">exciting startup jobs</p>
              </h1>
              <div className="self-stretch relative text-base tracking-[-0.02em] leading-[150%] text-white">
                The next big thing starts here. Start building with Prodify and
                be the first to market with a product that is ready to take on
                the competition and delight your customers
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[12px] text-base text-gray-200">
              <div className="rounded-md bg-sandybrown-300 flex flex-row items-start justify-start py-[18px] px-8">
                <div className="relative leading-[20px] font-semibold">
                  Get started for free
                </div>
              </div>
              <div className="rounded-md flex flex-row items-start justify-start py-[18px] px-8 text-whitesmoke border-[1px] border-solid border-whitesmoke">
                <div className="relative leading-[20px] font-semibold">
                  View Pricing
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm">
            <div className="self-stretch relative tracking-[0.03em] leading-[20px] uppercase font-semibold">
              Trusted by
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[32px]">
              <img
                className="relative w-[122.8px] h-[30px]"
                alt=""
                src="/vector.svg"
              />
              <img
                className="relative w-[134px] h-[25px]"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="relative w-[123px] h-[30px]"
                alt=""
                src="/vector2.svg"
              />
            </div>
          </div>
        </div>
        <div
          className="w-[663px] h-[780px] hidden lg:flex flex-row items-start justify-start box-border relative [&.animate]:animate-[1s_ease-in_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          data-animate-on-scroll
        >
          {/* <img
            className="relative w-68 h-96 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] z-[0]"
            alt=""
            src="/vector3.svg"
            data-animate-on-scroll
          /> */}
          <img
            className="absolute my-0 mx-[!important] top-[80px] right-[40px] rounded-xl h-[500px] xl:h-[759px] object-cover z-[1]"
            alt=""
            src="hero-image.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionContainer;
