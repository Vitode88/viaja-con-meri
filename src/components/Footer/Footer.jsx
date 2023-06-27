import FooterStyled from "./FooterStyled";
import logo from "../../img/logo.png";
import whatsappLogo from "../../img/whatsappLogo.png";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="full-section">
        <div className="full-content">
          <img src={logo} alt="logo" className="logo" />
          <div className="column1">
            <p className="column-title">Menú</p>
            <div className="column-content">
              <p className="column-text">¿Qué es Viaja con Meri?</p>
              <p className="column-text">Próximos Viajes</p>
              <p className="column-text">Contacto</p>
            </div>
          </div>
          <div className="column2">
            <p className="column-title">Contacto</p>
            <div className="menu-content">
              <p className="column-text">Tel. +34 693695541</p>
              <p className="column-text">viajaconmeri@info.com</p>
              <button className="button">
                <img
                  src={whatsappLogo}
                  alt="whatsappLogo"
                  className="whatsapp-logo-button"
                />
                <p className="button-text">¡Escríbenos!</p>
              </button>
            </div>
          </div>
        </div>
        <p className="derechos-reservados">
          © 2023 VIAJA CON MERI | Todos los derechos reservados
        </p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
