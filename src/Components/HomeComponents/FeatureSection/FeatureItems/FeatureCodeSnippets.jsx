import GridBackground from "@/Components/GridBackground";
import { Copy } from "lucide-react";

const CommandBox = ({ command, borderColor }) => {
  return (
    <div className=" box-border flex flex-col">
      <div className=" mx-4 box-border  flex h-full items-center justify-center rounded-lg bg-Nav outline outline-1 outline-Border ">
        <div className="mx-4 w-full animate-pulse rounded-xl bg-Border py-1"></div>
      </div>
      <div
        className={`static z-10 box-border flex h-min items-center justify-between rounded-lg bg-Bg px-3 outline outline-2 ${borderColor === "Logo" ? ` outline-Logo`:`outline-Border` }  md:h-full  ${borderColor === "Logo" && `shadow-[0px_0px_130px_-8px] shadow-Logo backdrop-blur-sm`}`}
      >
        <span className="text-sm text-Border ">{command}</span>
        <Copy className="size-4  text-Border" />
      </div>
      <div className=" mx-4 box-border  flex h-full items-center justify-center rounded-lg bg-Nav outline outline-1 outline-Border">
        <div className="mx-4 w-full animate-pulse rounded-xl bg-Border py-1"></div>
      </div>
    </div>
  );
};

const Steps = () => {
  const data = [
    {
      command: "pnpm create vite Button --template react-swc",
      borderColor: "Border",
    },
    {
      command: "pnpm create vite Navbar --template react-swc",
      borderColor: "Logo",
    },
    {
      command: "pnpm create vite AnimatedTabs --template react-swc",
      borderColor: "Border",
    },
  ];

  return (
    <>
      <div className=" grid-row-3 relative z-10 mr-8  mt-8  grid aspect-square   gap-y-2.5 rounded-tr-3xl bg-Bg px-6 py-3 md:gap-y-4 md:py-10 lg:mr-16 lg:mt-16">
        {data.map((item) => (
          <CommandBox
            key={item.command}
            command={item.command}
            borderColor={item.borderColor}
          />
        ))}
      </div>
    </>
  );
};

const FeatureCodeSnippets = () => {
  return <GridBackground section={<Steps />} />;
};

export default FeatureCodeSnippets;
