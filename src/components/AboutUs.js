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
      className="relative bg-whitesmoke w-full flex flex-row items-center justify-between sm:py-12 sm:px-20 box-border text-center text-3xl text-black font-inter lg:flex-row"
      id="about"
    >
      <div class="absolute lg:hidden inset-0 bg-black opacity-50"></div>
      <div className="h-auto md:h-[714px] w-full flex md:flex-row items-center justify-end flex-col">
        <img
          className="hidden lg:flex relative w-[700px] h-[600px] rounded-xl object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
          alt=""
          src="/mask-group@2x.png"
          data-animate-on-scroll
        />
        <div className="text-container relative w-full sm:w-[624px] mx-auto lg:ml-[-79px]">
          <h4 className="m-0 mb-12 mt-12 sm:mt-0 text-white lg:text-gray-100 text-inherit leading-[18px] font-extrabold font-inherit flex items-center justify-center sm:w-[624px]">
            About Us
          </h4>
          <div className="about-text rounded-md bg-gray-100 w-full sm:w-[624px] h-auto sm:h-[426px] text-left text-base text-white">
            <div className="flex flex-col items-center justify-center gap-[29px] py-16 px-10 sm:p-16 text-center">
              <h2 className="m-0 self-stretch relative leading-[40px] font-extrabold text-4xl">
                Here is all you need to know about us
              </h2>
              <p className="m-0 relative leading-[150%] inline-block">
                {`Our mission is to simplify the job search process and connect
                you with the perfect job match. With tailored job listings and
                valuable insights, JobVista is your partner in achieving your
                professional aspirations.`}
              </p>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent]">
                <div className="rounded-md bg-sandybrown-200 flex flex-row items-start justify-start py-[18px] px-8">
                  <b className="relative text-base leading-[18px] font-inter text-gray-200 text-left">
                    Learn More
                  </b>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
