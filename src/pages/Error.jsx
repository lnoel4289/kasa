import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <>
      <Header />
      <section className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <div className="to-homepage">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Error;
