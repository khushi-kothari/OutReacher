import Feature from "./Feature";

const FeatureSection = () => {
  return (
    <section
      className="bg-whitesmoke w-[1440px] flex flex-col items-center justify-center py-12 pb-20 px-20 box-border gap-[80px] text-center text-sm text-dimgray font-inter"
      id="features"
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
        <h4 className="m-0 self-stretch relative text-inherit leading-[14px] uppercase font-normal font-inherit">
          in few easy steps
        </h4>
        <h2 className="m-0 self-stretch relative text-3xl leading-[40px] font-extrabold font-inherit text-gray-100">{`Create Beautiful Landing Pages & Web Apps in a Jiffy`}</h2>
      </div>
      <div className="self-stretch grid flex-col items-start justify-start gap-[48px] auto-cols-[auto_auto] auto-rows-[auto_auto] text-left text-lg text-gray-100 md:flex-col md:auto-rows-[auto_auto_auto_auto]">
        <Feature
          frame1743="/frame-1743.svg"
          readyToUseCompone="Ready to use components"
          frame1747="/frame-1747.svg"
          hightQualityUIYou="Hight Quality UI you can reply on"
        />
        <Feature
          frame1743="/frame-1745.svg"
          readyToUseCompone="Coded by Developers for Developers"
          frame1747="/frame-1749.svg"
          hightQualityUIYou="The Last UI kit you’ll ever need"
          propColor="#2d3748"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
