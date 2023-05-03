import HeaderStyled from "./NavBarStyled";
import logo from "../../img/logo.png";
import logoTrans from "../../img/logoTrans.png";
import { useState } from "react";

const Header = () => {
  const [navBarColored, setNavBarColored] = useState(false);

  const changeNavBarColor = () => {
    if (window.scrollY > 20) {
      setNavBarColored(true);
    } else {
      setNavBarColored(false);
    }
  };

  window.addEventListener("scroll", changeNavBarColor);

  return (
    <HeaderStyled>
      <div
        className="head"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80)`,
        }}
      >
        <div className={`full-nav full-nav-${navBarColored && "colored"}`}>
          <img src={logo} alt="nav-logo" className="nav-logo" />
          <ul className={`nav-menu nav-menu-${navBarColored && "colored"}`}>
            <li>Qué es Viaja con Meri?</li>
            <li>Próximos viajes</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="center-and-bottom-head">
          <div className="logo-and-slogan-head">
            <img
              src={logoTrans}
              alt="logo-center-head"
              className="head-logo-transparent"
            />
            <p className="head-slogan">Verdaderos viajes en grupo</p>
          </div>
          <a href="">
            <div className="arrow-indicator">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
