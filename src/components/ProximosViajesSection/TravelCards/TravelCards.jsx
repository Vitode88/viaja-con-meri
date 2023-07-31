import TravelCardsStyled from "./TravelCardsStyled";
import { setAvailabilityColor } from "../../../utils/functions";

const TravelCards = ({ image, name, dateFrom, dateTo, availability }) => {
  let availabilityObj = setAvailabilityColor(availability);

  return (
    <TravelCardsStyled>
      <div className="full-card">
        <img src={image} alt="Greece Card" className="card-img" />
        <div className="card-information">
          <p className="card-title">{name}</p>
          <p className="card-dates">{dateFrom}</p>
          <div className="card-available-places">
            <img
              src={availabilityObj.color}
              alt="Yellow Color"
              className="color-available-places"
            />
            <p className="text-places">{availabilityObj.text}</p>
          </div>
          <div className="card-line" />
          <button className="card-button">VER VIAJE</button>
        </div>
      </div>
    </TravelCardsStyled>
  );
};

export default TravelCards;
