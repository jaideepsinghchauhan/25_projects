import React from "react";
import FormWrapper from "./FormWrapper";

const AccountForm = ({ email, password, updateFields }) => {
  return (
    <FormWrapper title="User Account">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(event) => updateFields({ email: event.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(event) => updateFields({ password: event.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
