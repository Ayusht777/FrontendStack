import { ChevronDown, Link } from "lucide-react";
import CopyToClipBoard from "@/Utils/CopyToClipBoard";
import SyntaxHighlighter from "@/Components/PreviewPageComponents/SyntaxHighlighter";
import { useState } from "react";

const Command = ({ command, isOptional, isLink }) => (
  <li className="relative flex items-start px-2 py-1.5 ">
    <span
      className={`lg:basis flex justify-start overflow-auto before:pr-1.5 ${
        isOptional
          ? " before:text-purple-500 before:content-['$']"
          : " font-medium text-blue-400 before:text-blue-400 before:content-['•']"
      }`}
    >
      {isOptional ? (
        <SyntaxHighlighter
          CodeSnippets={`    ${command}`}
          Language="shell"
          LineNumbers={false}
        />
      ) : (
        command
      )}
    </span>

    {isOptional ? (
      <CopyToClipBoard textToCopy={command} placement={false} />
    ) : (
      isLink && (
        <a href={command} target="_blank" rel="noopener noreferrer">
          <Link className="absolute right-3 z-20 size-4 text-Logo" />
        </a>
      )
    )}
  </li>
);

const Steps = ({ title, commands }) => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <section className="my-4 flex h-auto w-full max-w-[1200px] flex-col items-center justify-center divide-y divide-Bg rounded-lg bg-Nav md:my-6">
      <button
        className="flex w-full items-center justify-between rounded-t-lg px-2 py-3"
        onClick={() => setIsOpen(!IsOpen)}
      >
        <p className="w-full text-start text-sm font-semibold tracking-tight text-white md:text-base md:tracking-normal">
          {title}
        </p>
        <ChevronDown
          className={`text-Logo ${IsOpen ? "rotate-180" : ""} transform duration-300 ease-in-out`}
        />
      </button>

      <ol
        className={`${IsOpen ? "block" : " hidden"} w-full divide-y divide-Bg `}
      >
        {commands?.map((command, index) => (
          <Command
            key={index}
            command={command?.command}
            isOptional={command?.isOptional}
            isLink={command?.isLink}
          />
        ))}
      </ol>
    </section>
  );
};

export default Steps;
