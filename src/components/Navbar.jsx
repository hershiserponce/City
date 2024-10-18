  import { useLocation } from "react-router-dom";
 import "../css/navbar.css";
 import cityLogo from '../assets/Logo_City_Final_sin_Fondo.png';

 export const Navbar = () => {
    const { hash } = useLocation();

    // console.log("location",hash);
    console.log('hash',hash);

   return (
     <nav className="navbar navbar-expand-sm justify-content-around">
       <div className="logo-container">
         <img src={cityLogo} alt="City Logo" className="city-logo" />
       </div>
       <div className="nav-links">
         {/* Cambiar 'to' por 'href' */}
         <a href="#Services" className={({isActive}) => `nav-item nav-link itemColor ${isActive ? 'active' : ''} ${hash === '#Services' ? 'nav-item-color' : ''}`}>
           SERVICIOS
         </a>
         <a href="#About" className={({isActive}) => `nav-item nav-link itemColor ${isActive ? 'active' : ''} ${hash === '#About' ? 'nav-item-color' : ''}`}>
           SOBRE NOSOTROS
         </a>
         <a href="#Contact" className={({isActive}) => `nav-item nav-link itemColor ${isActive ? 'active' : ''} ${hash === '#Contact' ? 'nav-item-color' : ''}`}>
           CONTACTO
         </a>
       </div>
     </nav>
   ); 
 };
