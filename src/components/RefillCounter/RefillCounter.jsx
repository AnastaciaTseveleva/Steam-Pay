import React from "react";
import "./RefillCounter.scss";

const RefillCounter = ({ label, number, img, index }) => {

  return (
    <div className="refill">
      <img className="refill__img" src={img} alt="" />
      <div className="refill__counter">
        <p className="refill__counter-number">{Intl.NumberFormat('ru').format(number)}</p>
        <p className="refill__counter-label">{label}</p>
      </div>
    </div>
  );
};

export default RefillCounter;
