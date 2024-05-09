import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { ChevronsUpDown } from "lucide-react";

const DropdownMenu = () => {
  const dropdownOptions = useMemo(
    () => ["Option 1", "Option 2", "Option 3", "Option 4"],
    []
  );

  const [menuState, setMenuState] = useState({
    selectedValue: "Select Options",
    selectedIndex: 0,
    isOpen: false,
  });

  const divRef = useRef(null);

  const handleKeyboardNavigation = useCallback(
    (event) => {
      const { key } = event;
      if (key === "ArrowUp") {
        setMenuState((prevState) => ({
          ...prevState,
          selectedIndex: Math.max(prevState.selectedIndex - 1, 0),
        }));
      } else if (key === "ArrowDown") {
        setMenuState((prevState) => ({
          ...prevState,
          selectedIndex: Math.min(
            prevState.selectedIndex + 1,
            dropdownOptions.length - 1
          ),
        }));
      } else if (key === "Enter") {
        event.preventDefault();
        setMenuState((prevState) => ({
          selectedValue: dropdownOptions[prevState.selectedIndex],
          selectedIndex: prevState.selectedIndex,
          isOpen: false,
        }));
      }
    },
    [dropdownOptions]
  );
  useEffect(() => {
    const divRefs = divRef.current;
    if (divRefs && menuState.isOpen) {
      divRefs.addEventListener("keydown", handleKeyboardNavigation);
    }

    return () => {
      if (divRefs) {
        divRefs.removeEventListener("keydown", handleKeyboardNavigation);
      }
    };
  }, [menuState.isOpen, dropdownOptions, handleKeyboardNavigation]);
  useEffect(() => {
    if (menuState.isOpen && divRef.current) {
      divRef.current.focus();
    }
  }, [menuState.isOpen]);

  return (
    <>
      <button
        className="group mb-1 mt-2 flex w-full cursor-pointer items-center justify-between rounded-md bg-inherit px-3 py-1 outline outline-1 outline-Border focus:outline-Logo"
        onClick={() =>
          setMenuState({ ...menuState, isOpen: !menuState.isOpen })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();

            setMenuState({ ...menuState, isOpen: true });
          }
        }}
      >
        <span className="cursor-none">{menuState.selectedValue}</span>
        <ChevronsUpDown className="size-4 group-focus-within:text-Logo" />
      </button>
      {menuState.isOpen && (
        <div
          className="mb-1 mt-1.5 flex w-full cursor-pointer items-center justify-between rounded-md bg-inherit px-1 py-1 outline outline-1 outline-Border focus:outline-Logo"
          ref={divRef}
          tabIndex={1}
          role="listbox"
        >
          <div className="w-full  ">
            {dropdownOptions.map((option, index) => (
              <div
                key={option}
                className={`rounded-md px-2 py-0.5 ${menuState.selectedIndex !== index ? "hover:bg-Border" : ""} ${menuState.selectedIndex === index ? "bg-Border" : ""}`}
                onClick={() => {
                  setMenuState({
                    selectedValue: option,
                    selectedIndex: index,
                    isOpen: false,
                  });
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
