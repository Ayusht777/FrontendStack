import { ChevronDown, Link } from "lucide-react";
import CopyToClipBoard from "@/Utils/CopyToClipBoard";
import SyntaxHighlighter from "@/Components/PreviewPageComponents/SyntaxHighlighter";
import { useState } from "react";

const CommandStep = ({ command, isOptional }) => (
  <li className="px-2 py-1.5 flex items-start relative">
    {isOptional ? (
      <span className="pr-1 text-[#B392F0]"> $ </span>
    ) : (
      <span className="block rounded-full size-2 bg-blue-400 my-auto mr-2"></span>
    )}
    {isOptional ? (
      <span className=" overflow-auto lg:basis basis-5/6">
        <SyntaxHighlighter
          CodeSnippets={`    ` + command}
          Language="shell"
          LineNumbers={false}
        />
      </span>
    ) : (
      <span className="text-blue-400 overflow-auto basis-5/6">{command}</span>
    )}
    {isOptional ? (
      <CopyToClipBoard textToCopy={command} placement={false} />
    ) : (
      <a href={command} target="_blank" rel="noopener noreferrer">
        <Link className="text-Logo size-4 absolute z-20 right-3" />
      </a>
    )}
  </li>
);

const StepsComponent = ({ Data }) => {
  const [isCommandSectionOpen, setIsCommandSectionOpen] = useState(false);
  console.log(Data.commands);
  return (
    <section className="w-full bg-Nav h-auto flex justify-center items-center flex-col rounded-lg divide-y divide-Bg  md:my-6 my-4">
      <button
        className="w-full flex items-center justify-between px-2 py-1.5 rounded-t-lg"
        onClick={() => setIsCommandSectionOpen(!isCommandSectionOpen)}
      >
        <p className=" w-full text-white font-semibold text-start md:tracking-normal tracking-tight md:text-base text-sm">
          {Data.title}
        </p>
        <ChevronDown
          className={`text-Logo ${
            isCommandSectionOpen ? "rotate-180" : ""
          } transform ease-in-out duration-300`}
        />
      </button>
      {isCommandSectionOpen && (
        <ul className={`w-full block`}>
          {Data.commands.map((item, index) => (
            <CommandStep
              key={index}
              command={item.command}
              isOptional={item.isOptional}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default StepsComponent;
