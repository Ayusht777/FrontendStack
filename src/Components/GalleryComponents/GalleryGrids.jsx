import { Link } from "react-router-dom";
import { Code } from "lucide-react";

const GalleryGrids = ({ Data }) => {
  return (
    <section className="mt-6 grid w-full max-w-[1200px] grid-cols-1 place-content-center gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Data?.map((item) => (
        <div key={item.id} className=" aspect-square rounded-xl bg-Nav pb-2 ">
          <div className=" mx-4 mt-4 aspect-square rounded-xl bg-Bg  transition-all duration-500 ease-in-out ">
            <img
              className="h-full w-full  rounded-xl"
              src={item.imageUrl}
              alt={item.name}
            />
          </div>
          <div className="mx-4 mt-2 flex   items-center justify-between ">
            <h1 className=" font-semibold text-white">{item.ComponentName}</h1>
            <button className=" rounded-md bg-Border p-1 text-Logo ">
              <Link to={Data.isUploaded ? `/gallery/PreviewPage/${item.ComponentName}` : "/ComponentNotFound404"}>
                <Code strokeWidth="3" />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GalleryGrids;
