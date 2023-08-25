import { animals } from "../assets/data"
import { AdoptionAnimals } from "../components/AdoptionAnimals"
import { Slider } from "../components/Slider"

export const Cats = () => {
  return (
    <>
    <Slider animals={animals.BannerGatos.filter(animal=> animal.showSlider === true)}/>

    <AdoptionAnimals animal='Cats' adoptionAnimals={animals.BannerGatos}/>
    
    </>
  )
}
