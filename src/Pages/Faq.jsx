import Navbar from "@/Components/Shared/Navbar";
import FaqList from "@/Components/Shared/FAQ/FaqList";
const Faq = () => {
  return (
    <div className="w-full bg-Bg h-full flex justify-start items-center flex-col">
      <Navbar></Navbar>
      <FaqList/>
    </div>
  );
};

export default Faq;
