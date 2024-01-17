import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <div className="header-container">
      <header>
        <div className="container">
          <div className="logo" data-aos="fade-right">
            {/* <img src="/logo.png" alt="Logo da Clinica" /> */}
            <img src="/logo 1.png" alt="" />
            <a href="#">Sorria Já</a>
          </div>
          <nav className={isMobileMenuVisible ? "active" : ""}>
            <ul>
              <li>
                <a href="#nossos-servicos" onClick={closeMobileMenu}>
                  Nossos serviços
                </a>
              </li>

              <li>
                <a href="#odontologia-geral" onClick={closeMobileMenu}>
                  Odontologia Geral
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={closeMobileMenu}>
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
          <div className="cta-button">
            <a href="#contatos">Contate-nos</a>
          </div>
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuVisible ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
