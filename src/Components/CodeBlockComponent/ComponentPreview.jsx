const ComponentPreview = ({ Component }) => {
  const RenderComponent = Component; // Rename to avoid confusion
  return (
    <section className="w-auto max-h-[560px] h-[560px] overflow-auto md:p-4 p-2 scroll-thin bg-gradient-to-tr from-Nav to-Nav/10 flex justify-start items-center">
      <RenderComponent />
    </section>
  );
};

export default ComponentPreview;
