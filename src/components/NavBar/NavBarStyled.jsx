import styled from "styled-components";
import styles from "../../styles/styles";

const NavBarStyled = styled.div`
  body {
    font-family: "Ysabeau", sans-serif;
  }

  .head {
    height: 800px;
    background-size: 100% 100%;
  }

  .full-nav {
    height: 12vh;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px 10px 15px;
    background-color: transparent;
    position: fixed;
  }

  .nav-logo {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }

  .nav-menu {
    font-family: "Niramit", sans-serif;
    font-size: ${styles.fontSizes.medium};
    font-weight: bold;
    color: white;
    display: flex;
    gap: 20px;
    margin: 0 60px 0 0;
  }

  .center-and-bottom-head {
    padding-top: 15em;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .logo-and-slogan-head {
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .head-logo-transparent {
    height: 80px;
  }

  .head-slogan {
    color: white;
  }

  //ARROW ANIMATION -----------------------------------------------
  .arrow-indicator {
    position: relative;
    width: 75px;
    height: 75px;
    background: transparent;
    transform: rotate(45deg);
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
      border-color: #222;
    }
  }
  //ARROW ANIMATION ////-----------------------------------------------
`;

export default NavBarStyled;
