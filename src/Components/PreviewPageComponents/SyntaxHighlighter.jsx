import { useEffect, useState, useRef } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

const CodeBlockSkeleton = ({ skeletonHeight = 0 }) => {
  const CalculateItemLength = Math.round(skeletonHeight / 24 / 10)
  // Calculate the number of rows to display in the skeleton based on the height of the code block
  const skeletonItemWidths = [
    "w-2/5",
    "w-2/6",
    "w-1/6",
    "w-1/4",
    "w-3/4",
    "w-4/5",
  ];
  const repeatedSkeletonItems = Array.from(
    { length: CalculateItemLength },
    () => skeletonItemWidths
  ).flat();

  return (
    <section className="bg-gradient-to-tr from-Nav to-Nav/10 md:w-4/5 w-full  scroll-smooth md:p-4 p-2">
      <div className="w-full mx-auto animate-pulse space-y-2.5 bg-inherit">
        {repeatedSkeletonItems.map((item, index) => (
          <p key={index} className={`h-2 bg-Border rounded-lg ${item}`}></p>
        ))}
      </div>
    </section>
  );
};

const SyntaxHighlighter = ({ CodeSnippets }) => {
  const [processedCode, setProcessedCode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const codeDivRef = useRef(null);
  const [codeDivHeight, setCodeDivHeight] = useState(0);

  useEffect(() => {
    const processCodeBlock = async () => {
      try {
        const processed = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypePrettyCode, {
            defaultLang: "jsx",
            theme: "houston",
            keepBackground: false,
          })
          .use(rehypeStringify)
          .process(CodeSnippets);

        setProcessedCode(processed.toString());
      } catch (error) {
        console.error("Error processing code:", error);
      } finally {
        setIsLoading(false);
        if (processedCode && codeDivRef.current) {
          const height = codeDivRef.current.clientHeight;
          console.log("Height of the div:", height, height / 24 / 6);
          setCodeDivHeight(height);
        }
      }
    };

    processCodeBlock();
  }, [CodeSnippets, processedCode]);

  return isLoading ? (
    <CodeBlockSkeleton skeletonHeight={codeDivHeight} />
  ) : (
    <div ref={codeDivRef} dangerouslySetInnerHTML={{ __html: processedCode }} />
  );
};

export default SyntaxHighlighter;
