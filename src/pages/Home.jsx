import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import dwellings from "../data/dwellings";
import Header from "../components/Header";
import Footer from "../components/Footer";
import calanqueImg from "../assets/IMG.jpg";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Home = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <article className="home">
        <Banner
          heading="Chez vous, partout et ailleurs"
          imageURL={calanqueImg}
          altTxt="Une calanque"
        />
        <Gallery dwellings={dwellings} />
      </article>
      <Footer />
    </>
  );
};

export default Home;
