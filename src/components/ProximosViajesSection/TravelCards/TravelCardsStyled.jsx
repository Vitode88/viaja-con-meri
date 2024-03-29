import styled from "styled-components";
import styles from "../../../styles/styles";

const TravelCardsStyled = styled.div`
  body {
    margin: 0;
  }

  .full-card {
    height: 450px;
    width: 350px;
    background-color: #f2e8cf;
    border-radius: 20px;
    transition: 0.2s linear;
  }

  .full-card:hover {
    height: 465px;
    width: 360px;
    box-shadow: 0px 0px 8px 5px #808080;
    transition: 0.1s linear;
  }

  .card-img {
    object-fit: cover;
    width: 100%;
    height: 45%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .card-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .card-title {
    padding: 0 20%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
  }

  .dates {
    display: flex;
    gap: 1px;
    text-align: center;
  }

  .card-dates {
    margin: 0 0 15px 0;
  }

  .card-available-places {
    display: flex;
    align-items: center;
    height: 10px;
    gap: 12px;
    text-align: center;
  }

  .color-available-places {
    width: 13px;
    height: 13px;
    border-radius: 100%;
    object-fit: cover;
  }

  .text-places {
    margin: 0;
  }

  .card-line {
    margin: 30px 0 15px 0;
    width: 70%;
    height: 1.5px;
    border: none;
    border-radius: 10px;
    background-color: ${styles.colors.softBlack};
  }

  .card-button {
    width: 40%;
    font-family: "Niramit", sans-serif;
    font-weight: bold;
    background-color: #26b546;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    padding: 9px 13px;
    transition: 0.2s linear;
  }

  .card-button:hover {
    cursor: pointer;
    transition: 0.1s linear;
    box-shadow: 0px 0px 8px 2px #166e29;
  }

  .buttons {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }

  .button-button {
    width: 25%;
    font-family: "Niramit", sans-serif;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    padding: 5px 5px;
    transition: 0.2s linear;
  }
  .button-button:hover {
    cursor: pointer;
    transition: 0.08s linear;
  }

  .watch-button {
    background-color: #26b54a;
  }
  .watch-button:hover {
    box-shadow: 0px 0px 4px 2px #166e2c;
  }
  .edit-button {
    background-color: #2685b5;
  }
  .edit-button:hover {
    box-shadow: 0px 0px 4px 2px #16406e;
  }

  .delete-button {
    background-color: #b52634;
  }
  .delete-button:hover {
    box-shadow: 0px 0px 4px 2px #6e1616;
  }
`;

export default TravelCardsStyled;
