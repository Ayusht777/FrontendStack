import FeatureGrid from "@/Components/AboutUsComponents/FeatureGrid";
import Graph from "@/Components/AboutUsComponents/Graph";

import Heading from "@/Components/Shared/Heading";
const FeatureContainer = () => {
  const featuresData = [
    {
      tag:"#Journey",
      heading: "From Code Newbies to Building FrontendSatck",
      description: `Fresh out of college and hungry to code,
                  we were four friends on a mission. A 30-day coding marathon ignited a spark, leading us to conquer a 100-day challenge. We tackled C++, data structures, and frontend development (React JS especially!). It wasn't smooth sailing, but through setbacks and self-doubt, we persevered for over 300 days.
                  Reusable UI components became our new frontier. We craved a unique coding challenge to track our progress, but another 100-day felt uninspired. Then it hit us! Why not build a platform dedicated to creating reusable UI components? FrontendSatck was born - a website where you can learn by doing, building components from basic to advanced, all with live previews. This site is a testament to our journey and a launchpad for yours. Join us as we explore the exciting world of UI component creation, together! `,
      keyPoints: [
        "Witness live previews of UI components as you code",
        "Enhanced code comprehension with modern theme & syntax highlighting",
        "Effortless code copying with just a few clicks",
        "Accelerate prototyping and testing with code snippets",
      ],
      feature: <Graph />,
    },
  ];

  return (
    <section className="w-full max-w-[1200px] space-y-16">
      <Heading title={"Our Story"} />
      {featuresData.map((item, index) => (
        <FeatureGrid
          key={item.tag}
          index={index}
          tag={item.tag}
          heading={item.heading}
          description={item.description}
          keyPoints={item.keyPoints}
          feature={item.feature}
        />
      ))}
    </section>
  );
};

export default FeatureContainer;
