import { useState, useRef, useEffect } from "react";

const AnimatedTabs = () => {
  const allTabs = [
    { id: "Preview", name: "PREVIEW" },
    { id: "code", name: "CODE" },
  ];

  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) return;

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(tabsRef.current[activeTabIndex].clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flex-row relative mx-auto flex w-full justify-center h-12 rounded-t-xl  bg-Border px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-xl py-[.30rem] transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-xl bg-Bg" />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? "text-Logo" : " text-white"
            } my-auto cursor-pointer select-none rounded-full w-full text-center font-bold`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default AnimatedTabs;
