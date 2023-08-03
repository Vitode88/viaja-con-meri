import styled from "styled-components";

const ModalDeleteStyled = styled.div`
  .trip-eliminate-alert {
    z-index: 9;
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 20vh;
    margin: 10% 25%;
    padding: 10px;
    gap: 18px;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: #eeeded;
    border: 1.5px solid #616161;
    border-radius: 8px;
  }

  .eliminate-alert-text {
    padding: 10px;
    margin: 0;
    font-weight: bold;
  }

  .alert-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    width: 100%;
    margin: 0 50px;
  }

  .eliminate-alert-button {
    border-radius: 5px;
    padding: 8px 50px;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s linear;
  }

  .eliminate-alert-button:hover {
    cursor: pointer;
    transition: 0.1s linear;
    box-shadow: 0px 0px 4px 2px #7a7a7a;
  }

  .eliminate-alert-button-no {
    background-color: #cccda8;
  }
  .eliminate-alert-button-yes {
    background-color: #be3939;
    font-weight: bold;
  }
`;

export default ModalDeleteStyled;
