import { RoutesAnimals } from "./routes/RoutesAnimals";
import {Navbar} from "./components/Navbar"

export const CityApp = () => {
  return (
    <>
   
      <div className="containerApp">
       <Navbar />
      <RoutesAnimals /> 
      </div>
    </>
  );
};

