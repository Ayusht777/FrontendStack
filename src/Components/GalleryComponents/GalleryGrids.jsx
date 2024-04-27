import { Link } from "react-router-dom";
import { Code } from "lucide-react";

const GalleryGrids = ({ Data }) => {
  return (
    <section className=" max-w-[1200px] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-content-center ">
      {Data.map((item) => (
        <div key={item.id} className=" aspect-square bg-Nav rounded-xl pb-2">
          <div className=" aspect-square bg-Bg rounded-xl mx-4 mt-4  hover:mx-2 hover:mt-2 transition-all ease-in-out duration-500">
            <img
              className="w-full h-full  rounded-xl"
              src={item.imageUrl}
              alt={item.name}
            />
          </div>
          <div className="flex items-center justify-between   mx-4 mt-2 ">
            <h1 className=" font-semibold text-white">{item.ComponentName}</h1>
            <button className=" bg-Border p-1 rounded-md text-Logo ">
              <Link to={`/gallery/PreviewPage/${item.ComponentName}`}>
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
