import MainLeft from "../../components/MainLeft";
import MainRight from "../../components/MainRight";
import Stats from "../../components/Stats";
import RefillCounter from "../../components/RefillCounter";
import "./MainPage.scss";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import PayContext from "../../context/PayContext";
const MainPage = ({}) => {
  const {
    setFormData,
    formData,
    setIsLoginInputError,
    setIsAgreeInputError,
    setisMethodInputError,
    setIsMoneyInputError,
    statHeading,
    refillStatsInfo,
    setIsOrderBeen,
  } = useContext(PayContext);
  const navigate = useNavigate();

  function toggleSubmitForm(e) {
    e.preventDefault();

    const loginInput = e.target.login;
    const moneyInput = e.target.money;
    const paymentInput = e.target.paymentType;
    const agreeInput = e.target.agree;

    !loginInput.value && setIsLoginInputError(true);
    !moneyInput.value && setIsMoneyInputError(true);
    !paymentInput.value && setisMethodInputError(true);
    !agreeInput.checked && setIsAgreeInputError(true);

    if (
      !loginInput.value ||
      !moneyInput.value ||
      !paymentInput.value ||
      !agreeInput.checked
    ) {
      console.log("все не ок");
    } else {
      setIsOrderBeen(true);
      navigate("/order");
      console.log("all is ok");
    }

    setFormData({
      ...formData,
      login: loginInput.value,
      money: moneyInput.value,
      agree: agreeInput.value,
      method: paymentInput.value,
    });
  }

  return (
    <div className="wrapper main__wrapper">
      <Stats>
        <h2 className="stats__title">{statHeading}</h2>
        <div className="stats__info">
          {refillStatsInfo.map(({ label, number, img }, index) => (
            <RefillCounter
              label={label}
              number={number}
              img={img}
              key={index}
            />
          ))}
        </div>
      </Stats>
      <form onSubmit={toggleSubmitForm} className="main__container">
        <MainLeft />
        <MainRight />
      </form>
    </div>
  );
};

export default MainPage;
