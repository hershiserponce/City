import { NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css";
import cityLogo from '../assets/Logo_City_Final_sin_Fondo.png';

export const Navbar = () => {
  const { pathname } = useLocation();
  
  return (
    <nav className="navbar navbar-expand-sm justify-content-around">
      <div className="logo-container">
        <img src={cityLogo} alt="City Logo" className="city-logo" />
      </div>
      <div className="nav-links">
        <NavLink className={({isActive}) => `nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/' ? 'nav-item-color' : ''}`} to="/">SERVICIOS</NavLink>
        <NavLink className={({isActive}) => `nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/about' ? 'nav-item-color' : ''}`} to="/about">SOBRE NOSOTROS</NavLink>
        <NavLink className={({isActive}) => `nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/contact' ? 'nav-item-color' : ''}`} to="/contact">CONTACTO</NavLink>
      </div>
    </nav>
  );
};
