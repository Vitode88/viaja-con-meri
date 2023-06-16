import TravelCardsStyled from "./TravelCardsStyled";

const TravelCards = () => {
  return (
    <TravelCardsStyled>
      <div className="full-card">
        <img src="" alt="" />
        <div className="card-information">
          <p className="card-title"></p>
          <p className="card-dates"></p>
          <div className="card-available-places">
            <img src="" alt="" />
            <p className="text-places"></p>
            <hr />
            <button>VER VIAJE</button>
          </div>
        </div>
      </div>
    </TravelCardsStyled>
  );
};

export default TravelCards;
