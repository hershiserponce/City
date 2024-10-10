// import { Slider } from "../components/Slider";
// import { animals } from "../assets/data";
// import { AdoptionAnimals } from "../components/AdoptionAnimals";
import "../css/ContactForm.css";

export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        {/* Sección de información de contacto */}
        <div className="contact-info">
          <h2>Contáctenos</h2>
          <p>
            Estamos aquí para ayudarte. Sabemos que la responsabilidad es
            importante y la comunicación es crucial, así que no dudes en
            comunicarte con nuestro equipo hoy mismo.
          </p>
          <p>
            Ofrecemos un servicio integral personalizado que satisfaga las
            necesidades de nuestros clientes. Fomentamos la relación de
            confianza brindando a la Junta Directiva y Residentes
            retroalimentación de interés para la mejora continua de su
            seguridad, tratando de minimizar los riesgos, altos costos de
            servicios y vulnerabilidades de su condominio, todo esto analizado
            bajo la experiencia de nuestro personal.
          </p>
          <div className="contact-details">
            <div className="contact-email">
              <span>✉️</span> info@administracion.city
            </div>
            <div className="contact-phone">
              <span>📞</span> +505-8936-0038
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="community">Community Name*</label>
              <input type="text" id="community" required />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address*</label>
              <input type="text" id="address" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea id="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
