import "../css/ContactForm.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      community: '',
      address: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string().email('Correo inválido').required('El correo electrónico es obligatorio'),
      community: Yup.string().required('El nombre de la comunidad es obligatorio'),
      address: Yup.string().required('La dirección es obligatoria'),
      message: Yup.string().required('El mensaje es obligatorio'),
    }),
    onSubmit: (values, { resetForm }) => {
      const templateParams = {
        ...values, // Incluye los valores del formulario
        reply_to: values.email, // Agrega el correo del remitente aquí
      };

      emailjs
        .send(
          'service_ekqy3tt',  // Reemplaza con tu Service ID
          'template_28vrbql',  // Reemplaza con tu Template ID
          templateParams,
          '2Id_97h0s2JhS6uEm',    // Reemplaza con tu Public Key
        )
        .then(
          () => {
            // console.log(result.text);
            // console.log("valores enviados",values);
            // alert('Mensaje enviado con éxito');
            toast.success('Mensaje Enviado Exitosamente ');
            resetForm();
          },
          (error) => {
            console.log(error.text);
            toast.error('Hubo un error al enviar el mensaje');
          }
        );
    },
  });
  return (
    <div id="Contact" className="Contact">
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
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre*</label>
          <input
            type="text"
            id="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico*</label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Número de teléfono</label>
          <input
            type="tel"
            id="phone"
            {...formik.getFieldProps('phone')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="community">Nombre de la comunidad*</label>
          <input
            type="text"
            id="community"
            {...formik.getFieldProps('community')}
          />
          {formik.touched.community && formik.errors.community ? (
            <div className="error">{formik.errors.community}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="address">DIRECCIÓN*</label>
          <input
            type="text"
            id="address"
            {...formik.getFieldProps('address')}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="error">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje*</label>
          <textarea
            id="message"
            rows="5"
            {...formik.getFieldProps('message')}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>

        <button className="quote-button" type="submit">
          Enviar mensaje ahora
        </button>
      </form>

      <ToastContainer className="toast-center" position="top-center" autoClose={3000} />

    </div>
      </div>
    </div>
  );
};
