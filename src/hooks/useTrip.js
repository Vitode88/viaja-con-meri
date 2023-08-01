import { useState, createContext, useContext } from "react";

const useTripHook = () => {
  const [trip, setTrip] = useState();

  return { trip, setTrip };
};

/* ---------------------------------------------------- */

const TripContext = createContext(null);

const useTrip = () => useContext(TripContext);

export const TripProvider = ({ children }) => {
  const tripHook = useTripHook();

  return (
    <TripContext.Provider value={tripHook}>{children}</TripContext.Provider>
  );
};

export default useTrip;
