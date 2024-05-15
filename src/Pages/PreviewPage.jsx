import { componentsData, authors } from "@/Data/Data";
import HeroSection from "@/Components/Shared/HeroSection";
import Navbar from "@/Components/Shared/Navbar";
import CodeBlock from "@/Components/PreviewPageComponents/CodeBlockComponent/CodeBlock";
import StepsSection from "@/Components/PreviewPageComponents/StepsComponent/StepsSection";
import ReferenceSection from "@/Components/PreviewPageComponents/ReferenceSection";
import ToolbarSection from "@/Components/PreviewPageComponents/ToolbarSection";
import { useParams } from "react-router-dom";
import { useState } from "react";

const PreviewPage = () => {
  const componentName = useParams();
  const [SelectedAuthor, setSelectedAuthor] = useState(authors[0].author);
  const filteredVariation = componentsData
    .find((item) => item.name === componentName.ComponentName)
    .variations.find((variation) => variation.author === SelectedAuthor);
  console.log(filteredVariation);
  const authorList = authors.map((author) => author.author);
  const imglist = authors.map((author) => author.img);
  console.log(imglist)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-Bg px-4 md:px-6 xl:px-0">
      <Navbar />
      <HeroSection
        heading={"Explore the Live Preview and Visualize the Code"}
      />
      <ToolbarSection
        onOptionChange={setSelectedAuthor}
        dropdownOptions={authorList}
        img={imglist}
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
