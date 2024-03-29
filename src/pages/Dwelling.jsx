import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import dwellings from "../data/dwellings";
import Presentation from "../components/Presentation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Dwelling = () => {
  useScrollToTop();
  const { id } = useParams();
  const dwelling = dwellings.find((elem) => elem.id === id);

  if (!dwelling) {
    return <Navigate to="kasa/error" />;
  }
  
  const {
    title,
    location,
    tags,
    pictures,
    rating,
    host,
    description,
    equipments,
  } = dwelling;

  return (
    <>
      <Header />
      <article className="dwelling">
        <Carousel pictures={pictures} title={title} />
        <Presentation
          title={title}
          location={location}
          tags={tags}
          rating={rating}
          host={host}
        />
        <section className="dwelling__dropdowns">
          <Dropdown title="Description" content={<p>{description}</p>} />
          <Dropdown
            title="Équipements"
            content={
              <ul>
                {equipments.map((eq, index) => {
                  return <li key={`${index}${eq}`}>{eq}</li>;
                })}
              </ul>
            }
          />
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Dwelling;
