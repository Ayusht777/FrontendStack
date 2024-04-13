import BrandLogo from "@/Assets/BrandLogo.svg";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-28 gap-x-2">
       <img src={BrandLogo} alt="FrontendStack" className=" size-12 animate-pulse" />
    </div>
  );
};

export default Loader;
