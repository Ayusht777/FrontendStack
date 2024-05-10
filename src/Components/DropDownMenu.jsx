import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { ChevronsUpDown } from "lucide-react";

const DropdownMenu = ({ dropdownOptions = null, onOptionChange }) => {
  const options = useMemo(() => dropdownOptions, [dropdownOptions]);
  const [dropdownState, setDropdownState] = useState({
    selectedOption: ""  ,
    selectedOptionIndex: 0,
    isOpen: false,
  });

  const dropdownRef = useRef(null);

  const handleKeyNavigation = useCallback(
    (event) => {
      const { key } = event;
      if (key === "ArrowUp") {
        event.preventDefault();
        setDropdownState((prevState) => ({
          ...prevState,
          selectedOptionIndex: Math.max(prevState.selectedOptionIndex - 1, 0),
        }));
      } else if (key === "ArrowDown") {
        event.preventDefault();
        setDropdownState((prevState) => ({
          ...prevState,
          selectedOptionIndex: Math.min(
            prevState.selectedOptionIndex + 1,
            options.length - 1
          ),
        }));
      } else if (key === "Enter") {
        setDropdownState((prevState) => ({
          selectedOption: options[prevState.selectedOptionIndex],
          selectedOptionIndex: prevState.selectedOptionIndex,
          isOpen: false,
        }));
      }
      onOptionChange(dropdownState.selectedOption);
    },
    [options, dropdownState.selectedOption, onOptionChange]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyNavigation);
    return () => {
      document.removeEventListener("keydown", handleKeyNavigation);
    };
  }, [handleKeyNavigation]);

  useEffect(() => {
    if (dropdownState.isOpen && dropdownRef.current) {
      dropdownRef.current.focus();
    }
  }, [dropdownState.isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownState((prevState) => ({ ...prevState, isOpen: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
  return (
    <>
      <button
        className="group mb-1.5 flex w-full cursor-pointer items-center justify-between rounded-md bg-Bg bg-inherit px-3 py-1 outline outline-1 outline-Border focus:bg-Nav focus:outline-Logo"
        onClick={() =>
          setDropdownState({ ...dropdownState, isOpen: !dropdownState.isOpen })
        }
      >
        <span
          className={`cursor-none ${
            !options.includes(dropdownState.selectedOption)
              ? "text-gray-400"
              : ""
          }`}
        >
          {dropdownState.selectedOption || "Select an option"}
        </span>

        <ChevronsUpDown className="size-4 group-focus-within:text-Logo" />
      </button>

      <div
        className={`${
          dropdownState.isOpen ? "flex" : "hidden"
        } mb-1 mt-1.5 w-full cursor-pointer items-center justify-between rounded-md bg-inherit px-1 py-1 outline outline-1 outline-Border focus:outline-Logo `}
        tabIndex={-10}
        role="listbox"
        ref={dropdownRef}
      >
        <div className="w-full">
          {options.map((option, index) => (
            <div
              key={option}
              className={`rounded-md px-2 py-0.5 ${
                dropdownState.selectedOptionIndex !== index
                  ? "hover:bg-Border"
                  : ""
              } ${dropdownState.selectedOptionIndex === index ? "bg-Border" : ""}`}
              onClick={() => {
                setDropdownState({
                  selectedOption: option,
                  selectedOptionIndex: index,
                  isOpen: false,
                });
              }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
