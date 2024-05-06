import { useState, useEffect, useRef, useMemo } from "react";
import { Copy } from "lucide-react";
import GridBackground from "@/Components/GridBackground";
import { useIsInViewport } from "@/Hooks/useIsInViewport";

const CodeHighlighter = () => {
  const itemWidths = useMemo(
    () => [
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
    ],
    []
  );

  const generateUniqueRandomIndexes = useMemo(() => {
    return () =>
      Array(5)
        .fill()
        .map(() => Math.floor(Math.random() * itemWidths.length));
  }, [itemWidths]);

  const [highlightedIndexes, setHighlightedIndexes] = useState(
    generateUniqueRandomIndexes()
  );

  const codeHighlightRef = useRef(null);

  const isCodeVisible = useIsInViewport(codeHighlightRef);

  useEffect(() => {
    if (isCodeVisible) {
      const intervalId = setInterval(() => {
        setHighlightedIndexes(generateUniqueRandomIndexes());
      }, 3000);

      setTimeout(() => {
        clearInterval(intervalId);
      }, 15000);

      return () => clearInterval(intervalId);
    }
  }, [isCodeVisible]);

  return (
    <div
      className="relative z-10 ml-8 mt-8 aspect-square h-fit rounded-tl-3xl bg-Bg lg:ml-16 lg:mt-16"
      ref={codeHighlightRef}
    >
      <Copy className="absolute right-2 top-4 size-5 text-Logo" />
      <div className="flex aspect-square size-full flex-col items-start gap-x-2 gap-y-4 rounded-tl-3xl bg-Bg p-4 md:p-6">
        {itemWidths.map((itemWidth, index) => (
          <span
            key={index}
            className={`block animate-pulse rounded-lg py-1 ${itemWidth} ${
              highlightedIndexes.includes(index) ? "bg-Logo" : "bg-Border"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureSyntaxHighlighter = () => {
  return <GridBackground section={<CodeHighlighter />} />;
};

export default FeatureSyntaxHighlighter;
