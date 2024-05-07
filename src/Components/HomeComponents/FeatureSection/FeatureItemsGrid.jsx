const FeatureTechStack = ({ tag, heading, description, keyPoints, feature,index }) => {
  return (
    <section
      className={` flex gap-y-8 py-4   lg:gap-x-10 flex-col  ${index === 1 ? ` lg:flex-row-reverse` : `lg:flex-row`}`}
    >
      <div className=" basis-1/2">
        <span className="font-semibold text-Logo">{tag}</span>
        <h1 className="mt-2  text-4xl font-bold text-white">{heading}</h1>
        <p className=" mt-6 text-base tracking-tight text-white md:text-lg">
          {description}
        </p>
        <ul className="mt-10 list-disc space-y-4 pl-4 text-white ">
          {keyPoints?.map((points) => (
            <li>{points}</li>
          ))}
        </ul>
      </div>
      <div className="basis-1/2">{feature}</div>
    </section>
  );
};

export default FeatureTechStack;
