import CONDOMINIO from "../assets/CONDOMINIO.png";
import servicios from "../assets/servicios.jpeg";
import servicios1 from "../assets/servicios1.jpeg";
import servicios2 from "../assets/servicios2.jpeg";
import servicios3 from "../assets/servicios3.jpeg";
import servicios4 from "../assets/servicios4.jpeg";
import servicios5 from "../assets/servicios5.jpeg";




import "../css/Services.css";
import { Swiper, SwiperSlide } from 'swiper/react'; // Importamos Swiper y SwiperSlide
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Modulos adicionales
import 'swiper/css'; // Estilos básicos de Swiper
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    title: "Servicios personalizados",
    items: [
      "Gestor de comunidad personal",
      "Monitoreo de áreas comunes",
      "Revisión legal",
      "Revisión de documentos",
      "Talleres de capacitación de la junta directiva",
      "Gestión de proveedores",
      "Asistencia de emergencia 24 horas, 7 días a la semana",
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
      "Control de cuentas Bancarias",
    ],
    icon: "💼",
  },
  {
    title: "Cobranza de cuotas condominales",
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

  const handleClick = () => {
    navigate('/Contact');
  };

  return (
    <div id="Services" className="Services">
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

      <div className="services-container" style={{ paddingTop: "0px", alignItems: "flex-start" }}>
        <div className="containerservicesslider">

       
        <div className="text-section">
          <h4>NUESTROS SERVICIOS</h4>
          <h1 className="services">
            City Property Plus® ofrece una variada gama de servicios para que el disfrute del propietario y/o usuario sea toda una excelente experiencia.
          </h1>
        </div>

        {/* Slider de Fotos */}
        <div className="containerimgservicios">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="image-slider"
          >
            <SwiperSlide>
              <img className="imgservices" src={servicios1} alt="Servicio 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgservices" src={servicios2} alt="Servicio 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgservices" src={servicios3} alt="Servicio 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgservices" src={servicios4} alt="Servicio 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgservices" src={servicios5} alt="Servicio 3" />
            </SwiperSlide>
          </Swiper>
        </div>
        </div>

        <div className="containerimgservicios">
        <div className="image-section">
          <img className="imgservices" src={servicios} alt="Graph presentation" />
        </div>
        </div>

      </div>

      <div className="container2">
        <div className="services-info">
          <h5>SERVICIOS DE GESTIÓN DE ASOCIACIONES DE PROPIETARIOS E INQUILINOS</h5>
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
                <span className="service-icon3">{service.icon}</span> {service.title}
              </h3>
              <ul>
                {service.items.map((item, idx) => (
                  <li style={{ marginBottom: "0px" }} key={idx}>{item}</li>
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
