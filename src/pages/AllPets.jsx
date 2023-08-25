import { animals } from "../assets/data";
import { AdoptionAnimals } from "../components/AdoptionAnimals";
import { Slider } from "../components/Slider";

export const AllPets = () => {
  return (
    <>
    <Slider animals={animals.BannerAllPets.filter(animal=> animal.showSlider === true)}/>

    <AdoptionAnimals animal='All Pets' adoptionAnimals={animals.BannerAllPets}/>
    
    </>
  )
};
