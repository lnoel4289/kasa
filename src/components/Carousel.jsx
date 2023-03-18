import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Carousel = ({ pictures, title }) => {
  const [picture, setPicture] = useState(0);

  return (
    <section className="carousel">
      {<img src={`${pictures[picture]}`} alt={`${title} ${picture + 1}`} />}
      {
/* CONDITIONAL RENDERING */
      }
      {pictures.length > 1 && (
        <div>
          <div
            className="arrow-container arrow-container__left"
// EVENT
            onClick={() => {
              picture === 0
                ? setPicture(pictures.length - 1)
                : setPicture(picture - 1);
            }}
          >
            <MdArrowForwardIos className="arrow" />
          </div>
          <div
            className="arrow-container arrow-container__right"
            onClick={() =>
              picture === pictures.length - 1
                ? setPicture(0)
                : setPicture(picture + 1)
            }
          >
            <MdArrowForwardIos className="arrow" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
