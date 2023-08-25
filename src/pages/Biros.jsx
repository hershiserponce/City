import { animals } from "../assets/data"
import { AdoptionAnimals } from "../components/AdoptionAnimals"
import { Slider } from "../components/Slider"

export const Biros = () => {
  return (
    <>
    <Slider animals={animals.BannerBirds.filter(animal=> animal.showSlider === true)}/>

    <AdoptionAnimals animal='Birds' adoptionAnimals={animals.BannerBirds}/>
    
    </>
  )
}
