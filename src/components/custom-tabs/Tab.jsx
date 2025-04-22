import React, { useState } from "react";
import "./styles.css";

const Tab = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleTabClickChange(index) {
    setCurrentTabIndex(index);
    onChange(index);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tab, index) => (
          <div key={tab.label} onClick={() => handleTabClickChange(index)}>
            <span
              className={index === currentTabIndex ? "label active" : "label"}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tab;
