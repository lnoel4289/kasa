import React from "react";
import { Link } from "react-router-dom";

const DwellingCard = ({ dwelling }) => {
  const { title, id, cover } = dwelling;
  return (
    <Link className="dwellingCard" to={`/dwelling/${id}`}>
      <h2>{title}</h2>
      <img src={`${cover}`} alt={`${title}`} />
    </Link>
  );
};

export default DwellingCard;
