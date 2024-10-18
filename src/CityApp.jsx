import { Navbar } from "./components/Navbar";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import ScrollToHashElement from './components/ScrollToHashElement';

export const CityApp = () => {
  return (
    <>
      <ScrollToHashElement />
      <div className="containerApp">
        <Navbar />
        <Services />
        <About />
        <Contact />
      </div>
    </>
  );
};
