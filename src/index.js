import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProximosViajesSection from "./components/ProximosViajesSection/ProximosViajesSection";
import Lobby from "./components/Lobby/Lobby";
import EditTrips from "./components/CompleteTrips/CompleteTrips";
import RedirectionComponent from "./components/RedirectionComponent/RedirectionComponent";
import TravelCards from "./components/ProximosViajesSection/TravelCards/TravelCards";
import { TripProvider } from "./hooks/useTrip";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <TripProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/proximos-viajes"
              element={<ProximosViajesSection isEditable={false} />}
            />
            <Route path="/lobby" element={<Lobby />} />
            <Route
              path="/lobby-redirection"
              element={
                <ProtectedRoute>
                  <RedirectionComponent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/complete-trip"
              element={
                <ProtectedRoute>
                  <EditTrips />
                </ProtectedRoute>
              }
            />
            <Route
              path="/read-trip"
              element={
                <ProtectedRoute>
                  <ProximosViajesSection isEditable={true} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </TripProvider>
    </AuthProvider>
  </React.StrictMode>
);
