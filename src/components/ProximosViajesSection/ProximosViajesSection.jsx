import ProximosViajesSectionStyled from "./ProximosViajesSectionStyled";
import TravelCards from "./TravelCards/TravelCards";
import goldBackground from "../../img/goldBackground2.jpeg";

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
        <div className="article-title">PRÓXIMOS VIAJES EN GRUPO</div>
        <div className="cards-section">
          <TravelCards />
        </div>
      </div>
    </ProximosViajesSectionStyled>
  );
};

export default ProximosViajesSection;
