import { HiEye } from "react-icons/hi2";
import Button from "@/Components/Shared/Button";
import { Link } from "react-router-dom";
import GridBackgroundV2 from "@/Components/Shared/GridBackgroundV2";

const NotFound404 = () => {
  return (
  <GridBackgroundV2 TwClass="[mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,#000_70%,transparent_100%)] zmd:[mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,#000_70%,transparent_100%)]">
     <div
      className=" flex h-dvh items-center justify-center relative z-20"
      aria-label="Page Not Found "
    >
      <div className=" flex  w-4/5 flex-col items-center justify-center">
        <div className="box-border flex items-center justify-center ">
          <h1 className=" text-9xl text-white  md:text-[14rem]">4</h1>
          <span className=" relative  flex flex-col items-center justify-center text-Logo ">
            <h1 className=" text-9xl text-Logo  md:text-[14rem]">0</h1>
            <HiEye className=" absolute text-3xl md:text-5xl" />
          </span>
          <h1 className=" text-9xl text-white  md:text-[14rem]">4</h1>
        </div>
        <div className="flex flex-col text-center leading-10 md:-mt-4 ">
          <h2 className=" text-2xl text-white md:text-5xl ">SORRY,THERE'S</h2>
          <h3 className=" text-[1.45rem] text-Logo md:text-[2.95rem] ">
            NOTHING HERE
          </h3>
        </div>
        <div className="mt-4 md:mt-8">
          <Link to="/">
            <Button title="GO TO HOME" path={false}/>
          </Link>
        </div>
      </div>
    </div>
  </GridBackgroundV2>
  );
};

export default NotFound404;
