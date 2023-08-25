import Proptypes from 'prop-types'

export const Slider = ({animals}) => {

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner auto">
        {
            animals?.map(animal=><div key={animal.id} className={`carousel-item ${animal.active ? 'active' : ''}`}>
            <img src={animal.urlImagen} className="d-block w-100" alt="img1" style={{maxHeight:'27rem', minHeight:'17rem'}}/>
            <div className="carousel-caption d-none d-md-block">
              <h5>{animal.raza}</h5>
              <p>{animal.descripcion}</p>
            </div>
          </div> )
        }
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}


Slider.propTypes={
  animals: Proptypes.array.isRequired,
}