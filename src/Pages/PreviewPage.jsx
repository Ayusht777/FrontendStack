import { componentsData, authors } from "@/Data/Data";
import HeroSection from "@/Components/Shared/HeroSection";
import Navbar from "@/Components/Shared/Navbar";
import CodeBlock from "@/Components/PreviewPageComponents/CodeBlockComponent/CodeBlock";
import StepsSection from "@/Components/PreviewPageComponents/StepsComponent/StepsSection";
import ReferenceSection from "@/Components/PreviewPageComponents/ReferenceSection";
import ToolbarSection from "@/Components/PreviewPageComponents/ToolbarSection";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
const PreviewPage = () => {
  const randomAuthorIndex = Math.floor(Math.random() * authors.length);
  const componentName = useParams();
  const [selectedAuthorName, setselectedAuthorName] = useState(
    authors[randomAuthorIndex].author
  );
  const filteredVariation =
    componentsData
      ?.find((item) => item.name === componentName.ComponentName)
      ?.variations.find(
        (variation) => variation.author === selectedAuthorName
      ) || false;

  if (!filteredVariation) {
    return <Navigate to={"/404_NOT_FOUND"} replace={true} />;
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-Bg px-4 md:px-6 xl:px-0">
      <Navbar />
      <HeroSection
        heading={"Explore the Live Preview and Visualize the Code"}
      />
      <ToolbarSection
        dropdownOptions={authors}
        selectedAuthorName={selectedAuthorName}
        onOptionChange={setselectedAuthorName}
      />
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
