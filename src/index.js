import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProximosViajesSection from "./components/ProximosViajesSection/ProximosViajesSection";
import LobbyComponent from "./components/LobbyComponent/LobbyComponent";
import EditTrips from "./components/CreateTrips/CreateTrips";
import RedirectionComponent from "./components/RedirectionComponent/RedirectionComponent";
import TravelCards from "./components/ProximosViajesSection/TravelCards/TravelCards";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route
          path="/proximos-viajes"
          element={<ProximosViajesSection isEditable={false} />}
        />
        <Route path="/lobby" Component={LobbyComponent} />
        <Route path="/lobby-redirection" Component={RedirectionComponent} />
        <Route path="/create-trip" Component={EditTrips} />
        <Route
          path="/read-trip"
          element={<ProximosViajesSection isEditable={true} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
