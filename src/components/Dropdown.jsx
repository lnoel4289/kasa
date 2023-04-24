import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="dropdown">
      <div className="dropButton"
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        {title}
        <div className={isOpen ? " arrow-container arrow-container-up" : "arrow-container"}>
          <MdArrowBackIos className="arrow" />
        </div>
      </div>
      {isOpen && <div className="content">{content}</div>}
    </section>
  );
};

export default Dropdown;
