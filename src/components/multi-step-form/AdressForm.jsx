import React from "react";
import FormWrapper from "./FormWrapper";

const AdressForm = ({ street, city, state, zip, updateFields }) => {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(event) => updateFields({ street: event.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(event) => updateFields({ city: event.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(event) => updateFields({ state: event.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(event) => updateFields({ zip: event.target.value })}
      />
    </FormWrapper>
  );
};

export default AdressForm;
