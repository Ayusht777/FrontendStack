import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import DropdownMenu from "@/Components/PreviewPageComponents/DropdownMenuComponent/DropdownMenu";

const ToolbarSection = ({ getSelectedAuthor }) => {
  return (
    <section className="my-4 flex w-full max-w-[1200px] items-start justify-between">
      <button className="size-7 rounded-md bg-Nav text-Logo ">
        <Link to="/gallery">
          <ArrowLeft strokeWidth="2" className="mx-auto " />
        </Link>
      </button>
      <DropdownMenu getSelectedAuthor={getSelectedAuthor} />
    </section>
  );
};

export default ToolbarSection;
