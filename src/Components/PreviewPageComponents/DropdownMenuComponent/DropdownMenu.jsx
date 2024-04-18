import { useState ,useEffect} from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import "./style.css";
const UserOptions = [
  {
    Name: "Ayush Talesara",
    Id: 1,
    imageUrl: "https://media.licdn.com/dms/image/C4D03AQGf3yQOLuXGOA/profile-displayphoto-shrink_400_400/0/1664266450993?e=1718841600&v=beta&t=fgJQ0W7wKhtyDkbEP_bjugujRryNo5ct3oNQKfl3OXc",
  },
  {
    Name: "Divyanshu Sahu",
    Id: 2,
    imageUrl: "https://media.licdn.com/dms/image/D4D35AQERfja46Bzkbg/profile-framedphoto-shrink_400_400/0/1700986736889?e=1713981600&v=beta&t=jVI3isJvzMpwtNIzcmZ6uEB4GFY4OTR-f5KNmuqcKHM",
  },
  {
    Name: "Harshit Sharma",
    Id: 3,
    imageUrl: "https://media.licdn.com/dms/image/D4D03AQH0SDadpiwdGA/profile-displayphoto-shrink_400_400/0/1677944831336?e=1718841600&v=beta&t=Uq3x_jrerRIOPERwz77lJzJHwekYTs6942t_6I-TQeE",
  },
  {
    Name: "Aarsh Bharti",
    Id: 4,
    imageUrl: "https://media.licdn.com/dms/image/D4E35AQHDvHDMH_XrWw/profile-framedphoto-shrink_400_400/0/1698328411525?e=1713981600&v=beta&t=8_fMm8ISmPKbsbVSzeryEGGusRQ0JtKEnlUUnry3nG8",
  },
];

const DropdownMenu = () => {
  const [selectedUser, setSelectedUser] = useState(UserOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleUserClick = (userId) => {
    const selectedOption = UserOptions.find((option) => option. Id === userId);
    setSelectedUser(selectedOption);
    setIsOpen(false);
  };

  return (
    <div className=" md:w-52 w-44">
      <button
        className="w-full md:h-9 h-7 bg-Nav flex justify-between items-center px-2 py-1.5 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-Logo"
        onClick={() => setIsOpen(true)}
      >
        <span className="flex items-center gap-x-2">
          <img
            src={selectedUser.imageUrl}
            alt={selectedUser.Name}
            className="md:size-6 size-5 rounded-full"
          />
          <p className="text-white truncate tracking-tight text-ellipsis">
            {selectedUser.Name}
          </p>
        </span>
        <ChevronsUpDown className="text-Logo size-5" />
      </button>
      {isOpen && (
        <ul
          className="scroll-thin w-full max-h-[108px] h-auto overflow-y-scroll mt-2 rounded-md"
        >
          {UserOptions.map((option) => (
            <li
              key={option.Id}
              className="w-full flex items-center px-2 py-1.5 bg-Border hover:bg-Nav cursor-pointer relative"
              onClick={() => handleUserClick(option.Id)}
            >
              <div className="flex items-center justify-start gap-x-2">
                <img
                  src={option.imageUrl}
                  alt={option.Name}
                  className="md:size-6 size-5 rounded-full"
                />
                <p className="text-white truncate text-ellipsis">
                  {option.Name}
                </p>
              </div>
              {selectedUser.Id === option.Id && (
                <Check
                  className="absolute right-2 text-Logo size-5"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropdownMenu;
