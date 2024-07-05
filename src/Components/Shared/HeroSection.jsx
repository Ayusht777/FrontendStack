import Button from "@/Components/Shared/Button";
import ButtonV2 from "@/Components/Shared/ButtonV2";
const HeroSection = ({ heading, subheading = false, callToAction = false ,path="/"}) => {
  return (
    <section className=" my-4 flex h-[320px] w-full flex-col items-center justify-center md:h-[420px] lg:h-[480px]">
      <span className="max-w-5xl   bg-gradient-to-r from-white to-white/70 bg-clip-text text-center text-3xl font-semibold capitalize tracking-tighter text-transparent md:py-1.5 md:text-5xl lg:text-7xl">
        {heading}
      </span>
      {subheading && (
        <p className="my-4  max-w-4xl text-center text-lg font-light tracking-tight text-white/90   md:text-2xl">
          {subheading}
        </p>
      )}
      {callToAction && (
        <div className="mt-4 flex w-full items-center justify-center space-x-4">
          <Button title={"Explore Now"} path={path} />
          <ButtonV2 />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
