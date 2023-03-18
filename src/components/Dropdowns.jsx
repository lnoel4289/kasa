import React from "react";
import Dropdown from "./Dropdown";

const Dropdowns = ({ data }) => {
  return (
    <div className="dropdowns" >
      {data.map((dat, index) => {
        return (
          <Dropdown
            key={
              `${index}` +
              `${Object.values(dat)}`.split(" ").join("").slice(7, 22)
            }
            title={<h2>{Object.keys(dat)}</h2>}
            content={<p>{Object.values(dat)}</p>}
          />
        );
      })}
    </div>
  );
};

export default Dropdowns;
