import ProximosViajesSectionStyled from "./ProximosViajesSectionStyled";
import TravelCards from "./TravelCards/TravelCards";
import goldBackground from "../../img/goldBackground2.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";
import useTrip from "../../hooks/useTrip";

const ProximosViajesSection = ({ isEditable, deleteTrip }) => {
  const [trips, setTrips] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [tripDeleted, setTripDeleted] = useState();

  const { trip } = useTrip();

  useEffect(() => {
    const tripsRequest = async () => {
      try {
        const tripUrl = await axios.get("http://localhost:4000/trips/");
        setTrips(tripUrl.data.trips);
      } catch (error) {
        console.error(error);
      }
    };

    tripsRequest();
  }, []);

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
        {isEditable ? (
          <div className="article-title">
            Selecciona un viaje para editar o eliminar
          </div>
        ) : (
          <div className="article-title">PRÓXIMOS VIAJES EN GRUPO:</div>
        )}

        <div className="cards-section">
          {trips ? (
            trips.map((trip, index) => {
              return isEditable ? (
                <TravelCards
                  key={index}
                  trip={trip}
                  isEditable={true}
                  setOpenModal={setOpenModal}
                />
              ) : (
                <TravelCards key={index} trip={trip} isEditable={false} />
              );
            })
          ) : (
            <p>No hay viajes</p>
          )}
        </div>
      </div>
    </ProximosViajesSectionStyled>
  );
};

export default ProximosViajesSection;
