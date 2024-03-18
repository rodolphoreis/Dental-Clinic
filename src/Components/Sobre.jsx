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
            A Sorria Já é uma das maiores empresas odontológicas laboratórios No
            Rio de Janeiro e especialista em estética próteses dentárias de alta
            qualidade, bem como pioneira em odontologia digital. O é uma das
            maiores empresas odontológicas laboratórios em Cabo Frio e
            especialista em estética dentaduras de alta qualidade
            <br />
            <br />A Sorria Já é uma das maiores empresas odontológicas
            laboratórios No Rio de Janeiro e especialista em estética próteses
            dentárias de alta qualidade, bem como pioneira em odontologia
            digital. O é uma das maiores empresas odontológicas laboratórios em
            Cabo Frio e especialista em estética dentaduras de alta qualidade
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
