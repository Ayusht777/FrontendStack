import Carousel from "@/Components/Carousel/Carousel";
import Navbar from "@/Components/Shared/Navbar";
const About = () => {
  return (
    <div className="w-full bg-Bg  flex flex-col justify-start items-center min-h-screen ">
      <Navbar></Navbar>
      <Carousel />
    </div>
  );
};

export default About;
