import React from "react";
import Tab from "./Tab";

const Tabs = () => {
  function ExternalComponent() {
    return <div>I am Tab 3 External Data</div>;
  }
  function handleTabChange(index) {
    // this function is just there to recieve valur from child component
    console.log("Current Selected Index", index);
  }
  const tabData = [
    {
      label: "Tab 1",
      content: <div>This is tab 1 content data</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is tab 2 content data</div>,
    },
    {
      label: "Tab 3",
      content: <ExternalComponent />,
    },
  ];
  return (
    <div>
      <Tab tabsContent={tabData} onChange={handleTabChange} />
    </div>
  );
};

export default Tabs;
