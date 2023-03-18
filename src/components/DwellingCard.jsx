import React from "react";
import { Link } from "react-router-dom";

const DwellingCard = ({ dwelling }) => {
  return (
    <Link className="dwellingCard" to={`/${dwelling.id}`}>
      <h2>{dwelling.title}</h2>
      <img src={`${dwelling.cover}`} alt={`${dwelling.title}`} />
    </Link>
  );
};

export default DwellingCard;
