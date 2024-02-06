import PropTypes from "prop-types";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => (
  <div>
    <h3>Próteses</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <h3>Aparelhos</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <h3>Limpeza</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <h3>Restauração</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <h3>Canal</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <button
      onClick={closeToast}
      style={{
        color: "white",
        backgroundColor: "#3a9c51",
        textAlign: "center",
        fontFamily: "sans-serif",
        fontSize: "14px",
        padding: "-8px",
        lineHeight: "32px",
        letterSpacing: "0.2px",
        borderRadius: "999px",
        border: "none",
        width: "93px",
        cursor: "pointer",
        float: "right",
      }}
    >
      Fechar
    </button>
  </div>
);

CustomToast.propTypes = {
  closeToast: PropTypes.func.isRequired,
};

const Services = () => {
  const showToast = () => {
    console.log("Toast function called");
    toast.info(<CustomToast />, {
      position: "top-center",
      closeButton: false,
      autoClose: false,
      icon: false,
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Services_Container">
      <div className="Services_H2" data-aos="zoom-in">
        <h2>Nossos Serviços</h2>
      </div>

      <div className="Services_container_img_paragrafo" data-aos="zoom-in">
        <div className="Services_img_descricao">
          <img src="/img-servicos/dental 1.jpg" alt="dentes" />
          <span>Próteses</span>
        </div>

        <div className="Services_img_descricao">
          <img src="/img-servicos/braces 1.jpg" alt="dentes" />
          <span>Aparelhos</span>
        </div>

        <div className="Services_img_descricao">
          <img src="/img-servicos/Group (1).jpg" alt="dentes" />
          <span>Aparelhos</span>
        </div>

        <div className="Services_img_descricao">
          <img src="/img-servicos/Group (2).jpg" alt="dentes" />
          <span>Aparelhos</span>
        </div>

        <div className="Services_img_descricao">
          <img src="/img-servicos/Group (3).jpg" alt="dentes" />
          <span>Implantes</span>
        </div>

        <div className="Services_img_descricao">
          <img src="/img-servicos/Group1.jpg" alt="dentes" />
          <span>Canal</span>
        </div>
      </div>

      <div className="Services_btn">
        <button onClick={showToast} className="Services_btn_SaberMais">
          Saber Mais
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Services;
