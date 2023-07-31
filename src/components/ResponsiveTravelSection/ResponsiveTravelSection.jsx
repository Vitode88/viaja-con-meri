import ResponsiveTravelSectionStyled from "./ResponsiveTravelSectionStyled";
import ResponsiveCards from "./ResponsiveCards/ResponsiveCards";
import greenIcon from "../../img/greenIcon.png";
import elefantIcon from "../../img/elefantIcon.png";
import culturalIcon from "../../img/culturalIcon.png";
import patrimonioIcon from "../../img/patrimonioIcon.png";

const ResponsiveTravelSection = () => {
  return (
    <ResponsiveTravelSectionStyled>
      <div className="full-article">
        <p className="section-title">Viajamos en grupo de forma responsable</p>
        <div className="cards-section">
          <ResponsiveCards
            image={greenIcon}
            cardTitle={"Respetar el planeta"}
            cardDescription={
              "Cuidar el planeta en el que vivimos es una de nuestras máximas prioridades"
            }
          />
          <ResponsiveCards
            image={elefantIcon}
            cardTitle={"Bienestar animal"}
            cardDescription={
              "Sólo trabajamos con empresas locales que aseguren el bienestar de los animales"
            }
          />
          <ResponsiveCards
            image={culturalIcon}
            cardTitle={"Intercambio cultural"}
            cardDescription={
              "Aprendemos y respetamos los aspectos culturales del destino que visitamos"
            }
          />
          <ResponsiveCards
            image={patrimonioIcon}
            cardTitle={"Conservación patrimonio"}
            cardDescription={
              "Apoyamos iniciativas que contribuyan a la conservación de los monumentos nacionales"
            }
          />
        </div>
      </div>
    </ResponsiveTravelSectionStyled>
  );
};

export default ResponsiveTravelSection;
