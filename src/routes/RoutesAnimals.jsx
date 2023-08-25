import { Route, Routes } from "react-router-dom";

import { AllPets } from "../pages/AllPets";
import { Dogs } from "../pages/Dogs";
import { Cats } from "../pages/Cats";
import { Rubbits } from "../pages/Rubbits";
import { Biros } from "../pages/Biros";

export const RoutesAnimals = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<AllPets />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="cats" element={<Cats />} />
          <Route path="rubbits" element={<Rubbits />} />
          <Route path="birds" element={<Biros />} />
        </Routes>
    </>
  );
};
