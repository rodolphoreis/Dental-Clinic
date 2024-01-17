import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Footer_Container">
      <div className="Social_Div">
        <div className="Social_Title">Conecte-se conosco</div>
        <div className="Social_Icons">
          <a href="link-do-facebook" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook />
          </a>
          <a href="link-do-twitter" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter />
          </a>
          <a href="link-do-instagram" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>

      <div className="Contact_Div" data-aos="fade-up-right">
        <div className="Contact_Title">Entre em contato</div>
        <div>
          <FaPhone /> Telefone: <a href="tel:+55123456789">+55 22 3456-7890</a>
        </div>
        <div>
          <FaWhatsapp /> WhatsApp:{" "}
          <a href="https://wa.me/55123456789">+55 22 3456-7890</a>
        </div>
        <div>
          <FaEnvelope /> Email:{" "}
          <a href="mailto:seu-email@example.com">emailteste@teste.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
