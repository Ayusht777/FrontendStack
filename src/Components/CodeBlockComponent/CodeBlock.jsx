import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import "./style.css";

const CodeBlock = ({  CodeSnippets ,onActiveTabIndexChange}) => {
  const [processedCode, setProcessedCode] = useState(null);

  useEffect(() => {
    if ( CodeSnippets.length !== 0) {
      const CreateCodeBlock = async () => {
        const processed = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypePrettyCode, {
            defaultLang: "jsx",
            theme: "houston",
            keepBackground: false,
          })
          .use(rehypeStringify)
          .process( CodeSnippets);

        setProcessedCode(processed.toString());
      };
      CreateCodeBlock();
    }
  }, [ CodeSnippets]);

  return (
    <section
      className="w-auto max-h-[560px]   overflow-auto md:p-4 p-2 scroll-thin bg-gradient-to-tr from-Nav to-Nav/10 "
      dangerouslySetInnerHTML={{ __html: processedCode }}
    ></section>
  );
};

export default CodeBlock;
