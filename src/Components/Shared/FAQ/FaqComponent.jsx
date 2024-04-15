import faqData from "@/Components/Shared/FAQ/faqData"
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const FaqItem = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
  
    const toggleAnswer = () => {
      setShowAnswer(!showAnswer);
    };
  
    return (
      <div className="faq-item bg-Bg p-4  my-4 rounded-lg w-4/5 m-auto border-Border border-2 ">
        <div className="flex items-center justify-between ">
          <h3 className="faq-question text-white text-lg">{question}</h3>
          <HiMiniXMark
            className={`text-Logo ${showAnswer ? 'rotate-0' : 'rotate-45'} text-2xl cursor-pointer transition-transform ease-in-out duration-300`}
            onClick={toggleAnswer}
          />
        </div>
        <p className={`faq-answer text-gray-400 ${showAnswer ? 'block' : 'hidden'} mt-2 transition-all ease-in-out duration-1000`}>
          {answer}
        </p>
      </div>
    );
  };
  
  
  const FaqComponent = () => {
    return (
      <div className="faq-container bg-gray-800 p-6 rounded-md flex-col justify-center items-center ">
        <h2 className="text-white text-5xl py-5 mb-4 text-center ">Top FAQ's</h2>
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}

      </div>
    );
  };
  
  export default FaqComponent;