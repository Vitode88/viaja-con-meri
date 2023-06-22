import styled from "styled-components";
import styles from "../../../styles/styles";

const OfrecemosCardsStyled = styled.div`
  .full-card {
    width: 170px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: white;
    padding: 25px 25px;
    border-radius: 20px;
  }
  .image {
    width: 100%;
  }

  .card-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .card-description {
    font-size: 1rem;
    margin-top: 20px;
    text-align: justify;
  }
`;

export default OfrecemosCardsStyled;
