import "./Sobre.css";

const Sobre = () => {
  return (
    <div className="Sobre_Container">
      <div className="Sobre_Container_text">
        <div className="Sobre_text_h2">
          <h2>Sobre</h2>
        </div>
        <div className="Sobre_paragrafo">
          <p>
            The van Ghemen Zahntechnik GmbH is one of the largest dental
            laboratories in Berlin and a specialist for aesthetically
            high-quality dentures as well as a pioneer in digital dentistry. The
            van Ghemen Zahntechnik GmbH is one of the largest dental
            laboratories in Berlin and a specialist for aesthetically
            high-quality dentures
            <br />
            <br />
            The van Ghemen Zahntechnik GmbH is one of the largest dental
            laboratories in Berlin and a specialist for aesthetically
            high-quality dentures as well as a pioneer in digital dentistry. The
            van Ghemen Zahntechnik GmbH is one of the largest dental
            laboratories in Berlin and a specialist for aesthetically
            high-quality dentures as well as a pioneer in digital dentistry.
          </p>
        </div>
      </div>

      <div className="Sobre_Container_img">
        <img src="/img-servicos/dentistas.jpg" alt="imagem de dois dentistas" />
      </div>
    </div>
  );
};

export default Sobre;
