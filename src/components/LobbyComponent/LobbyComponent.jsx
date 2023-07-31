import LobbyComponentStyled from "./LobbyComponentStyled";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LobbyComponent = () => {
  const [accesPassword, setAccesPassword] = useState();
  const navigate = useNavigate();

  function accesTrip(e) {
    e.preventDefault();

    if (accesPassword === "Merite00") {
      navigate("/lobby-redirection");
    } else {
      alert("La contraseña no es correcta");
    }
  }

  return (
    <LobbyComponentStyled>
      <div className="full-component">
        <div className="comands">
          <p>
            <span className="bold-text"></span>
          </p>
        </div>
        <form className="form">
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setAccesPassword(event.target.value)}
          ></input>
          <button className="button" onClick={(e) => accesTrip(e)}>
            ACCEDER
          </button>
        </form>
      </div>
    </LobbyComponentStyled>
  );
};

export default LobbyComponent;
