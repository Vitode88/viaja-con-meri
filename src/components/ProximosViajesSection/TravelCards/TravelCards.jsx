import TravelCardsStyled from "./TravelCardsStyled";
import { setAvailabilityColor } from "../../../utils/functions";

const TravelCards = ({ img, name, dateFrom, dateTo, availability }) => {
  console.log(availability);
  let availabilityObj = setAvailabilityColor(availability);

  return (
    <TravelCardsStyled>
      <div className="full-card">
        <img src={img} alt="Greece Card" className="card-img" />
        <div className="card-information">
          <p className="card-title">{name}</p>
          <div className="dates">
            <p className="card-dates">{dateFrom}</p>
            <p className="card-dates">{dateTo}</p>
          </div>

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
