import { faqData } from "@/Components/Shared/FAQ/faqData";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "@/Components/Shared/Button";
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full md:p-4 p-2 rounded-lg border-Border border-2 transition-all ease-in-out duration-300  space-y-2 ${
        isOpen ? "bg-Nav " : "bg-background "
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-white md:text-xl text-lg font-medium">
          {question}
        </h3>
        <button
          className={`${
            isOpen ? "rotate-0" : "rotate-45"
          } text-2xl text-Logo cursor-pointer transition-transform ease-in-out duration-300`}
          onClick={toggleAnswer}
        >
          {" "}
          <HiMiniXMark></HiMiniXMark>
        </button>
      </div>
      <p
        className={`text-white md:text-base text-sm ${
          isOpen ? "inline-flex" : "hidden"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

const FaqList = () => {
  return (
    <section className="w-4/5 flex flex-col justify-center items-center py-32 gap-y-12">
      <h2 className="text-white text-5xl text-center font-semibold ">
        Top FAQs
      </h2>
      <div className="flex justify-center items-center gap-y-4 flex-col w-full">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Button label="Load More..." bgColor="Nav" width="w-52" />
    </section>
  );
};

export default FaqList;
