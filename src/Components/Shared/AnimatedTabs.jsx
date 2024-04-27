import { useState, useRef, useEffect } from "react";

const AnimatedTabs = ({ Tabs, onActiveTabIndexChange }) => {
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) return;

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
      onActiveTabIndexChange(Tabs[activeTabIndex].id);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className=" relative mx-auto flex h-12 w-full max-w-[1200px]  flex-row justify-evenly  rounded-xl bg-Border px-1 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-xl py-[.30rem] transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-xl bg-Bg" />
      </span>
      {Tabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? "text-Logo" : " text-white"
            } my-auto w-full cursor-pointer select-none  rounded-full px-2 text-center font-semibold`}
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
