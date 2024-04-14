import CodeBlock from "@/Components/CodeBlockComponent/CodeBlock";
import AnimatedTabs from "@/Components/Shared/AnimatedTabs";
import ComponentPreview from "@/Components/CodeBlockComponent/ComponentPreview";
import { useState } from "react";
import { componentsData } from "@/Data/Data";
const ComponentRenderPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleActiveTabIndexChange = (newIndex) => {
    setActiveTabIndex(newIndex);
    console.log(activeTabIndex);
  };
  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-Bg py-8 md:px-0 px-4">
      <section className="md:w-4/5 w-full bg-Nav rounded-lg pb-1">
        <AnimatedTabs
          Tabs={[
            { id: "preview", name: "PREVIEW" }, // Lowercase "preview" for consistency
            { id: "code", name: "CODE" },
          ]}
          onActiveTabIndexChange={handleActiveTabIndexChange}
        />

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
