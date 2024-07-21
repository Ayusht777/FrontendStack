import FeatureGrid from "@/Components/HomeComponents/FeatureSection/FeatureItemsGrid";
import FeatureSyntaxHighlighter from "@/Components/HomeComponents/FeatureSection/FeatureItems/FeatureSyntaxHighlighter";
import FeatureTechStack from "@/Components/HomeComponents/FeatureSection/FeatureItems/FeatureTechStack";
import FeatureCodeSnippets from "@/Components/HomeComponents/FeatureSection/FeatureItems/FeatureCodeSnippets";
import Heading from '@/Components/Shared/Heading'
const FeatureContainer = () => {
  const featuresData = [
    {
      tag: "#Interactive Showcase",
      heading: "Dynamic Component Previews",
      description:
        "Immerse yourself in our Dynamic Component Previews, where UI elements come to life before your eyes. Our modern, syntax-highlighted code snippets make learning a breeze, while one-click copying streamlines your workflow. Whether you're a coding novice or a seasoned pro, this feature accelerates your development process, enabling rapid prototyping and effortless integration of cutting-edge UI components into your projects.",
      keyPoints: [
        "Real-time UI component visualization",
        "Sleek, syntax-highlighted code snippets",
        "One-click code copying for seamless integration",
        "Ideal for both learning and rapid prototyping",
      ],
      feature: <FeatureSyntaxHighlighter />,
    },
    {
      tag: "#Cutting-Edge Stack",
      heading: "Industry-Leading Technologies",
      description:
        "Our UI components are built on a foundation of industry-leading technologies, ensuring longevity and compatibility. We harness the power of Figma for design, React and Lucide for dynamic interfaces, and Tailwind CSS for flexible styling. Drawing inspiration from Shadcn UI and Next UI, we keep our components fresh and trendy. This carefully curated tech stack guarantees smooth integration with your projects and minimizes future compatibility issues.",
      keyPoints: [
        "Effortless integration with modern tech stacks",
        "Built with widely-adopted, stable technologies",
        "Future-proof, maintainable codebase",
        "Inspired by top-tier design resources",
        "Consistently aligned with industry trends",
      ],
      feature: <FeatureTechStack />,
    },
    {
      tag: "#Local Development",
      heading: "Seamless Local Setup",
      description:
        "Our Seamless Local Setup guide empowers you to bring UI components to life in your own development environment. We provide detailed code snippets and explanations for each step, including package information, prop types, and design inspirations. This user-friendly approach allows you to effortlessly replicate and customize components, fostering a deeper understanding of modern UI development practices.",
      keyPoints: [
        "Streamlined process for local component development",
        "Comprehensive code snippets with clear explanations",
        "Hands-on experience in your preferred environment",
        "In-depth insights into component architecture",
        "Spark creativity for your UI design projects",
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
