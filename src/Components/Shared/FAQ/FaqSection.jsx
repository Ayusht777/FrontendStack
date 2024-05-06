import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {faqData} from "@/Components/Shared/FAQ/faqData";
import Heading from "@/Components/Shared/Heading";
const FaqItems = ({ question, answer }) => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="my-6">
      <button
        className={`flex w-full items-center justify-between  bg-Nav px-2 py-3 outline outline-1 outline-Border  ${IsOpen ? "rounded-t-lg" : "rounded-lg"}`}
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
        <li className="relative flex items-start rounded-b-lg bg-Nav px-2 py-1.5 outline outline-1 outline-Border">
          {answer}
        </li>
      </ul>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="w-full max-w-[1200px] ">
         <Heading title={"FAQ'S"}/>{
       
        faqData.map((item)=><FaqItems key={item} question={item.question} answer={item.answer} />)
    }</section>
  );
};

export default FaqSection;
