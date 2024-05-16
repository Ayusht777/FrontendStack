import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqItems = ({ question, answer ,open=false}) => {
  const [IsOpen, setIsOpen] = useState(open);
  return (
    <div className="my-4 w-full">
      <button
        className={`flex w-full items-center justify-between  bg-Nav px-2 py-2.5 outline outline-1 outline-Border  ${IsOpen ? "rounded-t-lg" : "rounded-lg"}`}
        onClick={() => setIsOpen(!IsOpen)}
      >
        <p className="w-full text-start text-sm font-semibold tracking-tight text-white md:text-base md:tracking-normal">
          {question}
        </p>
        <ChevronDown
          className={`text-Logo ${IsOpen ? "rotate-180" : ""} transform duration-300 ease-in-out`}
        />
      </button>
      <ul className={`${IsOpen ? "block" : " hidden"} w-full text-white`}>
        <li className="relative flex items-start rounded-b-lg bg-Nav px-2 py-1.5 outline outline-1 outline-Border leading-[1.55rem]">
          {answer}
        </li>
      </ul>
    </div>
  );
};

export default FaqItems