import EditTripsStyled from "./CreateTripsStyled";
import { useState } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { convertBase64 } from "../../utils/fileHandler";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const CreateTrips = () => {
  const formDataInitialState = {
    name: "",
    dateFrom: "",
    dateTo: "",
    availability: "available",
    country: "",
    image: "",
    description: "",
    practicalInformation: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(formDataInitialState);
  const [loading, setLoading] = useState(false);
  const [tripCreated, setTripCreated] = useState();

  async function upload(event) {
    const imageFile = event.target.files[0];

    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 400,
    };
    try {
      setLoading(true);
      const compressedFile = await imageCompression(imageFile, options);
      const convertedFile = await convertBase64(compressedFile);
      setFormData({ ...formData, image: convertedFile });
      setLoading(false);
      // write your own logic
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const tripCreate = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      await axios({
        method: "post",
        url: "http://localhost:4000/trips/create",
        data: formData,
      });
      setTripCreated(true);
    } catch (error) {
      console.error(error);
      setTripCreated(false);
    }

    setFormData(formDataInitialState);
    setLoading(false);
  };

  const goBack = () => {
    navigate("/lobby-redirection");
  };

  return (
    <EditTripsStyled>
      <div className="full-component">
        <button
          className="back-button"
          onClick={() => {
            goBack();
          }}
        >
          ⬅️ VOLVER
        </button>
        <form className="full-form">
          <label>
            Nombre:
            <input
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              value={formData.name}
            ></input>
          </label>
          <label>
            Fecha de inicio:
            <input
              placeholder="dd/mm/aaaa"
              type="datetime-local"
              onChange={(event) =>
                setFormData({ ...formData, dateFrom: event.target.value })
              }
              value={formData.dateFrom}
            ></input>
          </label>
          <label>
            Fecha de finalización:
            <input
              placeholder="dd/mm/aaaa"
              type="datetime-local"
              onChange={(event) =>
                setFormData({ ...formData, dateTo: event.target.value })
              }
              value={formData.dateTo}
            ></input>
          </label>
          <label>
            Disponibilidad:
            <select
              onChange={(event) =>
                setFormData({ ...formData, availability: event.target.value })
              }
              value={formData.availability}
            >
              <option value={"available"}>Disponible</option>
              <option value={"half"}>Últimas plazas</option>
              <option value={"full"}>Agotado</option>
            </select>
          </label>
          <label>
            País:
            <input
              onChange={(event) =>
                setFormData({ ...formData, country: event.target.value })
              }
              value={formData.country}
            ></input>
          </label>
          <div>
            <label>
              Imagen:
              <input
                type="file"
                onChange={(event) => {
                  upload(event);
                }}
              />
              {loading ? (
                <div className="loading">
                  <ClipLoader size={25}></ClipLoader>{" "}
                  <p className="loading-text">Cargando imagen...</p>{" "}
                </div>
              ) : null}
              {formData.image ? (
                <p className="image-charged">Imagen subida correctamente</p>
              ) : (
                <></>
              )}
            </label>
          </div>
          <label>
            Descripción:
            <textarea
              onChange={(event) =>
                setFormData({ ...formData, description: event.target.value })
              }
              value={formData.description}
            ></textarea>
          </label>
          <label>
            Información práctica:
            <textarea
              onChange={(event) =>
                setFormData({
                  ...formData,
                  practicalInformation: event.target.value,
                })
              }
              value={formData.practicalInformation}
            ></textarea>
          </label>
          <button
            className="button"
            onClick={(e) => {
              tripCreate(e);
            }}
          >
            CREAR VIAJE
          </button>
          {tripCreated && (
            <p className="trip-created-text">¡Viaje creado correctamente!</p>
          )}
          {tripCreated === false && (
            <p className="trip-not-created-text">
              No se ha podido crear el viaje
            </p>
          )}
        </form>
      </div>
    </EditTripsStyled>
  );
};

export default CreateTrips;
