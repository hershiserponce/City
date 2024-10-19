import { RoutesPage } from "./routes/RoutesPage";
import {Navbar} from "./components/Navbar"

export const CityApp = () => {
  return (
    <>
   
      <div className="containerApp">
       <Navbar />
      <RoutesPage /> 
      </div>
    </>
  );
};

