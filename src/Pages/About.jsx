import GridBackgroundV2 from "@/Components/Shared/GridBackgroundV2";
import FeatureContainer from "@/Components/AboutUsComponents/FeatureContainer";
import TeamContainer from '@/Components/AboutUsComponents/TeamContainer'
const About = () => {
  return (
    <GridBackgroundV2 TwClass="[mask-image:radial-gradient(ellipse_60%_32rem_at_50%_0%,#000_70%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_32rem_at_50%_0%,#000_70%,transparent_100%)]">
      <div className="relative z-20 flex h-full min-h-dvh w-full flex-col items-center justify-start px-4 md:px-6 xl:px-0 ">
        <section className=" md:mt-32 md:mb-16 mt-16 mb-8  flex  w-full max-w-[1200px] flex-col items-center justify-center py-20">
          <span className="max-w-5xl   bg-gradient-to-r from-white to-white/70 bg-clip-text text-center text-3xl font-semibold capitalize tracking-tighter text-transparent md:py-1.5 md:text-5xl lg:text-7xl">
            Meet the Team That Brings Ideas to Life
          </span>
        </section>
        <FeatureContainer />
        <TeamContainer />
      </div>
    </GridBackgroundV2>
  );
};

export default About;
