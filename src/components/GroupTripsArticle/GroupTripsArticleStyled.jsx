import styled from "styled-components";
import styles from "../../styles/styles";
import fondoRosa from "../../img/fondoRosa.jpeg";

const GroupTripsArticleStyled = styled.div`
  .full-article {
    height: 760px;
    width: 100%;
    /*     background: radial-gradient(circle at bottom left, #bc4749b5, #f2e8cfb5); */
    display: flex;
    gap: 50px;
  }

  .foto-articulo {
    margin: 100px 0 20px 50px;
    object-fit: cover;
    width: 40%;
    height: 70%;
    border-radius: 10px;
  }

  .line-up {
    margin: 120px 0 30px 30px;
    height: 1px;
    width: 70%;
    border-radius: 10px;
    background-color: ${styles.colors.softBlack};
    align-self: center;
  }

  .line-bottom {
    height: 1px;
    width: 70%;
    border-radius: 10px;
    background-color: ${styles.colors.softBlack};
    align-self: center;
    margin: 50px 0 30px 30px;
  }

  .title {
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 0 30px;
  }

  .text {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin: 30px 200px 0 30px;
    font-size: ${styles.fontSizes.medium};
  }

  @media (max-width: 600px) {
    body {
      max-width: 600px;
    }
    .full-article {
      height: 680px;
      width: 100vw;
      gap: 0;
    }

    .line-up {
      display: none;
    }

    .line-bottom {
      display: none;
    }

    .foto-articulo {
      margin: 60px 15px 20px 10px;
      object-fit: cover;
      width: 30%;
      height: 70%;
      border-radius: 10px;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      margin: 80px 0 0 0;
      padding: 0;
    }

    .text {
      width: 50%;
      background-color: white;
      padding: 15px;
      border-radius: 10px;
      margin: 30px 20px 0 0;
      font-size: ${styles.fontSizes.smaller};
    }
  }

  @media (max-width: 500px) {
    body {
      max-width: 500px;
    }
    .full-article {
      height: 600px;
      width: 100vw;
      gap: 0;
    }

    .line-up {
      display: none;
    }

    .line-bottom {
      display: none;
    }

    .foto-articulo {
      display: none;
    }

    .title {
      font-size: 25px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      padding: 0;
    }

    .text {
      width: 72%;
      background-color: white;
      padding: 15px;
      border-radius: 10px;
      margin: 30px 0 0 40px;
      display: flex;
      justify-content: center;
      font-size: ${styles.fontSizes.smaller};
    }
  }
`;

export default GroupTripsArticleStyled;
