import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const typesOfColor = {
    HEX: "HEX",
    RGB: "RGB",
  };
  const [typeOfColor, setTypeOfColor] = useState(typesOfColor.HEX);
  const [color, setColor] = useState("#000000");
  useEffect(() => {
    handleCreateRandomColor();
  }, [typeOfColor]);
  function generateRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  const handleCreateRandomColor = () => {
    if (typeOfColor === typesOfColor.HEX) {
      let hexColor = "#";
      const hexArray = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      for (let i = 0; i < 6; i++) {
        hexColor += hexArray[generateRandomNumber(hexArray.length)];
      }
      setColor(hexColor);
    } else {
      let rgbColor = "";
      for (let i = 0; i < 3; i++) {
        rgbColor += generateRandomNumber(255);
        if (i !== 2) {
          rgbColor += ",";
        }
      }
      rgbColor = `rgb(${rgbColor})`;
      setColor(rgbColor);
    }
  };
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor(typesOfColor.HEX)}>
        Create Hex Color
      </button>
      <button onClick={() => setTypeOfColor(typesOfColor.RGB)}>
        Create RGB Color
      </button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      <div
        style={{
          color: '#fff',
        }}
      >
        {typeOfColor === typesOfColor.HEX ? (
          <h3>HEX Color : {color}</h3>
        ) : (
          <h2>RGB Color : {color}</h2>
        )}
      </div>
    </div>
  );
};

export default RandomColor;
