import { useEffect, useState } from "react";
import Data from "@/Data/GalleryData";
import GalleryGrids from "@/Components/GalleryComponents/GalleryGrids";
import Heading from "@/Components/Shared/Heading";
import Button from "@/Components/Shared/Button";

const FeaturedCreationsSection = () => {
  const [RecentCreation, setRecentCreation] = useState(Data.slice(-3).reverse());

 useEffect(() => {
   const handleResize = () => {
     const sliceLength = window.innerWidth === 834 ? 4 : 3;
     setRecentCreation(Data.slice(-sliceLength).reverse());
   };
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);

  return (
    <section className="w-full max-w-[1200px]  md:pb-24 md:pt-0" aria-label="Featured Creations Section">
      <Heading title={"Top Creations"} aria-label="Top Creations" />
      <GalleryGrids Data={RecentCreation} aria-label="Gallery Grids" />
      <div className="my-8 flex justify-center" aria-label="View More Button">
        <Button
          title={"View More"}
          background_color="Border"
          text_color="white"
          path={"/gallery"}
          aria-label="View More"
        />
      </div>
    </section>
  );
};

export default FeaturedCreationsSection;

