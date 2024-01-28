import { useState, useEffect } from "react";

const Footer = () => {
  const [mail, setMail] = useState();

  const handleChange = (e) => {
    setMail(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ENTER") {
      e.preventDefault();
      this.setMail("");
    }
  };

  useEffect(() => {
    console.log(mail);
  }, [mail]);

  return (
    <footer
      className="bg-whitesmoke w-full flex flex-col items-center justify-center py-12 px-0 box-border gap-[77px] text-left text-xl text-white font-inter"
      id="support"
    >
      <div className="self-stretch flex flex-col md:flex-row items-center justify-center gap-20 px-10">
        <div className="flex-2 lg:flex-1 flex items-center justify-center relative rounded-md bg-gray-100 h-[234px]">
          <img
            className="absolute top-[-104.4px] right-[0px] rotate-180 w-[790px] h-[446.4px] z-0"
            alt=""
            src="/group-2.svg"
          />
          <img
            className="absolute top-[-104.4px] left-[0px] w-[820px] h-[446.4px] z-0"
            alt=""
            src="/group-2.svg"
          />
          <div className="flex flex-col items-center justify-center z-10 px-8">
            <div className="leading-[150%] font-semibold inline-block">
              Sign Up to Receive Product Updates and More
            </div>
            <div className="flex flex-col items-start justify-start gap-[13px] text-base pt-2">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={mail}
                  className="bg-transparent border-b-2 p-2 focus:outline-none text-slate-200 placeholder-gray-400"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <button
                  type="submit"
                  className="bg-transparent"
                  onClick={() => setMail("")}
                >
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/right-arrow-icon.svg"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row md:flex-col lg:flex-row items-center justify-start py-0 pr-0 gap-[32px] text-lg text-gray-100">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative leading-[18px] font-semibold">
              Office
            </div>
            <div className="self-stretch relative text-base leading-[150%] text-dimgray">
              <p className="m-0">545, Street 11, Block F</p>
              <p className="m-0">Dean Boulevard, Ohio</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative leading-[18px] font-semibold">
              Contact
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-dimgray">
              <div className="self-stretch relative leading-[16px]">
                +92 302 300 3215
              </div>
              <div className="self-stretch relative leading-[16px]">
                ouraddress@email.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-10 md:px-20 text-base text-gray-100">
        <div className="relative tracking-[-0.21px]">
          2024. All Rights Reserved
        </div>
        {/* <div className="w-[367px] flex flex-row items-center justify-between">
          <div className="relative leading-[16px]">About Us</div>
          <div className="relative leading-[16px]">Our Work</div>
          <div className="relative leading-[16px]">Products</div>
          <div className="relative leading-[16px]">Contact</div>
        </div> */}
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/icons--logotwitter.svg"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/icons--logofacebook.svg"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/icons--logodribbble.svg"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/icons--logogithub.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
