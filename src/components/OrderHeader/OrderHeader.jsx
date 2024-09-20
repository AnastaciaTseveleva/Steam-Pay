import React from "react";
import logoIcon from "../../assets/img/1.svg";
import nameIcon from "../../assets/img/FatherPay.svg";
import timeIcon from "../../assets/img/ClockCircle.svg";

const OrderHeader = () => {
  return (
    <div className="order-block__header">
      <div className="order-block__logo">
        <div className="order-status__icon">
          <img src={logoIcon} alt="" />
          <img src={nameIcon} alt="" />
        </div>
      </div>
      <div className="order-status">
        <div className="order-status__icon order-status__icon-clock">
          <img src={timeIcon} alt="" />
        </div>
        <span className="order-status__caption">Ожидает пополнение</span>
      </div>
    </div>
  );
};

export default OrderHeader;
