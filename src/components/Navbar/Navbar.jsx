import React from "react";
// import s from "./Navbar.module.css";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ openPopup, setContactsPopupIsOpen, locationClass }) => {
  return (
    // <nav className={s.navbar}>
    <nav className={`navbar ${locationClass}`}>
      <Link className="navbar__link" to="/faq">
        FAQs
      </Link>
      {/* <a href="" className="navbar__link"></a> */}
      <button
        href="#"
        className="navbar__link navbar__link-btn"
        onClick={() => openPopup(setContactsPopupIsOpen)}
      >
        Контакты
      </button>
      <a href="" className="navbar__link">
        Отзывы
      </a>
    </nav>
  );
};

export default Navbar;
