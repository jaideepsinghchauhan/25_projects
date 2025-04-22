import React, { useState } from "react";
import Modal from "./Modal";

const ModalTest = () => {
  const [showModalPopUp, setShowModalPopup] = useState(false);
  function handleModalPopup() {
    setShowModalPopup(!showModalPopUp);
  }
  return (
    <div>
      <button name="toggleModal" onClick={handleModalPopup}>
        Open Modal Popup
      </button>
      {showModalPopUp && (
        <Modal
          onClose={handleModalPopup}
          id="Modal1"
          body="Passed body to modal"
          footer="This is the passed footer"
          header="This is my passed header"
        />
      )}
    </div>
  );
};

export default ModalTest;
