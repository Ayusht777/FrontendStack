import { faqData } from "@/Components/Shared/FAQ/faqData";
import Button from "@/Components/Shared/Button";
import Heading from "@/Components/Shared/Heading";
import FaqItems from "@/Components/Shared/FAQ/FaqItems";
const FaqSection = () => {
  return (
    <section
      className="flex w-full max-w-[1200px] flex-col items-center py-24"
      aria-label="FAQ Section"
    >
      <Heading title={"FAQ'S"} aria-label="Frequently Asked Questions" />
      {faqData.slice(0, 5).map((item, index) => (
        <FaqItems
          key={index}
          question={item.question}
          answer={item.answer}
          open={item?.open}
          aria-label={`FAQ Item ${index + 1}`}
        />
      ))}
      <div className="my-4" aria-label="Read All FAQs Button">
        <Button
          title={"Read All FAQs"}
          background_color={"Border"}
          text_color={"white"}
          path={"/faq"}
          aria-label="Read All FAQs"
        />
      </div>
    </section>
  );
};

export default FaqSection;
