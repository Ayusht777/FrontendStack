import { data } from "@/Components/Carousel/carousel.Data";
import { useRef } from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Heading from "@/Components/Shared/Heading";
const Carousel = ({ className }) => {
  const [Index, setIndex] = useState(0);

  return (
    <section
      id="#our-team"
      className={`w-4/5 text-white relative space-y-16 ${className}`}
    >
      <Heading title={"Our Team"} type="sub" />
      <IoIosArrowBack
        className={`absolute top-[38%] -left-9 translate-y-[100%]  text-4xl text-Logo ${
          Index == 0 && "hidden"
        }`}
        onClick={() => {
          setIndex(Index - 1 < 0 ? data.length - 1 : Index - 1);
        }}
      />
      {data && (
        <div className="space-y-7">
          <div className="bg-[#252525] rounded-xl aspect-square p-4 relative transition-all cursor-pointer">
            <div className=" animate-pulse absolute top-4 left-4 right-4 bottom-[4.5rem] rounded-xl flex justify-center items-center  bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-600-translate-x-[50%] -translate-y-[50%]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <img
              src={data[Index].avatar}
              alt={data[Index].alt}
              className="w-full aspect-square rounded-xl  relative z-10 bg-transparent"
            />
            <div className="flex justify-between items-center pt-4 ">
              <h3 className="text-xl font-semibold">{data[Index].name}</h3>
              <a
                href={data[Index].githubLink}
                target="_blank"
                className="rounded-xl p-2 bg-Border overflow-hidden"
              >
                <FaGithub className="text-2xl text-Logo " />
              </a>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            {data.map((item, index) => (
              <div
                className={`h-3 w-3  rounded-full cursor-pointer transition ease-out  ${
                  Index == index ? "!w-11 bg-Logo" : " bg-Border"
                }`}
                onClick={() => {
                  setIndex(index);
                }}
                key={index}
              ></div>
            ))}
          </div>
        </div>
      )}

      <IoIosArrowForward
        className={`absolute top-[38%] -right-9 translate-y-[100%]  text-4xl text-Logo  ${
          Index === data.length - 1 && "hidden"
        }`}
        onClick={() => {
          setIndex((Index + 1) % data.length);
        }}
      />
    </section>
  );
};

export default Carousel;
