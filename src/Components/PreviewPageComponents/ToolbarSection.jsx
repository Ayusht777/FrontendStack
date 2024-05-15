import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import DropdownMenu from "@/Components/Shared/DropDownMenu";

const ToolbarSection = ({ onOptionChange, dropdownOptions,img }) => {
  console.log(img)
  return (
    <section className="relative z-10 my-4 flex w-full max-w-[1200px] items-start justify-between text-white">
      <button className="size-7 rounded-md bg-Nav text-Logo ">
        <Link to="/gallery">
          <ArrowLeft strokeWidth="2" className="mx-auto " />
        </Link>
      </button>
      <DropdownMenu
        dropdownOptions={dropdownOptions}
        onOptionChange={onOptionChange}
        form={false}
        selectedOptionImage={img}
      />
    </section>
  );
};

export default ToolbarSection;
