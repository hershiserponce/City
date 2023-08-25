import { Slider } from "../components/Slider";
import { animals } from "../assets/data";
import { AdoptionAnimals } from "../components/AdoptionAnimals";

   
export const Dogs = () => {
  return (
    <>
    <Slider animals={animals.BannerPerros.filter(animal=> animal.showSlider === true)}/>

    <AdoptionAnimals animal='Dogs' adoptionAnimals={animals.BannerPerros}/>
    
    </>
  )
}
