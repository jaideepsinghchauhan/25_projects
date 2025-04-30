import React from "react";
import FormWrapper from "./FormWrapper";

const UserForm = ({ firstName, lastName, age, updateFields }) => {
  return (
    <FormWrapper title="User Detail">
      <label>First Name</label>
      <input
        autoFocus
        required
        value={firstName}
        type="text"
        onChange={(event) => updateFields({ firstName: event.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(event) => updateFields({ lastName: event.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(event) => updateFields({ age: event.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
