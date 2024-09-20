import React, { useContext } from "react";
import PayContext from "../../context/PayContext";
import "./OrderPage.scss";
import OrderHeader from "../../components/OrderHeader/OrderHeader";
import OrderBody from "../../components/OrderBody/OrderBody";
import OrderFooter from "../../components/OrderFooter/OrderFooter";
const OrderPage = ({ }) => {
  const { login, money } = useContext(PayContext);

  return (
    <div className="order">
      <div className="wrapper order__wrapper">
        <div className="order-block">
          <OrderHeader />
          <OrderBody login={login} money={money} />
        </div>
      
        <OrderFooter />
      </div>
    </div>
  );
};

export default OrderPage;
