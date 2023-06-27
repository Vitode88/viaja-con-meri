import styled from "styled-components";
import styles from "../../styles/styles";

const FooterStyled = styled.div`
  .full-section {
    height: 310px;
    background-color: #386641;
    color: ${styles.colors.mainWhite};
    padding: 70px 360px 10px 40px;
  }

  .full-content {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: end;
    justify-content: flex-end;
    width: 7rem;
    height: 7rem;
    border-radius: 10px;
  }

  .column-title {
    margin: 0 0 26px 0px;
    font-size: 20px;
    font-weight: bold;
  }

  .column-text {
    transition: 0.1s linear;
  }

  .column-text:hover {
    cursor: pointer;
    color: ${styles.colors.almostBlack};
    text-decoration: underline;
    transition: 0.05s linear;
  }

  .derechos-reservados {
    margin-top: 100px;
  }

  .button {
    display: flex;
    gap: 10px;
    padding: 12px 15px;
    font-family: "Niramit", sans-serif;
    border: none;
    border-radius: 20px;
    background-color: #26b546;
    align-items: center;
    justify-content: center;
  }

  .button:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px #26b546;
    .button-text {
      font-size: 18px;
      transition: 0.1s linear;
    }
  }

  .whatsapp-logo-button {
    width: 20px;
  }

  .button-text {
    margin: 0;
    font-size: 15px;
    transition: 0.2s linear;
  }
`;

export default FooterStyled;
