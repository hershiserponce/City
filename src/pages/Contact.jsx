// import { Slider } from "../components/Slider";
// import { animals } from "../assets/data";
// import { AdoptionAnimals } from "../components/AdoptionAnimals";
import '../css/ContactForm.css';

   
export const Contact = () => {
  return (
    <>

     <div className="contact-container">
      {/* Sección de información de contacto */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          We’re here for you. We know that accountability is important and
          communication is crucial so don’t hesitate to contact our team today.
        </p>
        <p>
          Did you know you can use our online portals to find helpful
          information such as how to make payments, architectural submissions,
          view governing documents, and more? Please sign up today by clicking
          <a href="#"> here</a>.
        </p>
        <div className="contact-details">
          <div className="contact-email">
            <span>✉️</span> info@cityproperty.com
          </div>
          <div className="contact-phone">
            <span>📞</span> 602-362-6793
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
  )
}
