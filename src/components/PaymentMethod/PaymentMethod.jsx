import React from "react";
import "./PaymentMethod.scss";
const PaymentMethod = ({ src, changeRadioInput, value }) => {
  return (
    <label className="payment-method ">
      <input
        className="payment-method__input"
        name="paymentType"
        type="radio"
        value={value}
        onChange={changeRadioInput}
      />
      <div className="payment-method__icon-container">
        <img className="payment-method__icon" src={src} alt="" />
      </div>
    </label>
  );
};

export default PaymentMethod;
