import ModalDeleteStyled from "./ModalDeleteStyled";

const ModalDelete = ({ deleteFunction, closeModalFunction }) => {
  return (
    <ModalDeleteStyled>
      <div className="trip-eliminate-alert">
        <p className="eliminate-alert-text">
          ¿Estás seguro que quieres eliminar el viaje?
        </p>
        <div className="alert-buttons">
          <button
            className="eliminate-alert-button eliminate-alert-button-no"
            onClick={() => closeModalFunction(false)}
          >
            CANCELAR
          </button>
          <button
            className="eliminate-alert-button eliminate-alert-button-yes"
            onClick={() => deleteFunction()}
          >
            SÍ
          </button>
        </div>
      </div>
    </ModalDeleteStyled>
  );
};

export default ModalDelete;
