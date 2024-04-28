import { Github } from "lucide-react";
const ButtonV2 = () => {
  return (
    <button className=" box-border  flex  min-w-16 items-center  justify-between rounded-lg bg-inherit px-5 py-1.5 text-center font-semibold tracking-tight text-white outline outline-1 outline-Border transition-colors duration-300 ease-in-out hover:bg-Border">
      <Github className="mr-1.5 size-4 rounded-full " /> Github
    </button>
  );
};

export default ButtonV2;
