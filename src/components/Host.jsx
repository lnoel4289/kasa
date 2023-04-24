const Host = ({ name, imgUrl }) => {
  return (
    <div className="host">
      <h3>{name}</h3>
      <div className="host-img-container">
        <img src={imgUrl} alt={name} />
      </div>
    </div>
  );
};

export default Host;
