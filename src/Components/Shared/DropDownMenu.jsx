import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { ChevronsUpDown } from "lucide-react";

const DropdownMenu = ({
  dropdownOptions = [],
  onOptionChange,
  form = true,
  selectedAuthorName = null,
}) => {
  const options = useMemo(() => {
    if (form) {
      return dropdownOptions;
    } else {
      return dropdownOptions.map((option) => option.author);
    }
  }, [dropdownOptions, form]);

 

  const [dropdownState, setDropdownState] = useState({
    selectedOption: form ? "" : selectedAuthorName,
    selectedOptionIndex: form
      ? 0
      : options.findIndex((option) => option === selectedAuthorName) ,
    isOpen: false,
  });

  const dropdownRef = useRef(null);

  const handleKeyNavigation = useCallback(
    (event) => {
      const { key } = event;
      if (dropdownState.isOpen) {
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
        } else if (key === "Escape") {
          setDropdownState((prevState) => ({
            ...prevState,
            isOpen: false,
          }));
        }
        onOptionChange(dropdownState.selectedOption);
      }
    },
    [
      options,
      dropdownState.selectedOption,
      dropdownState.isOpen,
      onOptionChange,
    ]
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
    <div
      className={`w-full  ${!form ? "absolute right-0  z-50 max-w-56 bg-Bg" : ""} `}
    >
      <button
        className="group mb-1.5 flex w-full cursor-pointer items-center justify-between rounded-md bg-Bg bg-inherit px-3 py-1 outline outline-1 outline-Border focus:bg-Nav focus:outline-Logo"
        onClick={() =>
          setDropdownState({ ...dropdownState, isOpen: !dropdownState.isOpen })
        }
      >
        <span
          className={`cursor-none ${
            form && !options.includes(dropdownState.selectedOption)
              ? "text-gray-400"
              : ""
          }`}
        >
          {!form ? (
            <div className="flex items-center text-white">
              <img
                src={dropdownOptions[dropdownState.selectedOptionIndex].img}
                alt={dropdownOptions[dropdownState.selectedOptionIndex].author}
                className="mr-2 size-5 rounded-full"
              />
              {dropdownState.selectedOption || options[0]}
            </div>
          ) : (
            dropdownState.selectedOption || "Select Option"
          )}
        </span>

        <ChevronsUpDown className="size-4 group-focus-within:text-Logo" />
      </button>

      <div
        className={`${
          dropdownState.isOpen ? "flex" : "hidden"
        }  mb-1 mt-1.5 w-full cursor-pointer items-center justify-between rounded-md bg-inherit px-1 py-1 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] outline outline-1 outline-Border focus:outline-Logo`}
        tabIndex={-10}
        role="listbox"
        ref={dropdownRef}
      >
        <div className="w-full space-y-1">
          {options.map((option, index) => (
            <div
              key={option}
              className={`m rounded-md px-2 py-0.5 ${form ? "" : "flex items-center gap-x-1"}  ${
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
              {!form && (
                <img
                  src={dropdownOptions[index].img}
                  alt={option}
                  className=" size-5 rounded-full"
                />
              )}
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
