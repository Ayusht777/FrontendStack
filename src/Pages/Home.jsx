import Navbar from "@/Components/Shared/Navbar";
import Footer from '@/Components/Shared/Footer'
import FaqList from '@/Components/Shared/FAQ/FaqList'
const Home = () => {
  return (
    <div className="w-full bg-Bg h-full flex justify-start items-center flex-col">
      <Navbar></Navbar>
      <FaqList></FaqList>
      <Footer></Footer>
    </div>
  );
};

export default Home;
