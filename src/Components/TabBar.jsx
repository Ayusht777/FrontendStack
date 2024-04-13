import React, { useState } from "react";

function TabBar({ options = [], tab, setTab, className, children }) {
  return (
    <div className={className}>
      <div className="w-full flex justify-evenly text-white p-1 rounded-xl bg-[#404040]">
        {options?.map((item, index) => (
          <div
            key={index}
            className={`text-center text-lg font-extrabold py-2  grow cursor-pointer rounded-xl ${
              tab === item && "rounded-[2px] bg-[#1A1C1D] text-[#C8EF60]"
            }`}
            onClick={() => {
              setTab(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export default TabBar;
