import React from "react";
import Navbar from "../Navbar";
import "./BurgerWindow.scss";
const BurgerWindow = ({
  openPopup,
  setContactsPopupIsOpen,
  openBurgerWindow,
  isBurgerWindowOpen,
}) => {
  return (
    <div
      className={
        isBurgerWindowOpen
          ? "burger-window burger-window--active"
          : "burger-window"
      }
    >
      <div className="burger-menu">
        <Navbar
          openPopup={openPopup}
          setContactsPopupIsOpen={setContactsPopupIsOpen}
          locationClass={"burger-navbar"}
        />
      </div>
    </div>
  );
};

export default BurgerWindow;
