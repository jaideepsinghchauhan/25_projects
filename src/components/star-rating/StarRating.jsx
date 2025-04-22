import React, { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);
  const handleSelectedRating = (event) => {
    setSelectedRating(event);
  };

  return (
    <div>
      {Array.from({ length: noOfStars }).map((_, index) => {
        return (
          <FaStar
            key={index}
            style={{ cursor: "pointer", marginRight: 4 }}
            onClick={() => handleSelectedRating(index)}
            onMouseEnter={() => setHoverRating(index)}
            onMouseLeave={() => setHoverRating(null)}
            size="40"
            color={index <= (hoverRating ?? selectedRating) ? "gold" : "gray"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
