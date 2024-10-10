import { NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css"
import cityLogo from '../assets/Logo_City_Final_sin_Fondo.png';

export const Navbar = () => {
     const {pathname} = useLocation();
  return (
    // <nav className="navbar navbar-expand-sm navbar-dark  justify-content-between itemContainer" style={{fontFamily:'initial', backgroundColor: 'white'}}>
    //   <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : '' }${pathname === '/' ? ' nav-item-color': ''}` } style={{color: 'black'}}  to="/">Home</NavLink>
    //   <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/about' ? ' nav-item-color': ''}`} style={{color: 'black'}} to="about">About</NavLink>
    //   <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/contact' ? ' nav-item-color': ''}`} style={{color: 'black'}} to="contact">Contact</NavLink>

    // </nav>

    <nav className="navbar navbar-expand-sm justify-content-around">
    <div className="nav-links">
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : '' }${pathname === '/' ? ' nav-item-color': ''}` }  to="/">SERVICES</NavLink>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : '' }${pathname === '/about' ? ' nav-item-color': ''}` } to="/about">ABOUT US</NavLink>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : '' }${pathname === '/contact' ? ' nav-item-color': ''}` } to="/contact">CONTACT</NavLink>
    </div>
    <div className="logo-container">
      <img src={cityLogo} alt="City Logo" className="city-logo" />
    </div>
  </nav>
  );
};
