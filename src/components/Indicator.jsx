import React from "react";

const Indicator = ({ pictures, picture }) => {
  return (
    <div className="indicator">
      {picture + 1}/{pictures.length}
    </div>
  );
};

export default Indicator;
