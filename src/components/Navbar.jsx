import { NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css"

export const Navbar = () => {
    const {pathname} = useLocation();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark  justify-content-between itemContainer" style={{fontFamily:'initial', backgroundColor: 'white'}}>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : '' }${pathname === '/' ? ' nav-item-color': ''}` } style={{color: 'black'}}  to="/">Home</NavLink>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/about' ? ' nav-item-color': ''}`} style={{color: 'black'}} to="about">About</NavLink>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/contact' ? ' nav-item-color': ''}`} style={{color: 'black'}} to="contact">Contact</NavLink>

    </nav>
  );
};
