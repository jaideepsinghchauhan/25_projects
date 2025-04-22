import React from "react";
import "./styles.css";
const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div className="parent-container">
      <div className="container" id={id || "MyModal"}>
        <div className="modal-header">
          <span className="modal-close-icon" onClick={onClose}>
            &times;
          </span>
          <h1> {header ? header : "Header"}</h1>
        </div>
        <div className="modal-body">
          {body ? body : "This is empty modal body."}
        </div>
        <div className="modal-footer">
          <h1>{footer ? footer : "Footer"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
