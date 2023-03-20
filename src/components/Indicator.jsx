import React from "react";

const Indicator = ({ pictures, picture }) => {
  return (
    <div>
      {picture + 1}/{pictures.length}
    </div>
  );
};

export default Indicator;
