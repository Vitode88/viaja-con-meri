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
  }

  .card-title {
    padding: 0 20%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  .card-dates {
    text-align: center;
    margin: 0 0 15px 0;
  }

  .card-dates {
    margin: 0;
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
    background-color: #64b336;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    padding: 9px 13px;
  }
`;

export default TravelCardsStyled;
