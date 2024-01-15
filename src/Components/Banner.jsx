import AOS from "aos";
import "aos/dist/aos.css"; // Importe os estilos
import { useEffect } from "react"; // Adicione o React e o useEffect
import { FaClock, FaPhone, FaEnvelope } from "react-icons/fa"; // Importe os ícones
import "./Banner.css";

const Banner = () => {
  useEffect(() => {
    AOS.init(); // Inicialize o AOS dentro do useEffect
  }, []); // Adicione os colchetes vazios para garantir que o useEffect seja executado apenas uma vez

  return (
    <section className="banner">
      <div className="banner-content">
        <img src="/img-principal.jpg" alt="Foto principal: menina sorrindo" />

        <div className="title_banner">
          <div className="title_banner_h1" data-aos="fade-up-right">
            <h1>Para sorrisos saudáveis e completos</h1>
          </div>
          <div className="title_banner_p" data-aos="fade-up-right">
            <p>Odontologia geral e estética abrangente</p>
          </div>
          <div className="title_banner_btn">
            <button type="submit">Solicite uma consulta</button>
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
      <div className="appointment-form">
        <h2>Agende uma Consulta</h2>
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" required />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Banner;
