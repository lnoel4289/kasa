const PictureCounter = ({ pictures, picture }) => {
  return (
    <div className="PictureCounter">
      {picture + 1}/{pictures.length}
    </div>
  );
};

export default PictureCounter;
