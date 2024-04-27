import { useState } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import "./style.css";
const UserList = [
  {
    Name: "Aarsh Bharti",
    Id: 1,
    imageUrl:
      "https://media.licdn.com/dms/image/D4E35AQHDvHDMH_XrWw/profile-framedphoto-shrink_400_400/0/1698328411525?e=1714831200&v=beta&t=jvY5IvVmYhlQI1jAdHEGC9b8Z8cY7acZXEmlIxNTc6o",
  },
  {
    Name: "Ayush Talesara",
    Id: 2,
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQGf3yQOLuXGOA/profile-displayphoto-shrink_400_400/0/1664266450993?e=1718841600&v=beta&t=fgJQ0W7wKhtyDkbEP_bjugujRryNo5ct3oNQKfl3OXc",
  },
  {
    Name: "Divyanshu Sahu",
    Id: 3,
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQF9QpoeSq_kZw/profile-displayphoto-shrink_400_400/0/1700986735638?e=1719446400&v=beta&t=RNbSZTCNWqTwAV7jUUIDPcfUfvd3ZVeg6OZSnywexmk",
  },
  {
    Name: "Harshit Sharma",
    Id: 4,
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQH0SDadpiwdGA/profile-displayphoto-shrink_400_400/0/1677944831336?e=1718841600&v=beta&t=Uq3x_jrerRIOPERwz77lJzJHwekYTs6942t_6I-TQeE",
  },
];

const DropdownMenu = ({ getSelectedAuthor }) => {
  const getRandomIndex = Math.floor(Math.random() * UserList.length);

  const [selectedUser, setSelectedUser] = useState(UserList[getRandomIndex]);
  getSelectedAuthor(selectedUser.Name);
  const [isOpen, setIsOpen] = useState(false);
  const handleUserClick = (userId) => {
    const selectedOption = UserList.find((option) => option.Id === userId);
    setSelectedUser(selectedOption);
    setIsOpen(false);
  };

  return (
    <div className=" w-44 md:w-52">
      <button
        className="flex h-7 w-full items-center justify-between rounded-md bg-Nav px-2 py-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-Logo md:h-9"
        onClick={() => setIsOpen(true)}
      >
        <span className="flex items-center gap-x-2">
          <img
            src={selectedUser.imageUrl}
            alt={selectedUser.Name}
            className="size-5 rounded-full md:size-6"
          />
          <p className="truncate text-ellipsis tracking-tight text-white">
            {selectedUser.Name}
          </p>
        </span>
        <ChevronsUpDown className="size-5 text-Logo" />
      </button>
      {isOpen && (
        <ul className="scroll-thin mt-2 h-auto max-h-[108px] w-full overflow-y-scroll rounded-md">
          {UserList.map((option) => (
            <li
              key={option.Id}
              className="relative flex w-full cursor-pointer items-center bg-Border px-2 py-1.5 hover:bg-Nav"
              onClick={() => handleUserClick(option.Id)}
            >
              <div className="flex items-center justify-start gap-x-2">
                <img
                  src={option.imageUrl}
                  alt={option.Name}
                  className="size-5 rounded-full md:size-6"
                />
                <p className="truncate text-ellipsis text-white">
                  {option.Name}
                </p>
              </div>
              {selectedUser.Id === option.Id && (
                <Check className="absolute right-2 size-5 text-Logo" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropdownMenu;
