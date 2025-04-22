import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [opened, setOpened] = useState(false);

  const toggleOpen = () => setOpened(!opened);

  return (
    <div style={{ marginLeft: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>{item.label}</span>
        {item?.children?.length > 0 && (
          <span
            onClick={toggleOpen}
            style={{ cursor: "pointer" }}
          >
            {opened ? <FaMinus /> : <FaPlus />}
          </span>
        )}
      </div>

      {opened && item?.children?.map((child, index) => (
        <MenuItem item={child} key={index} />
      ))}
    </div>
  );
};

export default MenuItem;
