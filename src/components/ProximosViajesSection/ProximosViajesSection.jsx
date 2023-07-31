import ProximosViajesSectionStyled from "./ProximosViajesSectionStyled";
import TravelCards from "./TravelCards/TravelCards";
import goldBackground from "../../img/goldBackground2.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";

const ProximosViajesSection = () => {
  const [trips, setTrips] = useState();

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
        <div className="article-title">PRÓXIMOS VIAJES EN GRUPO:</div>
        <div className="cards-section">
          {trips ? (
            trips.map((trip, index) => {
              return (
                <TravelCards
                  key={index}
                  name={trip.name}
                  dateFrom={trip.dateFrom}
                  dateTo={trip.dateTo}
                  image={trip.image}
                  availability={trip.availability}
                  country={trip.country}
                  description={trip.description}
                  practicalInformation={trip.practicalInformation}
                  id={trip.id}
                />
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
