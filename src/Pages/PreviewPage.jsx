import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import DropdownMenu from "@/Components/PreviewPageComponents/DropdownMenuComponent/DropdownMenu";
import { componentsData } from "@/Data/Data";
import HeroSection from "@/Components/PreviewPageComponents/HeroSection";
import Test from "@/Components/Test";
import CodeBlock from "@/Components/PreviewPageComponents/CodeBlockComponent/CodeBlock";
const PreviewPage = () => {
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
      <CodeBlock
        CodeSnippets={componentsData[0].code}
        PreviewComponent={componentsData[0].renderedComponent}
      />
    </div>
  );
};

export default PreviewPage;
