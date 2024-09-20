import React from "react";

const Input = ({
  type,
  placeholder,
  value,
  onInput,
  className,
  name,
  isInvalid,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`${className} ${isInvalid ? "wallet__input-error" : ""}`}
      onInput={onInput}
      name={name}
    />
  );
};

export default Input;
