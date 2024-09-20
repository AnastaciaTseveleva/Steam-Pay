import React from "react";

const FormBtn = ({ value, symbol, changeMoney }) => {
  return (
    <button
      type="button"
      onClick={() => changeMoney(value)}
      className="wallet__variant-btn"
    >
      {Intl.NumberFormat("ru").format(value)} {symbol}
    </button>
  );
};

export default FormBtn;
