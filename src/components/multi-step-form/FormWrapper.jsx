import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: 0,
          marginBottom: "2rem",
          fontWeight: "bolder",
        }}
      >
        {title}
      </h1>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyItems: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
