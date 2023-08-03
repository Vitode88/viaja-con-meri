import LobbyStyled from "./LobbyStyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Lobby = () => {
  const [accesPassword, setAccesPassword] = useState();
  const navigate = useNavigate();
  const { setAuthed } = useAuth();

  function accesTrip(e) {
    e.preventDefault();

    if (accesPassword === "Merite00") {
      localStorage.setItem("authed", true);
      setAuthed(true);
      navigate("/lobby-redirection");
    } else {
      alert("La contraseña no es correcta");
    }
  }

  return (
    <LobbyStyled>
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
    </LobbyStyled>
  );
};

export default Lobby;
