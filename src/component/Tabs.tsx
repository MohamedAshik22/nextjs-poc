import React, { useState } from 'react';

interface TabProps {
  label: string;
  Component: React.FC;
}

interface TabsProps {
  tabs: TabProps[];
  tabButtonClassName?: string;
  activeTabButtonClassName?: string;
  initialActiveTab?: number;
}

const Tabs: React.FC<TabsProps> = ({ 
  tabs,
  tabButtonClassName,
  activeTabButtonClassName,
  initialActiveTab = 0,
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full mx-auto">
    <div className="relative border-b border-gray-300">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${tabButtonClassName} ${index === activeTab ? activeTabButtonClassName : 'border-gray-200 text-gray-400'}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div className="py-4">
      {React.createElement(tabs[activeTab]?.Component)}
    </div>
  </div> 

  );
};

export default Tabs;


