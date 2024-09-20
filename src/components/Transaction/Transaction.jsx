import React from "react";
import "./Transaction.scss";
import questionIcon from "../../assets/img/FAQ.svg";

const Transaction = ({ item, value, isQuestion }) => {
  return (
    <div className="transaction">
      <p className="transaction__item">{item}</p>
      {isQuestion ? (
        <div className="transaction__icon-question">
          <img src={questionIcon} alt="" />
          <div className="transaction__text-questions">
            5% — фиксировнная комиссия
          </div>
        </div>
      ) : null}
      <p className="transaction__value">{value}₽</p>
    </div>
  );
};

export default Transaction;
