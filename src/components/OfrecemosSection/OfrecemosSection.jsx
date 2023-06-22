import OfrecemosSectionStyled from "../OfrecemosSection/OfrecemosSectionStyled";
import OfrecemosCards from "../OfrecemosSection/OfrecemosCards/OfrecemosCards";
import FondoHojasTropical from "../../img/FondoHojasTropical.jpg";
import FondoHojasTropical2 from "../../img/FondoHojasTropical2.jpg";
import womenIcon from "../../img/womenIcon.png";
import panelIcon from "../../img/panelIcon.png";
import handShakeIcon from "../../img/handShakeIcon.png";
import suitcaseIcon from "../../img/suitcaseIcon.png";
import customerServiceIcon from "../../img/customerServiceIcon.png";

const OfrecemosSection = () => {
  return (
    <OfrecemosSectionStyled>
      <div
        className="full-article"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${FondoHojasTropical2})`,
          backgroundSize: "cover",
        }}
      >
        <p className="section-title">¡AVENTURAS CON TODO INCLUIDO!</p>
        <div className="cards-section">
          <OfrecemosCards
            image={womenIcon}
            cardTitle={"Exclusivo para mujeres"}
            cardDescription={"Grupos medianos formados únicamente por mujeres"}
          />
          <OfrecemosCards
            image={panelIcon}
            cardTitle={"Circuitos Exclusivos"}
            cardDescription={
              "Diseñamos nuestras rutas cuidadosamente, creando itinerarios exclusivos"
            }
          />
          <OfrecemosCards
            image={handShakeIcon}
            cardTitle={"Sin Intermediarios"}
            cardDescription={
              "Organizamos los viajes directamente con nuestros proveedores en destino"
            }
          />
          <OfrecemosCards
            image={suitcaseIcon}
            cardTitle={"Programas completos"}
            cardDescription={
              "Incluimos todas las visitas y excursiones, con todo incluido"
            }
          />
          {/* <OfrecemosCards
            image={customerServiceIcon}
            cardTitle={"Soporte técnico"}
            cardDescription={
              "Con la experiencia de Nuestro Pequeño Mundo Viajes, agencia fundada en 1995 en Alicante"
            }
          /> */}
        </div>
      </div>
    </OfrecemosSectionStyled>
  );
};

export default OfrecemosSection;
