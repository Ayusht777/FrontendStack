import HeroSection from "@/Components/Shared/HeroSection";
import AnimatedTabs from "@/Components/Shared/AnimatedTabs";
import Data from "@/Data/GalleryData";
import { useState } from "react";
import GalleryGrids from "@/Components/GalleryComponents/GalleryGrids";
import GridBackgroundV2 from "@/Components/Shared/GridBackgroundV2";

const Gallery = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const filterData = Data.filter((item) => {
    return activeTabIndex === "all" || item.type === activeTabIndex;
  });

  return (
    <GridBackgroundV2 TwClass="[mask-image:radial-gradient(ellipse_60%_40rem_at_50%_0%,#000_70%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_48rem_at_50%_0%,#000_70%,transparent_100%)]">
      <div className=" relative z-20 flex h-full w-full flex-col items-center justify-start px-4 xl:px-0 ">
        <HeroSection
          heading={"Explore our gallery of finely crafted components!"}
        />
        <section className="mb-6 w-full">
          <AnimatedTabs
            Tabs={[
              { id: "all", name: "ALL" },
              { id: "basic", name: "BASIC" },
              { id: "medium", name: "MEDIUM" },
              { id: "professional", name: "PRO" },
            ]}
            onActiveTabIndexChange={setActiveTabIndex}
          ></AnimatedTabs>
        </section>
        <section className="mb-64">
          <GalleryGrids Data={filterData} />
        </section>
      </div>

    </GridBackgroundV2>
  );
};

export default Gallery;
