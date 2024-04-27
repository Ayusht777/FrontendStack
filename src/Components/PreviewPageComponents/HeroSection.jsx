const HeroSection = ({ Title }) => {
  return (
    <section className=" w-full flex justify-center items-center lg:h-[480px] md:h-[420px] h-[320px] flex-col my-4">
      <span className="max-w-5xl   text-center bg-gradient-to-r from-white to-white/70 text-transparent bg-clip-text tracking-tighter lg:text-7xl md:text-5xl text-3xl font-semibold md:py-1.5  ">
        {Title}
      </span>
    </section>
  );
};

export default HeroSection;
