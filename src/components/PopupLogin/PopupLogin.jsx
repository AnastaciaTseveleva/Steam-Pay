import React, { useState } from "react";
import steamImg from "../../assets/img/img.png";
const PopupLogin = ({ loginPopupIsOpen, hidePopup, setLoginPopupIsOpen }) => {
  const [headingPopup, setHeadingPopup] = useState("Где взять логин");
  const [stepPopup, setStepPopup] = useState([
    "1. Зайдите в аккаунт Steam.",
    "2. В правом верхнем углу нажмите на свой никнейм, далее в меню выберите «Об аккаунте».",
    "3. На открывшейся странице будет указан ваш уникальный логин (не никнейм).",
  ]);
  const [textPopup, setTextPopup] = useState(
    "ЛИБО ПЕРЕЙДИТЕ СРАЗУ НА ДАННУЮ СТРАНИЦУ STEAM"
  );
  return (
    <div
      className={
        loginPopupIsOpen
          ? "popup popup-login popup--active"
          : "popup popup-login"
      }
    >
      {/* <div className="popup-login__content"> */}
      <div className="popup__header">
        <h3 className="popup__heading">{headingPopup}</h3>
        <button
          className="popup__close-btn"
          onClick={() => hidePopup(setLoginPopupIsOpen)}
        ></button>
      </div>
      <div className="popup-login__steps">
        {stepPopup.map((step, index) => (
          <span className="popup__text" key={index}>{step}</span>
        ))}
      </div>
      <span className="popup-login__text">{textPopup}</span>
      <img className="popup-login__image" src={steamImg} alt="" />
      <button
        onClick={() => hidePopup(setLoginPopupIsOpen)}
        className="popup-login__btn"
      >
        Понятно
      </button>
    </div>
  );
};

export default PopupLogin;
