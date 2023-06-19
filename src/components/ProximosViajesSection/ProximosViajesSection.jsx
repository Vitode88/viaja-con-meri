import ProximosViajesSectionStyled from "./ProximosViajesSectionStyled";
import TravelCards from "./TravelCards/TravelCards";
import goldBackground from "../../img/goldBackground2.jpeg";
import GreeceCard from "../../img/GreeceCard.jpg";
import VeniceCard from "../../img/VeniceCard.jpeg";

const ProximosViajesSection = () => {
  return (
    <ProximosViajesSectionStyled>
      <div
        className="full-article"
        style={{
          backgroundImage: `url(${goldBackground})`,
          opacity: 0.85,
          backgroundSize: "cover",
        }}
      >
        <div className="article-title">PRÓXIMOS VIAJES EN GRUPO:</div>
        <div className="cards-section">
          <TravelCards
            img={GreeceCard}
            title={"Antigüedad y arte entre las islas griegas"}
            dates={"05 - 18 Mayo"}
            availability={"half"}
          />
          <TravelCards
            img={VeniceCard}
            title={"Canales y pizza en Venecia"}
            dates={"24 Octubre - 08 Noviembre"}
            availability={"full"}
          />
        </div>
      </div>
    </ProximosViajesSectionStyled>
  );
};

export default ProximosViajesSection;
