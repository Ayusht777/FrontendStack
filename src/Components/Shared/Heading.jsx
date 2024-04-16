function Heading({ title, type = "main", className = "" }) {
  const head = {
    main: "text-5xl md:text-7xl font-extrabold",
    sub: "text-3xl md:text-5xl font-bold",
  };
  return (
    <h1
      className={`text-center bg-gradient-to-b my-10 from-white via-gray-100 to-gray-500  text-transparent bg-clip-text ${head[type]} ${className}`}
    >
      {title}
    </h1>
  );
}

export default Heading;
