import React from "react";

const PopupContacts = ({
  contactsPopupIsOpen,
  hidePopup,
  setContactsPopupIsOpen,
}) => {
  return (
    <div
      className={
        contactsPopupIsOpen
          ? "popup popup-contacts popup--active"
          : "popup popup-contacts"
      }
    >
      <div className="popup__header">
        <h3 className="popup__heading">Контакты</h3>
        <button
          className="popup__close-btn"
          onClick={() => hidePopup(setContactsPopupIsOpen)}
        ></button>
      </div>
      <span className="popup__text">
        PLAYFUL LABS LIMITED <br /> Registration No. 3193523
      </span>
      <span className="popup__text">
        Suite C, Level 7, World Trust Tower,
        <br /> 50 Stanley Street, Central, Hong Kong
      </span>
      <p className="popup-contacts__subheading">Техническая поддержка:</p>
      <a className="popup-contacts__link"> help@steampay.ru</a>
      <p className="popup-contacts__subheading">Написать нам в соц. сетях:</p>
      <div className="header__social">
        <a href="" className="header__social-link header__social-link-tg"></a>
        <a href="" className="header__social-link header__social-link-vk"></a>
      </div>
    </div>
  );
};

export default PopupContacts;
