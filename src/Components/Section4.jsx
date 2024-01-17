import { AiOutlineCheck } from "react-icons/ai";
import "./Section4.css";
const Section4 = () => {
  return (
    <div className="Section4_Container">
      <div className="Section4_h2">
        <h2>Odontologia Geral</h2>
      </div>

      <div className="Section4_container_img_and_text">
        <div className="Section4_img">
          <img src="./src/img-servicos/image 3.jpg" alt="consultório" />
        </div>
        <div className="Section4_container_text_and_button">
          <div className="Section4_text">
            <p>
              Fornecemos os cuidados preventivos essenciais para toda a sua
              família e oferecemos os serviços odontológicos avançados
              necessários para corrigir problemas dentários comuns. Nossos
              serviços de odontologia geral incluem:
            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#3a9c51",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <AiOutlineCheck size={20} color="#fff" />
              </div>
              <p>Exames e limpezas dentárias</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#3a9c51",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <AiOutlineCheck size={20} color="#fff" />
              </div>
              <p>Extrações dentárias</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#3a9c51",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <AiOutlineCheck size={20} color="#fff" />
              </div>
              <p>Manutenção periodontal</p>
            </div>
          </div>
          <div className="Section4_btn" data-aos="fade-up-right">
            <button>Mais Informações</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
