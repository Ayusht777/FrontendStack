import { useState, useEffect } from "react";
import SyntaxHighlighter from "@/Components/PreviewPageComponents/SyntaxHighlighter";
import AnimatedTabs from "@/Components/Shared/AnimatedTabs";
import CopyToClipBoard from "@/Utils/CopyToClipBoard";
import "./style.css";
const ComponentPreview = ({ PreviewComponent, isVisible }) => {
  const RenderedComponent = PreviewComponent;
  return (
    <section
      className={`w-auto max-h-[520px] h-[520px] overflow-auto md:p-4 p-2 scroll-thin bg-gradient-to-tr from-Nav to-Nav/10 ${
        isVisible ? "hidden" : "flex"
      } justify-center items-start`}
    >
      <RenderedComponent />
    </section>
  );
};
const CodeBlock = ({ CodeSnippets, PreviewComponent }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleActiveTabIndexChange = (newIndex) => {
    setActiveTabIndex(newIndex);
    console.log(activeTabIndex);
  };
  return (
    <>
      <section className="md:w-4/5 w-full bg-Nav rounded-lg relative my-4">
        <AnimatedTabs
          Tabs={[
            { id: "preview", name: "PREVIEW" },
            { id: "code", name: "CODE" },
          ]}
          onActiveTabIndexChange={handleActiveTabIndexChange}
        />

        <ComponentPreview
          PreviewComponent={PreviewComponent}
          isVisible={activeTabIndex === 0 ? false : true}
        />

        {activeTabIndex === 1 && <CopyToClipBoard textToCopy={CodeSnippets} />}
        <section
          className={`${
            activeTabIndex === 1 ? "block" : "hidden"
          } w-auto max-h-[520px] overflow-scroll box-border scroll-smooth md:m-4 m-2 bg-gradient-to-tr from-Nav to-Nav/10 relative`}
        >
          <SyntaxHighlighter CodeSnippets={CodeSnippets} Language={"jsx"} />
        </section>
      </section>
    </>
  );
};

export default CodeBlock;
