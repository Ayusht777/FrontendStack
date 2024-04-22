import Navbar from "@/Components/Shared/Navbar";
import HeroSection from "@/Components/PreviewPageComponents/HeroSection";
import { Code } from "lucide-react";
import { Link } from "react-router-dom";
// import {componentsData } from '@/Data/Data'
import Data from "@/Data/GalleryData";

const Gallery = () => {
  return (
    <div className="w-full bg-Bg h-full flex justify-start items-center  flex-col">
      <Navbar></Navbar>
      <HeroSection
        Title={"Explore our gallery of finely crafted components!"}
      />
      <section className="w-4/5  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-content-center">
        {Data.map((item) => (
          <div
            key={item.id}
            className=" aspect-square bg-Nav rounded-xl box-border pt-4 px-4 pb-2 "
          >
            <div className="w-full h-full bg-Bg rounded-xl ">
              <img
                className="w-full h-full object-fill rounded-xl "
                src={item.imageUrl}
                alt=""
              />
            </div>
            <div className="w-full flex items-center justify-between my-1.5">
              <h1 className=" font-semibold text-white">
                {item.ComponentName}
              </h1>
              <button className=" bg-Border p-1 rounded-md text-Logo ">
                <Link to={`/gallery/PreviewPage/${item.ComponentName}`}>
                  <Code strokeWidth="3" />
                </Link>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
