import TravelCardsStyled from "./TravelCardsStyled";
import { setAvailabilityColor } from "../../../utils/functions";

const TravelCards = ({ trip, isEditable }) => {
  let availabilityObj = setAvailabilityColor(trip.availability);

  const dateFromString = new Date(trip.dateFrom);
  const dateToString = new Date(trip.dateTo);
  let dayFrom = dateFromString.getDate();
  let monthFrom = dateFromString.getMonth();
  let yearFrom = dateFromString.getFullYear();

  let dayTo = dateToString.getDate();
  let monthTo = dateToString.getMonth();
  let yearTo = dateToString.getFullYear();

  return (
    <TravelCardsStyled>
      <div className="full-card">
        <img src={trip.image} alt="Greece Card" className="card-img" />
        <div className="card-information">
          <p className="card-title">{trip.name}</p>
          <p className="card-dates">
            {dayFrom}/{monthFrom}/{yearFrom} hasta el {dayTo}/{monthTo}/{yearTo}
          </p>
          <div className="card-available-places">
            <img
              src={availabilityObj.color}
              alt="Yellow Color"
              className="color-available-places"
            />
            <p className="text-places">{availabilityObj.text}</p>
          </div>
          <div className="card-line" />
          {isEditable ? (
            <div className="buttons">
              <button className="watch-button button-button">VER VIAJE</button>
              <button className="edit-button button-button">EDITAR</button>
              <button className="delete-button button-button">ELIMINAR</button>
            </div>
          ) : (
            <button className="card-button">VER VIAJE</button>
          )}
        </div>
      </div>
    </TravelCardsStyled>
  );
};

export default TravelCards;
