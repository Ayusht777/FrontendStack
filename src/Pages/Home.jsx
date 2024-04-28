import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import FaqList from "@/Components/Shared/FAQ/FaqList";
import QueryForm from "@/Components/HomeComponents/QueryForm/QueryForm";
import FeatureSection from "@/Components/HomeComponents/FeatureSection/FeatureSection";
import HeroSection from "@/Components/Shared/HeroSection";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-Bg px-4 md:px-6 xl:px-0">
      <Navbar />
      <HeroSection
        heading={"Exploring Our User Interface Building Blocks"}
        subheading={"Dive Deep Exploring Core UI Components"}
        callToAction={true}
      />
      <FeatureSection />
      <FaqList></FaqList>
      <QueryForm></QueryForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
