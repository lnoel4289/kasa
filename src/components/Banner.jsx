const Banner = ({ heading, imageURL, altTxt }) => {
  return (
    <section className="banner">
      <div className="imgContainer">
        <img src={imageURL} alt={altTxt} />
      </div>
      <div className="heading-container">
        <h1>{heading}</h1>
      </div>
    </section>
  );
};

export default Banner;
