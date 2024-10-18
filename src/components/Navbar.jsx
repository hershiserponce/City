// import { useLocation } from "react-router-dom";
import "../css/navbar.css";
import cityLogo from '../assets/Logo_City_Final_sin_Fondo.png';

export const Navbar = () => {
  // const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-sm justify-content-around">
      <div className="logo-container">
        <img src={cityLogo} alt="City Logo" className="city-logo" />
      </div>
      <div className="nav-links">
        {/* Cambiar 'to' por 'href' */}
        <a href="#Services" className="nav-item nav-link itemColor">
          SERVICIOS
        </a>
        <a href="#About" className="nav-item nav-link itemColor">
          SOBRE NOSOTROS
        </a>
        <a href="#Contact" className="nav-item nav-link itemColor">
          CONTACTO
        </a>
      </div>
    </nav>
  );
};
