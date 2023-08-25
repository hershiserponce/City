import Proptypes from "prop-types";
import "../css/cardAnimal.css";

export const CardAnimal = ({ adoptionAnimals }) => {
  return (
    <>
      <div className="row" style={{'--bs-gutter-x':'0rem', paddingRight:'0.5rem',paddingLeft:'0.5rem'}}>
        {
          adoptionAnimals.map(animal =><div className="col-sm-4 col-md-3 col-lg-3 col-xl-2 col-xxl-2 mb-3 ContainerCard" key={animal.id}>
            <div className="card" style={{marginRight:'0.2rem', marginLeft:'0.2rem'}}>
          <img className="urlImagen" src={animal.urlImagen} alt={animal.raza} />
          <div className="Raza">Raza: {animal.raza}</div>
          <div className="Sexo">Sexo: {animal.sexo}</div>
          <div className="Color">Color: {animal.color}</div>
          </div>
        </div>)

        }
        
      </div>
    </>
  );
};

CardAnimal.propTypes = {
  adoptionAnimals: Proptypes.array.isRequired,
};
