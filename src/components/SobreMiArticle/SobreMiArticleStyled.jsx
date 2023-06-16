import styled from "styled-components";
import styles from "../../styles/styles";

const SobreMiArticleStyled = styled.div`
  p {
    margin: 0;
  }
  .full-article {
    margin: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fotos-section {
    margin: 0;
    height: 550px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2e8cf;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23bc4749' fill-opacity='0.76'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
  }

  .collage-fotos {
    width: 80%;
    position: absolute;
    z-index: 1;
    padding-top: 100px;
  }

  .text-section {
    height: 650px;
    background-color: /* ${styles.colors.mainDark} */ #ade8f4;
    opacity: 0.9;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hola-text-container {
    margin: 220px 0 0 0;
    width: 35%;
    font-family: "Rubik Mono One", sans-serif;
    font-size: 70px;
    /* background-color: #bc4749;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; */
    color: #bc4749;
    background: none;
  }

  .main-text {
    margin: 0 50px;
    padding: 30px 0 0 0;
    font-size: 22px;
    color: ${styles.colors.almostBlack};
    width: 80%;
  }

  @media (max-width: 600px) {
    .full-article {
      width: 100vw;
    }

    .fotos-section {
      height: 350px;
      width: 100vw;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23bc4749' fill-opacity='0.76'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
    }

    .collage-fotos {
      width: 70%;
    }

    .text-section {
      height: 400px;
      width: 100vw;
    }

    .hola-text-container {
      margin: 0;
      width: 100%;
      color: #bc4749;
      background: none;
      font-family: "Rubik Mono One", sans-serif;
      font-size: 50px;
    }

    .main-text {
      margin: 0;
      padding: 30px 0 0 0;
      font-size: 15px;
      color: ${styles.colors.almostBlack};
      width: 80%;
    }
  }

  @media (max-width: 450px) {
    .full-article {
      width: 100vw;
    }

    .fotos-section {
      height: 210px;
      width: 100vw;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23bc4749' fill-opacity='0.76'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
    }

    .collage-fotos {
      width: 95%;
      padding: 70px 0 0 0;
    }

    .text-section {
      height: 560px;
      width: 100vw;
    }

    .hola-text-container {
      margin: 100px 0 0 0;
      width: 35%;
      color: #bc4749;
      background: none;
      font-family: "Rubik Mono One", sans-serif;
      font-size: 50px;
      display: flex;
      justify-content: center;
    }

    .main-text {
      margin: 0;
      padding: 30px 0 0 0;
      font-size: 15px;
      color: ${styles.colors.almostBlack};
      width: 80%;
    }
  }
`;

export default SobreMiArticleStyled;
