import { RoutesAnimals } from "./routes/RoutesAnimals";
import city_logo from './assets/Logo_City_Final.png'
import {Navbar} from "./components/Navbar"

export const CityApp = () => {
  return (
    <>
   
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: 200, height: 200 }} src={city_logo} alt="city img" />
        </div>
      </div>
       <Navbar />
      <RoutesAnimals /> 
    </>
  );
};

