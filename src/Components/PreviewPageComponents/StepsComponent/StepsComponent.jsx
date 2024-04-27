import { ChevronDown, Link } from "lucide-react";
import CopyToClipBoard from "@/Utils/CopyToClipBoard";
import SyntaxHighlighter from "@/Components/PreviewPageComponents/SyntaxHighlighter";
import { useState } from "react";

const CommandStep = ({ command, isOptional }) => (
  <li className="relative flex items-start px-2 py-1.5">
    {isOptional ? (
      <span className="pr-1 text-[#B392F0]"> $ </span>
    ) : (
      <span className="my-auto mr-2 block size-2 rounded-full bg-blue-400"></span>
    )}
    {isOptional ? (
      <span className=" lg:basis basis-5/6 overflow-auto">
        <SyntaxHighlighter
          CodeSnippets={`    ` + command}
          Language="shell"
          LineNumbers={false}
        />
      </span>
    ) : (
      <span className="basis-5/6 overflow-auto text-blue-400">{command}</span>
    )}
    {isOptional ? (
      <CopyToClipBoard textToCopy={command} placement={false} />
    ) : (
      <a href={command} target="_blank" rel="noopener noreferrer">
        <Link className="absolute right-3 z-20 size-4 text-Logo" />
      </a>
    )}
  </li>
);

const StepsComponent = ({ Data }) => {
  const [isCommandSectionOpen, setIsCommandSectionOpen] = useState(false);

  return (
    <section className="my-4 flex h-auto w-full max-w-[1200px] flex-col items-center justify-center divide-y divide-Bg rounded-lg  bg-Nav md:my-6">
      <button
        className="flex w-full items-center justify-between rounded-t-lg px-2 py-1.5"
        onClick={() => setIsCommandSectionOpen(!isCommandSectionOpen)}
      >
        <p className=" w-full text-start text-sm font-semibold tracking-tight text-white md:text-base md:tracking-normal">
          {Data.title}
        </p>
        <ChevronDown
          className={`text-Logo ${
            isCommandSectionOpen ? "rotate-180" : ""
          } transform duration-300 ease-in-out`}
        />
      </button>
      {isCommandSectionOpen && (
        <ul className={`block w-full`}>
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
