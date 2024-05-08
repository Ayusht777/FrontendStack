import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/Components/Shared/FAQ/faqData";
import Button from "@/Components/Shared/Button";
import Heading from "@/Components/Shared/Heading";
const FaqItems = ({ question, answer }) => {
  const [IsOpen, setIsOpen] = useState(false);
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
        <li className="relative flex items-start rounded-b-lg bg-Nav px-2 py-1.5 outline outline-1 outline-Border">
          {answer}
        </li>
      </ul>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="flex w-full max-w-[1200px] flex-col items-center py-24">
      <Heading title={"FAQ'S"} />
      {faqData.map((item, index) => (
        <FaqItems key={index} question={item.question} answer={item.answer} />
      ))}
      <Button
        title={"View More"}
        background_color={"Border"}
        text_color={"white"}
      />
    </section>
  );
};

export default FaqSection;
