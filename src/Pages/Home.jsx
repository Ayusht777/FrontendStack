import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import FaqSection from "@/Components/HomeComponents/FaqSection";
import QueryFormSection from "@/Components/HomeComponents/QueryForm/QueryFormSection";
import FeatureContainer from "@/Components/HomeComponents/FeatureSection/FeatureContainer";
import HeroSection from "@/Components/Shared/HeroSection";
import FeaturedCreationsSection from "@/Components/HomeComponents/FeaturedCreationsSection";
import GridBackgroundV2 from "@/Components/Shared/GridBackgroundV2";
const Home = () => {
  return (
    <GridBackgroundV2>
      <div className=" relative z-20 flex h-full w-full flex-col items-center justify-center px-4 md:px-6 xl:px-0">
        <Navbar />
        <HeroSection
          heading={"Exploring Our User Interface Building Blocks"}
          subheading={"Dive Deep Exploring Core UI Components"}
          callToAction={true}
        />
        <FeaturedCreationsSection />
        <FeatureContainer />
        <FaqSection />
        <QueryFormSection></QueryFormSection>
        <Footer></Footer>
      </div>
    </GridBackgroundV2>
  );
};

export default Home;
