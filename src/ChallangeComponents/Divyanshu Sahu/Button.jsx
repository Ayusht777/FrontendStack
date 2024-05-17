import { cn } from "@/Utils/twMerge";
const ButtonWrapperDivyanshu = () => {
  return (
    <div className="flex h-full w-full items-center justify-center ">
      <Button BgColor="bg-red-500" hoverColor={"hover:bg-red-500/90"}>
        Button
      </Button>
    </div>
  );
};
const Button = ({
  BgColor = "bg-gray-100",
  hoverColor = "hover:bg-gray-100/90",
  children,
}) => {
  return (
    <button
      type="button"
      className={cn(
        ` rounded-md px-6 py-2 transition-colors ease-in-out focus:outline  focus:outline-1 focus:outline-black `,
        `${BgColor}`,
        `${hoverColor}`
      )}
    >
      {children}
    </button>
  );
};

export default ButtonWrapperDivyanshu;
