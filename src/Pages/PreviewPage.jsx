import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/Components/Shared/Navbar";
import HeroSection from "@/Components/Shared/HeroSection";
import ToolbarSection from "@/Components/PreviewPageComponents/ToolbarSection";
import CodeBlock from "@/Components/PreviewPageComponents/CodeBlockComponent/CodeBlock";
import StepsSection from "@/Components/PreviewPageComponents/StepsComponent/StepsSection";
import ReferenceSection from "@/Components/PreviewPageComponents/ReferenceSection";
import AttributeSection from "@/Components/PreviewPageComponents/AttributeSection";
import GridBackgroundV2 from "@/Components/Shared/GridBackgroundV2";
import { componentsData, authors } from "@/Data/Data";

const PreviewPage = () => {
  const componentName = useParams();
  const randomAuthorIndex = Math.floor(Math.random() * authors.length);
  const [selectedAuthorName, setselectedAuthorName] = useState(
    authors[randomAuthorIndex].author
  );
  const filteredVariation =
    componentsData
      ?.find((item) => item.name === componentName.ComponentName)
      ?.variations.find(
        (variation) => variation.author === selectedAuthorName
      ) || false;
  console.log(filteredVariation);
  if (!filteredVariation) {
    return <Navigate to={"/404_NOT_FOUND"} replace={true} />;
  }
  console.log(selectedAuthorName)
  return (
    <GridBackgroundV2
      TwClass={`[mask-image:radial-gradient(ellipse_60%_22rem_at_50%_0%,#000_70%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_42rem_at_50%_0%,#000_70%,transparent_100%)]`}
    >
      <div className=" relative z-20 flex h-full w-full flex-col items-center justify-center px-4 md:px-6 xl:px-0">
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
        <AttributeSection attributes={filteredVariation?.attributes} />
      </div>
    </GridBackgroundV2>
  );
};

export default PreviewPage;
