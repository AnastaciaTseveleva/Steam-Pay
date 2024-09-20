import PaymentMethod from "../PaymentMethod";
import "./MainRight.scss";
import React, { useState, useContext } from "react";

import cardImg from "../../assets/img/Card.svg";
import qiwiImg from "../../assets/img/Qiwi.svg";
import youmoneyImg from "../../assets/img/Youmoney.svg";
import sbpImg from "../../assets/img/SPB.svg";
import lavaImg from "../../assets/img/Lava.svg";
import usdtImg from "../../assets/img/USDT.svg";
import tonImg from "../../assets/img/TON.svg";
import trxImg from "../../assets/img/TRX.svg";
import Transaction from "../Transaction/Transaction";
import PayContext from "../../context/PayContext";
const MainRight = ({}) => {
  const {
    changeRadioInput,
    isMethodInputError,
    isMobile,
    changeCheckboxInput,
    isAgreeInputError,
  } = useContext(PayContext);
  const [src, setSrc] = useState([
    {
      src: cardImg,
      value: "card",
    },
    {
      src: qiwiImg,
      value: "qiwi",
    },
    {
      src: youmoneyImg,
      value: "youmoney",
    },
    {
      src: sbpImg,
      value: "sbp",
    },
    {
      src: lavaImg,
      value: "lava",
    },
    {
      src: usdtImg,
      value: "usdt",
    },
    {
      src: tonImg,
      value: "ton",
    },
    {
      src: trxImg,
      value: "trx",
    },
  ]);
  const [transaction, setTransaction] = useState([
    {
      item: "Заплатите:",
      value: "0.0",
      isQuestion: false,
    },
    {
      item: "Получите на баланс Steam:",
      value: "0.0",
      isQuestion: false,
    },
    {
      item: "Комиссия сервиса:",
      value: "0.0",
      isQuestion: true,
    },
    {
      item: "Банковские издержки:",
      value: "0.0",
      isQuestion: true,
    },
  ]);
  return (
    <div className="wallet__radio">
      <p className="wallet__caption">Выберите платежную систему</p>
      <div
        className={`${
          isMethodInputError
            ? "wallet__payment wallet__payment-error"
            : "wallet__payment"
        }`}
      >
        {src.map((item, index) => (
          <PaymentMethod
            changeRadioInput={changeRadioInput}
            src={item.src}
            key={index}
            value={item.value}
          />
        ))}
      </div>
      <div className="wallet__info">
        {transaction.map(({ item, value, isQuestion }, index) => (
          <Transaction
            item={item}
            value={value}
            key={index}
            isQuestion={isQuestion}
          />
        ))}
      </div>
      {isMobile && (
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

export default MainRight;
