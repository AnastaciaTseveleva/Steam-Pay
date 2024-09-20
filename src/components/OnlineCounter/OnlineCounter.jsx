import "./OnlineCounter.scss";
import React from "react";

const OnlineCounter = ({ count }) => {
  return (
      <div className="online__counter">
        <p className="online__counter-number">{count}</p>
        <p className="online__counter-label">ОНЛАЙН</p>
      </div>
   
  );
};

export default OnlineCounter;
