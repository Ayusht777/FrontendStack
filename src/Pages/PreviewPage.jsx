import { componentsData } from "@/Data/Data";
import HeroSection from "@/Components/PreviewPageComponents/HeroSection";
import Navbar from "@/Components/Shared/Navbar";
import CodeBlock from "@/Components/PreviewPageComponents/CodeBlockComponent/CodeBlock";
import StepsSection from "@/Components/PreviewPageComponents/StepsComponent/StepsSection";
import ReferenceSection from "@/Components/PreviewPageComponents/ReferenceSection";
import ToolbarSection from "@/Components/PreviewPageComponents/ToolbarSection";
import { useParams } from "react-router-dom";
import { useState } from "react";

const PreviewPage = () => {
  const componentName = useParams();
  const [SelectedAuthor, setSelectedAuthor] = useState("");

  const filteredVariation = componentsData
    .find((item) => item.name === componentName.ComponentName)
    .variations.find((variation) => variation.author === SelectedAuthor);
  console.log(filteredVariation);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-Bg px-4 md:px-6 lg:px-0">
      <Navbar />
      <HeroSection Title={"Explore the Live Preview and Visualize the Code"} />
      <ToolbarSection getSelectedAuthor={setSelectedAuthor} />
      <CodeBlock
        CodeSnippets={filteredVariation?.code}
        PreviewComponent={filteredVariation?.renderedComponent}
      />
      <StepsSection />
      <ReferenceSection />
    </div>
  );
};

export default PreviewPage;
