import Navbar from "../Navbar";
import OnlineCounter from "../OnlineCounter"; //  /OnlineCounter/OnlineCounter
import "./Header.scss";
import React from "react";
import logoIcon from "../../assets/img/1.svg";
import nameIcon from "../../assets/img/FatherPay.svg";
import { Link } from "react-router-dom";
const Header = ({
  online,
  openPopup,
  setContactsPopupIsOpen,
  isBurgerWindow,
  isBurgerWindowOpen,
  openBurgerWindow,
  hideBurgerWindow,
}) => {
  return (
    /////link
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="header__left-panel">
          <Link className="header__logo-link" to="/">
            <img src={logoIcon} alt="" />
            <img className="logo-name" src={nameIcon} alt="" />
          </Link>
          <OnlineCounter count={online} />
        </div>
        <div className="header__right-panel">
          <Navbar
            openPopup={openPopup}
            setContactsPopupIsOpen={setContactsPopupIsOpen}
            locationClass={"header-navbar"}
          />
          <div className="header__social">
            <a
              href="#"
              className="header__social-link header__social-link-tg"
            ></a>
            <a
              href="#"
              className="header__social-link header__social-link-vk"
            ></a>
            {isBurgerWindow && (
              <button
                onClick={
                  isBurgerWindowOpen ? hideBurgerWindow : openBurgerWindow
                }
                className={
                  isBurgerWindowOpen
                    ? "header__burger-btn header__burger-btn--open"
                    : "header__burger-btn"
                }
              ></button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
