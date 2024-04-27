import { data } from "@/Components/Carousel/carousel.Data";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "@/Components/Shared/Heading";

const Carousel = ({ className }) => {
  const [Index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  console.log(direction);
  const variants = {
    enter: (direction) => {
      return {
        position: "absolute",
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
      };
    },
  };
  const swipeConfidenceThreshold = 1000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setIndex((Index + 1) % data.length);
    } else if (newDirection === -1) {
      setIndex((Index - 1 + data.length) % data.length);
    }
  };
  return (
    <section
      id="#our-team"
      className={`w-4/5  text-white relative space-y-8 ${className}`}
    >
      <Heading title={"Our Team"} type="sub" />
      <IoIosArrowBack
        className={`absolute top-[44%] -left-9 translate-y-[100%]  text-4xl text-Logo ${
          Index == 0 && "hidden"
        }`}
        onClick={() => {
          paginate(-1);
        }}
      />
      {data && (
        <div className="relative w-full !aspect-[1/1.19]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={Index}
              className="bg-[#252525] rounded-xl aspect-square p-4 absolute cursor-pointer"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <div className="relative aspect-square">
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
                  draggable={false}
                />
              </div>
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
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      <div className="flex gap-2 items-center justify-center">
        {data.map((item, index) => (
          <div
            className={`h-3 w-3  rounded-full cursor-pointer transition ease-out duration-300  ${
              Index == index ? "!w-11 bg-Logo" : " bg-Border"
            }`}
            onClick={() => {
              setIndex(index);
            }}
            key={index}
          ></div>
        ))}
      </div>

      <IoIosArrowForward
        className={`absolute top-[44%] -right-9 translate-y-[100%]  text-4xl text-Logo  ${
          Index === data.length - 1 && "hidden"
        }`}
        onClick={() => {
          paginate(1);
        }}
      />
    </section>
  );
};

export default Carousel;
