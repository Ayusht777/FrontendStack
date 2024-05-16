import { Github } from "lucide-react";
const ButtonV2 = () => {
  return (
    <button>
      <a
        href="https://github.com/Ayusht777/FrontendStack"
        target="_blank"
        className={` box-border  flex  min-w-16 items-center  justify-between 
      rounded-lg bg-Nav px-5 py-1.5 text-center 
      font-semibold tracking-tight text-white 
      outline outline-1 outline-Border transition-colors 
      duration-300 ease-in-out hover:bg-Border focus:outline-white  
      focus-visible:outline focus-visible:outline-1
      focus-visible:outline-offset-2`}
      >
        <Github className="mr-1.5 size-4 rounded-full " /> Github
      </a>
    </button>
  );
};

export default ButtonV2;
