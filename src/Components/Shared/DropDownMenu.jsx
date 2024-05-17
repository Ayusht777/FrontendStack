import {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import { ChevronsUpDown } from "lucide-react";

const DropdownMenu = ({
  dropdownOptions = [],
  onOptionChange,
  form = false,
  selectedAuthorName = null,
}) => {
  const options = useMemo(() => {
    if (form) {
      return dropdownOptions;
    } else {
      return dropdownOptions.map((option) => ({
        author: option.author,
        id: option.id,
        img: option.img,
      }));
    }
  }, [dropdownOptions, form]);
  const findindex = options.findIndex(
    (option) => option.author === selectedAuthorName
  );
  const [dropdownState, setDropdownState] = useState({
    selectedOption: form ? "" : selectedAuthorName,
    selectedOptionIndex: form ? 0 : findindex,
    finalIndex: form ? 0 : findindex,
    isOpen: false,
  });

  const dropdownRef = useRef(null);

  const handleKeyNavigation = useCallback(
    (event) => {
      if (dropdownState.isOpen) {
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
            selectedOption: form
              ? options[prevState.selectedOptionIndex]
              : dropdownOptions[prevState.selectedOptionIndex].author,
            selectedOptionIndex: prevState.selectedOptionIndex,
            finalIndex: prevState.selectedOptionIndex,
            isOpen: false,
          }));
        } else if (key === "Escape") {
          setDropdownState((prevState) => ({
            ...prevState,
            isOpen: false,
          }));
        }
        onOptionChange(
          dropdownState.selectedOption
        );
      }
    },
    [
      options,
      dropdownState.selectedOption,
      dropdownState.isOpen,
      onOptionChange,
      dropdownOptions,
      form,
    ]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyNavigation);
    return () => {
      document.removeEventListener("keydown", handleKeyNavigation);
    };
  }, [handleKeyNavigation]);

  useLayoutEffect(() => {
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
      className={`w-full  ${form ? "mb-1.5" : "absolute right-0  z-50 max-w-48 bg-Bg md:max-w-56"} `}
    >
      <button
        className="group  flex w-full cursor-pointer items-center justify-between rounded-md bg-Bg bg-inherit px-3 py-1 outline outline-1 outline-Border focus:bg-Nav focus:outline-Logo"
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
                src={dropdownOptions[dropdownState?.finalIndex]?.img}
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
              key={index}
              className={`m rounded-md px-2 py-0.5 ${form ? "" : "flex items-center gap-x-1"}  ${
                dropdownState.selectedOptionIndex !== index
                  ? "hover:bg-Border"
                  : ""
              } ${dropdownState.selectedOptionIndex === index ? "bg-Border" : ""}`}
              onClick={() => {
                setDropdownState({
                  selectedOption: form ? option : options[index].author,
                  selectedOptionIndex: index,
                  isOpen: false,
                  finalIndex: !form && index,
                });
                onOptionChange(
                  options[index].author
                );
              }}
            >
              {!form ? (
                <>
                  <img
                    src={dropdownOptions[index]?.img}
                    alt={dropdownOptions[index]?.id}
                    className=" size-5 rounded-full"
                  />
                  {option?.author}
                </>
              ) : (
                <span>{option}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
