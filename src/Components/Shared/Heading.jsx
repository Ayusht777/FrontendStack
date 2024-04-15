function Heading({ title }) {
  return (
    <h1 className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-b my-10 from-white via-gray-100 to-gray-500  text-transparent bg-clip-text">
      {title}
    </h1>
  );
}

export default Heading;
