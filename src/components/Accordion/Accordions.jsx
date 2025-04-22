/**
 * The is an example of Accordion which works as
 * a single select ( meaning only 1 accordion will be open) or multiselect
 * in click of button Enable SingleSelect/multiSelect this behaviour will change
 *
 * */
import React, { useState } from "react";
import "./styles.css";

const Accordion = ({ data, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header selection-cursor" onClick={() => onToggle(data.id)}>
        <span>{data.question}</span> +
      </div>
      {isOpen && <div className="accordion-body">{data.answer}</div>}
    </div>
  );
};

const Accordions = () => {
  const [isSingleSelected, setIsSingleSelected] = useState(false);
  const [openIds, setOpenIds] = useState([]);

  const handleToggle = (id) => {
    if (isSingleSelected) {
      setOpenIds((prev) => (prev[0] === id ? [] : [id]));
    } else {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    }
  };

  const handleSelection = (value) => {
    setIsSingleSelected(value);
    setOpenIds([]); // reset open state when mode changes
  };

  const accordionData = [
    { id: 1, question: "What is React?", answer: "React is a JS library..." },
    { id: 2, question: "What is a component?", answer: "A reusable UI part." },
    { id: 3, question: "What is state?", answer: "Data that drives the UI." },
    { id: 4, question: "Virtual DOM?", answer: "A virtual copy of the DOM." },
  ];

  return (
    <div>
      <button>
        {isSingleSelected ? (
          <button onClick={() => handleSelection(false)}>Enable Multi Open</button>
        ) : (
          <button onClick={() => handleSelection(true)}>Enable Single Open</button>
        )}
      </button>

      <div className="accordion-parent">
        {accordionData.map((item) => (
          <Accordion
            key={item.id}
            data={item}
            isOpen={openIds.includes(item.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordions;
