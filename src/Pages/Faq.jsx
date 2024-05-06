import Navbar from "@/Components/Shared/Navbar";
import FaqList from "@/Components/Shared/FAQ/FaqSection";
const Faq = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start bg-Bg">
      <Navbar></Navbar>
      <FaqList />
    </div>
  );
};

export default Faq;
