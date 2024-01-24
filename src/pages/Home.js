import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[2703px] overflow-hidden flex flex-col items-center justify-start">
      <Header />
      <HeroSection />
      <AboutUs />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Home;
