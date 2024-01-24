import { useEffect } from "react";

const AboutUs = () => {
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
    <section
      className="bg-whitesmoke w-[1440px] flex flex-row items-center justify-between py-12 px-20 box-border text-center text-3xl text-black font-inter lg:flex-row"
      id="about"
    >
      <div className="w-[1280px] h-[714px] flex md:flex-row items-center justify-end flex-col">
        <img
          className="relative w-[700px] h-[600px] rounded-xl object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          alt=""
          src="/mask-group@2x.png"
          data-animate-on-scroll
        />
        <div className="self-stretch relative w-[624px] ml-[-79px]">
          <h4 className="m-0 absolute top-[0px] left-[0px] text-inherit leading-[18px] font-extrabold font-inherit flex items-center justify-center w-[624px] h-36">
            About Us
          </h4>
          <div className="absolute top-[calc(50%_-_213px)] left-[calc(50%_-_312px)] rounded-md bg-gray-100 w-[624px] h-[426px] text-left text-base text-white">
            <div className="absolute top-[0px] left-[0px] w-[624px] h-[426px] overflow-hidden">
              <img
                className="absolute top-[0px] left-[0px] w-[684.1px] h-[496px]"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className="absolute top-[174px] right-[39px] flex flex-col items-center justify-start gap-[29px]">
              <p className="m-0 relative leading-[150%] inline-block w-[546px]">{`Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. `}</p>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
                <div className="rounded-md bg-sandybrown-200 flex flex-row items-start justify-start py-[18px] px-8">
                  <b className="relative text-base leading-[18px] font-inter text-gray-200 text-left">
                    Learn More
                  </b>
                </div>
              </button>
            </div>
            <div className="absolute top-[62px] right-[39px] w-[546px] flex flex-col items-start justify-start text-4xl">
              <h2 className="m-0 self-stretch relative text-inherit leading-[40px] font-extrabold font-inherit">
                Here is all you need to know about us
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
