const FeatureGrid = ({ heading, description, keyPoints, feature, index, tag }) => {
  return (
    <section
      className={` flex gap-y-8 py-2   lg:gap-x-10 flex-col  ${index === 1 ? ` lg:flex-row-reverse` : `lg:flex-row`}`}
    >
      <div className=" basis-1/2">
        <p className="text-Logo font-bold">{tag}</p>
        <h1 className="mt-2  text-4xl font-bold text-white">{heading}</h1>
        <p className=" mt-6 text-base tracking-tight text-white md:text-lg">
          {description}
        </p>

      </div>
      <div className="basis-1/2">{feature}</div>
    </section>
  );
};

export default FeatureGrid;
