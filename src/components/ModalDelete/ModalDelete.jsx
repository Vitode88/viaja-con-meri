import ModalDeleteStyled from "./ModalDeleteStyled";

const ModalDelete = () => {
  const tripDelete = async (e) => {
    e.preventDefault();

    try {
      await axios({
        method: "delete",
        url: `http://localhost:4000/trips/${trip.id}`,
      });
      setTripDeleted(true);
    } catch (error) {
      console.error(error);
      setTripDeleted(false);
    }
  };

  return <ModalDeleteStyled>
    {openModal ? (
          <div className="trip-eliminate-alert">
            <p className="eliminate-alert-text">
              ¿Estás seguro que quieres eliminar el viaje?
            </p>
            <div className="alert-buttons">
              <button
                className="eliminate-alert-button eliminate-alert-button-no"
                onClick={() => setOpenModal(false)}
              >
                CANCELAR
              </button>
              <button
                className="eliminate-alert-button eliminate-alert-button-yes"
                onClick={() => }
              >
                SÍ
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
  </ModalDeleteStyled>;
};

export default ModalDelete;
