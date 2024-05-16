import Navbar from "@/Components/Shared/Navbar";
import { faqData } from "@/Components/Shared/FAQ/faqData";
import FaqItems from "@/Components/Shared/FAQ/FaqItems";
import Button from "@/Components/Shared/Button";
import Footer from "@/Components/Shared/Footer";
const Faq = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-start bg-Bg">
      <Navbar></Navbar>
      <section className=" my-4 flex  w-full flex-col items-center justify-center py-20">
        <span className="max-w-5xl   bg-gradient-to-r from-white to-white/70 bg-clip-text text-center text-3xl font-semibold capitalize tracking-tighter text-transparent md:py-1.5 md:text-5xl lg:text-7xl">
          Frequently Asked Questions
        </span>

        <p className="my-4  max-w-4xl text-center text-lg font-light tracking-tight text-white/90  decoration-Border underline-offset-4 md:text-xl">
          Discover how to tackle this design components challenge with ease. If
          you have any specific questions or need further clarification, our
          team is happy to assist.
        </p>
      </section>
      <section className="flex w-full max-w-[1200px] flex-col items-center pb-32 pt-4">
        {faqData.map((item, index) => (
          <FaqItems
            key={index}
            question={item.question}
            answer={item.answer}
            open={item?.open}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Faq;
