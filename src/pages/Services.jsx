
import CONDOMINIO from "../assets/CONDOMINIO.PNG";
import "../css/Services.css";
import { useNavigate } from 'react-router-dom'

const servicesData = [
  {
    title: "Servicios personalizados",
    items: [
      "Gestor de comunidad personal",
      "Cumplimiento de CC&R",
      "Monitoreo de áreas comunes",
      "Revisión legal",
      "Revisión de documentos",
      "Talleres de capacitación de la junta directiva",
      "Gestión de proveedores",
      "Asistencia de emergencia 24 horas al día, 7 días a la semana",
    ],
    icon: "🛠️",
  },
  {
    title: "Contabilidad interna",
    items: [
      "Contador comunitario dedicado",
      "Cuentas por cobrar",
      "Cuentas por pagar",
      "Acceso a informes contables 24 horas al día, 7 días a la semana",
      "Pago de facturas en línea",
    ],
    icon: "💼",
  },
  {
    title: "Colecciones internas",
    items: [
      "Gerente de Cobranzas Dedicado",
      "Planes de facilitación de pagos",
      "Administración de reclamos menores",
    ],
    icon: "💰",
  },
  {
    title: "Tecnología en tiempo real",
    items: [
      "Portal web CITYSYNC™",
      "Transferencia de fecha instantánea",
      "Acceso a informes las 24 horas, los 7 días de la semana",
      "Informes de inspección en tiempo real",
      "Fotos de cumplimiento",
      "Aplicación móvil CITYLINK",
    ],
    icon: "⏱️",
  },
];

export const Services = () => {

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/Contact')
  }
  return (
    <div id="Services" className="Services">
      {/* <p>estoy en home</p> */}

      <div className="services-container">
        <div className="text-section">
          <h4>SERVICIOS DE ADMINISTRACION DE CONDOMINIOS</h4>
          <h1>
            Descubra el valor de nuestro soporte dedicado y tecnología
            innovadora.
          </h1>
          <button onClick={handleClick} className="quote-button">OBTENGA UNA COTIZACIÓN</button>
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
            que nos asegura ofrecer un servicio de calidad.
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
          
            <button className="quote-button" onClick={handleClick}>Comience a Utilizar CITY</button>
          
        </div>
      </div>
    </div>
  );
};
