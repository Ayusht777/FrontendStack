const Heading = ({ title, type = "main", className = "" }) => {
  const head = {
    main: "md:text-5xl text-3xl font-extrabold",
    sub: "md:text-5xl text-3xl  font-bold",
  };
  return (
    <h1
      className={`text-center bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text tracking-tighter !leading-[5.5rem] ${head[type]} ${className}`}
      aria-label={title}
    >
      {title}
    </h1>
  );
};

export default Heading;
