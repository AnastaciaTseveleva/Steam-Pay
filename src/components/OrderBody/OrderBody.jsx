import React from "react";

const OrderBody = ({ login, money, sumbol }) => {
  return (
    <div className="order-block__body">
      <div className="order-block__login">
        <p className="order-block__caption">Логин Steam:</p>
        <span className="order-block__login-value">{login}</span>
      </div>
      <span className="order-block__price">
        {money}
        {sumbol}
      </span>
    </div>
  );
};

export default OrderBody;
