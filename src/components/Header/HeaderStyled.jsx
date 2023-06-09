import styled from "styled-components";
import styles from "../../styles/styles";

const HeaderStyled = styled.div`
  body {
    font-family: "Niramit", sans-serif;
  }

  // HEAD ------------------------
  .head {
    height: 100vh;
    background-size: 100% 100%;
  }

  // nav -----------
  .full-nav {
    height: 12vh;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0 10px 15px;
    background-color: transparent;
    position: fixed;
    transition: height 1s, background-color 0.6s;
  }

  .full-nav-colored {
    height: 10vh;
    padding: 10px 40px 10px 15px;
    background-color: ${styles.colors.mainWhite};
    transition: height 0.8s, background-color 1s, padding 0.8s;
    z-index: 2;
  }

  .nav-logo {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }

  .nav-menu {
    font-family: "Niramit", sans-serif;
    font-size: ${styles.fontSizes.small};
    font-weight: 600;
    color: white;
    display: flex;
    gap: 25px;
    width: 40%;
    margin: 0;
    list-style: none;
    padding: 0;
  }

  .nav-menu-list-item:hover {
    cursor: pointer;
  }

  .nav-menu-colored {
    color: ${styles.colors.softBlack};
    transition: color 0.5s;
  }

  // center and bottom head ------

  .center-and-bottom-head {
    padding-top: 15em;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .logo-and-slogan-head {
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .head-logo-transparent {
    height: 80px;
  }

  .head-slogan {
    margin: 0.5em 0;
    color: white;
    font-family: "Ysabeau", sans-serif;
    font-size: 27px;
    font-weight: 100;
    font-style: italic;
  }

  //ARROW ANIMATION -----------------------------------------------
  .arrow-indicator {
    position: relative;
    width: 75px;
    height: 75px;
    background: transparent;
    transform: rotate(45deg);
    z-index: 1;
  }

  .arrow-indicator:hover {
    cursor: pointer;
  }

  .arrow-indicator span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    border: none;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    animation: animate 1s linear infinite;
  }

  .arrow-indicator span:nth-child(1) {
    top: -40px;
    left: -40px;
    animation-delay: 0s;
  }
  .arrow-indicator span:nth-child(2) {
    top: -20px;
    left: -20px;
    animation-delay: 0.2s;
  }
  .arrow-indicator span:nth-child(3) {
    top: 0px;
    left: 0px;
    animation-delay: 0.4s;
  }
  .arrow-indicator span:nth-child(4) {
    top: 20px;
    left: 20px;
    animation-delay: 0.6s;
  }

  @keyframes animate {
    0% {
      border-color: #fff;
      transform: translate(0, 0);
    }
    20% {
      border-color: #fff;
      transform: translate(15px, 15px);
    }

    20.1%,
    100% {
      border-color: #333;
    }
  }
  //ARROW ANIMATION ////-----------------------------------------------

  @media (max-width: 600px) {
    .head {
      height: 85vh;
      width: 100vw;
      background-size: cover;
    }

    .full-nav {
      height: 8vh;
      width: 100%;
      padding: 10px 60px 10px 15px;
      background-color: ${styles.colors.mainWhite};
      transition: height 1s, background-color 0.6s;
    }

    .nav-logo {
      width: 50px;
      height: 50px;
    }

    .nav-menu {
      font-size: 12px;
      width: 100vw;
      font-weight: 600;
      color: ${styles.colors.softBlack};
      align-items: center;
      gap: 10px;
      margin: 0 10px 0 0;
      padding: 0 0 0 30px;
    }

    .center-and-bottom-head {
      padding-top: 15em;
      height: 55%;
      width: 100vw;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .arrow-indicator {
      position: relative;
      width: 60px;
      height: 60px;
      background: transparent;
      transform: rotate(45deg);
    }
  }
`;

export default HeaderStyled;
