import Data from "@/Data/GalleryData";
import GalleryGrids from "@/Components/GalleryComponents/GalleryGrids";
import Heading from "@/Components/Shared/Heading";
import Button from "@/Components/Shared/Button";
const FeaturedCreationsSection = () => {
  const RecentCreation = Data.length > 3 ? Data.slice(-3).reverse() : null;

  return (
    <section className="w-full max-w-[1200px]  md:pb-24 md:pt-0">
      <Heading title={"Top Creations"} />
      <GalleryGrids Data={RecentCreation} />
      <div className="flex justify-center my-8">
        <Button title={"View More"} background_color="Border" text_color="white" />
      </div>
    </section>
  );
};

export default FeaturedCreationsSection;
