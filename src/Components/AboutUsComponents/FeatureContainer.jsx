import FeatureGrid from "@/Components/AboutUsComponents/FeatureGrid";
import Graph from "@/Components/AboutUsComponents/Graph";

import Heading from "@/Components/Shared/Heading";
const FeatureContainer = () => {
  const featuresData = [
    {
      tag: "#OurJourney",
      heading: "From Campus to Code: The Birth of FrontendStack",
      description: `Four college graduates united by a passion for coding embarked on an extraordinary journey. 
    It began with a 30-day coding sprint that evolved into a 100-day challenge, mastering C++, data structures, 
    and diving deep into frontend development, particularly React JS. Despite obstacles and moments of doubt, 
    our determination carried us through more than 300 days of continuous learning and growth.

    Our focus shifted to reusable UI components, sparking a desire for a unique coding challenge. 
    Dissatisfied with the idea of another 100-day challenge, we conceived something greater: FrontendStack. 
    This platform is our brainchild - a space dedicated to creating and learning about reusable UI components. 
    Here, you can build your skills progressively, from basic to advanced components, all with live previews. 
    FrontendStack stands as a testament to our journey and a springboard for yours. Join us in exploring the 
    dynamic world of UI component creation and elevate your frontend development skills!`,
      keyPoints: [
        "Experience hands-on learning with live component previews",
        "Master modern UI development practices",
        "Accelerate your coding workflow with easy-to-use snippets",
        "Progress from beginner to advanced component creation",
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
