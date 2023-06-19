import TravelCardsStyled from "./TravelCardsStyled";
import { setAvailabilityColor } from "../../../utils/functions";

const TravelCards = ({ img, title, dates, availability }) => {
  let availabilityObj = setAvailabilityColor(availability);

  return (
    <TravelCardsStyled>
      <div className="full-card">
        <img src={img} alt="Greece Card" className="card-img" />
        <div className="card-information">
          <p className="card-title">{title}</p>
          <p className="card-dates">{dates}</p>
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
