import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css";
const LightDarkMode = () => {
  const [value, setValue] = useLocalStorage("theme", "light");

  return (
    <div className={value === "light" ? "light container" : "dark container"}>
      <p>Hello World!</p>
      <button
        onClick={() => {
          setValue(value === "light" ? "dark" : "light");
        }}
      >
        Change the theme
      </button>
    </div>
  );
};

export default LightDarkMode;
