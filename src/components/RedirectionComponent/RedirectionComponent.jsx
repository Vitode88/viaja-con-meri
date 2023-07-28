import TravelCards from "../ProximosViajesSection/TravelCards/TravelCards";
import RedirectionComponentStyled from "./RedirectionComponentStyled";
import { Navigate, useNavigate } from "react-router-dom";

const RedirectionComponent = () => {
  const navigate = useNavigate();

  function accesCreateTrip(e) {
    e.preventDefault();
    navigate("/create-trip");
  }

  function accesReadTrip(e) {
    e.preventDefault();
    navigate("/read-trip");
  }
  return (
    <RedirectionComponentStyled>
      <div className="full-component">
        <div
          className="create-trip-box box"
          onClick={(e) => accesCreateTrip(e)}
        >
          <p>CREAR VIAJE</p>
        </div>
        <div className="modify-trip-box box" onClick={(e) => accesReadTrip(e)}>
          <p>MODIFICAR / ELIMINAR VIAJE</p>
        </div>
      </div>
    </RedirectionComponentStyled>
  );
};

export default RedirectionComponent;
