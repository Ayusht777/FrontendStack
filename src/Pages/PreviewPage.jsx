import { componentsData } from "@/Data/Data";
import HeroSection from "@/Components/PreviewPageComponents/HeroSection";
import Test from "@/Components/Test";
import CodeBlock from "@/Components/PreviewPageComponents/CodeBlockComponent/CodeBlock";
import StepsSection from "@/Components/PreviewPageComponents/StepsComponent/StepsSection";
import ReferenceSection from "@/Components/PreviewPageComponents/ReferenceSection";
import ToolbarSection from "@/Components/PreviewPageComponents/ToolbarSection";
import { useParams } from "react-router-dom";
const PreviewPage = () => {
  const p = useParams();
  console.log(p)
  
  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-Bg  md:px-0 px-4">
      <Test />
      <HeroSection Title={"Explore the Live Preview and Visualize the Code"}/>
      <ToolbarSection />
      <CodeBlock
        CodeSnippets={componentsData[0].code}
        PreviewComponent={componentsData[0].renderedComponent}
      />

      <StepsSection />
      <ReferenceSection />
    </div>
  );
};

export default PreviewPage;
