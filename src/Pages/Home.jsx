import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import FaqList from "@/Components/Shared/FAQ/FaqSection";
import QueryForm from "@/Components/HomeComponents/QueryForm/QueryForm";
import FeatureContainer from "@/Components/HomeComponents/FeatureSection/FeatureContainer";
import HeroSection from "@/Components/Shared/HeroSection";
import FeaturedCreationsSection from "@/Components/HomeComponents/FeaturedCreationsSection";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-Bg px-4 md:px-6 xl:px-0">
      <Navbar />
      <HeroSection
        heading={"Exploring Our User Interface Building Blocks"}
        subheading={"Dive Deep Exploring Core UI Components"}
        callToAction={true}
      />
      <FeaturedCreationsSection />
      <FeatureContainer />
      <FaqList></FaqList>
      <QueryForm></QueryForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
