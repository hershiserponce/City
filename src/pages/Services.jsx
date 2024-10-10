// import { animals } from "../assets/data";
// import { AdoptionAnimals } from "../components/AdoptionAnimals";
// import { Slider } from "../components/Slider";
import CONDOMINIO from "../assets/CONDOMINIO.JPG";
import "../css/Services.css";

const servicesData = [
  {
    title: "Custom Services",
    items: [
      "Personal Community Manager",
      "CC&R Enforcement",
      "Common Area Monitoring",
      "Legal Review",
      "Document Review",
      "Board Training Workshops",
      "Vendor Management",
      "24/7 Emergency Assistance",
    ],
    icon: "🛠️",
  },
  {
    title: "In-House Accounting",
    items: [
      "Dedicated Community Accountant",
      "Accounts Receivable",
      "Accounts Payable",
      "24/7 Accounting Report Access",
      "Online Bill Pay",
      "FDIC Insured Funds",
    ],
    icon: "💼",
  },
  {
    title: "In-House Collections",
    items: [
      "Dedicated Collections Manager",
      "Facilitating Payments Plans",
      "Lien Filing",
      "Board Collection Workshops",
      "Small Claims Administration",
    ],
    icon: "💰",
  },
  {
    title: "Real-Time Technology",
    items: [
      "CITYSYNC™ Web Portal",
      "Instant Date Transfer",
      "24/7 Access to Reporting",
      "Real-Time Inspection Reports",
      "Compliance Photos",
      "CITYLINK Mobile App",
    ],
    icon: "⏱️",
  },
];

export const Services = () => {
  return (
    <>
      {/* <p>estoy en home</p> */}

      <div className="services-container">
        <div className="text-section">
          <h4>SERVICIOS DE ADMINISTRACION DE CONDOMINIOS</h4>
          <h1>
            Descubra el valor de nuestro soporte dedicado y tecnología
            innovadora.
          </h1>
          <button className="quote-button">GET A QUOTE</button>
        </div>
        <div className="image-section">
          <img src={CONDOMINIO} alt="Graph presentation" />
        </div>
      </div>

      <div className="container2">
        <div className="services-info">
          <h5>
            SERVICIOS DE GESTIÓN DE ASOCIACIONES DE PROPIETARIOS E INQUILINOS
          </h5>
          <h2>Obtenga más de todo lo que necesita</h2>
          <p>
            City Property Plus®, franquicia perteneciente a City Group® inicia
            operaciones en Costa Rica desde el año 2010 como Compañía dedicada
            al Corretaje de Bienes Raíces, Administración y Mantenimiento de
            Condominios, respaldada por más de 40 años de práctica aplicada, lo
            que nos asegura ofrecer un servicio de calidad
          </p>
        </div>
      </div>

      <div className="container3">
        <div className="services-container3">
          {servicesData.map((service, index) => (
            <div key={index} className="service-section3">
              <h3>
                <span className="service-icon3">{service.icon}</span>{" "}
                {service.title}
              </h3>
              <ul>
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="get-started3">
            <button>Get Started with CITY</button>
          </div>
        </div>
      </div>
    </>
  );
};
