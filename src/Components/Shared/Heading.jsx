function Heading({ content }) {
  return (
    <h1 className="md:text-5xl text-3xl font-bold text-center bg-gradient-to-r from-white to-white/70 text-transparent bg-clip-text tracking-tighter" aria-label={content}>
      {content}
    </h1>
  );
}

export default Heading;
