import Heading from "@/Components/Shared/Heading";
import Button from "@/Components/Shared/Button";
import { FaGithub } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="w-4/5 h-[calc(100vh-7rem)] flex justify-center items-center flex-col space-y-8">
      <Heading
        title={`Showcasing Our Front-end `}
        className="!text-4xl md:!text-7xl leading-9 md:!leading-[5.5rem]"
        type=""
      />
      <Heading
        title={`Components For You`}
        type=""
        className="!text-4xl md:!text-7xl leading-9 md:!leading-[5.5rem]"
      />
      <h2 className="text-xl sm:text-4xl text-white text-center">
        Exclusive High-Quality Parts
      </h2>
      <div className="flex justify-center items-center gap-2 md:gap-7">
        <Button>Get Started</Button>
        <Button
          className="flex justify-center items-center gap-3"
          type="secondary"
        >
          <FaGithub /> Github
        </Button>
      </div>
    </div>
  );
};

export default Hero;
