import FeatureGrid from "@/Components/HomeComponents/FeatureSection/FeatureItemsGrid";
import FeatureSyntaxHighlighter from "@/Components/HomeComponents/FeatureSection/FeatureItems/FeatureSyntaxHighlighter";
import FeatureTechStack from "@/Components/HomeComponents/FeatureSection/FeatureItems/FeatureTechStack";
import FeatureCodeSnippets from "@/Components/HomeComponents/FeatureSection/FeatureItems/FeatureCodeSnippets";
import Heading from '@/Components/Shared/Heading'
const FeatureContainer = () => {
  const featuresData = [
    {
      tag: "#Feature 1",
      heading: "Live Preview and Code Snippets",
      description:
        "Experience the revolutionary Live Preview and Code Snippets feature that brings your UI components to life in real-time. With a modern theme and syntax highlighting, you can effortlessly follow along with the provided code snippets. Plus, the copy-to-clipboard functionality lets you quickly incorporate the code into your own projects. This feature is ideal for developers of all levels, from beginners eager to learn by example to seasoned developers seeking rapid prototyping and testing of new ideas.",
      keyPoints: [
        "Witness live previews of UI components as you code",
        "Enhanced code comprehension with modern theme & syntax highlighting",
        "Effortless code copying with just a few clicks",
        "Accelerate prototyping and testing with code snippets",
      ],
      feature: <FeatureSyntaxHighlighter />,
    },
    {
      tag: "#Feature 2",
      heading: "Popular and Stable Tech Stack",
      description:
        "Our projects and UI components are meticulously crafted using a popular and stable tech stack, ensuring a robust and maintainable codebase. We leverage Figma for UI design and prototyping, React, Lucide, and React JS for frontend development, and Tailwind CSS for styling and layout. We also draw inspiration from Dribble and Next UI to guarantee that our components are consistently up-to-date and on-trend. This translates to seamless integration with your existing tech stack, minimizing the risk of breakage or obsolescence.",
      keyPoints: [
        "Seamless integration with your existing tech stack",
        "Components built with popular and stable technologies",
        "Robust and maintainable codebase",
        "Inspiration from leading design and development resources",
        "Alignment with the latest trends and technologies",
      ],
      feature: <FeatureTechStack />,
    },

    {
      tag: "#Feature 3",
      heading: "Run UI Component Code Locally",
      description:
        "Our Step-by-Step Guide to Running UI Component Code Locally empowers you to swiftly transform your UI component concepts into reality. We provide comprehensive code snippets for each step, along with clear explanations of the packages utilized in component creation, props types, and sources of UI design inspiration. This straightforward approach allows you to effortlessly follow along and witness your UI components come to life in your own local environment.",
      keyPoints: [
        "Rapidly transform UI component concepts into reality",
        "Comprehensive code snippets and descriptions for each step",
        "Witness UI components come to life in your local environment",
        "Gain insights into component creation packages and their usage",
        "Gather inspiration for your own UI design and development endeavors",
      ],
      feature: <FeatureCodeSnippets />,
    },
  ];

  return (
    <section className="w-full max-w-[1200px] space-y-16">
      <Heading title={"Features"} />
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
