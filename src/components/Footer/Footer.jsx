import React from "react";
import "./Footer.scss";
import Navbar from "../Navbar";
const Footer = ({
  setPoliticsPopupIsOpen,
  openPopup,
  setRightPopupIsOpen,
  setContactsPopupIsOpen,
}) => {
  return (
    <div className="footer">
      <div className="wrapper footer__wrapper">
        <Navbar
          openPopup={openPopup}
          setContactsPopupIsOpen={setContactsPopupIsOpen}
          locationClass={"footer-navbar"}
        />
        <div className="footer__right-group">
          <button
            className="footer__copyrights-link"
            onClick={() => openPopup(setPoliticsPopupIsOpen)}
          >
            Политика конфиденциальности
          </button>
          <button
            className="footer__copyrights-link"
            onClick={() => openPopup(setRightPopupIsOpen)}
          >
            Пользовательское соглашение
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
