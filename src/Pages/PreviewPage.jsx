import { ArrowLeft } from "lucide-react";
import CodeBlock from "@/Components/PreviewPageComponents/CodeBlockComponent/CodeBlock";
import ComponentPreview from "@/Components/PreviewPageComponents/CodeBlockComponent/ComponentPreview";
import CopyToClipBoard from "@/Utils/CopyToClipBoard";
import { Link } from "react-router-dom";
import AnimatedTabs from "@/Components/Shared/AnimatedTabs";
import DropdownMenu from "@/Components/PreviewPageComponents/DropdownMenuComponent/DropdownMenu";
import { useState } from "react";
import { componentsData } from "@/Data/Data";
import HeroSection from "@/Components/PreviewPageComponents/HeroSection";
import Test from "@/Components/Test";
const PreviewPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleActiveTabIndexChange = (newIndex) => {
    setActiveTabIndex(newIndex);
    console.log(activeTabIndex);
  };
  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-Bg  md:px-0 px-4">
      <Test />
      <HeroSection />
      <div className="md:w-4/5 w-full flex justify-between items-start my-4">
        {/* <button className="size-7 bg-Nav rounded-md text-Logo "><Link to="/gallery"><ArrowLeft strokeWidth="2" className="mx-auto "/></Link></button> */}
        <button className="md:size-9 size-7 bg-Nav rounded-md text-Logo">
          <ArrowLeft strokeWidth="2" className="mx-auto " />
        </button>
        <DropdownMenu></DropdownMenu>
      </div>
      <section className="md:w-4/5 w-full bg-Nav rounded-lg relative my-4">
        <AnimatedTabs
          Tabs={[
            { id: "preview", name: "PREVIEW" }, // Lowercase "preview" for consistency
            { id: "code", name: "CODE" },
          ]}
          onActiveTabIndexChange={handleActiveTabIndexChange}
        />
        {activeTabIndex === 1 && (
          <CopyToClipBoard textToCopy={componentsData[0].code} Top={true} />
        )}
        {activeTabIndex === 0 ? (
          <ComponentPreview Component={componentsData[0].renderedComponent} />
        ) : (
          <CodeBlock CodeSnippets={componentsData[0].code} />
        )}
      </section>
    </div>
  );
};

export default PreviewPage;
