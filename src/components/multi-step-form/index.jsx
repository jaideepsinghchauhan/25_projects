import React, { useState } from "react";
import { useMultiStepForm } from "./useMultiStepForm";
import UserForm from "./UserForm";
import AdressForm from "./AdressForm";
import AccountForm from "./AccountForm";

const MultiStepForm = () => {
  const INITIAL_DATA = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AdressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      alert("Fields Updated Succesfully");
    }
  };
  function updateFields(fields) {
    setData((prevData) => {
      return { ...prevData, ...fields };
    });
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: ".5rem",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
