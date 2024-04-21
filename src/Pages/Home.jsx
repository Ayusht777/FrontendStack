import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import FaqList from "@/Components/Shared/FAQ/FaqList";
import QueryForm from "@/Components/HomeComponents/QueryForm/QueryForm";
import FeatureSection from "@/Components/HomeComponents/FeatureSection/FeatureSection";
import Hero from "@/Components/Header/Hero";
const Home = () => {
  return (
    <div className="w-full bg-Bg h-full flex justify-start items-center flex-col">
      <Navbar></Navbar>
      <Hero />
      <FeatureSection />
      <FaqList></FaqList>
      <QueryForm></QueryForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
