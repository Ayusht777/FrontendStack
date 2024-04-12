import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import "./style.css";

const CodeBlock = (props) => {
  const [processedCode, setProcessedCode] = useState(null);

  useEffect(() => {
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
        .process(props.code);

      setProcessedCode(processed.toString());
    };
    CreateCodeBlock();
  }, [props.code]);

  return (
    <section
      className="box bg-Bg w-full h-[80vh]  overflow-y-scroll p-4 scroll-thin"
      dangerouslySetInnerHTML={{ __html: processedCode }}
    ></section>
  );
};

export default CodeBlock;
