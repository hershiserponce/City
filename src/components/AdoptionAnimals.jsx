import Proptypes from 'prop-types'

import { CardAnimal } from "./CardAnimal"

export const AdoptionAnimals = ({animal, adoptionAnimals}) => {

  return (
    <>
    <div className="d-flex justify-content-center mt-4 mb-4">
    <p style={{color:'#551586ed', fontWeight:'800', fontFamily:'initial', margin:'0'}} >{animal} available for adoption near you</p>
    </div>

    <CardAnimal adoptionAnimals={adoptionAnimals}/>
    </>
  )
}

AdoptionAnimals.propTypes={
    animal: Proptypes.string.isRequired,
    adoptionAnimals: Proptypes.array.isRequired,

}
