const Heading = ({ title }) => {
  return (
    <section className=" my-4  flex  w-full justify-center">
      <span className=" my-4 max-w-5xl  bg-gradient-to-r from-white to-white/70 bg-clip-text text-center text-[1.625rem] font-bold tracking-tighter text-transparent md:my-6 md:text-4xl">
        {title}
      </span>
    </section>
  );
};

export default Heading;
