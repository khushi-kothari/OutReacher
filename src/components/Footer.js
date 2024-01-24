const Footer = () => {
  return (
    <footer
      className="bg-whitesmoke w-[1440px] h-[431px] flex flex-col items-center justify-center py-12 px-0 box-border gap-[77px] text-left text-xl text-white font-inter"
      id="footer"
    >
      <div className="self-stretch h-[185px] flex flex-row items-center justify-start gap-[32px]">
        <div className="flex-1 relative rounded-md bg-gray-100 h-[234px]">
          <img
            className="absolute top-[-104.4px] left-[0px] w-[862.9px] h-[446.4px]"
            alt=""
            src="/group-2.svg"
          />
          <div className="absolute top-[80px] left-[70px] leading-[150%] font-semibold inline-block w-[564px]">
            Sign Up to Receive Product Updates and More
          </div>
          <div className="absolute top-[125px] left-[70px] flex flex-col items-start justify-start gap-[13px] text-base">
            <div className="w-[564px] flex flex-row items-start justify-start gap-[16px]">
              <div className="flex-1 relative tracking-[-0.21px] leading-[16px]">
                youremail@gmail.com
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/right-arrow-icon.svg"
              />
            </div>
            <img className="relative w-[564px] h-px" alt="" src="/line.svg" />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-0 pr-0 pl-[77px] gap-[32px] text-lg text-gray-100">
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
      <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[111px] pl-[66px] text-base text-gray-100">
        <div className="relative tracking-[-0.21px]">
          2020. All Rights Reserved
        </div>
        <div className="w-[367px] flex flex-row items-center justify-between">
          <div className="relative leading-[16px]">About Us</div>
          <div className="relative leading-[16px]">Our Work</div>
          <div className="relative leading-[16px]">Products</div>
          <div className="relative leading-[16px]">Contact</div>
        </div>
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
