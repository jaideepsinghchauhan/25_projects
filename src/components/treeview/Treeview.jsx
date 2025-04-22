import React from "react";
import { treeData } from "./data.js";
import MenuItem from "./MenuItem.jsx";
import './styles.css'
const Treeview = () => {
  return (
      <div className="menu-list-container">
        {treeData?.map((listItem, index) => (
          <MenuItem item={listItem} key={index} />
        ))}
      </div>
  );
};

export default Treeview;
