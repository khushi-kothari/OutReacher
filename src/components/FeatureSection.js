import Feature from "./Feature";

const FeatureSection = () => {
  return (
    <section
      className="bg-whitesmoke w-full flex flex-col items-center justify-center py-20 sm:py-32 px-12 lg:pt-12 lg:pb-36 lg:px-20 box-border gap-[80px] text-center text-sm text-dimgray font-inter"
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
          readyToUseCompone="Advanced Job Search"
          desc1="JobVista offers an intuitive and powerful job search feature, allowing users to filter and search for jobs based on location, industry, job type, and more."
          desc2="JobVista offers expert insights and career advice articles to help job seekers make informed decisions about their career paths."
          frame1747="/frame-1747.svg"
          hightQualityUIYou="Expert Insights"
        />
        <Feature
          frame1743="/frame-1745.svg"
          readyToUseCompone="Personalized Job Recommendations"
          frame1747="/frame-1749.svg"
          desc1="The platform provides personalized job recommendations based on a user's skills, experience, and preferences, making it easier to discover relevant opportunities."
          desc2="JobVista may include company reviews and ratings from current and former employees, helping job seekers assess potential employers."
          hightQualityUIYou="Company Reviews"
          propColor="#2d3748"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
