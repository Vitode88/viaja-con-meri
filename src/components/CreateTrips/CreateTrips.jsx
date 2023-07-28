import EditTripsStyled from "./CreateTripsStyled";
import { useState } from "react";
import axios from "axios";
import compress from "compress-base64";

const CreateTrips = () => {
  const formDataInitialState = {
    name: "",
    dateFrom: "",
    dateTo: "",
    availability: "available",
    country: "",
    image: "img",
    description: "",
    practicalInformation: "",
  };

  const [formData, setFormData] = useState(formDataInitialState);
  const [img, setImg] = useState();

  const upload = (e) => {
    const data = new FileReader();

    data.addEventListener("load", () => {
      console.log("papaya");
      compress(data.result, {
        width: 400,
        type: "image/png", // default
        max: 200, // max size
        min: 20, // min size
        quality: 0.8,
      }).then((result) => {
        setImg(result);
      });
    });

    data.readAsDataURL(e.target.files[0]);
  };
  console.log(img);

  const tripCreated = async (e) => {
    e.preventDefault();
    /* navigate("/pokemons"); */
    try {
      const tripUrl = await axios({
        method: "post",
        url: "http://localhost:4000/trips/create",
        data: formData,
      });
      console.log(tripUrl);
    } catch (error) {
      console.log(error);
    }

    setFormData(formDataInitialState);
  };

  return (
    <EditTripsStyled>
      <div className="full-component">
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
              <input type="file" onChange={upload} />
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
              tripCreated(e);
            }}
          >
            CREAR VIAJE
          </button>
        </form>
      </div>
    </EditTripsStyled>
  );
};

export default CreateTrips;
