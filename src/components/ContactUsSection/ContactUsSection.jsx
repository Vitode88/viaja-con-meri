import ContactUsSectionStyled from "./ContactUsSectionStyled";
import { useState } from "react";
import {
  isEmailAddress,
  hasNoSpecialCharacters,
} from "../../utils/validations";

import natureContact1 from "../../img/natureContact1.jpeg";
import natureContact2 from "../../img/natureContact2.jpeg";
import natureContact3 from "../../img/natureContact3.jpg";
import natureContact4 from "../../img/natureContact4.jpg";
import natureContact5 from "../../img/natureContact5.jpg";
import natureContact6 from "../../img/natureContact6.jpg";

const ContactUsSection = () => {
  const formDataInitialState = {
    name: "",
    mail: "",
    comments: "",
  };

  const errorsInitialState = { name: false, mail: false, empty: false };

  const [formData, setFormData] = useState(formDataInitialState);
  const [errors, setErrors] = useState(errorsInitialState);
  const [doneWell, setDoneWell] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mail || !formData.comments) {
      setErrors({ ...errorsInitialState, empty: true });
      setDoneWell(false);
      return;
    } else {
      if (formData.name && formData.mail && formData.comments) {
        setErrors({ ...errorsInitialState, empty: false });
      }

      if (!hasNoSpecialCharacters(formData.name)) {
        setErrors({ ...errorsInitialState, name: true });
        setDoneWell(false);

        return;
      } else {
        setErrors({ ...errorsInitialState, name: false });
      }

      if (!isEmailAddress(formData.mail)) {
        setErrors({ ...errorsInitialState, mail: true });
        setDoneWell(false);

        return;
      } else {
        setErrors({ ...errorsInitialState, mail: false });
      }
    }

    setDoneWell(true);
    setFormData(formDataInitialState);
  };

  return (
    <ContactUsSectionStyled>
      <div
        className="full-section"
        style={{
          backgroundImage: `url(${natureContact5})`,
          backgroundSize: "cover",
          backgroundPositionY: "80%",
        }}
      >
        <div className="full-content">
          <p
            className={
              //Si hi ha una alerta que la clase sigui s-t-alert
              doneWell || errors.empty || errors.name || errors.mail
                ? "section-title-alert"
                : "section-title"
            }
          >
            ¡Pregúntanos!
          </p>
          {/* si es true, .... */}
          {errors.empty && <p className="error-alert">X Campo vacío</p>}
          {errors.name && (
            <p className="error-alert">X El nombre no es váildo</p>
          )}
          {errors.mail && (
            <p className="error-alert">X El correo no es váildo</p>
          )}

          <form className="form-and-submit-block" onSubmit={handleSubmit}>
            <div action="" className="name-mail-form">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombres"
                className="name-mail-input"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div action="" className="name-mail-form">
              <label htmlFor="mail" className="form-label">
                Email
              </label>
              <input
                id="mail"
                name="mails"
                className="name-mail-input"
                value={formData.mail}
                onChange={(e) =>
                  setFormData({ ...formData, mail: e.target.value })
                }
              />
            </div>
            <div action="" className="comments-form">
              <label htmlFor="comment" className="form-label">
                Comentarios
              </label>
              <input
                id="mail"
                name="comments"
                className="comments-input"
                value={formData.comments}
                onChange={(e) =>
                  setFormData({ ...formData, comments: e.target.value })
                }
              />
            </div>
            {doneWell && (
              <p className="done-well-alert">¡Mensaje enviado correctamente!</p>
            )}
            <button className="button" type="submit">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </ContactUsSectionStyled>
  );
};

export default ContactUsSection;
