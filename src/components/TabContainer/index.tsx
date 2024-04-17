"use client"
import { useState } from "react";
import { HeaderTabProps, TabContainerProps, TabContentProps } from "./interface-props";

const HeaderTab = ({ isActive, onClick, children }: HeaderTabProps) => (
  <button
    className={`${
      isActive
        ? "border-2 border-b-0 border-b-transparent rounded-t-2xl mb-0 border-collapse"
        : "border-2 border-t-0 border-x-0"
    } bg-transparent text-white py-2 px-6 mx-0 border-solid border-blue`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabContent = ({ isActive, children }: TabContentProps) =>
  isActive ? <div className="p-3 border-2 border-blue border-t-0 rounded-b-2xl border-collapse">{children}</div> : null;

export const TabContainer = ({ tabsName, tabsBody }: TabContainerProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative w-fit mx-auto mt-10">
      <div className="flex">
        {tabsName &&
          tabsName.map((name: string, k: number) => (
            <HeaderTab
              key={k}
              isActive={activeTab === k}
              onClick={() => setActiveTab(k)}
            >
              {name}
            </HeaderTab>
          ))}
      </div>
      <div >
        {tabsBody &&
          tabsBody.map((item: JSX.Element, k: number) => (
            <TabContent key={k} isActive={activeTab === k}>
              {item}
            </TabContent>
          ))}
      </div>
    </div>
  );
};

