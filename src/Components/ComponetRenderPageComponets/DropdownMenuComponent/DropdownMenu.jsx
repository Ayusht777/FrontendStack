import { useState } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import "./style.css";
const Options = [
  {
    Name: "Ayush Talesara",
    Id: 1,
    img: "https://media.licdn.com/dms/image/C4D03AQGf3yQOLuXGOA/profile-displayphoto-shrink_400_400/0/1664266450993?e=1718841600&v=beta&t=fgJQ0W7wKhtyDkbEP_bjugujRryNo5ct3oNQKfl3OXc",
  },
  {
    Name: "Divyanshu Sahu",
    Id: 2,
    img: "https://media.licdn.com/dms/image/D4D35AQERfja46Bzkbg/profile-framedphoto-shrink_400_400/0/1700986736889?e=1713981600&v=beta&t=jVI3isJvzMpwtNIzcmZ6uEB4GFY4OTR-f5KNmuqcKHM",
  },
  {
    Name: "Harshit Sharma",
    Id: 3,
    img: "https://media.licdn.com/dms/image/D4D03AQH0SDadpiwdGA/profile-displayphoto-shrink_400_400/0/1677944831336?e=1718841600&v=beta&t=Uq3x_jrerRIOPERwz77lJzJHwekYTs6942t_6I-TQeE",
  },
  {
    Name: "Aarsh Bharti",
    Id: 4,
    img: "https://media.licdn.com/dms/image/D4E35AQHDvHDMH_XrWw/profile-framedphoto-shrink_400_400/0/1698328411525?e=1713981600&v=beta&t=8_fMm8ISmPKbsbVSzeryEGGusRQ0JtKEnlUUnry3nG8",
  },
];
const DropdownMenu = () => {
  const [SelectedValue, setSelectedValue] = useState(Options[0]);
  const [IsOpen, setIsOpen] = useState(false);
  const HandleClick = (index) => {
    const FilterOption = Options.find((option) => index === option.Id);
    setSelectedValue(FilterOption);
    setIsOpen(false);
  };
  console.log(SelectedValue);
  return (
    <div className="w-52   ">
      <button
        className="w-full h-9 bg-Nav flex justify-between items-center px-2 py-1.5 rounded-md"
        onClick={() => {
          setIsOpen(!IsOpen);
        }}
      >
        <span className="flex items-center gap-x-2">
          <img
            src={SelectedValue.img}
            alt={SelectedValue.Name}
            className=" size-6  rounded-full"
          />
          <p className=" text-white truncate tracking-tight text-ellipsis">
            {SelectedValue.Name}
          </p>
        </span>
        <ChevronsUpDown className="text-Logo size-5" />
      </button>
      {IsOpen && (
        <div className="scroll-thin w-full max-h-[108px] h-auto overflow-y-scroll mt-1 rounded-md">
          <ul className=" flex justify-center items-center flex-col ">
            {Options.map((option) => (
              <li
                key={option.Id}
                className="w-full  flex items-center px-2 py-1.5 bg-Border  hover:bg-Nav cursor-pointer relative"
                onClick={() => {
                  HandleClick(option.Id);
                }}
              >
                <div className=" flex items-center justify-start gap-x-2  ">
                  <img
                    src={option.img}
                    alt={option.Name}
                    className=" size-6  rounded-full"
                  />
                  <p className="text-white truncate text-ellipsis">
                    {option.Name}
                  </p>
                  {SelectedValue.Id === option.Id && (
                    <Check className=" absolute right-2 text-Logo size-5" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
