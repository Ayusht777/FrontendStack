import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import "./style.css";

const CodeBlockSkeleton = () => {
  return (
    <section className="bg-gradient-to-tr from-Nav to-Nav/10 md:w-4/5 w-full  max-h-[560px] h-[560px]   scroll-smooth md:p-4 p-2  ">
      <div className="w-full mx-auto animate-pulse space-y-2.5 bg-inherit">
        <p className="h-2 bg-Border rounded-lg w-2/5"></p>
        <p className=" w-2/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-4/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-1/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-3/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-2/6 h-2  bg-Border rounded-lg "></p>
        <p className="h-2 bg-Border rounded-lg w-2/5"></p>
        <p className=" w-1/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-4/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-1/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-3/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-2/6 h-2  bg-Border rounded-lg "></p>
        <p className="h-2 bg-Border rounded-lg w-2/5"></p>
        <p className=" w-2/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-4/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-1/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-3/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-2/6 h-2  bg-Border rounded-lg "></p>
        <p className="h-2 bg-Border rounded-lg w-2/5"></p>
        <p className=" w-2/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-4/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-1/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-3/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-2/6 h-2  bg-Border rounded-lg "></p>
        <p className="h-2 bg-Border rounded-lg w-2/5"></p>
        <p className=" w-2/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-4/6 h-2  bg-Border rounded-lg "></p>
        <p className=" w-1/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-3/4 h-2  bg-Border rounded-lg "></p>
        <p className=" w-4/5 h-2  bg-Border rounded-lg "></p>
      </div>
    </section>
  );
};
const CodeBlock = ({ CodeSnippets }) => {
  const [processedCode, setProcessedCode] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const CreateCodeBlock = async () => {
      setIsLoading(false);
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
        setIsLoading(true);
      }
    };
    CreateCodeBlock();
  }, [CodeSnippets]);
  return (
    <>
      {IsLoading ? (
        <section className="w-auto max-h-[520px] overflow-scroll box-border scroll-smooth md:m-4 m-2 bg-gradient-to-tr from-Nav to-Nav/10 relative">

          <div  dangerouslySetInnerHTML={{ __html: processedCode }} />

        </section>
      ) : (
        <CodeBlockSkeleton />
      )}
    </>
  );
};

export default CodeBlock;
