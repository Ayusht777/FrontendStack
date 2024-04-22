import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import DropdownMenu from "@/Components/PreviewPageComponents/DropdownMenuComponent/DropdownMenu";
const ToolbarSection = () => {
  return (
    <section className="md:w-4/5 w-full flex justify-between items-start my-4">
      <button className="size-7 bg-Nav rounded-md text-Logo "><Link to="/gallery"><ArrowLeft strokeWidth="2" className="mx-auto "/></Link></button>
      <DropdownMenu></DropdownMenu>
    </section>
  );
};

export default ToolbarSection;
