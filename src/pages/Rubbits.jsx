import { animals } from "../assets/data"
import { AdoptionAnimals } from "../components/AdoptionAnimals"
import { Slider } from "../components/Slider"

export const Rubbits = () => {
  return (
    <>
    <Slider animals={animals.BannerRabbits.filter(animal=> animal.showSlider === true)}/>

    <AdoptionAnimals animal='Rubbits' adoptionAnimals={animals.BannerRabbits}/>
    
    </>
  )
}
