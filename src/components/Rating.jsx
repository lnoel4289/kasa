import React from "react";
import { MdStarRate } from "react-icons/md";

const Rating = ({ rating }) => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {array.map((num) => (
        <MdStarRate
          key={num}
          className={
            num <= rating
              ? "star star-color-primary"
              : "star star-color-tertiary"
          }
        />
      ))}
    </div>
  );
};

export default Rating;
