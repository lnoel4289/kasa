import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Logo className="logo" alt="Logo Kaza" />
      <nav>
        <ul>
          <li>
            <NavLink to="/kasa" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/kasa/about" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
