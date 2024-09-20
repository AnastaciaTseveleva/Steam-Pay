import React from 'react'

const Column = ({src, counter, text}) => {
  return (
    <div>
      <div className="faq__point-item">
        <div className="faq__point-item-counter">{counter}</div>
        <div className="faq__point-item-icon">
          <img src={src} alt="" />
        </div>
        <h3 className="faq__point-item-heading">{text}</h3>
      </div>
    </div>
  );
}

export default Column