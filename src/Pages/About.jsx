import Carousel from "@/Components/Carousel/Carousel";
import FaqChalllenge from "@/Components/Shared/FAQ/FaqChalllenge";
import Footer from "@/Components/Shared/Footer";
import Heading from "@/Components/Shared/Heading";
import Navbar from "@/Components/Shared/Navbar";
const About = () => {
  return (
    <div className="w-full bg-Bg  flex flex-col justify-start items-center min-h-screen space-y-32">
      <Navbar></Navbar>
      <section className="text-center text-white space-y-8">
        <Heading title={"About Us"} />
        <p className="w-[70%] text-center text-lg md:text-xl leading-7 md:leading-10 mx-auto font-normal md:font-medium">
          Welcome to our corner of the web! We are a group of passionate
          developers on a mission to showcase our skills through 30 unique
          ReactJS components. Our team is dedicated to creating engaging and
          functional components that elevate user experiences on the web.
        </p>
      </section>
      <div className="text-center text-white space-y-8">
        <Heading title={"Why we take this challenge?"} type="sub" />
        <p className=" w-4/5 md:w-[70%] text-center text-lg md:text-xl leading-7 md:leading-10 mx-auto font-normal md:font-medium">
          In the past, we have completed three rounds of the
          #100DaysOfCodeChallenge, which have greatly improved our front-end
          development skills. Our current objective is to elevate our
          proficiency even further by mastering the creation of various UI
          components. These components are crucial in website building and come
          in various levels of complexity, making them applicable in different
          scenarios. Our pursuit is aimed at honing our abilities and increasing
          our readiness for future interviews.
        </p>
      </div>
      <Carousel />
      <FaqChalllenge />
      <Footer />
    </div>
  );
};

export default About;
