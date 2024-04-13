import { HiEye } from "react-icons/hi2";
import Button from "@/Components/Shared/Button";
import { Link } from "react-router-dom";
const NotFound404 = () => {
  return (
    <div
      className=" bg-Bg h-dvh flex justify-center items-center "
      aria-label="Page Not Found "
    >
      <div className=" w-4/5  flex justify-center items-center flex-col">
        <div className="flex justify-center items-center box-border ">
          <h1 className=" text-white md:text-[14rem]  text-9xl">4</h1>
          <span className=" text-Logo  relative flex justify-center items-center flex-col ">
            <h1 className=" text-Logo md:text-[14rem]  text-9xl">0</h1>
            <HiEye className=" absolute md:text-5xl text-3xl" />
          </span>
          <h1 className=" text-white md:text-[14rem]  text-9xl">4</h1>
        </div>
        <div className="flex flex-col leading-10 text-center md:-mt-4 ">
          <h2 className=" md:text-5xl text-2xl text-white ">SORRY,THERE'S</h2>
          <h3 className=" md:text-[2.95rem] text-[1.45rem] text-Logo ">
            NOTHING HERE
          </h3>
        </div>
        <div className="md:mt-8 mt-4">
          <Link to="/">
            <Button label="GO TO HOME" width="w-32" bgColor="Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
