import { Copy } from "lucide-react";
import GridBackground from "@/Components/GridBackground";

const CodeHighlighter = () => {
  const itemWidths = [
    "w-1/5",
    "w-3/5",
    "w-2/5",
    "w-3/4",
    "w-1/4",
    "w-1/4",
    "w-4/5",
    "w-1/5",
    "w-3/5",
    "w-2/5",
    "w-3/4",
    "w-2/5",
    "w-3/4",
    "w-1/4",
    "w-4/5",
    "w-4/5",
    "w-1/5",
    "w-3/5",
    "w-3/4",
    "w-1/4",
    "w-4/5",
  ];
  
  return (
    <div className=" relative z-10 aspect-square   h-fit  rounded-tl-3xl bg-Bg lg:mt-16 lg:ml-16  mt-8 ml-8">
      <Copy className="absolute right-2 top-4 size-5 text-Logo" />
      <div className="flex aspect-square size-full flex-col items-start gap-x-2 gap-y-4 rounded-tl-3xl bg-Bg md:p-6 p-4">
        {itemWidths.map((itemWidth, index) => (
          <span
            key={index}
            className={`block animate-pulse rounded-lg py-1 ${itemWidth} ${
              index % Math.floor(Math.random() * itemWidths.length) === 0
                ? "bg-Logo"
                : "bg-Border"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

const FeatureSyntaxHighlighter = () => {
  return <GridBackground section={<CodeHighlighter />} />;
};

export default FeatureSyntaxHighlighter;
