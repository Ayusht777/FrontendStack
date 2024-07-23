import { Plus } from "lucide-react";
const Footer = () => {
  return (
    <footer className="absolute z-30 -bottom-4 max-w-[1200px] w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] xl:w-full h-[150px]">
      <div className=" flex flex-col items-center justify-center gap-y-2 rounded-t-lg py-4 border-2 border-Border">
        <h1 className="text-2xl font-semibold text-Logo md:text-3xl lg:text-4xl">
          StackFrontend
        </h1>
        <div className="flex  items-center justify-center">
          <hr className="w-[4.5rem] border-[1px]  md:w-24 lg:w-28 " />
          <Plus className="rotate-45 text-Logo " />
          <hr className=" w-[4.5rem] border-[1px]  md:w-24 lg:w-28" />
        </div>
        <p className='text-sm text-white after:pl-1 after:text-Logo after:content-["StackFrontend"] lg:text-base'>
          copyright ©2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
