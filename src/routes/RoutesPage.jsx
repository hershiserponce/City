import { Route, Routes } from "react-router-dom";

import { Services } from "../pages/Services";
import {About} from '../pages/About'
import {Contact} from '../pages/Contact'


export const RoutesPage = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </>
  );
};
