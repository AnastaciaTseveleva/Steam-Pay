import React from "react";
import "./Accordion.scss";
import { useState } from "react";
const Accordion = ({ faqList }) => {
  const [openId, setId] = useState(null);
  const clickHandler = (id) => {
    if (id === openId) {
      setId(null);
    } else {
      setId(id);
    }
  };
  return (
    <div className="accordion">
      {faqList.map((faqItem, id) => (
        <div
          key={id}
          className={`accordion-item ${
            id === openId ? "accordion-item--active" : ""
          }`}
          onClick={() => clickHandler(id)}
        >
          <div className="accordion-item__header">
            <h3 className="accordion-item__heading">{faqItem.q}</h3>
            <button className="accordion-item__toggle-btn"></button>
          </div>
          <div className="accordion-item__content">
            {faqItem.a.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

// <li className="accordion__item accordion__item--active" key={id}>
//   <button
//     className="accordion__header"
//     onClick={() => clickHandler(id)}
//   >
//     {faqItem.q}
//   </button>
//   <div
// className={`accordion__collapse ${
//   id === openId ? "accordion__collapse--open" : ""
// }`}
//   >
//     <p className="accordion__body">{faqItem.a}</p>
//     <p className="accordion__body">{faqItem.b}</p>
//   </div>
// </li>
