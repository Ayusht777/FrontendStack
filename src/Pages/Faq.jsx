import Navbar from "@/Components/Shared/Navbar";
import { faqData } from "@/Components/Shared/FAQ/faqData";
import FaqItems from "@/Components/Shared/FAQ/FaqItems";
import Footer from "@/Components/Shared/Footer";
import GridBackgroundV2 from "@/Components/Shared/GridBackgroundV2";

const Faq = () => {
  return (
    <GridBackgroundV2
      TwClass={
        "[mask-image:radial-gradient(ellipse_60%_25%_at_50%_0%,#000_70%,transparent_100%)]"
      }
    >
      <div className="relative z-20 flex h-full  w-full  flex-col items-center justify-start px-4 md:px-6 xl:px-0">
        <Navbar></Navbar>
        <section className=" my-6 flex  w-full max-w-[1200px] flex-col items-center justify-center py-20">
          <span className="max-w-5xl   bg-gradient-to-r from-white to-white/70 bg-clip-text text-center text-3xl font-semibold capitalize tracking-tighter text-transparent md:py-1.5 md:text-5xl lg:text-7xl">
            Frequently Asked Questions
          </span>
          <p className="my-4  max-w-4xl text-center text-lg font-light tracking-tight text-white/90  decoration-Border underline-offset-4 md:text-xl">
            Breeze through the design component challenge with our team's
            support.
          </p>
        </section>
        <section className="flex w-full max-w-[1200px] max-w-[1200px] flex-col items-center pb-32 pt-4">
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
    </GridBackgroundV2>
  );
};

export default Faq;
