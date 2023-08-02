import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Error = () => {
  useScrollToTop();
  
  return (
    <>
      <Header />
      <section className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <div className="to-homepage">
          <Link to="/kasa">Retourner sur la page d'accueil</Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Error;
