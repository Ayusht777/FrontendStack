import Heading from "@/Components/Shared/Heading";
import { challenge } from "@/Components/Shared/FAQ/Challenge.Data";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import HTMLReactParser from "html-react-parser";
import { HiLink } from "react-icons/hi2";
const Challenges = ({ question, answer, link }) => {
  const [showAns, setShowAns] = useState(false);
  return (
    <div className="flex flex-col gap-4 text-base sm:text-lg md:text-xl">
      <div className="bg-Nav text-white flex justify-between items-center px-4 py-2 rounded-lg">
        <h1 className="flex items-center gap-4">
          <div className="h-2 w-2 md:h-3 md:w-3 rounded-[100%] bg-white"></div>{" "}
          {question}
        </h1>
        <IoIosArrowUp
          className={`text-Logo text-xl md:text-2xl transition-all cursor-pointer ${
            showAns && "rotate-180"
          }`}
          onClick={() => {
            setShowAns(!showAns);
          }}
        />
      </div>
      <div
        className={`text-white p-5 bg-Nav rounded-lg flex justify-between items-center ${
          !showAns && "hidden"
        }`}
      >
        <div>{HTMLReactParser(answer)}</div>
        {link && (
          <a href={link} target="_blank">
            <HiLink className="text-Logo text-lg" />
          </a>
        )}
      </div>
    </div>
  );
};
const FaqChalllenge = () => {
  return (
    <section id="#steps-for-challenge" className="w-[80%] space-y-8 ">
      <Heading title={"Steps to do this challenge"} type="sub" />
      <div className="flex flex-col gap-4">
        {challenge.map((item, index) => (
          <Challenges {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default FaqChalllenge;
