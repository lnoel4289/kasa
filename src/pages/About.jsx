import Banner from "../components/Banner";
import ethics from "../data/ethics.json";
import Dropdowns from "../components/Dropdowns";
import Header from "../components/Header";
import Footer from "../components/Footer";
import montagneImg from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg"
import { useScrollToTop } from "../hooks/useScrollToTop";

const About = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <article className="about">
        <Banner
          heading="À propos de Kasa"
          imageURL={montagneImg}
          altTxt="Un paysage alpin"
        />
        <Dropdowns data={ethics} />
      </article>
      <Footer />
    </>
  );
};

export default About;
