import { Navbar } from "./components/Navbar";
import { RoutesAnimals } from "./routes/RoutesAnimals";

export const DogsApp = () => {
  return (
    <>
      <h1
        className="ml-1"
        style={{ color: "#6c3f9a", fontFamily: "fantasy", marginLeft: "4%" }}
      >
        PetLover
      </h1>
      <Navbar />
      <RoutesAnimals />
    </>
  );
};
