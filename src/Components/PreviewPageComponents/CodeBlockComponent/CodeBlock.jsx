import { useState } from "react";
import SyntaxHighlighter from "@/Components/PreviewPageComponents/SyntaxHighlighter";
import AnimatedTabs from "@/Components/Shared/AnimatedTabs";
import CopyToClipBoard from "@/Utils/CopyToClipBoard";
import "./style.css";
const ComponentPreview = ({ PreviewComponent, isVisible }) => {
  const RenderedComponent = PreviewComponent;
  return (
    <section
      className={`scroll-thin h-auto max-h-[520px] min-h-56 w-auto overflow-auto rounded-lg bg-gradient-to-tr from-Nav to-Nav/10 p-2 md:p-4 ${
        isVisible ? "hidden" : "flex"
      } items-center justify-center`}
    >
      <RenderedComponent />
    </section>
  );
};
const CodeBlock = ({ CodeSnippets, PreviewComponent }) => {
  const TabData = [
    { id: "preview", name: "PREVIEW" },
    { id: "code", name: "CODE" },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(TabData[0].id);
  const handleActiveTabIndexChange = (newIndex) => {
    setActiveTabIndex(newIndex);
  };
  return (
    <>
      <section className="relative my-4 w-full max-w-[1200px] rounded-lg bg-Nav ">
        <AnimatedTabs
          Tabs={TabData}
          onActiveTabIndexChange={handleActiveTabIndexChange}
        />

        {PreviewComponent && (
          <ComponentPreview
            PreviewComponent={PreviewComponent}
            isVisible={activeTabIndex === "preview" ? false : true}
          />
        )}

        {activeTabIndex === "code" && (
          <CopyToClipBoard textToCopy={CodeSnippets} />
        )}
        <section
          className={`${
            activeTabIndex === "code" ? "block" : "hidden"
          } relative m-2   box-border max-h-[520px] w-auto overflow-scroll scroll-smooth bg-gradient-to-tr from-Nav to-Nav/10 md:m-4`}
        >
          <SyntaxHighlighter CodeSnippets={CodeSnippets} Language={"jsx"} />
        </section>
      </section>
    </>
  );
};

export default CodeBlock;
