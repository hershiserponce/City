import { NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css"

export const Navbar = () => {
    const {pathname} = useLocation();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark  justify-content-between itemContainer" style={{fontFamily:'initial'}}>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : '' }${pathname === '/' ? ' nav-item-color': ''}` } to="/">All Pets</NavLink>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/dogs' ? ' nav-item-color': ''}`} to="dogs">Dogs</NavLink>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/cats' ? ' nav-item-color': ''}`} to="cats">Cats</NavLink>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/rubbits' ? ' nav-item-color': ''}`} to="rubbits">Rubbits</NavLink>
      <NavLink className={({isActive})=>`nav-item nav-link itemColor ${isActive ? 'active' : ''} ${pathname === '/birds' ? ' nav-item-color': ''}`} to="birds">Birds</NavLink>

    </nav>
  );
};
