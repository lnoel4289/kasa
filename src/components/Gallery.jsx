import DwellingCard from "./DwellingCard";

const Gallery = ({ dwellings }) => {
  return (
    <section className="gallery">
      {dwellings.map((dwelling) => (
        <DwellingCard key={dwelling.id} dwelling={dwelling} />
      ))}
    </section>
  );
};

export default Gallery;
