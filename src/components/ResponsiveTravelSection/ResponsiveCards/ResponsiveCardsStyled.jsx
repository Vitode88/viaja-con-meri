import styled from "styled-components";
import styles from "../../../styles/styles";

const ResponsiveCardsStyled = styled.div`
  .full-card {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .image-and-title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .image {
    align-items: center;
    width: 110px;
  }

  .card-title {
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .card-description {
    text-align: center;
  }
`;

export default ResponsiveCardsStyled;
