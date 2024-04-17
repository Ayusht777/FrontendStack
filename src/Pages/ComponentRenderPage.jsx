import CodeBlock from "@/Components/ComponetRenderPageComponets/CodeBlockComponent/CodeBlock";
import AnimatedTabs from "@/Components/Shared/AnimatedTabs";
import ComponentPreview from "@/Components/ComponetRenderPageComponets/CodeBlockComponent/ComponentPreview";
import DropdownMenu from '@/Components/ComponetRenderPageComponets/DropdownMenuComponent/DropdownMenu'
import { useState } from "react";
import { componentsData } from "@/Data/Data";
import CopyToClipBoard from "@/Utils/CopyToClipBoard";
const ComponentRenderPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleActiveTabIndexChange = (newIndex) => {
    setActiveTabIndex(newIndex);
    console.log(activeTabIndex);
  };
  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-Bg py-8 md:px-0 px-4">
      <DropdownMenu></DropdownMenu>
      <section className="md:w-4/5 w-full bg-Nav rounded-lg relative ">
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

export default ComponentRenderPage;
