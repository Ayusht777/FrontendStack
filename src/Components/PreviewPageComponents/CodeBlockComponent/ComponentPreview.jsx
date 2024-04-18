const ComponentPreview = ({ Component }) => {
  const RenderComponent = Component; // Rename to avoid confusion
  return (
    <section className="w-auto max-h-[520px] h-[520px] overflow-auto md:p-4 p-2 scroll-thin bg-gradient-to-tr from-Nav to-Nav/10 flex justify-center items-start">
      <RenderComponent />
    </section>
  );
};

export default ComponentPreview;
