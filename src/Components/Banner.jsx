import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaClock, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm.jsx";
import "./Banner.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="banner">
      <div className="banner-content">
        <img src="/img-principal.jpg" alt="Foto principal: menina sorrindo" />

        <div className="title_banner">
          <div className="title_banner_h1" data-aos="fade-up-right">
            <h1>
              Para sorrisos <br /> saudáveis e completos
            </h1>
          </div>
          <div className="title_banner_p" data-aos="fade-up-right">
            <p>Odontologia geral e estética abrangente</p>
          </div>
        </div>

        <div className="additional-info">
          <div className="info">
            <p className="strong time">
              <FaClock />
              Horários
            </p>
            <p className="time">Seg à Sáb: 09:00 – 17:00</p>
          </div>
          <div className="info phone">
            <p className="strong phone">
              <FaPhone />
              Telefone
            </p>
            <p className="cel">(22) 99848-6323</p>
          </div>
          <div className="info email">
            <p className="strong email">
              <FaEnvelope /> Email
            </p>
            <p className="e-mail">info@coredental.com</p>
          </div>
        </div>
      </div>

      <div className="form_schedule_a_consultation">
        <ContactForm />
      </div>
    </section>
  );
};

export default Banner;
