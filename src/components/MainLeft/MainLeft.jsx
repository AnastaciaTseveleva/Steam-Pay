import FormBtn from "../FormBtn";
import Input from "../Input";
import "./MainLeft.scss";
import React, { useContext } from "react";
import PayContext from "../../context/PayContext";
export const MainLeft = ({}) => {
  const {
    login,
    money,
    isLoginInputError,
    isAgreeInputError,
    isMoneyInputError,
    changeMoney,
    changeLogin,
    number,
    toggleMoneyInput,
    changeCheckboxInput,
    openPopup,
    setLoginPopupIsOpen,
    isMobile,
  } = useContext(PayContext);

  return (
    <div className="wallet">
      <p className="wallet__caption">Заполните данные</p>
      <fieldset className="wallet__input-container">
        <Input
          className={"wallet__input "}
          type={"text"}
          placeholder={"Ваш логин"}
          value={login}
          onInput={changeLogin}
          name={"login"}
          isInvalid={isLoginInputError}
        />
        <button
          type="button"
          className="wallet__input-container-link"
          onClick={() => openPopup(setLoginPopupIsOpen)}
        >
          Где его взять?
        </button>
      </fieldset>
      <fieldset className="wallet__input-container">
        <Input
          className={"wallet__input wallet__input-icon"}
          type={"text"}
          placeholder={"500 ₽"}
          value={money}
          onInput={toggleMoneyInput}
          name={"money"}
          isInvalid={isMoneyInputError}
        />
      </fieldset>
      <div className="wallet__variant">
        {number.map((value, index) => (
          <FormBtn
            value={value}
            symbol={"₽"}
            changeMoney={changeMoney}
            key={index}
          />
        ))}
      </div>
      {!isMobile && (
        <div className="wallet__footer-menu">
          <div className="wallet__checkbox">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="wallet__checkbox-check"
              onChange={changeCheckboxInput}
            />
            <label
              htmlFor="agree"
              className={`${
                isAgreeInputError
                  ? "wallet__checkbox-input-label wallet__checkbox-input-label-error"
                  : "wallet__checkbox-input-label "
              }`}
            ></label>
            <label htmlFor="agree" className="wallet__checkbox-label">
              Я подтверждаю, что указал свой логин Steam, а не никнейм
            </label>
          </div>
          <button type="submit" className="wallet__form-btn">
            Оплатить
          </button>
        </div>
      )}
    </div>
  );
};
export default MainLeft;
