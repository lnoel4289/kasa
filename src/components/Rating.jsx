import { MdStarRate } from "react-icons/md";

const Rating = ({ rating }) => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {array.map((num) => (
        <MdStarRate
          key={num}
          className={
            num > rating
              ? "star star-color-tertiary"
              : "star star-color-primary"
          }
        />
      ))}
    </div>
  );
};

export default Rating;
